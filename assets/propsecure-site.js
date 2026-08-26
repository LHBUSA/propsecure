(()=>{
  const base=document.createElement('script');
  base.src='/assets/propsecure-site-base.js?v=20260826e';
  base.defer=true;
  base.onload=()=>{
    const style=document.createElement('style');
    style.textContent=`
      .workflow-art-v3{width:min(100%,896px)!important;max-width:896px!important;margin-left:auto!important;margin-right:auto!important}
      .workflow-art-v3 img{width:100%!important;max-width:896px!important;height:auto!important}
      @media(max-width:930px){.workflow-art-v3{width:100%!important;max-width:none!important}}
    `;
    document.head.appendChild(style);
  };
  document.head.appendChild(base);
})();