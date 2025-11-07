// script.js
document.addEventListener('DOMContentLoaded', function(){
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.querySelector('.main-nav');

  menuBtn && menuBtn.addEventListener('click', function(){
    // نمایش/پنهان کردن منو در موبایل
    if(nav.style.display === 'block'){
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
      nav.style.background = 'white';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '64px';
      nav.style.padding = '8px';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
    }
  });

  // پیمایش نرم برای لینک‌های داخلی
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
        // اگر منو باز بود، آن را ببند
        if(nav.style.display === 'block') nav.style.display = '';
      }
    });
  });
});