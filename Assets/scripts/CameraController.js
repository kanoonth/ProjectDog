#pragma strict

var limitMove : float = 11;
var limitZoomIn : float = 4;
var limitZoomOut : float = 12;

function Start () {
	camera.orthographicSize = limitZoomOut;
}

function Update () {
	if(Input.GetKey(KeyCode.W)){
		CameraMoveUp(1);
	}
	if(Input.GetKey(KeyCode.S)){
		CameraMoveDown(1);
	}
	if(Input.GetKey(KeyCode.A)){
		CameraMoveLeft(1);
	}
	if(Input.GetKey(KeyCode.D)){
		CameraMoveRight(1);
	}
	if(Input.GetKey(KeyCode.M)){
		CameraZoomIn(1);
	}
	if(Input.GetKey(KeyCode.N)){
		CameraZoomOut(1);
	}
}

function checkLimit(x2 : float,y2 : float){
	if(transform.position.x + x2 > limitMove || transform.position.y + y2 > limitMove 
	|| transform.position.x + x2 < -limitMove || transform.position.y + y2 < -limitMove){
		return false;
	}
	return true;
}

function move(x2 : float,y2 : float){
	if(checkLimit(x2,y2)){
		transform.position.x += x2;
		transform.position.y += y2;
	}
}

function CameraMoveUp(val : float){
	move(-val,val);
}

function CameraMoveDown(val : float){
	move(val,-val);
}

function CameraMoveLeft(val : float){
	move(-val,-val);
}

function CameraMoveRight(val : float){
	move(val,val);
}

function CameraZoomIn(val : float){
	if(camera.orthographicSize - val >= limitZoomIn)
		camera.orthographicSize -= val;
}

function CameraZoomOut(val : float){
	if(camera.orthographicSize + val <= limitZoomOut)
		camera.orthographicSize += val;
}