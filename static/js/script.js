$(document).ready(function() {

  //TODO fix bug when reload page in mobile device navbar-mobile is hidden and navbar-desktop is displayed
  $('#navbar-mobile').hide();
  $('#navbar-desktop').show();

  // Check for click events on the navbar burger icon
  $('.navbar-burger').click(function() {

    $('#navbar-desktop').hide();
    $('#navbar-mobile').show();
    $('.navbar-burger').toggleClass('is-active');
    $('#navbar-mobile.navbar-menu').toggleClass('is-active');
    $('#navbar-mobile .navbar-dropdown').hide();

    if($('.navbar-burger').hasClass('is-active')) {
      $('#navbar-mobile').show();
      $('#navbar-desktop').hide();
    }else {
      $('#navbar-mobile').hide();
      $('#navbar-desktop').hide();
    }

    $('#navbar-mobile .navbar-item.has-dropdown').click(function() {
      $('#navbar-mobile .navbar-item.has-dropdown').toggleClass('is-active');

      if($('#navbar-mobile .navbar-item.has-dropdown').hasClass('is-active')) {
        $('#navbar-mobile .navbar-dropdown').show();
      }else {
        $('#navbar-mobile .navbar-dropdown').hide();
      }
    })
  });



});
