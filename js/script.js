$(document).ready(function(){
    jQuery.fn.exists = function(){return this.length>0;}
    if ($(".tooltip").exists()) {
        $(".tooltip").qtip({
            position: {
                my: 'center left', // Position my top left...
                at: 'center right' // at the bottom right of...
            },
            style: {
                tip: {
                    width: 18,
                    height: 10
                }
            },
            hide: {
                fixed: true,
                delay: 300
            }
        });
    }
});
