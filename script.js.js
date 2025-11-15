// script.js - interactivity
document.addEventListener('DOMContentLoaded', function(){

  // Smooth scroll for nav links
  document.querySelectorAll('.top-nav a').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href');
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Top button
  const topBtn = document.getElementById('topBtn');
  topBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

  // Highlight current day header (Mon-Fri)
  const dayMap = {1:'#seg',2:'#ter',3:'#qua',4:'#qui',5:'#sex'};
  const today = new Date().getDay();
  if(dayMap[today]){
    const el = document.querySelector(dayMap[today] + ' h2');
    if(el) el.style.borderLeftColor = 'rgba(199,155,43,1)';
  }

  // Alert on click for boxes with "SUPERSÉRIE"
  document.querySelectorAll('.box').forEach(box=>{
    if(/SUPERSÉRIE/.test(box.textContent)){
      box.addEventListener('click', ()=>{
        // small non-obtrusive toast-like message
        showToast('Este bloco contém uma SUPERSÉRIE — execute os dois exercícios sem descanso.');
      });
    }
  });

  // toast helper
  function showToast(msg){
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.position = 'fixed';
    t.style.right = '18px';
    t.style.bottom = '18px';
    t.style.background = 'rgba(0,0,0,0.75)';
    t.style.color = '#fff';
    t.style.padding = '12px 14px';
    t.style.borderRadius = '10px';
    t.style.zIndex = 9999;
    t.style.boxShadow = '0 6px 18px rgba(0,0,0,0.6)';
    document.body.appendChild(t);
    setTimeout(()=> t.remove(), 3800);
  }

});
