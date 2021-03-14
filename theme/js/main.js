$(document).ready(function()
{
	/* Bring "to top" square to life */
	var backToTopOffset = 250, backToTopScrollDuration=300;

	$(window).scroll(function()
	{
		if ($(this).scrollTop() > backToTopOffset)
		{
			$('.totop').fadeIn(500); // Time(in Milliseconds) of appearing of the Button when scrolling down.
		}
		else
		{
			$('.totop').fadeOut(500); // Time(in Milliseconds) of disappearing of Button when scrolling up.
		}
	});

	/* Smooth animation when scrolling to top */
	$('.totop').click(function(event)
	{
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0}, backToTopScrollDuration);
	});

	/* Replace dates with fuzzy, squishy words */
	$("time.timeago").timeago();

	/* Change CSS on the logo when user scrolls far enough */
	var logoOffset = parseInt($("#header-heading").css("padding-top"))-10;	// jQuery always returns units in px (subtraction from #header-heading.offset rule)
	var logoAltered = false;
	$(window).scroll(function()
	{
		if ($(this).scrollTop() > logoOffset)
		{
			if(!logoAltered)
			{
				$("#header-heading").addClass("offset");
				logoAltered = true;
			}
		}
		else
		{
			if(!!logoAltered)
			{
				$("#header-heading").removeClass("offset");
				logoAltered = false;
			}
		}
	});
});