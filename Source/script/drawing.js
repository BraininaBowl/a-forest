function renderMap(map) {
  const width = map.width;
  const height = map.height;

  let mapcontainer = document.querySelector(".mapcontainer");
  let maplayer = document.createElement("div");
  maplayer.classList = "maplayer layer hidden";
  maplayer.style.width = options.cellsize * width + "px";
  maplayer.style.height = options.cellsize * height + "px";

  for (let x = 0; x <= width; x++) {
    for (let y = 0; y <= height; y++) {
      let item = map.checkCell(x, y);
      if (item != undefined) {
        let mapcell = document.createElement("div");
        mapcell.classList = "cell mapcell " + item + " ";
        mapcell.innerHTML = items[item].icon;
        mapcell.style.width = options.cellsize + "px";
        mapcell.style.height = options.cellsize + "px";
        mapcell.style.left = x * options.cellsize + "px";
        mapcell.style.top = y * options.cellsize + "px";
        mapcell.style.color = "var(" + items[item].color + ")";
        maplayer.appendChild(mapcell);
      }
    }
  }

  mapcontainer.appendChild(maplayer);
}

function addMessage(message) {
  messages.push(message);
  if (processingMessages == false) {
    processMessages();
  }
}

function processMessages() {
  processingMessages = true;
  let message = messages.shift();
  setTimeout(function () {
    writeToLog(message);
    if (messages.length > 0) {
      processMessages();
    } else {
      processingMessages = false;
    }
  }, 800);
}

function writeToLog(message) {
  let logcontainer = document.querySelector(".logcontainer");
  let log = document.createElement("div");
  let header, body, choice, text;
  log.classList.add("log", message.voice);
  if (message.voice && message.voice != "input") {
    let header = document.createElement("div");
    text = document.createTextNode(voices[message.voice].name + ":");
    header.classList.add("header");
    header.appendChild(text);
    log.appendChild(header);
  }
  if (message.text) {
    let body = document.createElement("div");
    if (message.voice && message.voice != "input") {
      text = document.createTextNode("“" + message.text + "”");
    } else {
      text = document.createTextNode(message.text);
    }
    body.classList.add("text");
    body.appendChild(text);
    log.appendChild(body);
  }
  if (message.choices) {
    message.choices.forEach((item) => {
      let choice = document.createElement("div");
      text = document.createTextNode(item.text);
      choice.classList.add("choice", "active_link");
      choice.appendChild(text);
      choice.addEventListener("click", function () {
        removeActiveLinks();
        writeToLog({
          voice: "input",
          text: item.text,
        });
        item.action();
      });
      log.appendChild(choice);
    });
  }
  logcontainer.appendChild(log);
  log.scrollIntoView({
    behavior: "smooth",
    block: "end",
    container: "nearest",
    inline: "start",
  });
}
