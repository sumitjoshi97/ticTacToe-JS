$(document).ready(function () {
	var player = 1;
	var X = "fa fa-times";
	var O = "fa fa-circle-o";
	$("#buttons #restart").on("click", function (event) {
		reset();
	});
	$(".square").on("click", function (event) {
		var squareSelected = $(this);
		if (squareSelected.hasClass(X) || squareSelected.hasClass(O)) {
			alert("try another box");
		}
		else {
			if (player === 1) {
				squareSelected.addClass(X);
				if (IsPlayerWon(X)) {
					alert("player 1 wons");
				}
				player = 2;
			}
			else {
				squareSelected.addClass(O);
				if (IsPlayerWon(O)) {
					alert("player 2 wons");
				}
				player = 1;
			}
		}
	});
	var IsPlayerWon = function (symbol) {
		if ($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq2").hasClass(symbol)) {
			return true;
		}
		else if ($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)) {
			return true;
		}
		else if ($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
			return true;
		}
		else if ($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
			return true;
		}
		else if ($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)) {
			return true;
		}
		else if ($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
			return true;
		}
		else if ($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
			return true;
		}
		else if ($(".sq3").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
			return true;
		}
		else {
			return false;
		}
	};
	var reset = function () {
		$(".sq1").removeClass(X);
		$(".sq1").removeClass(O);
		$(".sq2").removeClass(X);
		$(".sq2").removeClass(O);
		$(".sq3").removeClass(X);
		$(".sq3").removeClass(O);
		$(".sq4").removeClass(X);
		$(".sq4").removeClass(O);
		$(".sq5").removeClass(X);
		$(".sq5").removeClass(O);
		$(".sq6").removeClass(X);
		$(".sq6").removeClass(O);
		$(".sq7").removeClass(X);
		$(".sq7").removeClass(O);
		$(".sq8").removeClass(X);
		$(".sq8").removeClass(O);
		$(".sq9").removeClass(X);
		$(".sq9").removeClass(O);
	};
});