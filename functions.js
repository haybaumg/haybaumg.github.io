document.addEventListener("DOMContentLoaded", function () {
  const headerOffset = document.querySelector('#header').offsetHeight;

  function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  document.querySelector(".servicesbutton").addEventListener("click", function () {
    scrollToSection(".services");
  });

  document.querySelector(".aboutbutton").addEventListener("click", function () {
    scrollToSection(".about");
  });

  document.querySelector(".contactbutton").addEventListener("click", function () {
    scrollToSection(".contact");
  });
 
   document.querySelector(".contactbutton2").addEventListener("click", function () {
    scrollToSection(".contact");
  });
});


// functions.js
document.addEventListener('DOMContentLoaded', () => {
  const icon = document.querySelector('#header a.icon');
  const menu = document.querySelector('#nav ul.buttons');
  if (!icon || !menu) return;

  if (!menu.id) menu.id = 'nav-buttons';
  icon.setAttribute('role', 'button');
  icon.setAttribute('aria-controls', menu.id);

  const mq = window.matchMedia('(max-width: 480px)');

  function toDesktop() {
    // Clear any inline styles and classes so desktop CSS rules win
    menu.classList.remove('open');
    menu.removeAttribute('style');
    icon.setAttribute('aria-expanded', 'false');
  }

  function toMobileCollapsed() {
    menu.classList.remove('open');          // start collapsed
    icon.setAttribute('aria-expanded', 'false');
  }

  function toggleMobileMenu(e) {
    // Ignore clicks on desktop
    if (!mq.matches) return;
    e.preventDefault();
    const isOpen = menu.classList.toggle('open');
    icon.setAttribute('aria-expanded', String(isOpen));
  }

  // Init state based on current viewport
  if (mq.matches) toMobileCollapsed(); else toDesktop();

  // Respond to viewport changes
  mq.addEventListener('change', (e) => {
    if (e.matches) toMobileCollapsed();
    else toDesktop();
  });

  // Click + keyboard
  icon.addEventListener('click', toggleMobileMenu);
  icon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMobileMenu(e);
    }
  });
});
