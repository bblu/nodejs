var rate=0.91;	//canadianDollar

function roundTwoDecimal(amount){
	return Math.round(amount * 100) / 100;
}

//only expoort the bellow functions
exports.canadianToUS = function(canadian){
	return roundTwoDecimal(canadian * rate);
}

exports.USToCanadian = function(us){
	return roundTwoDecimal(us / rate);
}
