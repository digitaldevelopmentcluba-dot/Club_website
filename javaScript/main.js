function moveAbleJS(){
	// let - variable is only accessible within the block, statement, or expression where it is declared.
	let newX = 0, newY = 0, startX = 0, startY = 0, moveObjectY = 0, moveObjectX = 0;
	const moveAbleJS = document.getElementById('moveAbleJS');// the class moveAbleCSS is also needed 
	moveAbleJS.addEventListener('mousedown', mouseDown);
	//
	function mouseDown(e){
		startX = e.clientX;
		startY = e.clientY;
		//
		document.addEventListener('mousemove', mouseMove);
		document.addEventListener('mouseup', mouseUp);
	}
	function mouseMove(e){
		newX = startX - e.clientX
		newY = startY - e.clientY
		//
		startX = e.clientX;
		startY = e.clientY;
		//
		moveObjectY = moveAbleJS.offsetTop;
		moveObJectX = moveAbleJS.offsetLeft;
		//
		moveAbleJS.style.top = (startY) + 'px';
		moveAbleJS.style.left = (startX) + 'px';
		//
		console.log({newX, newY});
		console.log({startX, startY});
	}
	function mouseUp(e){
		document.removeEventListener('mousemove', mouseMove);
	}
}
function test(){
	console.log("test");
}
//moveAbleJS();
//test();
