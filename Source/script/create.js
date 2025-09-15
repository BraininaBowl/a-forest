function start() {
  let message = {};
  switch (player.progress) {
    case 0:
      message = {};
      message.voice = false;
      message.text =
        "A gentle breeze flows through the clearing. Somewhere, a bird sings.";
      addMessage(message);
      message = {};
      message.choices = new Array();
      message.choices[1] = {
        text: "[Continue]",
        action: function () {
          document.querySelector(".mapcell.player").scrollIntoView({
            behavior: "instant",
            block: "center",
            container: "nearest",
            inline: "center",
          });
          document.querySelector(".maplayer").classList.remove("hidden");
          player.progress = 1;
          start();
        },
      };
      addMessage(message);
      break;
    case 1:
      message = {};
      message.voice = false;
      message.text = "The forest looks very inviting today.";
      addMessage(message);
      message = {};
      message.voice = "romantic";
      message.text = "It does.";
      addMessage(message);
      message = {};
      message.choices = new Array();
      message.choices[1] = {
        text: "Let's go!",
        action: function () {
          player.progress = 4;
          start();
        },
      };
      message.choices[2] = {
        text: "[Hesitate]",
        action: function () {
          player.progress = 2;
          start();
        },
      };
      addMessage(message);
      break;
    case 2:
      message = {};
      message.voice = "kid";
      message.text = "Awwww, come on!";
      addMessage(message);
      message = {};
      message.choices = new Array();
      message.choices[1] = {
        text: "Well, all right...",
        action: function () {
          player.progress = 4;
          start();
        },
      };
      message.choices[2] = {
        text: "No. I'm good here.",
        action: function () {
          player.progress = 3;
          start();
        },
      };
      addMessage(message);
      break;
    case 3:
      message = {};
      message.voice = false;
      message.text =
        "You spend the day by your camp. It's quite nice. The fire is warm.";
      addMessage(message);
      message = {};
      message.choices = new Array();
      message.choices[1] = {
        text: "[Continue]",
        action: function () {
          restAtCamp();
        },
      };
      addMessage(message);
      break;
    case 4:
      message = {};
      message.voice = false;
      message.text = "You get up and head into the forest.";
      addMessage(message);
      nextStop();
      break;
  }
}

function theEnd() {
  player.progress = 0;
  player.inventory = [];
  player.seen = {};
  pois_lut_keys.forEach((item) => {
    player.seen[item] = 0;
  });
  let map = new newMap(80, 60);
  map.create();
  renderMap(map);
  start();
}

function nextStop() {
  player.progress += 1;
  let progressTop = 16;
  if (player.progress == progressTop) {
    message = {};
    message.voice = "practical";
    message.text =
      "You know, you've been out here for a while. Maybe it's time to head back to camp?";
    addMessage(message);
  }

  let stops = findPois();
  message = {};
  message.voice = false;
  message.text = "";

  if (stops.n) {
    message.text +=
      "To the north, you " +
      pois_lut[stops.n.type].indication[
        getRandomInt(pois_lut[stops.n.type].indication.length - 1)
      ] +
      ". ";
  }
  if (stops.w) {
    message.text +=
      "In the west, you " +
      pois_lut[stops.w.type].indication[
        getRandomInt(pois_lut[stops.w.type].indication.length - 1)
      ] +
      ". ";
  }
  if (stops.s) {
    message.text +=
      "To the south, you " +
      pois_lut[stops.s.type].indication[
        getRandomInt(pois_lut[stops.s.type].indication.length - 1)
      ] +
      ". ";
  }
  if (stops.e) {
    message.text +=
      "To the east you " +
      pois_lut[stops.e.type].indication[
        getRandomInt(pois_lut[stops.e.type].indication.length - 1)
      ] +
      ". ";
  }
  addMessage(message);

  message = {};
  message.choices = new Array();
  let numchoice = 0;
  if (player.progress >= progressTop) {
    message.choices[numchoice] = {
      text: "[Back to camp]",
      action: function () {
        backToCamp();
      },
    };
    numchoice++;
  }
  if (stops.n) {
    message.choices[numchoice] = getPoiChoice(stops.n, "north");
    numchoice++;
  }
  if (stops.w) {
    message.choices[numchoice] = getPoiChoice(stops.w, "west");
    numchoice++;
  }
  if (stops.s) {
    message.choices[numchoice] = getPoiChoice(stops.s, "south");
    numchoice++;
  }
  if (stops.e) {
    message.choices[numchoice] = getPoiChoice(stops.e, "east");
    numchoice++;
  }
  addMessage(message);
}

