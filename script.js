const ua = window.navigator.userAgent;
document.getElementById("day").innerHTML = new Date();
console.log(ua);
let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
	window.open('virus.html', null, 'width=500,toolbar=yes,menubar=yes,scrollbars=yes');
})
	