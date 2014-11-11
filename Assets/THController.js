#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(other: Collider2D) {
	Debug.Log(other);
}

function OnCollisionEnter2D(coll: Collision2D) {
	
	Debug.Log(coll);
}