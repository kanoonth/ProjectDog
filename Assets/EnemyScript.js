#pragma strict

var hp : float;
var walkSpeed : float;
var atkSpeed : float;
var atkPoint : float;
var target : GameObject;
var atkRange : float;

function Start () {
	this.hp = 100.0;
	this.walkSpeed = 2.0;
	this.atkPoint = 10;
	this.atkRange = 1.0;
	this.atkSpeed = 1.0;
}

function Update () {
	action();
}

function action (){
	if( targetInRange() ){
		attack();
	}
	else{
		move();
	}
}

function targetInRange (){
	var pos = this.transform.position;
	var targetPos = this.target.transform.position;
	
	var rangeX = Mathf.Abs( pos.x - targetPos.x );
	var rangeY = Mathf.Abs( pos.y - targetPos.y );
	
	if( rangeX <= atkRange && rangeY <= atkRange ){
		return true;
	}
	return false;
}


function move (){
	var pos = this.transform.position;
	var targetPos = this.target.transform.position;
	
	var rangeX = Mathf.Abs( pos.x - targetPos.x );
	var rangeY = Mathf.Abs( pos.y - targetPos.y );
	var range = Mathf.Sqrt( rangeX * rangeX + rangeY * rangeY );
	
	var speedX = rangeX / range * walkSpeed;
	var speedY = rangeY / range * walkSpeed;
	
	if( pos.x < targetPos.x ){
		this.rigidbody2D.velocity.x = speedX;
	}
	else{
		this.rigidbody2D.velocity.x = -speedX;
	}
	
	if( pos.y < targetPos.y ){
		this.rigidbody2D.velocity.y = speedY;
	}
	else{
		this.rigidbody2D.velocity.y = -speedY;
	}
}

function death (){
	GameObject.Destroy(this);
}

function attack (){
	this.rigidbody2D.velocity.x = 0;
	this.rigidbody2D.velocity.y = 0;
	//if at target
	//TODO wait for target to call
	//target.damaged(atkPoint);
	//perform attack animation
	Debug.Log("ATTACK!");
}

function damaged (damage : float){
	this.hp -= damage;
	if( this.hp <= 0 ){
		this.death();
	}
}

function drop (){
	//drop item
	//TODO implement this
}