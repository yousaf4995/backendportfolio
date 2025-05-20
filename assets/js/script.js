document.addEventListener('DOMContentLoaded', function() {
  // Navigation functionality
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  // Set initial active page (About)
  pages.forEach(page => {
    page.classList.remove('active');
    if(page.getAttribute('data-page') === 'about') {
      page.classList.add('active');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all nav links
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });

      // Add active class to clicked nav link
      this.classList.add('active');

      // Get the target page name
      const targetPage = this.getAttribute('data-nav-link');

      // Hide all pages
      pages.forEach(page => {
        page.classList.remove('active');
      });

      // Show the target page
      document.querySelector(`[data-page="${targetPage}"]`).classList.add('active');
    });
  });

  // Sidebar toggle functionality
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');

  if(sidebarBtn) {
    sidebarBtn.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
  }

  // Skills toggle functionality
  const skillCategories = document.querySelectorAll('[data-skill-category]');

  skillCategories.forEach(category => {
    const header = category.querySelector('.skill-header');
    const content = category.querySelector('.skill-content');

    header.addEventListener('click', () => {
      category.classList.toggle('active');
      if(category.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });

  // Portfolio filter functionality
  const filterBtns = document.querySelectorAll('[data-filter-btn]');
  const filterItems = document.querySelectorAll('[data-filter-item]');

  if(filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Update active state on buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter-btn').toLowerCase();

        // Filter items
        filterItems.forEach(item => {
          if(filterValue === 'all') {
            item.classList.add('active');
          } else {
            const itemCategory = item.getAttribute('data-category').toLowerCase();
            if(itemCategory === filterValue) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          }
        });
      });
    });
  }
});
