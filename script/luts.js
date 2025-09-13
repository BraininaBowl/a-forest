const items = {
  tree: {
    icon: "⍋",
    /*icon: "/\\",*/
    color: "--green-dim",
  },
  water: {
    icon: "<div>~<br>-<br>∽<br>-</div>",
    color: "--aqua-dim",
  },
  player: {
    icon: "@",
    color: "--bg",
    weight: "800",
  },
  fire: {
    icon: "<div>▲<br>⬧<br>▴<br>⬧</div>",
    color: "--red",
  },
  smoke: {
    /*icon: "<div>ԇ<br>Ԇ<br>°<br>ؐ </div>",*/
    icon: "<div>,<br>Ԇ<br>°<br>ؐ </div>",
    color: "--bg3",
  },
  camp_0_0: {
    icon: "&nbsp;🡡",
    color: "--purple-dim",
  },
  camp_1_0: {
    icon: "‾‾",
    color: "--purple-dim",
  },
  camp_2_0: {
    icon: "‾‾",
    color: "--purple-dim",
  },
  camp_3_0: {
    icon: "‾‾",
    color: "--purple-dim",
  },
  camp_4_0: {
    icon: "\\&nbsp;&nbsp;",
    color: "--purple-dim",
  },
  camp_0_1: {
    icon: "/|",
    color: "--purple-dim",
  },
  camp_1_1: {
    icon: "\\",
    color: "--purple-dim",
  },
  camp_2_1: {
    icon: "__",
    color: "--purple-dim",
  },
  camp_3_1: {
    icon: "__",
    color: "--purple-dim",
  },
  camp_4_1: {
    icon: "_\\",
    color: "--purple-dim",
  },
  ruin_0_0: {
    icon: "┌",
    color: "--bg4",
  },
  ruin_1_0: {
    icon: "┄┄",
    color: "--bg4",
  },
  ruin_2_0: {
    icon: "┐",
    color: "--bg4",
  },
  ruin_3_0: {
    icon: "___",
    color: "--bg4",
  },
  ruin_4_0: {
    icon: "┌┐",
    color: "--bg4",
  },
  ruin_0_1: {
    icon: "│",
    color: "--bg4",
  },
  ruin_1_1: {
    icon: "n.",
    color: "--bg4",
  },
  ruin_2_1: {
    icon: "│",
    color: "--bg4",
  },
  ruin_3_1: {
    icon: "┄┄",
    color: "--bg4",
  },
  ruin_4_1: {
    icon: "╮│",
    color: "--bg4",
  },
};

const pois_lut = {
  climbing_tree: {
    id: "climbing_tree",
    req: "tree",
  },
  ruin: {
    id: "ruin",
  },
  deer: {
    id: "deer",
    exc: "water",
  },
  waterfall: {
    id: "waterfall",
    req: "water",
  },
  clearing: {
    id: "clearing",
    req: "tree",
  },
  nuts: {
    id: "nuts",
    req: "tree",
  },
  stream: {
    id: "stream",
    req: "water",
  },
  spiderweb: {
    id: "spiderweb",
    req: "tree",
  },
  flower: {
    id: "flower",
  },
};

const pois_lut_keys = Object.keys(pois_lut);

const voices = {
    kid: {
        name: "Excited preschooler you"
    },
    hope: {
        name: "Hopeful pre-teen you"
    },
    rebel: {
        name: "Rebel punk teen you"
    },
    romantic: {
        name: "Romantic adolescent you"
    },
    cynic: {
        name: "Cynical young adult you"
    },
    practical: {
        name: "Practical adult you"
    }
}

