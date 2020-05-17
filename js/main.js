function muncul(){
	var nama = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if ((nama == "inzaghi") && (password == "abc123")) {
		window.alert("Berhasil Login");
	} else {
		window.alert("Gagal Login");
	}
}