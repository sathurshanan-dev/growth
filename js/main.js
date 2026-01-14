// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faq_container = document.querySelector('.faq-content');

  faq_container.addEventListener('click', (e) => {
    const group_header = e.target.closest('.faq-group-header');

    if (!group_header) return;

    const group = group_header.parentElement;
    const group_body = group.querySelector('.faq-group-body');
    const icon = group_header.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    group_body.classList.toggle('open');

    // Close other open FAQ bodies
    const other_groups = faq_container.querySelectorAll('.faq-group');

    other_groups.forEach((other_group) => {
      if (other_group !== group) {
        const other_group_body = other_group.querySelector('.faq-group-body');
        const other_icon = other_group.querySelector('.faq-group-header i');

        other_group_body.classList.remove('open');
        other_icon.classList.remove('fa-minus');
        other_icon.classList.add('fa-plus');
      }
    });
  });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger_button = document.querySelector('.hamburger-button');
  const mobile_menu = document.querySelector('.mobile-menu');

  hamburger_button.addEventListener('click', () =>
    mobile_menu.classList.toggle('active')
  );
});
