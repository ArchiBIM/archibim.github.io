var APP_DATA = {
  "scenes": [
    {
      "id": "0-smc-20113-the-reuben-basement-floor",
      "name": "SMC-20113-The Reuben-Basement Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1789236228900517,
          "pitch": -0.09625720547007255,
          "rotation": 0,
          "target": "1-smc-20113-the-reuben-first-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-smc-20113-the-reuben-first-floor-entry",
      "name": "SMC-20113-The Reuben-First Floor Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17853394861031013,
          "pitch": 0.3697579504873687,
          "rotation": 0,
          "target": "0-smc-20113-the-reuben-basement-floor"
        },
        {
          "yaw": 0.37383418207218,
          "pitch": -0.3197187345869601,
          "rotation": 0,
          "target": "5-smc-20113-the-reuben-second-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-smc-20113-the-reuben-second-floor-eating-room",
      "name": "SMC-20113-The Reuben-Second Floor Eating Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.13768747928589065,
          "pitch": 0.07162298264388589,
          "rotation": 0,
          "target": "3-smc-20113-the-reuben-second-floor-family-room"
        },
        {
          "yaw": 0.41869996894527617,
          "pitch": 0.32946488213256764,
          "rotation": 0,
          "target": "5-smc-20113-the-reuben-second-floor-stairs"
        },
        {
          "yaw": -0.4510300854547289,
          "pitch": 0.38331622461568493,
          "rotation": 0,
          "target": "4-smc-20113-the-reuben-second-floor-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-smc-20113-the-reuben-second-floor-family-room",
      "name": "SMC-20113-The Reuben-Second Floor Family Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1557375323671781,
          "pitch": 0.07386087275736486,
          "rotation": 0,
          "target": "4-smc-20113-the-reuben-second-floor-kitchen"
        },
        {
          "yaw": -2.0145803838194087,
          "pitch": 0.09965733834069823,
          "rotation": 0,
          "target": "2-smc-20113-the-reuben-second-floor-eating-room"
        },
        {
          "yaw": -2.302443493511536,
          "pitch": 0.4727637049353035,
          "rotation": 0,
          "target": "5-smc-20113-the-reuben-second-floor-stairs"
        },
        {
          "yaw": 1.6753295392397032,
          "pitch": -0.11046664180778265,
          "rotation": 0,
          "target": "9-smc-20113-the-reuben-third-floor-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-smc-20113-the-reuben-second-floor-kitchen",
      "name": "SMC-20113-The Reuben-Second Floor Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.5082294993596435,
        "pitch": 0.038192477105972955,
        "fov": 1.4541283173302944
      },
      "linkHotspots": [
        {
          "yaw": 1.6196507391875112,
          "pitch": 0.4719095892527907,
          "rotation": 0,
          "target": "2-smc-20113-the-reuben-second-floor-eating-room"
        },
        {
          "yaw": 0.20315528676318628,
          "pitch": 0.26352078553590275,
          "rotation": 0,
          "target": "5-smc-20113-the-reuben-second-floor-stairs"
        },
        {
          "yaw": -0.9139100640433337,
          "pitch": 0.1696409607046192,
          "rotation": 0,
          "target": "3-smc-20113-the-reuben-second-floor-family-room"
        },
        {
          "yaw": -0.5045782588297545,
          "pitch": -0.035968617597209374,
          "rotation": 0,
          "target": "9-smc-20113-the-reuben-third-floor-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-smc-20113-the-reuben-second-floor-stairs",
      "name": "SMC-20113-The Reuben-Second Floor Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.11128931060161484,
        "pitch": 0.212030205748734,
        "fov": 1.4541283173302944
      },
      "linkHotspots": [
        {
          "yaw": -1.4993602592783244,
          "pitch": 0.30305372669300823,
          "rotation": 0,
          "target": "2-smc-20113-the-reuben-second-floor-eating-room"
        },
        {
          "yaw": -0.25473014718077636,
          "pitch": 0.10349300540099549,
          "rotation": 0,
          "target": "4-smc-20113-the-reuben-second-floor-kitchen"
        },
        {
          "yaw": 0.6504409782886764,
          "pitch": 0.2750888030239338,
          "rotation": 0,
          "target": "3-smc-20113-the-reuben-second-floor-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-smc-20113-the-reuben-third-floor-bath-2",
      "name": "SMC-20113-The Reuben-Third Floor Bath 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.001582160253477,
          "pitch": 0.12420133544821077,
          "rotation": 0,
          "target": "7-smc-20113-the-reuben-third-floor-bedroom-3"
        },
        {
          "yaw": 2.1519981570263145,
          "pitch": 0.11749419890446688,
          "rotation": 0,
          "target": "10-smc-20113-the-reuben-roof-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-smc-20113-the-reuben-third-floor-bedroom-3",
      "name": "SMC-20113-The Reuben-Third Floor Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02875111184405199,
          "pitch": 0.06482939710859803,
          "rotation": 0,
          "target": "6-smc-20113-the-reuben-third-floor-bath-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-smc-20113-the-reuben-third-floor-owners-bath",
      "name": "SMC-20113-The Reuben-Third Floor Owners Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1448396611523215,
          "pitch": 0.4256908946910265,
          "rotation": 0,
          "target": "9-smc-20113-the-reuben-third-floor-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-smc-20113-the-reuben-third-floor-owners-bedroom",
      "name": "SMC-20113-The Reuben-Third Floor Owners Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.655606044247314,
          "pitch": 0.15976136979827338,
          "rotation": 0,
          "target": "8-smc-20113-the-reuben-third-floor-owners-bath"
        },
        {
          "yaw": 0.0683299828549,
          "pitch": 0.21584492703672709,
          "rotation": 0,
          "target": "7-smc-20113-the-reuben-third-floor-bedroom-3"
        },
        {
          "yaw": 0.0346271884402789,
          "pitch": -0.03303457404933141,
          "rotation": 0,
          "target": "10-smc-20113-the-reuben-roof-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-smc-20113-the-reuben-roof-terrace",
      "name": "SMC-20113-The Reuben-Roof Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08397058523438261,
          "pitch": 0.0448622060025059,
          "rotation": 0,
          "target": "9-smc-20113-the-reuben-third-floor-owners-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC 20113 The Reuben_elev D",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
