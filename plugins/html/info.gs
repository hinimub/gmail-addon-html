function myFunction() {
  var xml = HtmlService.createHtmlOutputFromFile('test').getContent();
  var doc = XmlService.parse(xml);
  var root = doc.getRootElement();
  
  var stack_elements = [];
  var stack_widgets = [];
  var stack_sections = [];
  var card;
  
  function make(element){
    switch(element.getName()){
      case 'text-paragraph': return stack_widgets.push(CardService.newTextParagraph().setText(element.getValue()));
      case 'section' : return stack_sections.push(CardService.newCardSection().addWidget(stack_widgets.pop()));
      case 'card': card = CardService.newCardBuilder().addSection(stack_sections.pop()).build();
    }
  }
  
  function search (element){
    if(!element.getChildren().length) make(element);
    element.getChildren().forEach(function(element){
      search(element);
    });
    make(element)
  }
  search(root);
  Logger.log(card)
}

function test2func(){
  var html = HtmlService.createHtmlOutputFromFile('test2').getContent();
  var doc = XmlService.parse(html);
  var root = doc.getRootElement();

  
  
}
