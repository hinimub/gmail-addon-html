

function test2func(){
  var html = HtmlService.createHtmlOutputFromFile('test2').getContent();
  var doc = XmlService.parse(html);
  var root = doc.getRootElement();

  
  
}
