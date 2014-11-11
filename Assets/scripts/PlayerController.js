#pragma strict

var limitMove : float = 11;
var newPosition : Vector3;
var speed : float = 10f;

function Start () {
	  newPosition = transform.position;
}

function Update () {
 	if (Input.GetMouseButtonDown(0)) {
             newPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
             newPosition.z = transform.position.z;
    }
    transform.position = Vector3.MoveTowards(transform.position, newPosition, speed * Time.deltaTime);
	if(Input.GetKey(KeyCode.UpArrow)){
		moveUp(0.1);
	}
	if(Input.GetKey(KeyCode.DownArrow)){
		moveDown(0.1);
	}
	if(Input.GetKey(KeyCode.LeftArrow)){
		moveLeft(0.1);
	}
	if(Input.GetKey(KeyCode.RightArrow)){
		moveRight(0.1);
	}
	order();
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

function moveUp(val : float){
	move(-val,val);
}

function moveDown(val : float){
	move(val,-val);
}

function moveLeft(val : float){
	move(-val,-val);
}

function moveRight(val : float){
	move(val,val);
}

function order(){
	var pos = this.transform.position;
	var posX = this.transform.position;
	
	if(posX != null){	
		var rangeX = Mathf.Abs(pos.x - posX.x);
		var rangeY = Mathf.Abs(pos.y - posX.y);
		//TODO rotate the axis
		
		if(pos.y < posX.y){
			this.renderer.sortingOrder = 4;
			Debug.Log("ice kak 44 up");
		}
		else if(pos.y > posX.y){
			this.renderer.sortingOrder = 2;
			Debug.Log("ice kak 22 down");
		}
	}
}

function OnTriggerEnter2D(other: Collider2D) {
	Debug.Log(other);
}
