let actors = new Array();
let player = new actor(48, 48, "player");
let messages = new Array();
let processingMessages = false;
// OPTIONS
let options = {};
options.cellsize = 20;

document.body.style.fontSize = options.cellsize * 0.75 + "px";
document.body.style.lineHeight = options.cellsize + "px";

let map = new newMap(80, 60);
map.create();
renderMap(map);
start();
document.querySelector(".mapcell.player").scrollIntoView({
  behavior: "instant",
  block: "center",
  container: "nearest",
  inline: "center",
});
//nextStop();

/*drawTitleScreen();*/
