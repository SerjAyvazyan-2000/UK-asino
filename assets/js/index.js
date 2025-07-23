document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navMenu');

  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      burger.classList.toggle('active');
    });

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

          navMenu.classList.remove('open');
          burger.classList.remove('active');

        }
      });
    });
  }
});


document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const openItem = document.querySelector('.faq-item.open');

    if (openItem && openItem !== item) {
      openItem.classList.remove('open');
    }

    item.classList.toggle('open');
  });
});

function revealFaq() {
  const faq = document.querySelector('.faq');
   if(faq){
 const trigger = window.innerHeight * 0.85;

  if (faq.getBoundingClientRect().top < trigger) {
    faq.classList.add('visible');
  }
   }
 
}

window.addEventListener('scroll', revealFaq);
window.addEventListener('load', revealFaq);


const revealOnScroll = () => {
  const elementsToReveal = document.querySelectorAll('.animate-on-scroll');
  const triggerPoint = window.innerHeight * 0.85;

  elementsToReveal.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      element.classList.add('visible');
    }
  });
};

// 🔄 Attach listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);



document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookieBanner');
  const acceptBtn = document.getElementById('cookieAcceptBtn');

  const cookieAccepted = localStorage.getItem('cookieAccepted');

  if (!cookieAccepted) {
    banner.style.display = 'block';
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', 'true');
    banner.style.display = 'none';
  });
});