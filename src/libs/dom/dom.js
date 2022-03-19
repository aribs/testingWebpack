module.exports = {
  allByClass: function (className){
    var htmlCollection = document.getElementsByClassName(className);
    return  Array.prototype.slice.call(htmlCollection);
  },
  addClass: function (element, className){
    element.classList.add(className);
  },
  removeClass: function (element, className){
    element.classList.remove(className);
  },
  hasClass: function(el, className) {
    var sp = ' ';
    return (sp + el.className + sp).indexOf(sp + className + sp) > -1;
  },
  findById: function(id) {
    return document.getElementById(id);
  },
  allByTag: function (tag){
    var htmlCollection = document.getElementsByTagName(tag);
    return  Array.prototype.slice.call(htmlCollection);
  },
  deepFind: function(scope, className) {
    var sibling;
    var chain = [];
    do {
      if (this.hasClass(scope, className)) chain.push(scope);
      else{
        sibling = scope.previousSibling;
        while (sibling) {
          if (this.hasClass(sibling, className)) {
            chain.push(sibling);
            break;
          }
          sibling = sibling.previousSibling;
        }
      }
      scope = scope.parentNode;
    } while (scope);
    return chain;
  },
  scrollToElement: function(el,x,minus) {
    var y = this.getOffset(el).top + this.getScrollTop();
    if(minus)y -= minus;
    window.scroll(x||0,y);
  },
  getWindowWidth: function() {
    return (window.innerWidth)? window.innerWidth:document.documentElement.clientWidth;
  }, 
  getWindowHeight: function() {
    return (window.innerHeight)? window.innerHeight:document.documentElement.clientHeight;
  },
  isTablet: function(){
    const userAgent = navigator.userAgent.toLowerCase();
    return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
  },
  isMobile: function(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },
  hideElement: function (element){
    if(dom.hasClass(element, 'hide')) return;
    dom.addClass(element, 'hide');
  },
  displayElement: function (element){
    if(dom.hasClass(element, 'hide')) dom.removeClass(element, 'hide');
  },
  intlRound: function(numero, decimales = 2, usarComa = false) {
    var opciones = {
        maximumFractionDigits: decimales, 
        useGrouping: false
    };
    usarComa = usarComa ? "es" : "en";
    return new Intl.NumberFormat(usarComa, opciones).format(numero);
},
  //COOKIES
  newCookie: function (name, value, days){
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  },
  getCookie: function (name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  },
  deleteCookie: function (name){
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  },
  //Event Handling
  addHandler: function (element, event, code){
    element.addEventListener(event, code);
  }
}