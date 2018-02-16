/*

	SLIDESHOW 0.01;

*/

var slides;

function loadSlideshow(name){
	slides = document.getElementsByClassName("slide")
	var marge = 10
	var width = document.getElementById(name).offsetWidth + marge

	for (var i = 1; i < slides.length; i++) {
		slides[i].style.left = i*width + "px"
		// par rapport à la precedente taille d'image
		// console.log(i);
		// slides[i].style.left = slides[i-1].childNodes[1].width + slides[i-1].offsetLeft + "px"
		// console.log("offset "+slides[i].offsetLeft);
	}



	// console.log(document.getElementById("slides").scrollLeft);
	// setTimeout(function() { document.getElementById("slides").scrollLeft = 0; }, 1);

}

var posSlide = 0;

function previous(){
	previous(30);
}

function previous(speed){
	if (posSlide > 0){
		posSlide --;
	}else{
		posSlide = 0
	}
	moveTo("slide"+posSlide,speed);
}

function next(){
	next(30)
}

function next(speed){
	if (posSlide < slides.length-1){
		posSlide ++;
	}else{
		posSlide = slides.length-1
	}
	moveTo("slide"+posSlide,speed);

}

function jumpToSlide(num){
		var target = document.getElementById("slide"+num).offsetLeft
		// console.log(num)
		// console.log(target)
		// document.getElementById("slides").scrollLeft = target
		// console.log(document.getElementById("slides").scrollLeft);
		document.getElementById("slides").scrollLeft = target
}

function jumpTo(anchor){
		var target = document.getElementById(anchor).offsetLeft
		// console.log(anchor+"			"+target);
		// document.getElementById("slides").scroll({
		//   top: 0,
		//   left: target,
		//   behavior: 'smooth'
		// });

		document.getElementById("slides").scrollLeft = target
		// document.getElementById("slides").scrollTo(0,target);
    // window.location.href = "#"+anchor;
		/*
*/
}

function moveTo(anchor, speed){
		var target = document.getElementById(anchor).offsetLeft

		//document.getElementById("slides").scrollLeft = target

		var id = setInterval(frame, 10)
		// console.log("target ="+target);
		// console.log("position ="+document.getElementById("slides").scrollLeft);

		function frame(){
			// console.log("y ="+document.getElementById("slides").scrollLeft);
			if(document.getElementById("slides").scrollLeft + speed < target){
				document.getElementById("slides").scrollLeft += speed
			}else if(document.getElementById("slides").scrollLeft - speed > target){
				document.getElementById("slides").scrollLeft -= speed
			}else{
				document.getElementById("slides").scrollLeft = target
			}

			if(document.getElementById("slides").scrollLeft == target){
				clearInterval(id);
			}
		}
}
