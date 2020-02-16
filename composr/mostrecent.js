const composr = {
  page: null,
  version: '0.1.1',
  soFar: "",
  styles: {
    page: "text-align: center;",
    header: "font-family: sans-serif; font-size: 3em;",
    subheader: "font-family: sans-serif; font-size: 1.2em;",
    para: "font-family: sans-serif; font-size: 1em; margin-left: 10%; margin-right: 10%;",
    link: "font-family: sans-serif; font-size: 1.2em;"
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
      default:
      console.log('type ', type, ' not supported');
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
  },
  clearStyles() {
    composr.styles.page = "";
    composr.styles.header = "";
    composr.styles.subheader = "";
    composr.styles.para = "";
    composr.styles.link = "";
  }
}
var header = 'header';
var subheader = 'subheader';
var para = 'para';
var link = 'link'
