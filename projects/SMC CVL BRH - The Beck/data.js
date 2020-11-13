var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
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
          "yaw": 0.0027912931666858043,
          "pitch": 0.3701205364017035,
          "rotation": 0,
          "target": "1-eating"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-eating",
      "name": "Eating",
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
          "yaw": -3.03355214889838,
          "pitch": -0.39336933507976646,
          "rotation": 0,
          "target": "6-flex-space"
        },
        {
          "yaw": 0.3606990344449983,
          "pitch": 0.37503795826082964,
          "rotation": 0,
          "target": "3-famili-room"
        },
        {
          "yaw": 1.1538463305137014,
          "pitch": 0.3224294266134997,
          "rotation": 0,
          "target": "4-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
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
          "yaw": -0.026393988029195015,
          "pitch": 0.20889073625097865,
          "rotation": 0,
          "target": "3-famili-room"
        },
        {
          "yaw": -0.5730911941812291,
          "pitch": 0.14009504888950275,
          "rotation": 0,
          "target": "1-eating"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-famili-room",
      "name": "Family Room",
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
          "yaw": -1.2982859295120193,
          "pitch": 0.33521468588632075,
          "rotation": 0,
          "target": "1-eating"
        },
        {
          "yaw": -1.752610847062705,
          "pitch": 0.20301085567002453,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.9922807104221292,
          "pitch": 0.39412556619123507,
          "rotation": 0,
          "target": "4-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-owners-bedroom",
      "name": "Owners Bedroom",
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
          "yaw": 2.9401561261862508,
          "pitch": 0.565145290860114,
          "rotation": 0,
          "target": "5-owners-bathroom"
        },
        {
          "yaw": -2.2403345081329196,
          "pitch": 0.3576856107194448,
          "rotation": 0,
          "target": "1-eating"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-owners-bathroom",
      "name": "Owners Bathroom",
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
          "yaw": 3.0662386435346427,
          "pitch": 0.5541855579019597,
          "rotation": 0,
          "target": "4-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-flex-space",
      "name": "Flex Space",
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
          "yaw": 2.3545730451219846,
          "pitch": 0.46624233147655403,
          "rotation": 0,
          "target": "8-bedroom-3"
        },
        {
          "yaw": -2.5958646223432176,
          "pitch": 0.5153397266319306,
          "rotation": 0,
          "target": "8-bedroom-3"
        },
        {
          "yaw": -1.6440858577879673,
          "pitch": 0.3417945695409621,
          "rotation": 0,
          "target": "3-famili-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "Bedroom 2",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-3",
      "name": "Bedroom 3",
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
          "yaw": 0.5531539475745202,
          "pitch": 0.27975809891463044,
          "rotation": 0,
          "target": "6-flex-space"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC-CVL BRH - The Beck",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
