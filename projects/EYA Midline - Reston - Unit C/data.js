var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-st-floor-entry",
      "name": "1-st Floor Entry",
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
          "yaw": 0.3233573056356214,
          "pitch": 0.3602649149192878,
          "rotation": 0,
          "target": "1-1-st-floor-study"
        },
        {
          "yaw": 0.13045000204721724,
          "pitch": 0.1726275505005752,
          "rotation": 0,
          "target": "3-1-st-floor-garage"
        },
        {
          "yaw": -0.13867339113404142,
          "pitch": -0.46174603964904115,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1-st-floor-study",
      "name": "1-st Floor Study",
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
          "yaw": -0.16594293124939163,
          "pitch": 0.3678790119064175,
          "rotation": 0,
          "target": "2-1-st-floor-bathroom"
        },
        {
          "yaw": -0.6838707695433506,
          "pitch": 0.38075035994849316,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1-st-floor-bathroom",
      "name": "1-st Floor Bathroom",
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
          "yaw": -2.522098310958807,
          "pitch": 0.6261500632445092,
          "rotation": 0,
          "target": "1-1-st-floor-study"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1-st-floor-garage",
      "name": "1-st Floor Garage",
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
          "yaw": -2.8983751790744314,
          "pitch": 0.24268171739302602,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-2-nd-floor-dining-room",
      "name": "2-nd Floor Dining Room",
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
          "yaw": -0.0585519998669195,
          "pitch": 0.3475527213041687,
          "rotation": 0,
          "target": "5-2-nd-floor-living-room"
        },
        {
          "yaw": 1.4648653145601314,
          "pitch": 0.4572372967915168,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        },
        {
          "yaw": -2.5395206745843204,
          "pitch": 0.4269265771993158,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2-nd-floor-living-room",
      "name": "2-nd Floor Living Room",
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
          "yaw": -0.11945798670682706,
          "pitch": 0.41041423030454993,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        },
        {
          "yaw": 0.2692950297144989,
          "pitch": 0.1626616568648629,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen"
        },
        {
          "yaw": -1.2091948680784554,
          "pitch": -0.2947885480326615,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2-nd-floor-kitchen",
      "name": "2-nd Floor Kitchen",
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
          "yaw": 0.5155368227617636,
          "pitch": 0.27909288362401874,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        },
        {
          "yaw": -0.9604117325079056,
          "pitch": 0.5121662942938023,
          "rotation": 0,
          "target": "7-2-nd-floor-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-2-nd-floor-family-room",
      "name": "2-nd Floor Family Room",
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
          "yaw": 1.9426435437206937,
          "pitch": 0.40138018386601004,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen"
        },
        {
          "yaw": 1.0821362354550725,
          "pitch": 0.27113205222038417,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-3-rd-floor-hallway",
      "name": "3-rd Floor Hallway",
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
          "yaw": -1.88792959229173,
          "pitch": 0.7814488389879557,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        },
        {
          "yaw": 3.1111913492264716,
          "pitch": 0.3777040063251924,
          "rotation": 0,
          "target": "11-3-rd-floor-bedroom-2"
        },
        {
          "yaw": 2.876151488915186,
          "pitch": 0.7856554572271346,
          "rotation": 0,
          "target": "12-3-rd-floor-bathroom-2"
        },
        {
          "yaw": 0.11670524371841395,
          "pitch": 0.27044709463916305,
          "rotation": 0,
          "target": "9-3-rd-floor-master-bedroom"
        },
        {
          "yaw": -2.883045274764113,
          "pitch": 0.2807025431119641,
          "rotation": 0,
          "target": "13-4-th-floor-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-3-rd-floor-master-bedroom",
      "name": "3-rd Floor Master Bedroom",
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
          "yaw": 2.883860775538107,
          "pitch": 0.48771025045043004,
          "rotation": 0,
          "target": "10-3-rd-floor-master-bathroom"
        },
        {
          "yaw": 2.024647364701292,
          "pitch": 0.312684060166319,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-3-rd-floor-master-bathroom",
      "name": "3-rd Floor Master Bathroom",
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
          "yaw": -2.961432804266604,
          "pitch": 0.535134689726334,
          "rotation": 0,
          "target": "9-3-rd-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-3-rd-floor-bedroom-2",
      "name": "3-rd Floor Bedroom 2",
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
          "yaw": 2.107515152600584,
          "pitch": 0.47183623323798507,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-3-rd-floor-bathroom-2",
      "name": "3-rd Floor Bathroom 2",
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
          "yaw": -1.5308822989988258,
          "pitch": 0.7808505487872015,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-4-th-floor-terrace",
      "name": "4-th Floor Terrace",
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
          "yaw": -1.4541681230706018,
          "pitch": 0.4372310259864882,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EYA Midline Reston TH Unit C-1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
