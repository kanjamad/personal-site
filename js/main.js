$(document).ready(function () {


	$('#main-Name').click(function(event) {
		event.preventDefault();
		console.log("click kanjamad bosel!!!!!!!");
		$('.fa-rocket').animate({left: '550px'}, 4000);

	});

	$('.contact').on('submit', function (evt) {
		evt.preventDefault();

		// Code for validating the form
		$('form input, form textarea').each(function() {
			// Cache $(this) to optimize code a bit.
			var $currentField = $(this);
			var fieldType = $(this).attr('type');

			if ( $currentField.val() === '' ) {
				$currentField.addClass('error');
				$currentField.siblings('.error-message').fadeIn();
				// After adding error styles, move on to the next field and skip the next steps for that input/textarea
				return;
			}

			if (fieldType === 'email') {
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				var isValidEmailAddress = re.test($currentField.val());
				if (!isValidEmailAddress) {
			$currentField.addClass('error');
					$currentField.siblings('.error-message').text('Please enter a valid email address.').fadeIn();
					// After adding error styles, move on to the next field and skip the next steps for that input/textarea
					return;
			}

			} 

			// Since we used return above, 
			// the below code will only run 
			// if the field has input and, 
			// if it is an email field, has a valid email address.
			$currentField.removeClass('error');
			$currentField.siblings('.error-message').hide();

			



		});
	});



	$('form').on('click', function(event) {
		event.preventDefault();
		console.log('click!!!!!!!!!!!!');
		$('.fa-car-side').animate({left: '550px'}, 4000);
		$(this).replaceWith('<h1>Thank you for submit the form..........</h1>');
	});



	
	       // Transition effect for navbar and back-to-top icon
				$(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 550) { 
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible'); 
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');  
        }

        });


        // Scrolling effect for Arrow icons
        $("#scrollIcon").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#about"), 1000);
        });
        $("#nav-about").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#about"), 1000);
        });
        $("#nav-portfolio").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#portfolio"), 1000);
        });
        $("#nav-contact").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#contact"), 1000);
        });
        $(".navbar-brand").click(function(e) {
            e.preventDefault();
            $.scrollTo(0, 1000);
				});
				



});