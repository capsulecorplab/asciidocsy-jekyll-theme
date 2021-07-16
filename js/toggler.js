/**
Prepares content for toggling and executes toggle functionality
**/
$( document ).ready(function() {
  
  const toggleSets = {
      "user-os-toggle": {"verb":"toggle","spot":"#sidebar-right .sidebar-mid","show":{"text":"Your operating system:","icon":"fa fa-laptop"},"swap":{"pick":"os-mac","opts":[{"text":"Windows","slug":"os-win","icon":"fa fa-windows"},{"text":"Linux/Unix","slug":"os-nix","icon":"fa fa-linux"},{"text":"MacOS","slug":"os-mac","icon":"fa fa-apple"}]}}
  }
  var togglesList = [];
  // hide all elements with a switcher-managed class
  $('.toggle-handler input').each(function () {
    var theClass = $("." + $(this).val());
    $(theClass).hide();
  });
  function toggleButton () {
    console.log($(this).parent())
    var thisToggle = $(this).parent().parent().attr('name');
    var $thisInput = $(this)
    var thisVal    = $thisInput.val();
    var activeClass = "." + thisVal;
    $(this).parent().siblings().each( function() {
      $( '.' +  $(this).find('input').val() ).hide();
    });
    $(activeClass).show();
    $.cookie(thisToggle, thisVal);
  }
  $('.toggle-handler input').on('focus', toggleButton)
  $('.toggle-handler').each( function() {
    var thisToggle = $(this).attr('name')
    var pick = toggleSets[thisToggle]['swap']['pick']
    // Prepare inititial activation, if any
    if ( urlParams.has(thisToggle) ) {
      var val = urlParams.get(thisToggle)
    } else if ( $.cookie(thisToggle) ) {
      var val = ($.cookie(thisToggle))
    } else if ( pick != '' && typeof pick !== 'undefined' ) {
      var val = pick
    } else {
      var val = $(this).find('input:first-child').val()
    }
    $(this).find('input[value="' + val + '"]').click()
  });
  // focus event
});
