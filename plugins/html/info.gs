function myFunction() {
  var xml = HtmlService.createHtmlOutputFromFile('test');
  var parser = new DOMParser();
  var persed = parser.parseFromString(xml, 'text/xml')
}
