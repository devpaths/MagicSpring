

// Closes the Responsive Menu on Menu Item Click
$('.overlay-menu ul li a').click(function() {
    $('.button_container:visible').click();
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Navigation show/hide
$('.toggle').click(function() {
    if ($('#overlay.open')) {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    }
});




