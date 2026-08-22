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

  // Counter count-up animation (.counter-n)
  function initCounterAnimations() {
    var counters = document.querySelectorAll('.counter-n');
    if (!counters.length) return;
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var duration = 1400;

    function parseCounter(el) {
      // Suffix held in child <span>, else trailing non-numeric text after the number.
      var suffixHTML = '';
      var sp = el.querySelector('span');
      if (sp) suffixHTML = sp.outerHTML;
      // Use textContent before the span (or full text if no span).
      var rawText = sp ? (el.firstChild && el.firstChild.nodeType === 3 ? el.firstChild.nodeValue : el.textContent.replace(sp.textContent, '')) : el.textContent;
      // Find first run of digits (with optional commas) and capture prefix.
      var m = rawText.match(/^(\D*)([\d,]+)(.*)$/);
      if (!m) return null;
      var prefix = m[1];
      var numStr = m[2].replace(/,/g, '');
      var trailing = m[3];
      var target = parseInt(numStr, 10);
      if (isNaN(target)) return null;
      var hasComma = m[2].indexOf(',') !== -1;
      return { prefix: prefix, target: target, hasComma: hasComma, trailing: trailing, suffixHTML: suffixHTML };
    }

    function render(el, value, info) {
      var numText = info.hasComma ? value.toLocaleString('ko-KR') : String(value);
      el.innerHTML = info.prefix + numText + info.trailing + info.suffixHTML;
    }

    function animate(el, info) {
      var start = null;
      function step(ts) {
        if (start === null) start = ts;
        var elapsed = ts - start;
        var t = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - t, 3);
        var current = Math.round(info.target * eased);
        render(el, current, info);
        if (t < 1) requestAnimationFrame(step);
        else render(el, info.target, info);
      }
      requestAnimationFrame(step);
    }

    var supportsIO = typeof IntersectionObserver !== 'undefined';
    Array.prototype.forEach.call(counters, function(el) {
      var info = parseCounter(el);
      if (!info) return;
      el.setAttribute('data-target', String(info.target));
      if (reduceMotion || !supportsIO) {
        render(el, info.target, info);
        return;
      }
      // Start at 0 to avoid flash of final value before observer fires.
      render(el, 0, info);
      var observer = new IntersectionObserver(function(entries, obs) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            obs.disconnect();
            animate(el, info);
          }
        });
      }, { threshold: 0.4 });
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounterAnimations);
  } else {
    initCounterAnimations();
  }
})();
