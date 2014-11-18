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
             Debug.Log(newPosition.x);
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

function order(other : Collider2D){
	var pos = this.transform.position;
	var posX = other.transform.position;
	
	//pos.y += other.transform.position.y;
	
	if(posX != null){	
		//rotate the axis	
		//var newX = pos.x * Mathf.Cos(-45) - pos.y * Mathf.Sin(-45);
		var newY = pos.x * Mathf.Sin(-45) + pos.y * Mathf.Cos(-45);
		
		//var newXOther = posX.x * Mathf.Cos(-45) - posX.y * Mathf.Sin(-45);
		var newYOther = posX.x * Mathf.Sin(-45) + posX.y * Mathf.Cos(-45);
		
		if(newY < newYOther){
			this.renderer.sortingOrder = 4;
			Debug.Log("up");
		}
		else if(newY > newYOther){
			this.renderer.sortingOrder = 2;
			Debug.Log("down");
		}
	}
}

function OnTriggerEnter2D(other : Collider2D) {
	order(other);
}

function OnTriggerStay2D(other : Collider2D) {
	order(other);
}


