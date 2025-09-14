function testMessage() {
  let message = {};
  //message.voice = "practical";
  message.text = "Testing testing. One. Two. Three";
  message.choices = new Array();
  message.choices[1] = {
    text: "Test 1",
    action: function () {
      testMessage();
    },
  };
  writeToLog(message);
}

function runEvents() {
  if (events.length > 0) {
    events[0]();
    events.shift();
    runEvents();
  }
}

function findPois() {
  let pois_north = new Array();
  let pois_south = new Array();
  let pois_west = new Array();
  let pois_east = new Array();
  //Sort all pois relative to the player
  map.pois.forEach((item) => {
    let rel_x = Math.abs(player.x - item.x);
    let rel_y = Math.abs(player.y - item.y);
    if (rel_x < rel_y) {
      //east or west
      if (player.x > item.x) {
        // west
        pois_west[rel_x + rel_y] = item.type;
      } else if (player.x < item.x) {
        // east
        pois_east[rel_x + rel_y] = item.type;
      }
    } else {
      //north or south
      if (player.y > item.y) {
        // north
        pois_north[rel_x + rel_y] = item.type;
      } else if (player.y < item.y) {
        // south
        pois_south[rel_x + rel_y] = item.type;
      }
    }
  });
  return {
    n: pois_north.find((x) => x !== undefined),
    s: pois_south.find((x) => x !== undefined),
    e: pois_east.find((x) => x !== undefined),
    w: pois_west.find((x) => x !== undefined),
  };
}

function removeActiveLinks() {
  document.querySelectorAll(".active_link").forEach((item) => {
    //item.classList.remove("active_link");
    //item.replaceWith(item.cloneNode(true))
    item.remove();
  });
}

function lineOfSight(x1, y1, x2, y2, usecover = false) {
  const points = bresenham(x1, y1, x2, y2);
  let result = true;
  points.forEach((item) => {
    let square = map.readMap(item.x, item.y);
    if (square == undefined || square.passable == false) {
      result = false;
    }
    if (
      usecover &&
      !(item.x == x1 && item.y == y1) &&
      !(item.x == x2 && item.y == y2) &&
      map.content(item.x, item.y) != false &&
      map.content(item.x, item.y) != "pass" &&
      map.content(item.x, item.y) != "player"
    ) {
      result = false;
    }
  });
  return result;
}

function cloneTable(data) {
  "use strict";
  return JSON.parse(JSON.stringify(data));
}

function getDir(x1, y1, x2, y2) {
  if (y1 > y2) {
    return 0;
  } else if (x1 < x2) {
    return 1;
  } else if (y1 < y2) {
    return 2;
  } else if (x1 > x2) {
    return 3;
  }
}

function capitalize(sentence) {
  return sentence.substring(0, 1).toUpperCase() + sentence.substring(1);
}

function numtotext(num) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];
  if (num <= 20) {
    return numbers[num];
  } else {
    return num;
  }
}

