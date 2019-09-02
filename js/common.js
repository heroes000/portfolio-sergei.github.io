$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});


	$(".popup").magnificPopup({type:"image"});

	// $(".popup_content").magnificPopup({
	// 	type:"inline",
	// 	midClick: true
	// });

	// --- Анимация ---
	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	//--- bg img -----
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	//------

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	//-- Переход к сексии страницы после нажатия на ссылку
	//-- append -добавление в конец выбраного елемента
	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	//-- Закрытие - открытие меню при клике на гамбургер
	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	//-- Добавление id 
	// $(".portfolio_item").each(function(i) {
	// 	$(this).find("a").attr("href", "#work_" + i);
	// 	$(this).find(".podrt_descr").attr("id", "work_" + i);
	// });

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();


	//Цели для Яндекс.Метрики и Google Analytics
	// $(".count_element").on("click", (function() {
	// 	ga("send", "event", "goal", "goal");
	// 	yaCounterXXXXXXXX.reachGoal("goal");
	// 	return true;
	// }));

	// //SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("../img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };


	//-- Скрытая форма
	// $(".homesect .section-bottom .buttons").click(function() {
	// 	$("#callback h4").html($(this).text());
	// 	// $("#callback input[name=formname]").val($(this).text());
	// }).magnificPopup({
	// 	type:"inline",
	// 	mainClass: 'mfp-forms'
	// });

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".main_form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.succes').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.succes').removeClass('active').fadeOut();
				th.trigger("reset"); //-- Сброс формы
			}, 1000);
		});
		return false;
	});
	// if(isset($_POST["submit"])) {
	// 	$(".form-window").css('display', 'block');
	// 	setTimeout("$(".form-window").css('display', 'none');",1000);
	// }
	// function ds(){$(".form-window").css('display', 'none')}

	// $(".main_form button").click(function() {
	// 	$(".form-window").css('display', 'block');
	// 	setTimeout("ds();",1000);
	// });


});



//--- Photo
$('.person img').each(function(){           
		var t = $(this),
		s = 'url(' + t.attr('src') + ')',
		p = t.parent(),
		d = $('<div></div>');
		t.hide();
		p.append(d);
		d.css({
			'height'                : 220,
			'width'                 : 220,  
			'background-size'       : 'cover',
			'background-repeat'     : 'no-repeat',
			'background-position'   : 'center',
			'background-image'      : s
		});
	});

$('.portfolio_item img').each(function(){           
		var t = $(this),
		s = 'url(' + t.attr('src') + ')',
		p = t.parent(),
		d = $('<div></div>');
		t.hide();
		p.append(d);
		d.css({
			'height'                : 250,
			'width'                 : "100%",  
			'background-size'       : 'cover',
			'background-repeat'     : 'no-repeat',
			'background-position'   : 'center',
			'background-image'      : s
		});
	});




//--- Прелоадер
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 