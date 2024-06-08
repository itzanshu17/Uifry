document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

  
document.addEventListener('DOMContentLoaded', () => {
    const switchModeButton = document.querySelector('.switch-mode');
    const body = document.body;
    const icon = switchModeButton.querySelector('i');
    const logoImg = document.querySelector('.logo-nav img');
    const footerImg = document.querySelector('.contact-left-footer img');


    switchModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        const allTextElements = document.querySelectorAll('body *');
        allTextElements.forEach(element => {
            element.classList.toggle('dark-text');
        });
        
        if (body.classList.contains('dark-mode')) {
            logoImg.src = 'asset/images/logo-white.png';
        } else {
            logoImg.src = 'asset/images/logo.png';
        }

        if (body.classList.contains('dark-mode')) {
            footerImg.src = 'asset/images/logo-white.png';
        } else {
            footerImg.src = 'asset/images/logo.png';
        }

        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Hero Section
        const heroSection = document.getElementById('hero');
        heroSection.innerHTML = `
          <h1>${data.hero.headline}</h1>
          <p>${data.hero.subheadline}</p>
          <div class="cta-buttons">
            ${data.hero.ctaButtons.map(button => `<a href="${button.link}" class="btn">${button.text}</a>`).join('')}
          </div>
        `;
  
        // Features Section
        const featuresSection = document.getElementById('features');
        featuresSection.innerHTML = data.features.map(feature => `
          <div>
            <img src="${feature.icon}" alt="${feature.title}">
            <h2>${feature.title}</h2>
            <p>${feature.description}</p>
          </div>
        `).join('');
  
        // Testimonials Section
        const testimonialsSection = document.getElementById('testimonials');
        testimonialsSection.innerHTML = data.testimonials.map(testimonial => `
          <div>
            <img src="${testimonial.avatar}" alt="${testimonial.name}">
            <p>"${testimonial.feedback}"</p>
            <h3>${testimonial.name}</h3>
          </div>
        `).join('');
  
        // Pricing Section
        const pricingSection = document.getElementById('pricing');
        pricingSection.innerHTML = data.pricing.map(plan => `
          <div>
            <h2>${plan.plan}</h2>
            <p>${plan.price}</p>
            <ul>
              ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
        `).join('');
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  