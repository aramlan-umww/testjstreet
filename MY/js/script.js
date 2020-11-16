var homeLoader;

$(
	function() 
	{
		// INSERT YOUR JAVASCRIPT HERE
		$("html,body").css("overflow-y" , "hidden");
		//svg turn to xml
		$('img.svg').each(
			function() 
			{
				var $img = $(this);
				var imgID = $img.attr('id');
				var imgClass = $img.attr('class');
				var imgURL = $img.attr('src');
				$.get(
					imgURL,
					function(data) 
					{
						// Get the SVG tag, ignore the rest
						var $svg = $(data).find('svg');
						// Add replaced image's ID to the new SVG
						if (typeof imgID !== 'undefined') {
						  $svg = $svg.attr('id', imgID);
						}
						// Add replaced image's classes to the new SVG
						if (typeof imgClass !== 'undefined') {
						  $svg = $svg.attr('class', imgClass + ' replaced-svg');
						}
						// Remove any invalid XML tags as per http://validator.w3.org
						$svg = $svg.removeAttr('xmlns:a');
						// Replace image with new SVG
						$img.replaceWith($svg);
					},
					'xml'
				);
			}
		);

		homeLoader = $('body').loadingIndicator({
					useImage: false,
		}).data("loadingIndicator");
/*
		$(window).bind('load resize', function() 
			{
    var wh = $(window).height();
    if($(".salaryReview").length){
        $('.site-core').css('padding-top', $('.header').outerHeight() + 'px').animate(
        {
          opacity: 1
        },
        800
      );
    }else{
      $('.site-core').animate(
        {
          opacity: 1
        },
        800
      );
    }
  });
*/
    
/*
 
  */
});


$(window).ready(
	function()
	{
		
		homeLoader.hide();
		$("html,body").css("overflow-y" , "auto");
	//	alert('123');
		$("body > div").animate({opacity : 1} , "normal");
		$(".loading-indicator-wrapper").hide();//css("opacity" , 0);
		$("body > div.cssLoading").hide();
		var wh = $(window).height();
		if($(".salaryReview").length){
			$('.site-core').css('padding-top', $('.header').outerHeight() + 'px').animate(
			{
			  opacity: 1
			},
			800
		  );
		}else{
		  $('.site-core').animate(
			{
			  opacity: 1
			},
			800
		  );
		}


		 function onScrollInit(items, trigger) 
		 {
			items.each(
				function() 
				{
					var osElement = $(this),
					osAnimationClass = osElement.attr('data-os-animation'),
					osAnimationDelay = osElement.attr('data-os-animation-delay');

					osElement.css({
						'-webkit-animation-delay': osAnimationDelay,
						'-moz-animation-delay': osAnimationDelay,
						'animation-delay': osAnimationDelay
					});

					var osTrigger = trigger ? trigger : osElement;

					osTrigger.waypoint(
						function() {
						  osElement.addClass('animated').addClass(osAnimationClass);
						},
						{
						  triggerOnce: true,
						  offset: '90%'
						}
					);
				});
		}
		onScrollInit($('.os-animation'));
		onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));
	}
);

function newpage() 
{
	window.location = newLocation;
}

function openMenu() {
  if ($('.MobileMenu').hasClass('active')) {
    $('.MobileMenu').removeClass('active');
    $('#menu').animate({ opacity: 0 }, 600).removeClass('active');
    $('.site-core').css({ overflow: 'inherit', height: 'inherit' });
  } else {
    var winHeight = $(window).height();
    $('.MobileMenu').addClass('active');  
    $('#menu').addClass('active').animate({ opacity: 100 }, 600);
    $('.site-core').css({ overflow: 'hidden' });
    $('.site-core').css('height', winHeight);
  }
}
