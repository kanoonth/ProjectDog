#pragma strict

// this just for debugging. -> Should be deleted later.
var currentPlayer: Player;

var key: String = "f3R5Xsl5*3z.Ub/_S35Pd";

function Start () {
	Debug.Log("Persistence is ready.");
	
	var player: Player = LoadPlayer();
	currentPlayer = player;
	Debug.Log(player.name);
	
//	PlayerPrefs.SetString("crypt", key);
//	PlayerPrefs.Save();
}

function LoadPlayer() {

	if ( ! PlayerPrefs.HasKey("name")) {
		Debug.Log("Generate new data");
		var samplePlayer: Player = new Player();
		samplePlayer.name = "mapfap#" + Random.value;
		SavePlayer(samplePlayer);
	}
	
	var player: Player = new Player();
	player.name = PlayerPrefs.GetString("name");
	
	if (! Validate(player, PlayerPrefs.GetFloat("cryptx"))) {
		player = new Player();
	}
	
	return player;
}

function OnGUI() {
	GUI.Label(Rect(10, 10, 100, 20), currentPlayer.name);
}

function SavePlayer(player: Player) {
	PlayerPrefs.SetString("name", player.name);
	PlayerPrefs.SetFloat("cryptx", player.name.length);
	PlayerPrefs.Save();
}

function Validate(player: Player, checksum: float) {
	return player.name.length == checksum;
}
