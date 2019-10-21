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
function videoSwitcher(videoPlayerString) {

	let videoPlayer = document.getElementById(videoPlayerString + 'Video');
		

	if (count == 0){
		count = 1;
		videoPlayer.src = "img/video.mp4";
		videoPlayer.currentTime = 43;
		videoPlayer.play();
		
	}
	
	else if (count == 1){
		count = 2;
		videoPlayer.src = "img/video.mp4";
		videoPlayer.currentTime = 52;
		videoPlayer.play();
		
	}
	
	else if (count == 2){
		count = 0;
		videoPlayer.src = "img/video.mp4";
		videoPlayer.currentTime = 116;
		videoPlayer.play();
		
	}
	
}




