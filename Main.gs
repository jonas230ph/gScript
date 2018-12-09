function doGet(request) {
  return HtmlService.createTemplateFromFile('index_agent')
      .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}



//-----------------------
function dataUser(){

  var userName = Session.getEffectiveUser().getUsername();

  return(userName);
  
  //----------photo
//  https://moma-teams-photos.corp.google.com/photos/me?sz=76

}