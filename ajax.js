$( document ).ready(function() {
    $(".main_form button").click(
		function(){
			sendAjaxForm('result_form', 'main_form', 'mail.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, main_form, url) {
    jQuery.ajax({
        url:     'mail.php', //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $(".main_form").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = jQuery.parseJSON(response);
        	document.getElementById(result_form).innerHTML = "Имя: "+result.name+"<br>Телефон: "+result.email;
    	},
    	error: function(response) { // Данные не отправлены
    		document.getElementById(result_form).innerHTML = "Ошибка. Данные не отправленны.";
    	}
 	});
}