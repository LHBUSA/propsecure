(()=>{
  const base=document.createElement('script');
  base.src='/assets/propsecure-site-base.js?v=20260826i';
  base.defer=true;
  document.head.appendChild(base);

  const installStyle=()=>{
    if(document.getElementById('propsecure-cinematic-v5-style'))return;
    const style=document.createElement('style');
    style.id='propsecure-cinematic-v5-style';
    style.textContent=`
      .cinematic-frame-v5{position:relative!important;overflow:hidden!important;border:1px solid rgba(91,157,255,.34)!important;border-radius:24px!important;background:#020819!important;box-shadow:0 28px 80px rgba(0,0,0,.34),inset 0 1px 0 rgba(255,255,255,.045)!important}
      .cinematic-frame-v5:after{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.02),inset 0 -80px 90px rgba(2,8,25,.08)}
      .cinematic-frame-v5>img{display:block!important;width:100%!important;height:auto!important;aspect-ratio:900/506!important;object-fit:cover!important;object-position:center!important;background:#020819!important;filter:none!important}
      .hero-visual .cinematic-frame-v5{border-radius:28px!important;box-shadow:0 34px 100px rgba(0,0,0,.38),0 0 52px rgba(31,111,255,.09)!important}
      .hero-visual .cinematic-frame-v5>img{min-height:0!important}
      .hero-visual .cinematic-frame-v5 figcaption,.figure-card.cinematic-frame-v5 figcaption,.risk-cinematic-v5 figcaption{position:relative!important;z-index:2!important;display:flex!important;justify-content:space-between!important;align-items:center!important;gap:18px!important;padding:13px 16px!important;border-top:1px solid rgba(91,157,255,.18)!important;background:linear-gradient(90deg,#06152b,#07182f)!important;color:#dceaff!important}
      .hero-visual .cinematic-frame-v5 figcaption span,.figure-card.cinematic-frame-v5 figcaption span,.risk-cinematic-v5 figcaption span{color:#77aaff!important;font:850 7px/1.35 ui-monospace,SFMono-Regular,Menlo,monospace!important;letter-spacing:.09em!important}
      .hero-visual .cinematic-frame-v5 figcaption strong,.figure-card.cinematic-frame-v5 figcaption strong,.risk-cinematic-v5 figcaption strong{color:#f4f8ff!important;font-size:11px!important;line-height:1.35!important}
      .figure-card.cinematic-frame-v5,.portfolio-figure.cinematic-frame-v5{padding:0!important;background:#020819!important;border-color:rgba(75,139,224,.32)!important}
      .figure-card.cinematic-frame-v5>img,.portfolio-figure.cinematic-frame-v5>img{border-radius:0!important}
      .portfolio-figure.cinematic-frame-v5{box-shadow:0 34px 90px rgba(0,0,0,.42),0 0 52px rgba(31,111,255,.09)!important}
      .risk-cinematic-v5{position:relative;margin:8px auto 28px;max-width:1120px;overflow:hidden;border:1px solid rgba(91,157,255,.3);border-radius:24px;background:#020819;box-shadow:0 30px 86px rgba(0,0,0,.38),0 0 56px rgba(31,111,255,.08)}
      .risk-cinematic-v5>img{display:block;width:100%;height:auto;aspect-ratio:900/506;object-fit:cover;object-position:center;background:#020819}
      .risk-cinematic-v5 .risk-cinematic-badge{position:absolute;z-index:3;top:14px;left:14px;display:inline-flex;align-items:center;gap:7px;padding:7px 9px;border:1px solid rgba(112,172,255,.32);border-radius:999px;background:rgba(3,15,36,.82);backdrop-filter:blur(8px);color:#9dc4ff;font:850 7px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.08em}
      .risk-cinematic-v5 .risk-cinematic-badge i{width:6px;height:6px;border-radius:50%;background:#ff4a58;box-shadow:0 0 12px rgba(255,74,88,.72)}
      .story-grid{align-items:center!important}.portfolio-grid{align-items:center!important}
      @media(max-width:900px){.cinematic-frame-v5,.hero-visual .cinematic-frame-v5,.risk-cinematic-v5{border-radius:18px!important}.risk-cinematic-v5{margin-bottom:22px}}
      @media(max-width:620px){.cinematic-frame-v5,.hero-visual .cinematic-frame-v5,.risk-cinematic-v5{border-radius:14px!important}.hero-visual .cinematic-frame-v5 figcaption,.figure-card.cinematic-frame-v5 figcaption,.risk-cinematic-v5 figcaption{display:block!important;padding:10px 12px!important}.hero-visual .cinematic-frame-v5 figcaption strong,.figure-card.cinematic-frame-v5 figcaption strong,.risk-cinematic-v5 figcaption strong{display:block!important;margin-top:4px!important}.risk-cinematic-v5 .risk-cinematic-badge{top:9px;left:9px}}
    `;
    document.head.appendChild(style);
  };

  const upgradeImage=(img,src,alt)=>{
    if(!img)return;
    img.src=src;
    img.width=900;
    img.height=506;
    img.alt=alt;
    img.decoding='async';
    img.style.removeProperty('height');
    const frame=img.closest('figure');
    if(frame)frame.classList.add('cinematic-frame-v5');
  };

  const applyCinematicSystem=()=>{
    installStyle();

    const hero=document.querySelector('.hero-visual img');
    upgradeImage(hero,'/assets/propsecure-hero-cinematic.webp?v=20260826i','Cinematic PropSecure view of a shielded property continuously monitored across identity, documents, parcel context, analytics, and risk signals');
    if(hero){hero.loading='eager';hero.fetchPriority='high';const cap=hero.closest('figure')?.querySelector('figcaption');if(cap)cap.innerHTML='<div><span>PROPERTY UNDER CONTINUOUS WATCH</span><strong>Protected identity. Live evidence. Routed action.</strong></div><span>identity → signal → evidence → rule → route</span>';}

    const evidence=document.querySelector('.story-grid .figure-card img');
    upgradeImage(evidence,'/assets/propsecure-evidence-cinematic.webp?v=20260826i','PropSecure evidence network connecting property identity to documents, recorded events, parcel context, and source-backed intelligence');
    if(evidence){evidence.loading='lazy';const cap=evidence.closest('figure')?.querySelector('figcaption');if(cap)cap.innerHTML='<span>PROPSECURE / EVIDENCE GRAPH</span><strong>One property. Multiple source systems. One accountable evidence chain.</strong>';}

    const portfolio=document.querySelector('#portfolio .portfolio-figure img');
    upgradeImage(portfolio,'/assets/propsecure-portfolio-cinematic.webp?v=20260826i','PropSecure portfolio surveillance network monitoring multiple properties and surfacing prioritized property risk events');
    if(portfolio)portfolio.loading='lazy';

    const demo=document.getElementById('demo');
    const lab=demo?.querySelector('.lab-shell');
    if(demo&&lab&&!demo.querySelector('.risk-cinematic-v5')){
      const fig=document.createElement('figure');
      fig.className='risk-cinematic-v5';
      fig.setAttribute('data-reveal','');
      fig.innerHTML='<div class="risk-cinematic-badge"><i></i> QUALIFIED EVENT ENGINE</div><img src="/assets/propsecure-risk-cinematic.webp?v=20260826i" width="900" height="506" loading="lazy" decoding="async" alt="PropSecure digital risk engine turning recorder events, liens, pre-foreclosure, public-record, and permit signals into prioritized workflows"><figcaption><span>PROPSECURE / DECISION ENGINE</span><strong>Source changes become prioritized, evidence-backed workflows.</strong></figcaption>';
      lab.before(fig);
    }
  };

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',applyCinematicSystem,{once:true});
  else applyCinematicSystem();
})();