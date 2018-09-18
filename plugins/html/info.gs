function myFunction() {
  var xml = HtmlService.createHtmlOutputFromFile('test');
  var parser = new DOMParser();
  var persed = parser.parseFromString(xml, 'text/xml')
}

function test2func(){
  var html = HtmlService.createHtmlOutputFromFile('test2');
  var parser = new DOMParser();
  var persed = parser.parseFromString(xml, 'text/html');
  
  Logger.log(parsed);
}