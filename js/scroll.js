const scrollElem = document.querySelector('.header-line')

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

let windowHeight = document.documentElement.clientHeight

let windowScroll = window.pageYOffset

let percent = windowScroll / (scrollHeight - windowHeight) * 100

scrollElem.style.background = `linear-gradient(to right, rgb(61, 144, 61) ${percent}%, rgb(255, 255, 255) 0%)`

window.addEventListener('scroll', function() {
  scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  
  windowHeight = document.documentElement.clientHeight
  
  windowScroll = window.pageYOffset
  
  percent = windowScroll / (scrollHeight - windowHeight) * 100

  scrollElem.style.background = `linear-gradient(to right, rgb(61, 144, 61) ${percent}%, rgb(255, 255, 255) 0%)`
});