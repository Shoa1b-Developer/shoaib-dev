const $ = ( clss ) => { return document.querySelector(clss)};

$(".menu").addEventListener('click',function() {
  $(".sidebar").style.left = '0';
});

$(".cross").addEventListener('click',function(){
  $(".sidebar").style.left = '-290px';
});