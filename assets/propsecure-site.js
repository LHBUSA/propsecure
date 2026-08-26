(()=>{
  const base=document.createElement('script');
  // Cache-bust the repaired base script. The site now uses artwork declared
  // directly in index.html instead of runtime WebP substitutions.
  base.src='/assets/propsecure-site-base.js?v=20260826g';
  base.defer=true;
  document.head.appendChild(base);
})();