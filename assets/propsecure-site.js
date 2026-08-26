(()=>{
  const base=document.createElement('script');
  base.src='/assets/propsecure-site-base.js?v=20260826g';
  base.defer=true;
  document.head.appendChild(base);

  const applyHero=()=>{
    const hero=document.querySelector('.hero-visual img');
    if(!hero)return;
    const figure=hero.closest('figure');
    if(figure)figure.style.background='#020819';
    hero.src='/assets/propsecure-hero-live.jpg?v=20260826h';
    hero.width=720;
    hero.height=429;
    hero.alt='PropSecure continuous property surveillance monitoring deed, lien, permit, and flood-risk changes across a protected property portfolio';
    hero.loading='eager';
    hero.decoding='async';
    hero.fetchPriority='high';
    hero.style.width='100%';
    hero.style.height='auto';
    hero.style.aspectRatio='720 / 429';
    hero.style.objectFit='cover';
    hero.style.background='#020819';
  };

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',applyHero,{once:true});
  else applyHero();
})();