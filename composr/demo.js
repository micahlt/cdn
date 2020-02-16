composr.page("mainpage");
composr.buildElement(header, 'Hello world');
composr.buildElement(subheader, 'this web page was built using Composr');
let myParagraph = "Composr is a dead-simple library for web page creation using only JavaScript.  It doesn't rely on any external frameworks.  <br><br>It's really good for generating dynamic sites because of the built-in render function.  It also lets you use custom styles.  One-page sites are also incredibly easy to build with Composr- just call the <inline style = 'font-family: monospace'>composr.clearPage()</inline> method.<br><br>";
composr.buildElement(para, myParagraph);
composr.buildElement(link, 'Clear this page!', 'myClear()')
composr.renderPage(true);

function myClear() {
  composr.clearPage();
  composr.renderPage(true);
  console.log(composr.soFar);
  composr.buildElement(subheader, 'All right!');
  composr.buildElement(para, "You just cleared the page contents using <inline style = 'font-family: monospace'>composr.clearPage()</inline> and <inline style = 'font-family: monospace'>composr.renderPage()</inline>!  Cool!");
  composr.renderPage(true);
}
