/* 날짜를 주어진 구분자로 가져옴 */
function getTodayYYYYMMDD( seperator ) {
	if( !seperator ) {
		seperator = "-";
	}
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	
	var yyyy = today.getFullYear();
	if(dd<10){ 
		dd='0'+dd;
	} 
	if(mm<10){
		mm='0'+mm;
	} 
	today = yyyy+seperator+mm+seperator+dd;
	return today;
}
//url에 추가된 get parameter값을 가져옴. 전체 호출 : getUrlVars, 이름으로 호출 : getUrlVar('이름')
$.extend({
    getUrlVars: function(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(name) {
        return $.getUrlVars()[name];
    }
});
