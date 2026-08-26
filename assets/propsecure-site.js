(()=>{
  const VERSION='20260826-art-v1';
  const base=document.createElement('script');
  base.src='/assets/propsecure-site-base.js?v='+VERSION;
  base.defer=true;
  document.head.appendChild(base);

  const ART={
    hero:'/api/art?name=hero&v='+VERSION,
    evidence:'/api/art?name=evidence&v='+VERSION,
    portfolio:'/api/art?name=portfolio&v='+VERSION
  };

  const installStyle=()=>{
    if(document.getElementById('propsecure-art-v7-style'))return;
    const style=document.createElement('style');
    style.id='propsecure-art-v7-style';
    style.textContent=`
      .cinematic-frame-v7{position:relative!important;overflow:hidden!important;padding:0!important;border:1px solid rgba(91,157,255,.34)!important;border-radius:24px!important;background:#020819!important;box-shadow:0 30px 84px rgba(0,0,0,.38),0 0 56px rgba(31,111,255,.08)!important}
      .cinematic-frame-v7:after{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.02),inset 0 -60px 80px rgba(2,8,25,.08)}
      .cinematic-frame-v7>img{display:block!important;width:100%!important;height:auto!important;aspect-ratio:16/9!important;object-fit:cover!important;object-position:center!important;background:#020819!important;filter:none!important;image-rendering:auto!important;border-radius:0!important}
      .hero-visual .cinematic-frame-v7{border-radius:28px!important;box-shadow:0 36px 110px rgba(0,0,0,.42),0 0 64px rgba(31,111,255,.12)!important}
      .cinematic-frame-v7 figcaption{position:relative!important;z-index:2!important;display:flex!important;justify-content:space-between!important;align-items:center!important;gap:18px!important;padding:13px 16px!important;border-top:1px solid rgba(91,157,255,.18)!important;background:linear-gradient(90deg,#06152b,#07182f)!important;color:#dceaff!important}
      .cinematic-frame-v7 figcaption span{color:#77aaff!important;font:850 7px/1.35 ui-monospace,SFMono-Regular,Menlo,monospace!important;letter-spacing:.09em!important}
      .cinematic-frame-v7 figcaption strong{color:#f4f8ff!important;font-size:11px!important;line-height:1.35!important}
      .story-grid,.portfolio-grid{align-items:center!important}
      .risk-command-v7{position:relative;max-width:1120px;margin:8px auto 30px;padding:28px;overflow:hidden;border:1px solid rgba(91,157,255,.34);border-radius:24px;background:radial-gradient(circle at 50% 20%,rgba(31,111,255,.14),transparent 42%),linear-gradient(145deg,#020819,#07152c 68%,#090d20);box-shadow:0 30px 86px rgba(0,0,0,.4),0 0 56px rgba(31,111,255,.1)}
      .risk-command-v7:before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(83,133,210,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(83,133,210,.07) 1px,transparent 1px);background-size:54px 54px;mask-image:linear-gradient(to bottom,rgba(0,0,0,.8),transparent)}
      .risk-command-head{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:24px}
      .risk-command-kicker{font:850 9px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.12em;color:#8ab5ff}.risk-command-live{display:flex;align-items:center;gap:7px;font:800 8px/1 ui-monospace,SFMono-Regular,Menlo,monospace;color:#b9d3ff}.risk-command-live i{width:7px;height:7px;border-radius:50%;background:#57dda2;box-shadow:0 0 14px rgba(87,221,162,.75)}
      .risk-command-grid{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1.1fr 1fr;gap:18px;align-items:stretch}.risk-stack{display:grid;gap:10px}.risk-node,.risk-core,.risk-output{border:1px solid rgba(97,151,232,.22);background:rgba(5,18,42,.82);box-shadow:inset 0 1px rgba(255,255,255,.03)}.risk-node{padding:13px 14px;border-radius:13px}.risk-node small,.risk-core small,.risk-output small{display:block;margin-bottom:5px;color:#6f9ee6;font:800 7px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.08em}.risk-node strong{font-size:12px;color:#eef5ff}.risk-core{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:220px;padding:20px;border-radius:18px;text-align:center}.risk-core:before{content:"";position:absolute;width:118px;height:118px;border:1px solid rgba(83,145,255,.42);border-radius:50%;box-shadow:0 0 0 18px rgba(45,112,232,.05),0 0 60px rgba(38,111,255,.17)}.risk-core strong{position:relative;font-size:22px;color:#f7faff}.risk-core span{position:relative;margin-top:6px;color:#8db7f7;font-size:10px}.risk-output{display:flex;flex-direction:column;justify-content:center;padding:18px;border-radius:16px}.risk-score{font:800 46px/.9 Georgia,serif;color:#ff5d69}.risk-output strong{margin-top:7px;font-size:14px;color:#fff}.risk-route{margin-top:18px;padding-top:14px;border-top:1px solid rgba(90,145,226,.17);font:800 9px/1.4 ui-monospace,SFMono-Regular,Menlo,monospace;color:#9fc2f8}.risk-command-caption{position:relative;z-index:2;margin:22px -28px -28px;padding:13px 16px;border-top:1px solid rgba(91,157,255,.18);background:linear-gradient(90deg,#06152b,#07182f);display:flex;justify-content:space-between;gap:18px;color:#dceaff}.risk-command-caption span{color:#77aaff;font:850 7px/1.35 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.09em}.risk-command-caption strong{font-size:11px}
      @media(max-width:900px){.cinematic-frame-v7,.hero-visual .cinematic-frame-v7,.risk-command-v7{border-radius:18px!important}.risk-command-grid{grid-template-columns:1fr}.risk-core{min-height:170px}.risk-stack{grid-template-columns:repeat(3,1fr)}}
      @media(max-width:620px){.cinematic-frame-v7,.hero-visual .cinematic-frame-v7,.risk-command-v7{border-radius:14px!important}.cinematic-frame-v7 figcaption,.risk-command-caption{display:block!important;padding:10px 12px!important}.cinematic-frame-v7 figcaption strong,.risk-command-caption strong{display:block!important;margin-top:4px!important}.risk-command-v7{padding:18px}.risk-command-caption{margin:18px -18px -18px}.risk-stack{grid-template-columns:1fr}.risk-command-head{align-items:flex-start}.risk-score{font-size:38px}}
    `;
    document.head.appendChild(style);
  };

  const upgradeImage=(img,src,alt)=>{
    if(!img)return;
    img.src=src;
    img.width=1200;
    img.height=675;
    img.alt=alt;
    img.decoding='async';
    img.style.removeProperty('height');
    const frame=img.closest('figure');
    if(frame){frame.classList.remove('cinematic-frame-v5','cinematic-frame-v6');frame.classList.add('cinematic-frame-v7');}
  };

  const apply=()=>{
    installStyle();
    const hero=document.querySelector('.hero-visual img');
    upgradeImage(hero,ART.hero,'PropSecure protected property network monitoring identity, documents, parcel context, analytics and risk signals');
    if(hero){hero.loading='eager';hero.fetchPriority='high';const c=hero.closest('figure')?.querySelector('figcaption');if(c)c.innerHTML='<div><span>PROPERTY UNDER CONTINUOUS WATCH</span><strong>Protected identity. Live evidence. Routed action.</strong></div><span>identity → signal → evidence → rule → route</span>';}
    const evidence=document.querySelector('.story-grid .figure-card img');
    upgradeImage(evidence,ART.evidence,'PropSecure evidence network connecting property identity to deeds, recorded events, parcel context and source backed intelligence');
    if(evidence){evidence.loading='lazy';const c=evidence.closest('figure')?.querySelector('figcaption');if(c)c.innerHTML='<span>PROPSECURE / EVIDENCE GRAPH</span><strong>One property. Multiple source systems. One accountable evidence chain.</strong>';}
    const portfolio=document.querySelector('#portfolio .portfolio-figure img');
    upgradeImage(portfolio,ART.portfolio,'PropSecure portfolio surveillance network monitoring multiple properties and surfacing prioritized risk events');
    if(portfolio)portfolio.loading='lazy';
    const demo=document.getElementById('demo'),lab=demo?.querySelector('.lab-shell');
    if(demo&&lab&&!demo.querySelector('.risk-command-v7')){
      demo.querySelector('.risk-cinematic-v5')?.remove();demo.querySelector('.risk-cinematic-v6')?.remove();
      const fig=document.createElement('figure');fig.className='risk-command-v7';fig.innerHTML='<div class="risk-command-head"><div class="risk-command-kicker">PROPSECURE / QUALIFIED EVENT ENGINE</div><div class="risk-command-live"><i></i> CONTINUOUS WATCH ACTIVE</div></div><div class="risk-command-grid"><div class="risk-stack"><div class="risk-node"><small>RECORDER</small><strong>Deed changed</strong></div><div class="risk-node"><small>DISTRESS</small><strong>Tax lien filed</strong></div><div class="risk-node"><small>PERMITS</small><strong>Material event</strong></div></div><div class="risk-core"><small>CANONICAL PROPERTY IDENTITY</small><strong>Evidence qualified</strong><span>source → change → rule</span></div><div class="risk-output"><small>RISK SCORE</small><div class="risk-score">86</div><strong>CRITICAL / COLLATERAL RISK</strong><div class="risk-route">PRIORITY WEBHOOK → RISK CASE<br>evidence attached · route versioned</div></div></div><figcaption class="risk-command-caption"><span>PROPSECURE / DECISION ENGINE</span><strong>Source changes become prioritized, evidence-backed workflows.</strong></figcaption>';
      lab.before(fig);
    }
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
})();