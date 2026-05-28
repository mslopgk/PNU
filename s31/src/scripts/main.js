(function(){
  // Language toggle (KOR|ENG)
  // Lang toggle: .lang-toggle/.lang-btn class OR sidebar/footer EN link
var langSels = document.querySelectorAll('.lang-toggle, .lang-btn, [class~="lang-toggle"], .sb-footer-links a:last-child, .ft-policy a:last-child, .af-policy a:last-child, .airc-policy a:last-child, .lf-policy a:last-child');
langSels.forEach(function(el){
    if (el.tagName === 'A' && el.getAttribute('href') === '#') {
      el.addEventListener('click', function(e){
        e.preventDefault();
        alert('English version is in preparation.\n영문 버전은 준비 중입니다.');
      });
    } else if (el.tagName !== 'A') {
      el.style.cursor = 'pointer';
      el.addEventListener('click', function(){
        alert('English version is in preparation.\n영문 버전은 준비 중입니다.');
      });
    }
  });
  // Floating Quick Menu — Icon Stack (s31.html)
  var fqItems = document.querySelectorAll('.fq-item');
  if (fqItems.length) {
    fqItems.forEach(function(item) {
      var btn = item.querySelector('.fq-btn');
      if (!btn) return;
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.fq-item').forEach(function(i) { i.classList.remove('open'); });
        document.querySelectorAll('.fq-btn').forEach(function(b) { b.classList.remove('active'); });
        if (!isOpen) {
          item.classList.add('open');
          btn.classList.add('active');
        }
      });
    });
    document.addEventListener('click', function() {
      document.querySelectorAll('.fq-item').forEach(function(i) { i.classList.remove('open'); });
      document.querySelectorAll('.fq-btn').forEach(function(b) { b.classList.remove('active'); });
    });
  }
})();
