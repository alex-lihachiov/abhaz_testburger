// @@include'script.js')
// // Меню бургер

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('.body').toggleClass('lock');
	}
	)
}
);

//@@include jq-start.js)
//@@include forms.js)
//@@include'jq-end.js')