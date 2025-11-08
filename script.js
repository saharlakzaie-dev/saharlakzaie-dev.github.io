document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.sidebar');

  menuToggle && menuToggle.addEventListener('click', function () {
    // نمایش/پنهان کردن منو در موبایل با افزودن/حذف کلاس active
    sidebar.classList.toggle('active');
  });

  // پیمایش نرم برای لینک‌های داخلی
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // اگر منو باز بود، آن را ببند
        if (sidebar.classList.contains('active')) {
          sidebar.classList.remove('active');
        }
      }
    });
  });
});