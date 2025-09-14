/*window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    switch (event.code) {
      case "ArrowDown":
      case "Numpad2":
      case "KeyS":
        // code for "down arrow" key press.
        handleInput("down");
        break;
      case "ArrowUp":
      case "Numpad8":
      case "KeyW":
        // code for "up arrow" key press.
        handleInput("up");
        break;
      case "ArrowLeft":
      case "Numpad4":
      case "KeyA":
        // code for "left arrow" key press.
        handleInput("left");
        break;
      case "ArrowRight":
      case "Numpad6":
      case "KeyD":
        // code for "right arrow" key press.
        handleInput("right");
        break;
      case "Enter":
      case "Space":
      case "Numpad5":
        // code for "confirm" key press.
        handleInput("confirm");
        break;
      case "KeyL":
      case "KeyT":
        handleInput("target");
        break;
      case "Escape":
        handleInput("escape");
        break;
      case "Digit1":
        handleInput(1);
        break;
      case "Digit2":
        handleInput(2);
        break;
      case "Digit3":
        handleInput(3);
        break;
      case "Digit4":
        handleInput(4);
        break;
      case "Digit5":
        handleInput(5);
        break;
      case "Digit6":
        handleInput(6);
        break;
      case "Digit7":
        handleInput(7);
        break;
      case "Digit8":
        handleInput(8);
        break;
      case "Digit9":
        handleInput(9);
        break;
      case "Digit0":
        handleInput(0);
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true
);
// the last option dispatches the event to the listener first,
// then dispatches event to window
/*
let touchstartX, touchstartY, x_delta, y_delta, numfingers;

window.addEventListener(
  "touchstart",
  function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
  },
  false
);

window.addEventListener(
  "touchend",
  function (event) {
    x_delta = event.changedTouches[0].screenX - touchstartX;
    y_delta = event.changedTouches[0].screenY - touchstartY;
    numfingers = event.targetTouches.length + 1;
    handleGesture();
  },
  false
);*/

window.addEventListener("resize", (event) => {
  document.querySelector(".mapcell.player").scrollIntoView({
    behavior: "instant",
    block: "center",
    container: "nearest",
    inline: "center",
  });
});
/*
function handleGesture() {
  const swipedist = 80;
  if (Math.abs(x_delta) > Math.abs(y_delta) && Math.abs(x_delta) > swipedist) {
    if (x_delta > 0) {
      // swiped right
      handleInput("right");
    }
    if (x_delta < 0) {
      // swiped left
      handleInput("left");
    }
  } else if (
    Math.abs(x_delta) < Math.abs(y_delta) &&
    Math.abs(y_delta) > swipedist
  ) {
    if (y_delta > 0) {
      // swiped down
      handleInput("down");
    }
    if (y_delta < 0) {
      // swiped up
      handleInput("up");
    }
  } else if (x_delta < swipedist * 0.5 && y_delta < swipedist * 0.5) {
    if (numfingers == 1) {
      handleInput("confirm");
    } else if (numfingers == 2) {
      handleInput("escape");
    }
  } else {
  }
}
*/
/*function handleInput(key) {
  let newX = player.x,
    newY = player.y;
  if (key == "up") {
    newY--;
  } else if (key == "right") {
    newX++;
  } else if (key == "down") {
    newY++;
  } else if (key == "left") {
    newX--;
  }
  player.move(newX, newY);
}*/
/*
function updateMap() {
  let mapcontainer = document.querySelector(".mainscreen .mapcontainer");
  let voff =
    Math.round(
      (-player.pos.y * options.cellsize + mapcontainer.offsetHeight / 2) /
        options.cellsize
    ) * options.cellsize;
  let hoff =
    Math.round(
      (-player.pos.x * options.cellsize + mapcontainer.offsetWidth / 2) /
        options.cellsize
    ) * options.cellsize;
  document.querySelectorAll(".layers").forEach((layers) => {
    layers.style.top = voff + "px";
    layers.style.left = hoff + "px";
  });
}*/

function updatePlayer() {
  document.querySelector(".mapcell.player").scrollIntoView({
    behavior: "smooth",
    block: "center",
    container: "nearest",
    inline: "center",
  });
}
/*
function enemyTurn() {
  updateStatus();
  lastdamage = 0;
  // clean actor cells
  interactionMenu.close();
  let states = [
    "nudge-up",
    "nudge-right",
    "nudge-down",
    "nudge-left",
    "pulse",
    "shake",
  ];
  while (states.length > 0) {
    let state = states.shift();
    document.querySelectorAll("." + state).forEach((item) => {
      item.classList.remove(state);
    });
  }

  actors.forEach((actor) => {
    // update status
    actor.status = [];

    let dir;
    if (actor.scared) {
      // move away from player
      if (actor.pos.x < player.pos.x) {
        dir = 3;
      } else if (actor.pos.x > player.pos.x) {
        dir = 1;
      } else if (actor.pos.y < player.pos.y) {
        dir = 0;
      } else {
        dir = 2;
      }
      actor.move(dir);
    } else if (actor.curious) {
      // approach player

      const deltax = Math.abs(actor.pos.x - player.pos.x);
      const deltay = Math.abs(actor.pos.y - player.pos.y);
      const steps = deltax + deltay;
      if (steps <= 1) {
        // next to player
      } else {
        if (actor.sees(player.pos.x, player.pos.y)) {
          // actor can see player and will move towards
          actor.aware = true;
          actor.awareX = player.pos.x;
          actor.awareY = player.pos.y;
          // move to player
          actor.navigate(player.pos.x, player.pos.y);
        } else if (actor.aware) {
          // actor has seen player and will move to last spotted location
          actor.navigate(actor.awareX, actor.awareY);
        }
      }
    }
  });
  playerturn = true;
}
*/
