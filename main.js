$(function(){
  // Lorsque le formulaire va être soumis
  $('form').submit(function(event){
    // On récupère toutes les inputs, je les mets dans une seule variable (tableau)
    var inputs = $('input');
    $('small').remove();
    // Cette méthode (each) permet de parcourir mon tableau
    $.each(inputs, function(){
    //  Cette méthode (this) permet de selectionner l'élèment sur lequel on se trouve
      let input = this;
    // On vérifie que nos champs respectent les contraintes (required, maxlength,minlength etc) qu'on a défini dans le html
    // ! (différent de)
      if(!input.validity.valid){
        var small = $('<small></small>');
        small.addClass('alert alert-danger');
        small.text(input.validationMessage);
        $(input).after(small);
        event.preventDefault();
      };
    },false);
  });
});
