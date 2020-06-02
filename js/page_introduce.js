function yukkuribon(name1){
	name1.animate([{opacity: '0'}, {opacity: '1'}], 1500);
}

function kinnikubutton(){
	var kinniku = document.getElementById("popup_kinniku");
	var kendo = document.getElementById("popup_kendo");
	var game = document.getElementById("popup_game");
	var idkendo = document.getElementById("kendou");
	var idgame = document.getElementById("game");
	//== と=の違いに注意！！
	if(kinniku.style.display=="none"){
		yukkuribon(kinniku, idkendo, idgame);
		kinniku.style.display="block";
		kendo.style.display="none";
		game.style.display="none";
		idkendo.style.display="none";
		idgame.style.display="none";
	}else{
		kinniku.style.display="none";
	}
}

function kendobutton(){
	var kinniku = document.getElementById("popup_kinniku");
	var kendo = document.getElementById("popup_kendo");
	var game = document.getElementById("popup_game");
	//== と=の違いに注意！！
	if(kendo.style.display=="none"){
		yukkuribon(kendo);
		kinniku.style.display="none";
		kendo.style.display="block";
		game.style.display="none"
	}else{
		kendo.style.display="none";
	}
}

function gamebutton(){
	var kinniku = document.getElementById("popup_kinniku");
	var kendo = document.getElementById("popup_kendo");
	var game = document.getElementById("popup_game");
	//== と=の違いに注意！！
	if(game.style.display=="none"){
		yukkuribon(game);
		kinniku.style.display="none";
		kendo.style.display="none";
		game.style.display="block"
	}else{
		game.style.display="none";
	}
}