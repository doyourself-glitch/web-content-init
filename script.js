// script.js の中身を以下に更新
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    /* --- ここを修正：下から30%入った時に発動するようにする --- */
    rootMargin: '0px 0px -30% 0px' 
    /* --------------------------------------------------- */
  });
  
  const hiddenElements = document.querySelectorAll('.work-link');
  hiddenElements.forEach((el) => observer.observe(el));
  // script.js の最後の方に追加
const splitSection = document.querySelector('.split-section');
if (splitSection) {
  observer.observe(splitSection);
}