function actor(x, y, type) {
  this.status = [];
  this.inventory = [];
  this.addItem = function (item) {
    this.inventory.push(item);
    let message = {};
    message.voice = "gotitem";
    message.text = item;
    addMessage(message);
  };
  this.removeItem = function (item) {
    let removed = false;
    this.inventory = removeDuplicates(this.inventory);
    const index = this.inventory.indexOf(item);
    if (index > -1) {
      this.inventory.splice(index, 1);
      removed = true;
    }
    if (removed) {
      let message = {};
      message.voice = "lostitem";
      message.text = item;
      addMessage(message);
    }
  };

  if (type == "player") {
    this.id = "player";
    this.progress = 0;
    this.seen = {};
    pois_lut_keys.forEach((item) => {
      this.seen[item] = 0;
    });
  } else {
    this.id = actors.length + 1;
  }

  this.visible = false;
  this.pos = {};
  this.pos.x = x;
  this.pos.y = y;
  this.type = type;

  this.sees = function (x, y, usecover = false) {
    return lineOfSight(this.pos.x, this.pos.y, x, y, usecover);
  };
  this.navigate = function (x, y) {
    let direction = dijkstra(this.pos.x, this.pos.y, x, y);
    /*this.move(direction);*/
  };
  this.move = function (x, y) {
    map.setCell(this.x, this.y, null);
    document
      .querySelectorAll(".mapcell." + type)
      .forEach((item) => item.remove());
    this.x = x;
    this.y = y;
    map.setCell(this.x, this.y, this.type);

    let mapcell = document.createElement("div");
    mapcell.classList = "cell mapcell " + type + " cell_" + x + "_" + y + " ";
    mapcell.innerHTML = items[type].icon;
    mapcell.style.width = options.cellsize + "px";
    mapcell.style.height = options.cellsize + "px";
    mapcell.style.left = x * options.cellsize + "px";
    mapcell.style.top = y * options.cellsize + "px";
    mapcell.style.color = "var(" + items[type].color + ")";
    document.querySelector(".maplayer").appendChild(mapcell);

    document.querySelector(".mapcell.player").scrollIntoView({
      behavior: "smooth",
      block: "center",
      container: "nearest",
      inline: "center",
    });

    /*switch (dir) {
      case 0:
        //move up
        newX = this.pos.x;
        newY = this.pos.y - 1;
        break;
      case 1:
        //move right
        newX = this.pos.x + 1;
        newY = this.pos.y;
        break;
      case 2:
        //move down
        newX = this.pos.x;
        newY = this.pos.y + 1;
        break;
      case 3:
        //move left
        newX = this.pos.x - 1;
        newY = this.pos.y;
        break;
    }*/

    /*actors[this.id] = this;

    return this;*/
  };
}

