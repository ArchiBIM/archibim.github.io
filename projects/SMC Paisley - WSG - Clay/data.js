var APP_DATA = {
  "scenes": [
    {
      "id": "0-roof-terrace",
      "name": "Roof Terrace",
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
          "yaw": 0.3701700881328289,
          "pitch": 0.2983414629926404,
          "rotation": 0,
          "target": "3-floor-4-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-floor-4-bathroom",
      "name": "Floor 4 Bathroom",
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
          "yaw": 2.0230050737092977,
          "pitch": 0.39861726712595136,
          "rotation": 0,
          "target": "0-roof-terrace"
        },
        {
          "yaw": -2.7359613326188175,
          "pitch": 0.7667760852284626,
          "rotation": 0,
          "target": "3-floor-4-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-floor-4-bedroom-2",
      "name": "Floor 4 Bedroom 2",
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
          "yaw": -0.048080152033548984,
          "pitch": 0.36159367916279983,
          "rotation": 0,
          "target": "1-floor-4-bathroom"
        },
        {
          "yaw": -0.03763913730138668,
          "pitch": -0.10208178293900261,
          "rotation": 0,
          "target": "0-roof-terrace"
        },
        {
          "yaw": -0.29644028904180075,
          "pitch": 0.5793649031440626,
          "rotation": 0,
          "target": "3-floor-4-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-floor-4-bedroom-3",
      "name": "Floor 4 Bedroom 3",
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
          "yaw": -0.30597915334379877,
          "pitch": 0.19882097052015624,
          "rotation": 0,
          "target": "5-floor-4-owners-bedroom"
        },
        {
          "yaw": -0.43651308807217504,
          "pitch": 0.4143765999648732,
          "rotation": 0,
          "target": "1-floor-4-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-floor-4-owners-bath",
      "name": "Floor 4 Owner's Bath",
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
          "yaw": 1.3384523138352566,
          "pitch": 0.4199081262050086,
          "rotation": 0,
          "target": "5-floor-4-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-floor-4-owners-bedroom",
      "name": "Floor 4 Owner's Bedroom",
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
          "yaw": -1.497537894297487,
          "pitch": 0.5631044312371891,
          "rotation": 0,
          "target": "4-floor-4-owners-bath"
        },
        {
          "yaw": 1.7455431101422416,
          "pitch": 0.4634648320055277,
          "rotation": 0,
          "target": "0-roof-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-floor-3-breakfast",
      "name": "Floor 3 Breakfast",
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
          "yaw": -0.4155656322207033,
          "pitch": 0.16714284426151949,
          "rotation": 0,
          "target": "7-floor-3-great-room"
        },
        {
          "yaw": 0.2862513166645453,
          "pitch": 0.20433560008117624,
          "rotation": 0,
          "target": "8-floor-3-kitchen"
        },
        {
          "yaw": -1.727604019507023,
          "pitch": 0.5157249529352352,
          "rotation": 0,
          "target": "3-floor-4-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-floor-3-great-room",
      "name": "Floor 3 Great Room",
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
        "yaw": -0.40536143811005587,
        "pitch": 0.006572369568180747,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5928148615780202,
          "pitch": 0.15998395114601927,
          "rotation": 0,
          "target": "8-floor-3-kitchen"
        },
        {
          "yaw": -0.09386565928341639,
          "pitch": 0.19935203503409227,
          "rotation": 0,
          "target": "6-floor-3-breakfast"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-floor-3-kitchen",
      "name": "Floor 3 Kitchen",
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
          "yaw": -0.6260049634655118,
          "pitch": 0.32249627639106393,
          "rotation": 0,
          "target": "6-floor-3-breakfast"
        },
        {
          "yaw": 2.167773008723854,
          "pitch": 0.23847442172325017,
          "rotation": 0,
          "target": "7-floor-3-great-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC Paisley VR clay",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
