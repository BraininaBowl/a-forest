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
    indication: [
      "see an impressive tree",
      "notice a large tree",
      "hear leaves rustling in the wind",
    ],
    action: {
      a0: function () {
        message = {};
        message.voice = false;
        message.text =
          "After a short walk, you come across an impressive tree.";
        addMessage(message);
        message = {};
        message.voice = "kid";
        message.text = "Can we climb it?";
        addMessage(message);
        message = {};
        message.voice = "practical";
        message.text = "It looks sturdy enough. Nice, strong branches.";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "[Climb it!]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You carefully make your way up the tree. The climb is easy, the branches forming a natural ladder.";
            addMessage(message);
            message = {};
            message.voice = "romantic";
            message.text = "Now that's a view!";
            addMessage(message);
            message = {};
            message.voice = "kid";
            message.text = "Wow...";
            addMessage(message);
            player.addItem("Awe-inspiring vista");
            player.removeItem("A nagging sense of disappointment");
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Continue]",
              action: function () {
                message = {};
                message.voice = false;
                message.text =
                  "You bask in the view for a moment, before climbing back down and continuing on your way.";
                addMessage(message);
                message = {};
                message.voice = "rebel";
                message.text = "That was pretty cool.";
                addMessage(message);
                nextStop();
              },
            };
            addMessage(message);
          },
        };
        message.choices[2] = {
          text: "[Move on]",
          action: function () {
            message = {};
            message.voice = "hope";
            message.text = "There'll be more nice trees later, right?";
            addMessage(message);
            player.addItem("A nagging sense of disappointment");
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Continue]",
              action: function () {
                nextStop();
              },
            };
            addMessage(message);
          },
        };
        addMessage(message);
      },
      a1: function () {
        message = {};
        message.voice = false;
        message.text = "Another impressive tree.";
        addMessage(message);
        message = {};
        message.voice = "rebel";
        message.text = "You want to climb this one as well, right?";
        addMessage(message);
        message = {};
        message.voice = "kid";
        message.text = "Can we? Can we?";
        addMessage(message);
        message = {};
        message.voice = "cynic";
        message.text = "Just don't break your legs...";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "Up we go!",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You quickly make your way up the tree. Some things you never forget how to do.";
            addMessage(message);
            message = {};
            message.voice = "romantic";
            message.text = "Now that's a view!";
            addMessage(message);
            message = {};
            message.voice = "kid";
            message.text = "Wow...";
            addMessage(message);
            player.addItem("Awe-inspiring vista");
            player.removeItem("A nagging sense of disappointment");
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Continue]",
              action: function () {
                message = {};
                message.voice = false;
                message.text =
                  "You bask in the view for a moment, before climbing back down.";
                addMessage(message);
                message = {};
                message.voice = "cynic";
                message.text = "Well done, I guess.";
                addMessage(message);
                nextStop();
              },
            };
            addMessage(message);
          },
        };
        message.choices[2] = {
          text: "[Move on]",
          action: function () {
            message = {};
            message.voice = "hope";
            message.text = "There'll be more nice trees later, right?";
            addMessage(message);
            player.addItem("A nagging sense of disappointment");
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Continue]",
              action: function () {
                nextStop();
              },
            };
            addMessage(message);
          },
        };
        addMessage(message);
      },
      a2: function () {
        message = {};
        message.voice = "cynic";
        message.text = "Lots of climable trees around here...";
        addMessage(message);
        message = {};
        message.voice = "kid";
        message.text = "...please?";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "Sure thing!",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You quickly make your way up the tree. Some things you never forget how to do.";
            addMessage(message);
            message = {};
            message.voice = "romantic";
            message.text = "Now that's a view!";
            addMessage(message);
            message = {};
            message.voice = "kid";
            message.text = "Wow...";
            addMessage(message);
            player.addItem("Awe-inspiring vista");
            player.removeItem("A nagging sense of disappointment");
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Continue]",
              action: function () {
                message = {};
                message.voice = false;
                message.text =
                  "You bask in the view for a moment, before climbing back down.";
                addMessage(message);
                nextStop();
              },
            };
            addMessage(message);
          },
        };
        message.choices[2] = {
          text: "Not now.",
          action: function () {
            message = {};
            message.voice = "hope";
            message.text = "There'll be more nice trees later, right?";
            addMessage(message);
            player.addItem("A nagging sense of disappointment");
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Continue]",
              action: function () {
                nextStop();
              },
            };
            addMessage(message);
          },
        };
        addMessage(message);
      },
    },
  },
  ruin: {
    id: "ruin",
    indication: ["spot some kind of building", "see grey stones"],
    action: {
      a0: function () {
        message = {};
        message.voice = false;
        message.text =
          "In the middle of the forest, you encounter an old ruin.";
        addMessage(message);
        message = {};
        message.voice = "kid";
        message.text =
          "Ooooh, was it a castle? Did knights live here? Princesses?!";
        addMessage(message);
        message = {};
        message.voice = "practical";
        message.text =
          "From what we can see, it was probably just a shelter, for shepherds, lumberjacks, or whoever worked in the woods.";
        addMessage(message);
        message = {};
        message.voice = "romantic";
        message.text = "Well, maybe a knight stayed here once, right?";
        addMessage(message);
        message = {};
        message.voice = "practical";
        message.text = "...it's possible, off course.";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "[Continue]",
          action: function () {
            nextStop();
          },
        };
        addMessage(message);
      },
      a1: function () {
        message = {};
        message.voice = false;
        message.text =
          "Another ruin, bigger this time, with the remnants of what could've been a collapsed tower. Nature has started to reclaim it, most of the stones covered in brambles.";
        addMessage(message);
        message = {};
        message.voice = "kid";
        message.text = "Did this one have princesses?";
        addMessage(message);
        message = {};
        message.voice = "rebel";
        message.text = "Probably, yeah. At least two, maybe three.";
        addMessage(message);
        message = {};
        message.voice = "romantic";
        message.text = "Yeah, at least.";
        addMessage(message);
        message = {};
        message.voice = "kid";
        message.text = "I knew it!";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "[Pick some blackberries]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You barely manage to avoid the thorns as you pick some blackberries. They're delicious. You save one for later";
            addMessage(message);
            player.addItem("The sweet taste of blackberries");
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Continue]",
              action: function () {
                nextStop();
              },
            };
            addMessage(message);
          },
        };
        message.choices[2] = {
          text: "[Move on]",
          action: function () {
            nextStop();
          },
        };
        addMessage(message);
      },
      a2: function () {
        message = {};
        message.voice = false;
        message.text =
          "Another ruined building. More recent, mostly made out of concrete.";
        addMessage(message);
        message = {};
        message.voice = "rebel";
        message.text =
          "Oh, man. I just know there were knights here. And do you see that blackened spot? That's dragonfire! The dragon probably came here looking for a princess.";
        addMessage(message);
        message = {};
        message.voice = "kid";
        message.text = "Wicked!";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "[Move on]",
          action: function () {
            nextStop();
          },
        };
        addMessage(message);
      },
      a3: function () {
        message = {};
        message.voice = false;
        message.text =
          "Another ruin. You don't dare speculating on any fairytale inhabitants";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "[Move on]",
          action: function () {
            nextStop();
          },
        };
        addMessage(message);
      },
    },
  },
  deer: {
    id: "deer",
    exc: "water",
    indication: [
      "hear a quiet rustle",
      "notice movement",
      "don't see anything in particular",
    ],
    action: {
      a0: function () {
        message = {};
        message.voice = false;
        message.text =
          "You carefully make your way through a particulary dense part of the forest. When you break through the treeline into a clearing, you find yourself eye-to-eye with a large deer. It looks at you for a long moment, it's ears flicking back and forth to discourage the insects circling it's face.";
        addMessage(message);
        message = {};
        message.voice = "romantic";
        message.text = "Should've brought a camera.";
        addMessage(message);
        message = {};
        message.voice = "practical";
        message.text =
          "Ssssh. Don't worry about that. Just admire it, and remember.";
        addMessage(message);
        message = {};
        message.choices = new Array();
        if (
          player.inventory.includes("The sweet taste of blackberries") ||
          player.inventory.includes("A handful of wild strawberries")
        ) {
          message.choices[1] = {
            text: "[Offer it a berry]",
            action: function () {
              message = {};
              message.voice = false;
              message.text =
                "You carefully extend your hand, a ripe, juicy berry resting on your palm";
              addMessage(message);
              message = {};
              message.voice = "practical";
              message.text = "Easy now...";
              addMessage(message);
              message = {};
              message.voice = "hope";
              message.text = "...";
              addMessage(message);
              message = {};
              message.voice = false;
              message.text =
                "The deer looks at you. It's nostrils flare once, twice. It takes a careful step towards you.";
              addMessage(message);
              message = {};
              message.choices = new Array();
              message.choices[1] = {
                text: "[Wait]",
                action: function () {
                  message = {};
                  message.voice = "rebel";
                  message.text = "This is SO cool.";
                  addMessage(message);
                  message = {};
                  message.voice = false;
                  message.text =
                    "Suddenly, the sound of a branch breaking rings through the clearing. In a flash, the deer is gone.";
                  addMessage(message);
                  player.addItem("A remarkable encounter");
                  message = {};
                  message.choices = new Array();
                  message.choices[1] = {
                    text: "[Continue]",
                    action: function () {
                      nextStop();
                    },
                  };
                  addMessage(message);
                },
              };
              addMessage(message);
            },
          };
        }
        message.choices[2] = {
          text: "[Stay]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "For a long moment, you're both standing in the clearing, looking at each other. Then, suddenly, the deer snorts, shakes it's head, and steps back into the forest on the other side of the clearing.";
            addMessage(message);
            player.addItem("A remarkable encounter");
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Continue]",
              action: function () {
                nextStop();
              },
            };
            addMessage(message);
          },
        };
        message.choices[3] = {
          text: "[Step back]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You slowly step back between the trees. A twig snaps underfoot, and in a flash, the deer is gone.";
            addMessage(message);
            player.addItem("A remarkable encounter");
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Continue]",
              action: function () {
                nextStop();
              },
            };
            addMessage(message);
          },
        };
        addMessage(message);
      },
      a1: function () {
        message = {};
        message.voice = false;
        message.text =
          "You come across a trail through the undergrowth. Someone, or something, has walked here recently.";
        addMessage(message);
        message = {};
        message.voice = "hope";
        message.text = "Let's follow it!";
        addMessage(message);
        message = {};
        message.voice = "cynic";
        message.text =
          "Sure. It's probably won't be a hungry grue, waiting to pounce on us and eat our eyeballs.";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "[Follow the trail]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You follow the trail for a while, until it ends on the edge of a small pool. On the other side of the water, a magnificent deer stands staring at you.";
            addMessage(message);
            message = {};
            message.voice = "romantic";
            message.text = "Is this the same deer as before?";
            addMessage(message);
            message = {};
            message.voice = "practical";
            message.text = "Probably not";
            addMessage(message);
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "You know, I think it is...",
              action: function () {
                message = {};
                message.voice = "hope";
                message.text = "Yeah...";
                addMessage(message);
                message = {};
                message.voice = false;
                message.text =
                  "You stand across the pool, looking at the deer as it calmly walks off, disappearing between the trees.";
                addMessage(message);
                message = {};
                message.choices = new Array();
                message.choices[1] = {
                  text: "[Move on]",
                  action: function () {
                    nextStop();
                  },
                };
                addMessage(message);
              },
            };
            message.choices[2] = {
              text: "Probably not.",
              action: function () {
                message = {};
                message.voice = false;
                message.text =
                  "You stand across the pool, looking at the deer. It wiggles it's ears, then disappears between the trees.";
                addMessage(message);
                message = {};
                message.choices = new Array();
                message.choices[1] = {
                  text: "[Move on]",
                  action: function () {
                    nextStop();
                  },
                };
                addMessage(message);
              },
            };
            addMessage(message);
          },
        };
        message.choices[2] = {
          text: "[Move on]",
          action: function () {
            nextStop();
          },
        };
        addMessage(message);
      },
      a2: function () {
        message = {};
        message.voice = false;
        message.text =
          "While making your way through the undergrowth, you suddenly hear a rustling sound behind you.";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[0] = {
          text: "[Run away]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You sprint away, rushing through the trees in a mad dash until you're absolutely sure nothing is following you.";
            addMessage(message);
            message = {};
            message.voice = "cynic";
            message.text = "Wasn't that a bit of an overreaction?";
            addMessage(message);
            message = {};
            message.voice = "practical";
            message.text =
              "Whatever it was, it's not here anymore. Let's move on";
            addMessage(message);
            message = {};
            message.choices = new Array();
            message.choices[0] = {
              text: "[Move on]",
              action: function () {
                nextStop();
              },
            };
            addMessage(message);
          },
        };
        message.choices[1] = {
          text: "[Turn around. Slowly]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "A large deer is standing right in front of you, sniffing at your clothes.";
            addMessage(message);
            message = {};
            message.voice = "cynic";
            message.text = "...";
            addMessage(message);
            message = {};
            message.voice = "romantic";
            message.text = "This is definetily the same as before.";
            addMessage(message);
            message = {};
            message.voice = "cynic";
            message.text = "Yes?";
            addMessage(message);
            message = {};
            message.choices = new Array();
            if (
              player.inventory.includes("The sweet taste of blackberries") ||
              player.inventory.includes("A handful of wild strawberries")
            ) {
              message.choices[1] = {
                text: "[Offer it a berry]",
                action: function () {
                  message = {};
                  message.voice = false;
                  message.text =
                    "You carefully extend your hand, a ripe, juicy berry resting on your palm.";
                  addMessage(message);
                  message = {};
                  message.voice = "hope";
                  message.text = "Maybe..?";
                  addMessage(message);
                  message = {};
                  message.voice = false;
                  message.text =
                    "The deer cocks it's head. It's nostrils flare once, twice.";
                  addMessage(message);
                  message = {};
                  message.choices = new Array();
                  message.choices[1] = {
                    text: "[Wait]",
                    action: function () {
                      message = {};
                      message.voice = "rebel";
                      message.text = "Yes...";
                      addMessage(message);
                      message = {};
                      message.choices = new Array();
                      message.choices[1] = {
                        text: "[Wait]",
                        action: function () {
                          message = {};
                          message.voice = false;
                          message.text =
                            "Soft, hairy lips graze your palm. A course tongue. And suddenly, the fruit is gone.";
                          addMessage(message);
                          message = {};
                          message.voice = "kid";
                          message.text = "wow";
                          addMessage(message);
                          message = {};
                          message.voice = false;
                          message.text =
                            "The deer looks at you, eyes blinking slowly.";
                          addMessage(message);
                          message = {};
                          message.choices = new Array();
                          message.choices[1] = {
                            text: "[Try to pet it]",
                            action: function () {
                              message = {};
                              message.voice = false;
                              message.text =
                                "You extend your hand, slowly, and stroke the deer's neck. The pelt feels course, slightly greasy, and entirely wonderful";
                              addMessage(message);
                              message = {};
                              message.voice = false;
                              message.text =
                                "The deer leans into your touch for a moment. Then, it turns away and disappears into the bushes.";
                              addMessage(message);
                              player.addItem("A profound sense of wonder");
                              goToNextStop();
                            },
                          };
                          addMessage(message);
                        },
                      };

                      addMessage(message);
                    },
                  };
                  addMessage(message);
                },
              };
            }
            message.choices[2] = {
              text: "[Try to pet it]",
              action: function () {
                message = {};
                message.voice = "hope";
                message.text = "Maybe..?";
                addMessage(message);
                message = {};
                message.voice = false;
                message.text =
                  "The deer cocks it's head. It's nostrils flare once, twice.";
                addMessage(message);
                message = {};
                message.voice = false;
                message.text =
                  "You extend your hand, slowly, and stroke the deer's neck. The pelt feels course, slightly greasy, and entirely wonderful";
                addMessage(message);
                message = {};
                message.voice = false;
                message.text = "The deer leans into your touch for a moment.";
                addMessage(message);
                if (
                  player.inventory.includes(
                    "The sweet taste of blackberries"
                  ) ||
                  player.inventory.includes("A handful of wild strawberries")
                ) {
                  message = {};
                  message.choices = new Array();
                  message.choices[1] = {
                    text: "[Offer it a berry]",
                    action: function () {
                      message = {};
                      message.voice = false;
                      message.text =
                        "You carefully extend your hand, a ripe, juicy berry resting on your palm.";
                      addMessage(message);
                      message = {};
                      message.choices = new Array();
                      message.choices[1] = {
                        text: "[Wait]",
                        action: function () {
                          message = {};
                          message.voice = "rebel";
                          message.text = "Yes...";
                          addMessage(message);
                          message = {};
                          message.choices = new Array();
                          message.choices[1] = {
                            text: "[Wait]",
                            action: function () {
                              message = {};
                              message.voice = false;
                              message.text =
                                "Soft, hairy lips graze your palm. A course tongue. And suddenly, the fruit is gone.";
                              addMessage(message);
                              message = {};
                              message.voice = "kid";
                              message.text = "wow";
                              addMessage(message);
                              message = {};
                              message.voice = false;
                              message.text =
                                "The deer looks at you, eyes blinking slowly. Then, it turns away and disappears into the bushes.";
                              addMessage(message);
                              player.addItem("A profound sense of wonder");
                              goToNextStop();
                            },
                          };
                          addMessage(message);
                        },
                      };
                      addMessage(message);
                    },
                  };
                  addMessage(message);
                } else {
                  console.log("no berries");
                  message = {};
                  message.voice = "kid";
                  message.text = "Wow...";
                  addMessage(message);
                  message = {};
                  message.voice = false;
                  message.text =
                    "After a long moment, the deer turns away and disappears into the bushes.";
                  addMessage(message);
                  player.addItem("A profound sense of wonder");
                  goToNextStop();
                }
              },
            };
            addMessage(message);
          },
        };
        addMessage(message);
      },
      a3: function () {
        message = {};
        message.voice = false;
        let encounter = getRandomInt(2);
        if (encounter == 0) {
          message.text =
            "You spot the deer in the distance, a roe following close behind.";
        } else if (encounter == 1) {
          message.text =
            "A large deer is grazing in the clearing. It pays you no attention.";
        } else {
          message.text =
            "You see a large deer ahead. It looks at you briefly, before disappearing into the forest";
        }
        addMessage(message);
        nextStop();
      },
    },
  },

  waterfall: {
    id: "waterfall",
    req: "water",
    indication: ["hear rushing water", "hear a deep, rumbling sound"],
    action: {
      a0: function () {
        message = {};
        message.voice = false;
        message.text =
          "You follow the sounds until you come to an impressive waterfall, cascading down the rocks.";
        addMessage(message);
        message = {};
        message.voice = "kid";
        message.text = "Wow";
        addMessage(message);
        message = {};
        message.voice = "romantic";
        message.text =
          "You know, in games, there's always treasure hidden behind a waterfall";
        addMessage(message);
        message = {};
        message.voice = "cynic";
        message.text = "Oh, no..";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "Oh yes...",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You carefully make your way behind the waterfall, droplets splashing over your feet. You don't find any treasure, but there's a pretty pebble on the ground.";
            addMessage(message);
            message = {};
            message.voice = "practical";
            let encounter = getRandomInt(3);
            if (encounter == 0) {
              message.text = "Quartz, probably.";
            } else if (encounter == 1) {
              message.text = "Mica, probably.";
            } else if (encounter == 2) {
              message.text = "Flint, probably.";
            } else {
              message.text = "Garnet, probably.";
            }
            addMessage(message);
            player.addItem("A cool stone");
            goToNextStop();
          },
        };
        message.choices[2] = {
          text: "Let's not.",
          action: function () {
            message = {};
            message.voice = false;
            message.text = "You admire the view for a bit, before moving on.";
            addMessage(message);
            goToNextStop();
          },
        };

        addMessage(message);
      },
      a1: function () {
        message = {};
        message.voice = false;
        message.text =
          "You follow the sounds until you come to an impressive waterfall, cascading down the rocks.";
        addMessage(message);
        message = {};
        message.voice = "cynic";
        message.text = "Please don't...";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "Do!",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You carefully make your way behind the waterfall, droplets splashing over your feet. You don't find any treasure, but there's a pretty pebble on the ground.";
            addMessage(message);
            message = {};
            message.voice = "practical";
            let encounter = getRandomInt(3);
            if (encounter == 0) {
              message.text = "Quartz, probably.";
            } else if (encounter == 1) {
              message.text = "Mica, probably.";
            } else if (encounter == 2) {
              message.text = "Flint, probably.";
            } else {
              message.text = "Garnet, probably.";
            }
            addMessage(message);
            player.addItem("A cool stone");
            goToNextStop();
          },
        };
        message.choices[2] = {
          text: "Let's not.",
          action: function () {
            message = {};
            message.voice = false;
            message.text = "You admire the view for a bit, before moving on.";
            addMessage(message);
            goToNextStop();
          },
        };

        addMessage(message);
      },
    },
  },
  clearing: {
    id: "clearing",
    exc: "water",
    indication: [
      "see an opening between the trees",
      "smell fresh grass",
      "see the sun shining through the foilage",
    ],
    action: {
      a0: function () {
        message = {};
        message.voice = false;
        message.text =
          "Hidden behind the trees, you come upon a secluded meadow.";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "[Rest a moment]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You rest a while, enjoying the warm feeling of the sunshine on your skin";
            addMessage(message);
            message = {};
            message.voice = "cynic";
            message.text = "This is quite nice, you know...";
            addMessage(message);
            player.addItem("A nice, warm feeling");
            player.removeItem("A cold sensation");
            goToNextStop();
          },
        };
        message.choices[2] = {
          text: "[Pick some berries]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You walk around the edge of the clearing, gathering wild strawberries.";
            addMessage(message);
            player.addItem("A handful of wild strawberries");
            goToNextStop();
          },
        };
        message.choices[3] = {
          text: "[Move on]",
          action: function () {
            nextStop();
          },
        };
        addMessage(message);
      },
    },
  },
  stream: {
    id: "stream",
    req: "water",
    indication: [
      "hear a gentle murmur",
      "hear water tinkle over rocks",
      "see sunshine reflected on water",
    ],
    action: {
      a0: function () {
        message = {};
        message.voice = false;
        message.text =
          "A small, clear stream of water runs through the forest.";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "[Take a sip]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You drink the cold, refreshing water. It tastes better then anything you've drank before.";
            addMessage(message);
            player.addItem("A sense of refreshment");
            goToNextStop();
          },
        };
        message.choices[2] = {
          text: "[Splash some water in your face]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "You kneel down and splash a handful of water in your face.";
            addMessage(message);
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Cold!]",
              action: function () {
                message = {};
                message.voice = false;
                message.text =
                  "You shiver a deep shiver that seems to reach all the way into your bones.";
                addMessage(message);
                player.addItem("A cold sensation");
                goToNextStop();
              },
            };
            message.choices[2] = {
              text: "[Refreshing!]",
              action: function () {
                message = {};
                message.voice = false;
                message.text =
                  "The cold, clear water seems to wash away all exhaustion.";
                addMessage(message);
                player.addItem("Renewed energy");
                goToNextStop();
              },
            };
            addMessage(message);
          },
        };
        message.choices[3] = {
          text: "[Move on]",
          action: function () {
            nextStop();
          },
        };
        addMessage(message);
      },
    },
  },

  nuts: {
    id: "nuts",
    req: "tree",
    indication: [
      "see nothing in particular",
      "hear something scramble up a trunk",
      "hear tiny claws scrape on bark",
    ],
    action: {
      a0: function () {
        message = {};
        message.voice = false;
        message.text = "Something in a nearby tree catches your eye.";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "[Take a closer look]",
          action: function () {
            message = {};
            message.voice = "rebel";
            message.text = "Nuts!";
            addMessage(message);
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "Excuse me?",
              action: function () {
                message = {};
                message.voice = false;
                message.text =
                  "There's nuts growing on this tree. Lots of nuts";
                addMessage(message);
                message = {};
                message.choices = new Array();
                message.choices[1] = {
                  text: "Nice!",
                  action: function () {
                    message = {};
                    message.voice = false;
                    message.text = "You pick a handful of nuts";
                    addMessage(message);
                    player.addItem("A handful of nuts");
                    goToNextStop();
                  },
                };
                addMessage(message);
              },
            };
            addMessage(message);
          },
        };
        addMessage(message);
      },
      a1: function () {
        message = {};
        message.voice = false;
        message.text =
          "As you walk through the trees, a squirrel jumps from a tree and starts to scramble up your trousers.";
        addMessage(message);
        message = {};
        message.voice = "hope";
        message.text = "Cute!";
        addMessage(message);
        message = {};
        message.voice = "romantic";
        message.text = "Cute!";
        addMessage(message);
        message = {};
        message.voice = "rebel";
        message.text = "Cute!";
        addMessage(message);
        message = {};
        message.voice = "practical";
        message.text =
          "It seems to be going for the pocket where you put those nuts.";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "[Offer up some nuts]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "The squirrel scampers up your wrist and starts gathering the nuts.";
            addMessage(message);
            message = {};
            message.voice = "kid";
            message.text = "Cute!";
            addMessage(message);
            message = {};
            message.voice = false;
            message.text =
              "Having stuffed it's mouth with nuts, the squirrel jumps off and disappears between the trees.";
            addMessage(message);
            player.addItem("A squirrely encounter");
            goToNextStop();
          },
        };
        message.choices[2] = {
          text: "[Brush it off]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "As you try to brush off the squirrel, it grips your wrist and hangs on.";
            addMessage(message);
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Shake it off]",
              action: function () {
                message = {};
                message.voice = false;
                message.text =
                  "With a firm flick, you shake off the squirrel. It looks at you indignantly and scampers off.";
                addMessage(message);
                message = {};
                message.voice = "kid";
                message.text = "Awwww.";
                addMessage(message);
                player.addItem("A squirrely encounter");
                goToNextStop();
              },
            };
            addMessage(message);
          },
        };
        addMessage(message);
      },
      a2: function () {
        message = {};
        message.voice = false;
        message.text = "In a tree next to the path, you notice a squirrel.";
        addMessage(message);
        message = {};
        message.choices = new Array();
        message.choices[1] = {
          text: "[Look closer]",
          action: function () {
            message = {};
            message.voice = false;
            message.text =
              "It looks like it's holding your watch between it's teeth.";
            addMessage(message);
            message = {};
            message.voice = "practical";
            message.text = "It must have taken it when it left your wrist.";
            addMessage(message);
            message = {};
            message.voice = "rebel";
            message.text = "[chuckling] That little bastard...";
            addMessage(message);
            message = {};
            message.choices = new Array();
            message.choices[1] = {
              text: "[Lunge for the watch]",
              action: function () {
                let squirrel_exhaustion = 0;
                let squirrel_surprise = 0;
                let squirrel_triumph = false;
                function squirrel_pickaction() {
                  message = {};
                  message.choices = new Array();
                  message.choices[1] = {
                    text: "[Grab the watch]",
                    action: function () {
                      squirrel_nextround("lunge");
                    },
                  };
                  message.choices[2] = {
                    text: "[Feint]",
                    action: function () {
                      squirrel_nextround("feint");
                    },
                  };
                  message.choices[3] = {
                    text: "[Observe]",
                    action: function () {
                      squirrel_nextround("wait");
                    },
                  };
                  message.choices[4] = {
                    text: "[Walk away]",
                    action: function () {
                      message = {};
                      message.voice = false;
                      message.text =
                        "You give up, leaving the squirrel to his prize.";
                      addMessage(message);
                      nextStop();
                    },
                  };
                  addMessage(message);
                }

                function squirrel_nextround(action) {
                  message = {};
                  message.voice = false;
                  if (action == "lunge") {
                    message.text = "You lunge for the watch, ";
                    if (squirrel_surprise == 1) {
                      message.text +=
                        "and triumphantly snatch it from the little bastard.";
                      squirrel_triumph = true;
                    } else {
                      let reaction = getRandomInt(3);
                      if (reaction == 0) {
                        message.text +=
                          "but the creature is too fast, and dodges between your legs before scrambling onto your back.";
                      } else if (reaction == 1) {
                        message.text +=
                          "but the creature nimbly jumps over your hands.";
                      } else if (reaction == 2) {
                        message.text +=
                          "but the creature dodges and runs up your sleeve.";
                      } else {
                        message.text +=
                          "but the creature is too fast and scampers to the side.";
                      }
                      squirrel_exhaustion += 1;
                    }
                  } else if (action == "feint") {
                    message.text =
                      "You feint to the side, trying to surprise the creature, ";
                    if (squirrel_exhaustion < 3) {
                      message.text +=
                        "but the squirrel isn't fooled and deftly avoids your grasp.";
                    } else {
                      message.text +=
                        "and the squirrel falls for it, hesitating for one crucial moment.";
                      squirrel_surprise = 1;
                    }
                  } else if (action == "wait") {
                    message.text =
                      "You step back, eyeing your opponent. The squirrel looks back, unimpressed.";
                    if (squirrel_exhaustion > 2) {
                      squirrel_exhaustion = 2;
                    }
                  }
                  addMessage(message);
                  if (squirrel_triumph) {
                    message = {};
                    message.voice = "hope";
                    message.text = "Well done!";
                    addMessage(message);
                    message = {};
                    message.voice = false;
                    message.text =
                      "As the squirrel scampers back into the woods, you resume your walk.";
                    addMessage(message);
                    player.addItem("A very squirrely situation");
                    goToNextStop();
                  } else {
                    squirrel_pickaction();
                  }
                }
                squirrel_nextround("lunge");
              },
            };
            message.choices[2] = {
              text: "[Let it go]",
              action: function () {
                message = {};
                message.voice = false;
                message.text =
                  "You ignore the critter and continue on your way.";
                addMessage(message);
                nextStop();
              },
            };
            addMessage(message);
          },
        };
        addMessage(message);
      },
      a3: function () {
        message = {};
        message.voice = false;
        if (player.inventory.includes("A very squirrely situation")) {
          message.text =
            "You notice a squirrel in a nearby tree. It looks at you indignantly";
        } else {
          message.text =
            "You notice a squirrel in a nearby tree. It looks at you triumphantly";
        }
        addMessage(message);
        nextStop();
      },
    },
  },
};

const pois_lut_keys = Object.keys(pois_lut);

const voices = {
  kid: {
    name: "Excited preschooler you",
  },
  hope: {
    name: "Hopeful pre-teen you",
  },
  rebel: {
    name: "Rebel punk teen you",
  },
  romantic: {
    name: "Romantic adolescent you",
  },
  cynic: {
    name: "Cynical young adult you",
  },
  practical: {
    name: "Practical adult you",
  },
  gotitem: {
    name: "Gained item",
  },
  lostitem: {
    name: "Lost item",
  },
};
