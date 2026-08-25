(()=>{
  const qs=(s,r=document)=>r.querySelector(s),qsa=(s,r=document)=>[...r.querySelectorAll(s)];

  const artwork=[
    {from:'propsecure-hero-property.svg',to:'/assets/propsecure-hero-custom.webp',width:1400,height:788,alt:'PropSecure monitoring a protected property across parcel, document, market, and risk signals',priority:true},
    {from:'propsecure-evidence-chain.svg',to:'/assets/propsecure-documents-custom.webp',width:1400,height:788,alt:'PropSecure connecting deed, title, mortgage, and official-record evidence to one monitored property'},
    {from:'propsecure-portfolio-watch.svg',to:'/assets/propsecure-portfolio-custom.webp',width:1100,height:619,alt:'PropSecure portfolio surveillance monitoring multiple properties and surfacing material risk events'}
  ];
  qsa('img').forEach(img=>{
    const src=img.getAttribute('src')||'';
    const art=artwork.find(item=>src.endsWith(item.from));
    if(!art)return;
    img.src=art.to;img.width=art.width;img.height=art.height;img.alt=art.alt;img.decoding='async';
    if(art.priority){img.loading='eager';img.fetchPriority='high'}else{img.loading='lazy'}
  });

  const artStyle=document.createElement('style');
  artStyle.textContent=`
    img[src$="propsecure-hero-custom.webp"],img[src$="propsecure-documents-custom.webp"],img[src$="propsecure-portfolio-custom.webp"]{display:block;width:100%;height:auto;object-fit:cover}
    .workflow-art-v2{position:relative;margin:28px 0 30px;border:1px solid rgba(97,151,236,.28);border-radius:22px;overflow:hidden;background:#06152c;box-shadow:0 26px 70px rgba(3,16,38,.28)}
    .workflow-art-v2 img{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover}
    .workflow-art-v2 figcaption{position:absolute;left:18px;right:18px;bottom:18px;display:flex;align-items:flex-end;justify-content:space-between;gap:20px;padding:14px 16px;border:1px solid rgba(125,177,255,.22);border-radius:13px;background:rgba(5,19,41,.84);backdrop-filter:blur(12px);box-shadow:0 12px 34px rgba(0,0,0,.22)}
    .workflow-art-v2 figcaption span{color:#77aaff;font:900 8px/1.35 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.13em;white-space:nowrap}
    .workflow-art-v2 figcaption strong{max-width:650px;color:#fff;font-size:15px;line-height:1.35;text-align:right}
    @media(max-width:720px){.workflow-art-v2{margin:20px 0 24px;border-radius:16px}.workflow-art-v2 figcaption{position:static;display:block;border:0;border-radius:0;background:#081a34}.workflow-art-v2 figcaption strong{display:block;margin-top:6px;text-align:left}.workflow-art-v2 img{aspect-ratio:auto}}
  `;
  document.head.appendChild(artStyle);

  const labTarget=qs('[data-lab]');
  const labShell=labTarget?.closest('.lab-shell')||labTarget;
  const demo=qs('#demo');
  if(demo&&labShell&&!qs('.workflow-art-v2',demo)){
    const figure=document.createElement('figure');
    figure.className='workflow-art-v2';
    figure.setAttribute('data-reveal','');
    figure.innerHTML='<img src="/assets/propsecure-workflow-custom.webp" width="1100" height="619" loading="lazy" decoding="async" alt="PropSecure decision engine aggregating recorder events, liens, pre-foreclosure, public-record flags, and permit signals into an actionable property risk workflow"><figcaption><span>PROPSECURE / DECISION ENGINE</span><strong>Signals become evidence-backed actions—not another alert feed.</strong></figcaption>';
    labShell.before(figure);
  }

  const year=qs('#year');if(year)year.textContent=new Date().getFullYear();
  const menu=qs('[data-menu]'),nav=qs('.navlinks');if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(nav.classList.contains('open')))});qsa('.navlinks a,.navlinks button').forEach(el=>el.addEventListener('click',()=>nav.classList.remove('open')))}
  const modal=qs('#modal');
  const open=(trigger)=>{if(!modal)return;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';const u=trigger?.dataset?.usecase,s=trigger?.dataset?.signal;if(u)qs('[name="useCase"]',modal).value=u;if(s)qs('[name="prioritySignal"]',modal).value=s;setTimeout(()=>qs('[name="name"]',modal)?.focus(),40)};
  const close=()=>{if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''};
  qsa('[data-open-modal]').forEach(b=>b.addEventListener('click',()=>open(b)));qs('[data-close]')?.addEventListener('click',close);modal?.addEventListener('click',e=>{if(e.target===modal)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  const configs={
    ownership:{title:'Ownership transfer',description:'A new warranty deed changed the owner of record and crossed the configured title-review rule.',score:64,severity:'REVIEW / IDENTITY CHANGED',evidence:'County recorder change set',items:['Grantor identity changed','Document #2026-184921','County recorder verified'],route:'Title + underwriting review',detail:'Webhook → case queue'},
    lien:{title:'Tax lien recorded',description:'A new county tax lien impaired the collateral position and crossed the immediate-escalation threshold.',score:86,severity:'CRITICAL / COLLATERAL RISK',evidence:'Recorded lien evidence',items:['Tax lien amount · $18,420','Instrument #TL-2026-9381','County filing verified'],route:'Servicing + enterprise risk',detail:'Priority webhook → risk case'},
    hazard:{title:'Flood risk changed',description:'The parcel moved into a higher flood-risk designation and crossed the configured renewal-review rule.',score:74,severity:'REVIEW / EXPOSURE CHANGED',evidence:'Parcel risk designation',items:['Flood zone AE detected','Effective map revision · 2026','Parcel geometry intersected'],route:'Underwriting + loss control',detail:'Event API → renewal queue'}
  };
  const lab=qs('[data-lab]');if(lab){let selected='ownership';const tabs=qsa('[data-event]',lab),fire=qs('[data-fire]',lab);const render=(fired=false)=>{const c=configs[selected];qs('[data-title]',lab).textContent=c.title;qs('[data-description]',lab).textContent=fired?c.description:'Waiting for a material '+(selected==='ownership'?'deed or ownership':selected==='lien'?'lien, default, or delinquency':'hazard designation or physical-exposure')+' change across configured sources.';qs('[data-score]',lab).textContent=fired?c.score:18;qs('[data-dial]',lab).style.setProperty('--score',fired?c.score:18);qs('[data-severity]',lab).textContent=fired?c.severity:'BASELINE / MONITORED';qs('[data-evidence]',lab).textContent=c.evidence;['e0','e1','e2'].forEach((k,i)=>qs('[data-'+k+']',lab).textContent=c.items[i]);qs('[data-route]',lab).textContent=c.route;qs('[data-route-detail]',lab).textContent=c.detail;fire.textContent=fired?'REPLAY THIS ALERT →':'FIRE '+c.title.toUpperCase()+' →'};tabs.forEach(t=>t.addEventListener('click',()=>{selected=t.dataset.event;tabs.forEach(x=>x.setAttribute('aria-selected',String(x===t)));render(false)}));fire?.addEventListener('click',()=>{fire.disabled=true;fire.textContent='MONITORING CONFIGURED SOURCES…';setTimeout(()=>{render(true);fire.disabled=false},650)});render(false)}
  const form=qs('[data-form]');form?.addEventListener('submit',async e=>{e.preventDefault();const note=qs('[data-note]',form),email=qs('[name="email"]',form),button=qs('button[type="submit"]',form);if(!email.validity.valid){note.textContent='Enter a valid work email.';note.className='form-note error';email.focus();return}const payload=Object.fromEntries(new FormData(form).entries());payload.pageUrl=location.href;button.disabled=true;button.textContent='Submitting…';note.textContent='Sending your pilot brief securely…';try{const r=await fetch('/api/waitlist',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const j=await r.json().catch(()=>({}));if(!r.ok||!j.ok)throw new Error(j.error||'Submission failed.');form.reset();note.textContent="Pilot brief received. We'll follow up directly.";note.className='form-note success';button.textContent='Brief received ✓'}catch(err){note.textContent=err.message||'Submission failed. Please try again.';note.className='form-note error';button.disabled=false;button.textContent='Submit pilot brief →'}});
  const reveal=qsa('[data-reveal]');if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.animate([{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],{duration:520,easing:'cubic-bezier(.2,.8,.2,1)',fill:'both'});io.unobserve(entry.target)}}),{threshold:.12});reveal.forEach(el=>{el.style.opacity='0';io.observe(el)})}
})();