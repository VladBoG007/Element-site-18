document.getElementById('btn').addEventListener('click', function(){
	document.getElementById('bar').value+=1;
});
var rir = document.getElementById('bar')
var el = document.querySelector('.progressbar');
var val = +el.innerHTML;
document.getElementById('btn').onclick = function() {
	el.innerHTML = val += 1;
	el.max = 100;
	if(el < 100){
		document.getElementById('btn').disabled = false;
	}
	if(el >= 100) {
		document.getElementById('btn').disabled = true;
	}

}