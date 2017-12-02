function myCalculation() {
	prices1 =[1500, 500, 1800, 700];
	prices2 = [2500, 1500, 1000, 900];
	sum1 = prices1[0] + prices1[1] + prices1[2] + prices1[3];
	sum2 = prices2[0] + prices2[1] + prices2[2] + prices2[3];
	calc1 = sum1 / 4;
	calc2 = sum2 / 4;
	price = calc2 - calc1;





	document.getElementById("gesamt").innerHTML = price + " €";
	document.getElementById("cityLondon").innerHTML = calc1 + " €";
	document.getElementById("cityAmsterdam").innerHTML =  calc2 + " €";


 }

 myCalculation()