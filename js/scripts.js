$(document).ready(function(){
  // smooth scrolling
  var $root = $('html', 'body');
  $('#navbar-example a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

  // tooltips
  $(function () {
    $('#suffolk').tooltip();
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Validation for contact form
  // validate name
  $("#name").on('keyup', function(){
    validateText('#name', '#msgName');
  });

  // validate email
  $("#email").on('keyup', function(){
    validateText('#email', '#msgEmail');
  });

  // textarea
  // $(".message-box").css("border", "2px solid red");
  // $(".message-box").css("background-color", "pink");
  $(".message-box").on("keyup", function() {
    // console.log("keyup happened"); //here we make sure we're catching the keyup
    var charCount = $(".message-box").val().length;
    $('#msgCharCount').html("Characters: " + charCount);
    // console.log(charCount);
    if (charCount > 50){
      $('#msgCharCount').css("color", "red");
    } else {
      $('#msgCharCount').css("color", "white");
    };

    validateText('.message-box', '#msgBody');
  });

  // message form
  $('#submitMessage').on('click', function(){
    var usrName = $('#name').val();
    var usrEmail = $('#email').val();
    var usrMsg = $('.message-box').val();

    // validate name
    validateText('#name', '#msgName');

    // validate email
    validateText('#email', '#msgEmail');

    // validate message
    validateText('.message-box', '#msgBody');

    // if all fields have values, then submit message
    if (usrName != "" && usrEmail != "" && usrMsg != ""){
      console.log('submitting message');
      $('#msgName').html(usrName).css('color', 'yellow');
      $('#msgName').show();
      $('#name').hide();

      $('#msgEmail').html(usrEmail).css('color', 'yellow');
      $('#msgEmail').show();
      $('#email').hide();

      $('#msgBody').html(usrMsg).css('color', 'yellow');
      $('#msgBody').show();
      $('.message-box').hide();
      $('#msgCharCount').hide();
    }

    return false;
  });

  // work section
  // work section - add works
  for (var i = 0; i < works.length; ++i){
    $("#workRow").append("\
      <div class='col-sm-3 col-md-3'>\
        <a href='" + works[i].url +"' class='work-img' target='_blank'>\
          <img class='img-fluid' src='" + works[i].pic + "'>\
          <span class='work-info'><p class='work-proj-title'>Title: " + works[i].title +"</p></span>\
        </a>\
      </div>\
    ");

    var images = $("#work img");
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
  }

  // work section - event listeners
  $('.work-img').mouseenter( function(){
    $('.work-info', this).show();
  }).mouseleave( function(){
    $('.work-info', this).hide();
  });

  function validateText(txtElementID, validationElementID){
    if ($(txtElementID).val().length > 0){
      $(txtElementID).css('border', '');
      $(validationElementID).hide();
    } else {
      $(txtElementID).css('border', '2px solid red');
      $(validationElementID).html('Required').css('color', 'red');
      $(validationElementID).show();
    }
  }

  function GetMap(){
    console.log('getmap');
    var map = new Microsoft.Maps.Map('#map1', {
      center: new Microsoft.Maps.Location(39.814340, -105.173890),
      mapTypeId: Microsoft.Maps.MapTypeId.road,
      zoom: 10
    });
    //listen to clicks
    Microsoft.Maps.Events.addHandler(map, 'click', function () { alert('mapClick'); });
  }

});
