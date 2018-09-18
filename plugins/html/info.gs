function myFunction() {
  var xml = HtmlService.createHtmlOutputFromFile('test').getContent();
  var persed = XmlService.parse(xml);
  
  Logger.log(parsed);
}

function test2func(){
  var html = HtmlService.createHtmlOutputFromFile('test2').getContent()
  var persed = XmlService.parse(html);
  
  Logger.log(parsed);
}