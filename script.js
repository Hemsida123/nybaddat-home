(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  function closeMenu() { if (!toggle || !menu) return; toggle.setAttribute('aria-expanded', 'false'); menu.hidden = true; document.body.classList.remove('menu-open'); }
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) menu.querySelector('a')?.focus();
  });
  document.addEventListener('keydown', e => {
    if (menu?.hidden !== false) return;
    if (e.key === 'Escape') { closeMenu(); toggle.focus(); }
    if (e.key === 'Tab') {
      const links = [...menu.querySelectorAll('a')];
      if (e.shiftKey && document.activeElement === links[0]) { e.preventDefault(); toggle.focus(); }
      else if (!e.shiftKey && document.activeElement === links.at(-1)) { e.preventDefault(); toggle.focus(); }
      else if (e.shiftKey && document.activeElement === toggle) { e.preventDefault(); links.at(-1).focus(); }
      else if (!e.shiftKey && document.activeElement === toggle) { e.preventDefault(); links[0].focus(); }
    }
  });
  matchMedia('(min-width: 768px)').addEventListener('change',e => { if (e.matches) closeMenu(); });
  const rail = document.querySelector('.category-rail');
  if (rail) {
    const prev = document.querySelector('[data-rail="prev"]'), next = document.querySelector('[data-rail="next"]');
    const sync = () => { prev.disabled = rail.scrollLeft < 4; next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4; };
    document.querySelectorAll('[data-rail]').forEach(b => b.addEventListener('click', () => {
      const tile = rail.querySelector('.category-tile');
      rail.scrollBy({left:(tile.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).gap)) * (b.dataset.rail === 'prev' ? -1 : 1), behavior:matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth'});
    }));
    rail.addEventListener('scroll',sync,{passive:true}); new ResizeObserver(sync).observe(rail); sync();
  }
  const gifts = {
    kok:{title:'Till den som gärna rör i grytorna.',text:'En kniv från Global, en gryta från Le Creuset eller ett välvalt köksredskap. Upptäck gåvor som får användas ofta.',img:'kok',alt:'Köksprodukter ur Nybäddats sortiment',link:'kok.html',label:'Upptäck kök & matlagning'},
    dukning:{title:'En tack-för-middagen-favorit.',text:'Ett vackert glas, en vas eller en detalj till nästa dukning. Upptäck bland annat Orrefors, Gerbera och Bruka Design.',img:'dukning',alt:'Glas och porslin ur Nybäddats sortiment',link:'dukning.html',label:'Upptäck dukning & glas'},
    barn:{title:'En mjuk vän att hålla om.',text:'En nalle eller ett annat mjukt djur från Bukowski. Kom in och hitta en ny liten vän bland butikens presenter.',img:'presenter',alt:'Mjuka djur från Bukowski i Nybäddats butik',link:'presenter.html',label:'Upptäck våra presenter'}
  };
  const tabs=[...document.querySelectorAll('[data-gift]')];
  function activate(tab) {
    const item=gifts[tab.dataset.gift];
    tabs.forEach(t=>{t.setAttribute('aria-selected', String(t===tab));t.tabIndex=t===tab?0:-1;});
    document.querySelector('#gift-panel').setAttribute('aria-labelledby',tab.id);
    document.querySelector('#gift-title').textContent=item.title;
    document.querySelector('#gift-text').textContent=item.text;
    const a=document.querySelector('#gift-link');a.href=item.link;a.textContent=item.label;
    const img=document.querySelector('.gift-image');img.src=`assets/${item.img}.webp`;img.alt=item.alt;
  }
  tabs.forEach((tab,i)=>{
    tab.addEventListener('click',()=>activate(tab));
    tab.addEventListener('keydown', e=>{
      let n;
      if (e.key==='ArrowRight') n=(i+1)%tabs.length;
      if (e.key==='ArrowLeft') n=(i+tabs.length-1)%tabs.length;
      if (e.key==='Home') n=0;
      if (e.key==='End') n=tabs.length-1;
      if (n!==undefined) {e.preventDefault();activate(tabs[n]);tabs[n].focus();}
    });
  });
  document.querySelector('.copy-email')?.addEventListener('click',async e=>{
    const output=document.querySelector('.copy-status');
    try {await navigator.clipboard.writeText(e.currentTarget.dataset.email);output.textContent='E-postadressen är kopierad.';}
    catch {output.textContent='Markera och kopiera adressen ovan, eller tryck på den för att öppna din e-postapp.';}
  });
})();