function newMap(width, height) {
  this.width = width;
  this.height = height;
  this.content = {};
  this.pois = [];
  this.drawn = false;

  this.setCell = function (x, y, value) {
    if (this.drawn) {
      if (value) {
      } else {
      }
    }
    let cellID = x * this.width + y;
    this.content[cellID] = value;
  };
  this.checkCell = function (x, y) {
    let cellID = x * this.width + y;
    return this.content[cellID];
  };

  this.create = function () {
    //water
    this.addStream = function () {
      let stream = true;
      let dir = getRandomInt(3);
      let streamwidth = getRandomInt(3) + 1;
      let x, y, streamwidth_offset_1, streamwidth_offset_2;

      this.update = function () {
        // Bend in river
        let bend = getRandomInt(60);
        if (bend == 0) {
          dir++;
          if (dir > 3) {
            dir = 0;
          }
        } else if (bend == 1) {
          dir--;
          if (dir < 0) {
            dir = 3;
          }
        }

        // width of stream
        let random = getRandomInt(4);
        if (random == 0 && streamwidth > 0) {
          streamwidth--;
        } else if (random == 1 && streamwidth < 6) {
          streamwidth++;
        }
        streamwidth_offset_1 = Math.floor(streamwidth / 2);
        streamwidth_offset_2 = Math.ceil(streamwidth / 2);

        // to side
        random = getRandomInt(4);
        if (random == 0) {
          if (dir == 0 || dir == 2) {
            x--;
          } else if (dir == 1 || dir == 3) {
            y--;
          }
        } else if (random == 1) {
          if (dir == 0 || dir == 2) {
            x++;
          } else if (dir == 1 || dir == 3) {
            y++;
          }
        }
      };

      if (dir == 0) {
        y = -1;
        x = getRandomInt(width - 2) + 1;
      } else if (dir == 1) {
        x = -1;
        y = getRandomInt(height - 2) + 1;
      } else if (dir == 2) {
        y = height + 1;
        x = getRandomInt(width - 2) + 1;
      } else if (dir == 3) {
        x = width + 1;
        y = getRandomInt(height - 2) + 1;
      }

      while (stream) {
        this.update();
        if (dir == 0 && y < height) {
          y++;
          for (
            let ix = -streamwidth_offset_1;
            ix < streamwidth_offset_2;
            ix++
          ) {
            this.setCell(x + ix, y, "water");
          }
        } else if (dir == 1 && x < width) {
          x++;
          for (
            let iy = -streamwidth_offset_1;
            iy < streamwidth_offset_2;
            iy++
          ) {
            this.setCell(x, y + iy, "water");
          }
        } else if (dir == 2 && y > 0) {
          y--;
          for (
            let ix = -streamwidth_offset_1;
            ix < streamwidth_offset_2;
            ix++
          ) {
            this.setCell(x + ix, y, "water");
          }
        } else if (dir == 3 && x > 0) {
          x--;
          for (
            let iy = -streamwidth_offset_1;
            iy < streamwidth_offset_2;
            iy++
          ) {
            this.setCell(x, y + iy, "water");
          }
        } else {
          stream = false;
        }
      }
    };
    //paths
    this.addPath = function (x, y, length, task) {
      this.update = function () {
        if (this.checkCell(x, y) == "tree") {
          length--;
          if (task == "clear") {
            this.setCell(x, y, null);
          } else if (task == "plant") {
            this.setCell(x, y, "tree");
          }
        }
      };
      while (length > 0) {
        let dir = getRandomInt(3);
        if (dir == 0 && y > 1) {
          y--;
          this.update();
        } else if (dir == 1 && x < width - 1) {
          x++;
          this.update();
        } else if (dir == 2 && y < height - 1) {
          y++;
          this.update();
        } else if (dir == 3 && x > 1) {
          x--;
          this.update();
        }
      }
    };
    //camp
    this.addCamp = function (x, y) {
      this.addPath(x, y, getRandomInt(10) + 60, "clear");
      this.addPath(x, y, getRandomInt(10) + 60, "clear");
      this.addPath(x, y, getRandomInt(10) + 60, "clear");

      for (let ix = 0; ix < 5; ix++) {
        for (let iy = 0; iy < 2; iy++) {
          this.setCell(x - 2 + ix, y - 1 + iy, "camp_" + ix + "_" + iy);
        }
      }
      for (ix = 0; ix < 5; ix++) {
        for (iy = 1; iy < 3; iy++) {
          this.setCell(x - 2 + ix, y + iy, null);
        }
      }
      this.setCell(x - 3, y + 1, "smoke");
      this.setCell(x - 3, y + 2, "fire");
      player.x = x - 1;
      player.y = y + 2;
      this.setCell(player.x, player.y, player.type);
    };
    this.drawRuin = function (x, y) {
      // check for camp
      if (
        x > width / 2 - 10 &&
        x < width / 2 + 10 &&
        y > height / 2 - 10 &&
        y < height / 2 + 10
      ) {
        y = y - 16;
        x = x + getRandomInt(8) - 4;
      }
      for (let ix = 0; ix < 5; ix++) {
        for (let iy = 0; iy < 2; iy++) {
          this.setCell(x - 2 + ix, y - 2 + iy, "ruin_" + ix + "_" + iy);
        }
      }
      this.setCell(x, y, null);
      return [x, y];
    };
    //points of interests
    this.addPoi = function () {
      let poi = {};
      let placed = false;
      let tryX, tryY, tryCell;
      let tries = 0;
      while (placed == false) {
        tryX = getRandomInt(width - 16) + 8;
        tryY = getRandomInt(height - 16) + 8;
        tryCell = this.checkCell(tryX, tryY);
        if (tryCell != "tree" && tryCell != "water" && tryCell != undefined) {
          // Not available
        } else {
          poi.x = tryX;
          poi.y = tryY;
          placed = true;
        }
        // Emergency exit
        tries++;
        if (tries > 100) {
          return false;
        }
      }

      let poi_template =
        pois_lut[pois_lut_keys[getRandomInt(pois_lut_keys.length)]];
      if (poi_template == undefined) {
        return false;
      } else if (
        poi_template.id == "waterfall" ||
        poi_template.id == "stream"
      ) {
        this.setCell(poi.x, poi.y, null);
        this.setCell(poi.x, poi.y - 1, "water");
        this.setCell(poi.x - 1, poi.y - 1, "water");
        this.setCell(poi.x + 1, poi.y - 1, "water");
        this.setCell(poi.x, poi.y - 2, "water");
        poi.type = poi_template.id;
        poi.id = "poi" + poi.x + "-" + poi.y;
        this.pois[poi.id] = poi;
        return true;
      } else if (
        (poi_template.req && poi_template.req != tryCell) ||
        (poi_template.exc && poi_template.exc == tryCell)
      ) {
        //chosen poi doesn't fit here
        return false;
      } else {
        poi.type = poi_template.id;
        if (poi.type == "ruin") {
          let location = this.drawRuin(poi.x, poi.y);
          poi.x = location[0];
          poi.y = location[1];
        }
        poi.id = "poi" + poi.x + "-" + poi.y;
        this.pois[poi.id] = poi;
        this.setCell(poi.x, poi.y, null);
        return true;
      }
    };

    //plant grid of trees
    for (let x = 0; x <= width; x++) {
      for (let y = 0; y <= height; y++) {
        if (getRandomInt(6) > 0) {
          this.setCell(x, y, "tree");
        }
      }
    }

    let iteration = Math.ceil((width * height) / 3000);
    for (let i = 0; i < iteration; i++) {
      this.addStream();
      for (let i2 = 0; i2 < 3; i2++) {
        this.addPath(
          getRandomInt(width),
          getRandomInt(height),
          getRandomInt(40) + 40,
          "clear"
        );
      }
    }
    this.addCamp(width / 2, height / 2);
    let targetPois = limit(Math.ceil((width * height) / 300), 40, 9999);
    let placedPois = 0;
    while (placedPois < targetPois) {
      if (this.addPoi()) {
        placedPois++;
      }
    }
  };

  return this;
}
