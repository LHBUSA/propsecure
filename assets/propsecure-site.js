(()=>{
  const base=document.createElement('script');
  base.src='/assets/propsecure-site-base.js?v=20260826f';
  base.defer=true;
  base.onload=()=>{
    const qs=(s,r=document)=>r.querySelector(s);

    // Upgrade the legacy shield mark to the dedicated PropSecure lock-shield brand asset.
    const legacyShield=qs('.brand-shield');
    if(legacyShield){
      const logo=document.createElement('img');
      logo.className='brand-shield brand-lock-shield-v4';
      logo.src='/assets/propsecure-lock-shield.webp?v=20260826a';
      logo.width=56;
      logo.height=56;
      logo.alt='';
      logo.decoding='async';
      legacyShield.replaceWith(logo);
    }

    const demo=qs('#demo');
    const lab=demo&&qs('.lab-shell',demo);
    if(demo&&lab&&!qs('.command-center-v4',demo)){
      const showcase=document.createElement('section');
      showcase.className='command-center-v4';
      showcase.setAttribute('aria-label','PropSecure Command Center product demo');
      showcase.innerHTML=`
        <div class="command-center-copy-v4">
          <span class="command-center-kicker-v4">PROPSECURE COMMAND CENTER</span>
          <h3>One operating view for properties, evidence, risk, and action.</h3>
          <p>Portfolio surveillance should not end in another alert feed. PropSecure connects monitored property identity to source-backed events, severity, investigation, and workflow routing in one governed operating layer.</p>
          <div class="command-center-proof-v4">
            <span>PORTFOLIO WATCH</span>
            <span>EVIDENCE-BACKED ALERTS</span>
            <span>RISK SCORING</span>
            <span>WORKFLOW AUTOMATION</span>
          </div>
          <a href="#demo-live-event" class="command-center-action-v4">Run the live event simulator ↓</a>
        </div>
        <figure class="command-center-art-v4">
          <img src="/assets/propsecure-command-center.webp?v=20260826a" width="720" height="405" loading="eager" decoding="async" fetchpriority="high" alt="PropSecure Command Center showing portfolio surveillance, evidence-backed alerts, risk scoring, property intelligence, and workflow automation" />
          <figcaption><span>CONTINUOUS SURVEILLANCE</span><strong>Evidence. Alerts. Action.</strong></figcaption>
        </figure>`;
      lab.id='demo-live-event';
      const oldWorkflow=qs('.workflow-art-v3',demo);
      (oldWorkflow||lab).before(showcase);
      if(oldWorkflow)oldWorkflow.hidden=true;
    }

    const style=document.createElement('style');
    style.id='propsecure-command-center-v4-style';
    style.textContent=`
      .brand-lock-shield-v4{display:block;width:50px!important;height:50px!important;object-fit:contain;filter:drop-shadow(0 5px 13px rgba(18,115,255,.28));border-radius:0!important}
      .command-center-v4{position:relative;display:grid;grid-template-columns:minmax(250px,.7fr) minmax(0,1.3fr);gap:26px;align-items:center;margin:8px auto 34px;padding:22px;border:1px solid rgba(92,157,255,.28);border-radius:24px;background:radial-gradient(circle at 72% 44%,rgba(31,111,255,.12),transparent 42%),linear-gradient(145deg,#06162c,#020b1c);box-shadow:0 30px 90px rgba(0,0,0,.34),inset 0 1px 0 rgba(255,255,255,.04);overflow:hidden}
      .command-center-v4:before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(104,156,230,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(104,156,230,.04) 1px,transparent 1px);background-size:28px 28px;mask-image:linear-gradient(to right,#000,transparent 82%)}
      .command-center-copy-v4{position:relative;z-index:2;padding:8px 4px 8px 8px}
      .command-center-kicker-v4{display:block;margin-bottom:10px;color:#79aaff;font:900 8px/1.4 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.14em}
      .command-center-copy-v4 h3{margin:0;color:#fff;font-family:var(--serif,Georgia,serif);font-size:clamp(27px,2.7vw,43px);font-weight:500;line-height:1.01;letter-spacing:-.025em}
      .command-center-copy-v4 p{margin:15px 0 17px;color:#9bb0c9;font-size:12px;line-height:1.72}
      .command-center-proof-v4{display:flex;flex-wrap:wrap;gap:6px}
      .command-center-proof-v4 span{padding:6px 8px;border:1px solid rgba(119,170,255,.22);border-radius:999px;background:rgba(34,99,190,.1);color:#a9c9f6;font:800 6.5px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.055em}
      .command-center-action-v4{display:inline-flex;margin-top:18px;color:#fff;text-decoration:none;font:850 9px/1 ui-monospace,SFMono-Regular,Menlo,monospace;border-bottom:1px solid #4b8ff6;padding-bottom:4px}
      .command-center-art-v4{position:relative;z-index:2;margin:0;overflow:hidden;border:1px solid rgba(91,157,255,.28);border-radius:17px;background:#020819;box-shadow:0 24px 60px rgba(0,0,0,.36)}
      .command-center-art-v4 img{display:block;width:100%;max-width:720px;height:auto;margin:0 auto;aspect-ratio:16/9;object-fit:contain;background:#020819}
      .command-center-art-v4 figcaption{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 13px;border-top:1px solid rgba(102,157,235,.16);background:#06152b}
      .command-center-art-v4 figcaption span{color:#6f9cda;font:850 6.5px/1.3 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.1em}
      .command-center-art-v4 figcaption strong{color:#e8f1ff;font-size:10px}
      .workflow-art-v3[hidden]{display:none!important}
      @media(max-width:900px){.command-center-v4{grid-template-columns:1fr;padding:16px}.command-center-copy-v4{padding:4px}.command-center-copy-v4 p{max-width:680px}.command-center-art-v4{width:100%;max-width:720px;margin:0 auto}}
      @media(max-width:620px){.brand-lock-shield-v4{width:43px!important;height:43px!important}.command-center-v4{border-radius:17px;padding:12px;gap:16px}.command-center-copy-v4 h3{font-size:29px}.command-center-art-v4{border-radius:12px}.command-center-art-v4 figcaption{display:block}.command-center-art-v4 figcaption strong{display:block;margin-top:4px}}
    `;
    document.head.appendChild(style);
  };
  document.head.appendChild(base);
})();