$('.international').on('click', function(event){

   $(this).toggleClass('active');

  if($("#international-drop").is(":visible")){
    $("#slide-down").slideUp();
  }
else{
  event.preventDefault();
      $('#international-drop').show();
      $('#politics-drop').hide();
      $('#business-drop').hide();
      $('#technology-drop').hide();
      $('#culture-drop').hide();
      $('#blogs-drop').hide();
      $('#slide-down').slideDown();
}
});

$('.politics').on('click', function(event){

  $(this).toggleClass('active');

  if ($('#politics-drop').is(":visible")){
    $("#slide-down").slideUp();
  }

  else{

  event.preventDefault();
      $('#international-drop').hide();
      $('#politics-drop').show();
      $('#business-drop').hide();
      $('#technology-drop').hide();
      $('#culture-drop').hide();
      $('#blogs-drop').hide();
      $('#slide-down').slideDown();
}
});

$('.business').on('click', function(event){

  $(this).toggleClass('active');

event.preventDefault();

if ($('#business-drop').is(':visible')){
   $('#slide-down').slideUp();
}

else {
    $('#international-drop').hide();
    $('#politics-drop').hide();
    $('#business-drop').show();
    $('#technology-drop').hide();
    $('#culture-drop').hide();
    $('#blogs-drop').hide();
    $('#slide-down').slideDown();

}

});

$('.technology').on('click', function(event){

  $(this).toggleClass("active");

event.preventDefault();

if ($('#technology-drop').is(':visible')){
   $('#slide-down').slideUp();
}

else {
    $('#international-drop').hide();
    $('#politics-drop').hide();
    $('#business-drop').hide();
    $('#technology-drop').show();
    $('#culture-drop').hide();
    $('#blogs-drop').hide();
    $('#slide-down').slideDown();
}

});

$('.culture').on('click', function(event){

  $(this).toggleClass("active");

event.preventDefault();
    if ($('#culture-drop').is(':visible')){
       $('#slide-down').slideUp();
    }
else {
  $('#international-drop').hide();
  $('#politics-drop').hide();
  $('#business-drop').hide();
  $('#technology-drop').hide();
  $('#culture-drop').show();
  $('#blogs-drop').hide();
  $('#slide-down').slideDown();

}


});

$('.blogs').on('click', function(event){

  $(this).toggleClass('active');

    event.preventDefault();
    if ($('#blogs-drop').is(":visible")){
        $('#slide-down').slideUp();

    } else {
        $('#international-drop').hide();
        $('#politics-drop').hide();
        $('#business-drop').hide();
        $('#technology-drop').hide();
        $('#culture-drop').hide();
        $('#blogs-drop').show();
        $('#slide-down').slideDown();
      }
});