function suffix(number) {
  let tenths = number % 10,
    hundreds = number % 100;
  if (tenths == 1 && hundreds != 11) {
    return number + "st";
  }
  if (tenths == 2 && hundreds != 12) {
    return number + "nd";
  }
  if (tenths == 3 && hundreds != 13) {
    return number + "rd";
  }
  return number + "th";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const removeDuplicates = (arr) => [...new Set(arr)];

function limit(val, min, max) {
  if (val < min) {
    return min;
  } else if (val > max) {
    return max;
  } else {
    return val;
  }
}

function execute(code) {
  setTimeout(code, 0);
}

function wrap(val, min, max) {
  while (val < min) {
    val += max;
  }
  while (val > max) {
    val -= max;
  }
  return val;
}

function dijkstra(source_x, source_y, dest_x, dest_y) {
  let queue = [];
  let dijkstramap = {};
  item = {
    x: dest_x,
    y: dest_y,
    val: 0,
  };
  queue.push(item);

  function testItem(x, y, val) {
    if (map.passable(x, y)) {
      if (dijkstramap[x]) {
        if (dijkstramap[x][y]) {
          if (dijkstramap[x][y] > val) {
            dijkstramap[x][y] = val;
            item = {
              x: x,
              y: y,
              val: val,
            };
            queue.push(item);
          }
        } else {
          dijkstramap[x][y] = val + 1;
          item = {
            x: x,
            y: y,
            val: val,
          };
          queue.push(item);
        }
      } else {
        dijkstramap[x] = {};
        dijkstramap[x][y] = val + 1;
        item = {
          x: x,
          y: y,
          val: val,
        };
        queue.push(item);
      }
    }
  }
  function readDijkstra(x, y) {
    if (dijkstramap[x]) {
      if (dijkstramap[x][y]) {
        return dijkstramap[x][y];
      } else {
        return 999999999;
      }
    } else {
      return 999999999;
    }
  }
  function compareByVal(a, b) {
    return a.val - b.val;
  }

  while (queue.length > 0) {
    let current = queue.shift();
    if (source_x == current.x && source_y == current.y) {
      // target reached
    } else {
      testItem(current.x - 1, current.y, current.val + 1);
      testItem(current.x + 1, current.y, current.val + 1);
      testItem(current.x, current.y - 1, current.val + 1);
      testItem(current.x, current.y + 1, current.val + 1);
    }
  }

  // sort results
  let results = [
    {
      dir: 0,
      val: readDijkstra(source_x, source_y - 1),
    },
    {
      dir: 1,
      val: readDijkstra(source_x + 1, source_y),
    },
    {
      dir: 2,
      val: readDijkstra(source_x, source_y + 1),
    },
    {
      dir: 3,
      val: readDijkstra(source_x - 1, source_y),
    },
  ];

  results.sort(compareByVal);
  return results[0].dir;
}

function closestEmpty(actor) {
  //const index = x + y * map.width;
  // x + y * map.width

  let source_x = actor.pos.x;
  let source_y = actor.pos.y;
  let queue = [];
  let dijkstramap = {};
  item = {
    x: source_x,
    y: source_y,
    val: 0,
  };
  queue.push(item);

  function testItem(x, y, val) {
    if (map.readMap(x, y) && map.readMap(x, y).passable) {
      const index = x + y * map.width;
      if (dijkstramap[index]) {
        if (dijkstramap[index].val > val) {
          dijkstramap[index] = { x: x, y: y, val: val };
          item = {
            x: x,
            y: y,
            val: val + 1,
          };
          queue.push(item);
        }
      } else {
        dijkstramap[index] = { x: x, y: y, val: val + 1 };
        item = {
          x: x,
          y: y,
          val: val + 1,
        };
        queue.push(item);
      }
    }
  }
  function readDijkstra(x, y) {
    const index = x + y * map.width;
    if (dijkstramap[index]) {
      return dijkstramap[index];
    } else {
      return 999999999;
    }
  }

  let results = [];
  while (queue.length > 0) {
    let current = queue.shift();
    if (
      map.content(current.x, current.y) == false ||
      map.content(current.x, current.y) == "pass"
    ) {
      // target reached
      results.push(readDijkstra(current.x, current.y));
    } else {
      testItem(current.x - 1, current.y, current.val + 1);
      testItem(current.x + 1, current.y, current.val + 1);
      testItem(current.x, current.y - 1, current.val + 1);
      testItem(current.x, current.y + 1, current.val + 1);
    }
  }

  // sort results

  function compareByVal(a, b) {
    return a.val - b.val;
  }

  if (results.length > 0) {
    results.sort(compareByVal);
    return results[0];
  }
}

function bresenham(x0, y0, x1, y1) {
  let points = [];
  let deltax = x1 - x0;
  let deltay = y1 - y0;
  let stepx = Math.sign(deltax);
  let stepy = Math.sign(deltay);
  deltax = Math.abs(deltax);
  deltay = Math.abs(deltay);

  let diff = deltax - deltay;

  while (true) {
    if (x0 === x1 && y0 === y1) {
      break;
    }

    points.push({ x: x0, y: y0 });

    let nextstep = 2 * diff;

    if (nextstep > -deltay) {
      diff -= deltay;
      x0 += stepx;
    }

    if (nextstep < deltax) {
      diff += deltax;
      y0 += stepy;
    }
  }

  return points;
}
