$(function(){
    var regexName = /^[A-Za-z]+(([- ]?)[A-Za-z])*$/
    var regexPhone = /^0[67][0-9]{8}/
    var regexMail = /^[a-zA-Z][a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)@[a-z][a-zA-Z0-9_\.-]+\.[a-z]{2,5}/
    $('form').submit(function(event){
    var name = $('#Name').val();
    var firstname = $('#firstName').val();
    var phone = $('#number').val();
    var mail = $('#Email').val();
      if(name ==''){
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Ce champs est obligatoire');
      $('#Name').after(small);
      }
    else if(!regexName.test(name)){
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Saisie incorrecte');
      $('#Name').after(small);
      }
      event.preventDefault();
    })
});
