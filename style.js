	$(document).ready(function(){
	$("#buttonSubmit").click(function() {

		var forTheSale = $("#amount1").val();
		
		var customerGivenYou = $("#amount2").val();
		
		var changeDue = customerGivenYou - forTheSale;
	
		var dollars = Math.floor(changeDue);

		var coins = Math.round((changeDue % 1) *100);

		var quarters = Math.floor(coins / 25);

		var dimes = Math.floor((coins - (quarters * 25)) /10);

		var nickels = Math.floor((coins - (quarters * 25) - (dimes * 10)) / 5);

		var pennies = Math.floor((coins - (quarters * 25) - (dimes * 10) - (nickels * 5)) / 1);

		$("#totalDollars").html(dollars);

		$("#totalQuarters").text(quarters);

		$("#totalDimes").text(dimes);

		$("#totalNickels").text(nickels);

		$("#totalPennies").html(pennies);
	});
});