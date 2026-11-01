// Theme preview: ?theme=midnight|forest|cobalt|plum, remembered for this tab.
// ponytail: preview-only switcher; drop it once a final palette is chosen.
let theme = new URLSearchParams(location.search).get('theme');
try {
  if (theme && window === top) sessionStorage.setItem('theme', theme);
  else if (!theme) theme = sessionStorage.getItem('theme');
} catch {}
if (theme && theme !== 'mineral') document.documentElement.dataset.theme = theme;

// Mobile menu toggle.
const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

// Competitor category filter (compare.html).
const filterBtns = document.querySelectorAll('.filters button');
filterBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.setAttribute('aria-pressed', b === btn));
    const cat = btn.dataset.filter;
    document.querySelectorAll('#competitors tbody tr').forEach((tr) => {
      tr.hidden = cat !== 'all' && tr.dataset.cat !== cat;
    });
  }),
);
