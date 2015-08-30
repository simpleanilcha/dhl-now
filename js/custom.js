// Date and Time picker js
 $(function() {
        $('#datetimepicker1').datetimepicker({
            pickTime: false
        });
    });

    $(function() {
        $('#datetimepicker2').datetimepicker({
            pickTime: false
        });
    });

    $(function() {
        $('#datetimepicker3').datetimepicker({
            pickDate: false
        });
    });

    $(function() {
        $('#datetimepicker4').datetimepicker({
            pickDate: false
        });
    });

    $(function() {
        $('#datetimepicker8').datetimepicker({
            pickDate: false
        });
    });

    $(function() {
        $('#datetimepicker9').datetimepicker({
            pickDate: false
        });
    });

// Checkbox radio js
$(document).ready(function() {
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
});


// Go to Top js
   $(document).ready(function() {
        // Show or hide the sticky footer button
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
            }
        });

        // Animate the scroll to top
        $('.go-top').click(function(event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0
            }, 300);
        })
    });

// Ckeditor js
CKEDITOR.replace('fieldname');