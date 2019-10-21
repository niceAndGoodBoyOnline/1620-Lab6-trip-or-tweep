let door1 = document.getElementById('door1Video');
let door2 = document.getElementById('door2Video');
let door3 = document.getElementById('door3Video');


door1.addEventListener('click',function(){
    door1.play(); 

},false);

door2.addEventListener('click',function(){
    door2.play(); 

},false);


door3.addEventListener('click',function(){
    door3.play(); 

},false);


function makeOrange(){
	document.getElementById('welcome-para').style = "color: orange;"
}


function makeGrey(){
	document.getElementById('welcome-para').style = "color: grey;"
	
}

function makeCyan(){
	document.getElementById('welcome-para').style = "color: cyan"
}

let count = 0;

//Hello, I see you are reading my code. I forced you to see both nasty spooky tricks before
//you could see the lovely meaningful naming conventions. Happy Halloween, Amir/Greg. I love u
function videoSwitcher() {
	
	if (count == 0){
		count += 1;
		door1.src = "img/video.mp4";
		door1.currentTime = 42;
		door1.play();
		
	}
	
	else if (count == 1){
		count += 1;
		door2.src = "img/video.mp4";
		door2.currentTime = 52;
		door2.play();
		
	}
	
	else if (count == 2){
		count = 0;
		door3.src = "img/video.mp4";
		door3.currentTime = 116;
		door3.play();
		
	}
}



