function myFunction() {
  var xml = HtmlService.createHtmlOutputFromFile('test');
  var persed = XmlService.parse(xml);
}

function test2func(){
  var html = HtmlService.createHtmlOutputFromFile('test2');
  var persed = XmlService.parse(html);
  
  Logger.log(parsed);
}