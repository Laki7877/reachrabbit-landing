/* Select Next or Previous Tab - See http://jsfiddle.net/Sherbrow/h6rQ2/3/ with some modifications */

var $allTabs = $('.tabbable li');

$('#prevtab').on('click', function() {
    var targetTab = $allTabs.filter('.active').prev('li').find('a');
    if (targetTab.length > 0) {
      targetTab.click();
    } else {
      $allTabs.last().find('a').click();
    }
});

$('#nexttab').on('click', function() {
    var targetTab = $allTabs.filter('.active').next('li').find('a').click();
    if (targetTab.length > 0) {
      targetTab.click();
    } else {
      $allTabs.first().find('a').click();
    }
});


/* Show Dropdown over Hover */
// $('nav li.dropdown').hover(function() {
//   $(this).find('.dropdown-menu').stop(true, true).show();
// }, function() {
//   $(this).find('.dropdown-menu').stop(true, true).fadeOut(500);
// });
