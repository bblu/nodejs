var mySingleton = (function(){
	var instance;
	function init(){
		function privateMethod(){
			console.log('I am private');
		}
		
		var privateString = 'I am also private';
		var privateNumber = 5;
		return {
			getString: ()=> { return privateString; },
			getnumber: ()=> { return privateNumber; },
			publicProperty: 'I am public'
		}
		
	}
	return {
		getInstance: ()=> { 
			if(!instance){
				instance = init();
			}
			return instance;
		}
	}
})();

module.exports = mySingleton;