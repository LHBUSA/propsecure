const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ART = {
  hero: {
    parts: 3,
    sha256: '73d35481291fa5b5da6d0edb9a26e88d14dcbff7dd2b9c54c0417d4f60ecf65f',
    bytes: 21152,
  },
  evidence: {
    parts: 3,
    sha256: '53386ec917c7df9c39836e592f18954fcffe0cd4d0e3d8221ebcff2ccd9623ea',
    bytes: 20480,
  },
  portfolio: {
    parts: 4,
    sha256: '9164b7c06b5242a25c7cc9aea13fcd63d2a89d60dfb3d6cb6c976216bbe552a5',
    bytes: 24450,
  },
};

module.exports = async (req, res) => {
  const name = String((req.query && req.query.name) || '');
  const spec = ART[name];
  if (!spec) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Artwork not found');
    return;
  }

  try {
    const chunks = [];
    for (let i = 1; i <= spec.parts; i += 1) {
      const file = path.join(process.cwd(), 'assets', 'art', `${name}.${i}.b64`);
      chunks.push(fs.readFileSync(file, 'utf8').trim());
    }

    const buffer = Buffer.from(chunks.join(''), 'base64');
    const digest = crypto.createHash('sha256').update(buffer).digest('hex');
    if (buffer.length !== spec.bytes || digest !== spec.sha256) {
      throw new Error(`integrity check failed for ${name}`);
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/avif');
    res.setHeader('Content-Length', String(buffer.length));
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=31536000, immutable');
    res.end(buffer);
  } catch (error) {
    console.error('[PropSecure artwork]', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Artwork unavailable');
  }
};
