(function (window, $) {
// Homepage top banner-slider
    $(window).load(function() {
        $('#banner').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: false
        });
    });

// Photo section slider
    $(window).load(function() {
        // The slider being synced must be initialized first
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: false,
            animationLoop: true,
            slideshow: false,
            itemWidth: 174,
            itemMargin: 0,
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
        });
    });

// jQuery data-tables plugin
    $(document).ready(function(){
        $('#sd-uploads').DataTable({
            'bFilter': false,
            'bInfo' : false,
            'bLengthChange': false
        });
    });

// jQuery UI datepicker
    $(function() {
        $( "#datepicker" ).datepicker();
    });
}(window, jQuery));