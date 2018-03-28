var numsq=6;
var colors = colorGenerator(numsq);
var h1 = document.querySelector("h1");
var col = document.querySelector("#col");
var but = document.querySelector("#but")
var pick = randomCol();
var easy= document.querySelector("#easy");
var hard= document.querySelector("#hard");
col.textContent=pick;
var squares= document.querySelectorAll(".sq");
var disp = document.querySelector("#disp");



easy.addEventListener("click",function(){
	disp.textContent="";
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numsq=3;
	colors=colorGenerator(numsq);
	 pick = randomCol();
	col.textContent=pick;
	for(var i=0; i<6; i++){
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else
			squares[i].style.display="none";
	}
	h1.style.backgroundColor= "#6851a5";
})

hard.addEventListener("click",function(){
	disp.textContent="";
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numsq=6;
	colors=colorGenerator(numsq);
	 pick = randomCol();
	col.textContent=pick;
	for(var i=0; i<6; i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
	h1.style.backgroundColor= "#6851a5";
})

but.addEventListener("click",function(){
	this.textContent="New Game";
	colors = colorGenerator(numsq);
	pick = randomCol();
	col.textContent=pick;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor= "#6851a5";
	disp.textContent="";
})
for (var i = 0; i <squares.length; i++) {
	 squares[i].style.backgroundColor=colors[i];
	 squares[i].addEventListener("click",function(){
	 	var c = this.style.backgroundColor;
	 	if(c!=pick){
	 		this.style.backgroundColor = "rgb(54, 61, 71)";
	 		
	 		disp.textContent="try again";

	 	}
	 	else{
	 		changeColor(pick);
	 		disp.textContent="correct!!!";
	 		h1.style.backgroundColor= pick;
	 		but.textContent="Play Again"
	 	}
	 })
}

function changeColor(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}			 

function randomCol(){
	var x = Math.floor(Math.random()*colors.length);

	return colors[x];
}

function colorGenerator(num){
	var arr= [ ];
	for (var i = 0; i < num; i++) {
		arr.push(rancolor());
	}	
	return arr;
}

function rancolor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return  "rgb("+r+", "+g+", "+b+")";
}