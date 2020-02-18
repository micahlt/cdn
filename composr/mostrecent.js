const composr = {
  page: null,
  version: '0.1.1',
  soFar: "",
  styles: {
    page: "text-align: center;",
    header: "font-family: sans-serif; font-size: 3em;",
    subheader: "font-family: sans-serif; font-size: 1.2em;",
    para: "font-family: sans-serif; font-size: 1em; margin-left: 10%; margin-right: 10%;",
    link: "font-family: sans-serif; font-size: 1.2em;",
    img: "width: 90%;"
  },
  page(loc) {
    composr.page = document.getElementById(loc);
    composr.page.style = composr.styles.page;
  },
  buildElement(type, content, linkto) {
    switch(type){
      case('header'):
      composr.soFar = composr.soFar.concat("<h1 style = '" + composr.styles.header + "'>" + content + "</h1>");
      break;
      case('subheader'):
      composr.soFar = composr.soFar.concat("<h2 style = '" + composr.styles.subheader + "'>" + content + "</h2>");
      break;
      case('para'):
      composr.soFar = composr.soFar.concat("<p style = '" + composr.styles.para + "'>" + content + "</p>");
      break;
      case('link'):
      composr.soFar = composr.soFar.concat("<a href = '#' style = '" + composr.styles.link + "' onclick = '" + linkto + "'>" + content + "</a>");
      break;
      case('img'):
      composr.soFar = composr.soFar.concat("<a href = '" + linkto +"'><img src = '" + content + "' style = '" + composr.styles.img + "'></a>");
      break;
      default:
      console.log('The element type', type, 'is not supported.');
      break;
    }
  },
  renderPage(force) {
    if (force == true) {
      console.log('🧨 Rendering is currently still a beta feature of Composr- use at your own risk!');
      composr.page.innerHTML = composr.soFar;
    } else {
    console.log('not supported- set force paremeter to true for beta testing');
    }
  },
  clearPage() {
    composr.soFar = "";
    composr.page = "";
  },
  clearStyle(elem) {
    switch(elem){
      case('header'):
      composr.styles.header = "";
      break;
      case('subheader'):
      composr.styles.subheader = "";
      break;
      case('para'):
      composr.styles.para = "";
      break;
      case('link'):
      composr.styles.link = "";
      break;
      case('img'):
      composr.styles.img = "";
      break;
      case('all'):
      composr.styles.header = "";
      composr.styles.subheader = "";
      composr.styles.para = "";
      composr.styles.link = "";
      composr.styles.img = "";
      break;
      default: 
      console.log("Invalid element", elem, "selected.")
    }
  },
  newStyle(elem, style) {
    switch(elem){
      case('header'):
      composr.styles.header = style;
      break;
      case('subheader'):
      composr.styles.subheader = style;
      break;
      case('para'):
      composr.styles.para = style;
      break;
      case('link'):
      composr.styles.link = style;
      break;
      case('img'):
      composr.styles.img = style;
      break;
      case('all'):
      composr.styles.header = style;
      composr.styles.subheader = style;
      composr.styles.para = style;
      composr.styles.link = style;
      composr.styles.img = style;
      break;
      default: 
      console.log("Invalid element", elem, "selected.")
    }
  }
}
var header = 'header';
var subheader = 'subheader';
var para = 'para';
var link = 'link'
var img = 'img'
var all = 'all'
