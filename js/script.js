 // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      });
    });
    
    // Add shadow to header on scroll
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('shadow-xl');
      } else {
        header.classList.remove('shadow-xl');
      }
    });