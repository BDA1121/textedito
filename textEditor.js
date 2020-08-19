var q = document.getElementById("q");
var w = document.getElementById("w");
var e = document.getElementById("e");
var t = document.getElementById("t");
var r = document.getElementById("r");
var z,x,c,v;
var f = document.querySelectorAll(".f");
var b = document.querySelectorAll(".b");
var s = document.querySelectorAll(".s");
var fonts = document.getElementById("fonts");
var bold = document.getElementById("bold");

var size = document.getElementById("size");
var style = document.getElementById("style");
 fonts.classList.add("displayNone");
  bold.classList.add("displayNone");
  style.classList.add("displayNone");
  size.classList.add("displayNone");
q.addEventListener("click",function(){
	fonts.classList.toggle("display");
	fonts.classList.toggle("displayNone");
bold.classList.add("displayNone");
	style.classList.add("displayNone");
  size.classList.add("displayNone");
})
e.addEventListener("click",function(){
	bold.classList.toggle("display");
	bold.classList.toggle("displayNone");
	 fonts.classList.add("displayNone");
	 style.classList.add("displayNone");
  size.classList.add("displayNone");
})
t.addEventListener("click",function(){
	size.classList.toggle("display");
	size.classList.toggle("displayNone");
  bold.classList.add("displayNone");

	 fonts.classList.add("displayNone");
	 style.classList.add("displayNone");
})
w.addEventListener("click",function(){
	style.classList.toggle("display");
	style.classList.toggle("displayNone");
	 fonts.classList.add("displayNone");
  size.classList.add("displayNone");
	 bold.classList.add("displayNone");
})
r.addEventListener("click",function(){
	 fonts.classList.add("displayNone");
	 bold.classList.add("displayNone");
	 style.classList.add("displayNone");
     if(document.querySelector("textarea").style.fontFamily !== z){
     	document.querySelector("textarea").style.fontFamily = z;
     }
     if(document.querySelector("textarea").style.fontWeight !== x){
     	document.querySelector("textarea").style.fontWeight = x;
     }
     if(document.querySelector("textarea").style.fontStyle !== c){
        document.querySelector("textarea").style.fontStyle = c;
     }
     if(document.querySelector("textarea").style.fontSize !== v){
     	document.querySelector("textarea").style.fontSize = v;
     }
})

function sizef(value){
	v = document.querySelector("textarea").style.fontSize;
	document.querySelector("textarea").style.fontSize = value + "px";
		c = document.querySelector("textarea").style.fontStyle;

		z = document.querySelector("textarea").style.fontFamily;

		x = document.querySelector("textarea").style.fontWeight;
}
for(var i =0;i < f.length;i++){
	f[i].addEventListener("click",function(){
		z = document.querySelector("textarea").style.fontFamily;
		document.querySelector("textarea").style.fontFamily = this.textContent;
		x = document.querySelector("textarea").style.fontWeight;
		c = document.querySelector("textarea").style.fontStyle;
	v = document.querySelector("textarea").style.fontSize;
		console.log(this.textContent+"sssssssssss")
	})
}
for(var i =0;i < b.length;i++){
	b[i].addEventListener("click",function(){
		x = document.querySelector("textarea").style.fontWeight;
		document.querySelector("textarea").style.fontWeight = this.textContent;
		c = document.querySelector("textarea").style.fontStyle;
	v = document.querySelector("textarea").style.fontSize;
		z = document.querySelector("textarea").style.fontFamily;
		console.log(this.textContent+"sssssssssss")
	})
}

for(var i =0;i < s.length;i++){
	s[i].addEventListener("click",function(){
		c = document.querySelector("textarea").style.fontStyle;
		document.querySelector("textarea").style.fontStyle = this.textContent;
		z = document.querySelector("textarea").style.fontFamily;
	v = document.querySelector("textarea").style.fontSize;
		x = document.querySelector("textarea").style.fontWeight;
		console.log(this.textContent+"sssssssssss")
	})
}
