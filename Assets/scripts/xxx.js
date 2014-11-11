#pragma strict

var x : GameObject;

function Start () {
}

function Update () {
	Order();
}

function Order(){
	var pos = this.transform.position;
	var posX = this.transform.position;
	
	var rangeX = Mathf.Abs(pos.x - posX.x);
	var rangeY = Mathf.Abs(pos.y - posX.y);
	//TODO rotate the axis
	
	if(pos.y < posX.y){
		this.renderer.sortingOrder = 4;
		Debug.Log("ice kak 44 up");
	}
	else{
		this.renderer.sortingOrder = 2;
		Debug.Log("ice kak 22 down");
	}
}