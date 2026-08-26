(()=>{
  const base=document.createElement('script');
  base.src='/assets/propsecure-site-base.js?v=20260826g';
  base.defer=true;
  base.onload=()=>{
    const hero=document.querySelector('.hero-visual img');
    if(hero){
      hero.src='/assets/propsecure-hero-worldclass.webp';
      hero.width=1401;
      hero.height=1123;
      hero.alt='PropSecure continuous property surveillance command center monitoring a protected property across identity, evidence, risk, and workflow signals';
      hero.loading='eager';
      hero.decoding='async';
      hero.fetchPriority='high';
      hero.style.width='100%';
      hero.style.height='auto';
      hero.style.objectFit='cover';
    }
  };
  document.head.appendChild(base);
})();