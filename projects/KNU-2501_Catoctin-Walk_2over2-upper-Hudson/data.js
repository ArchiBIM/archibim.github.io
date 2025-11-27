var APP_DATA = {
  "scenes": [
    {
      "id": "0-1kitchen-dining-room",
      "name": "1.Kitchen-Dining Room",
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
          "yaw": -0.38173071199944353,
          "pitch": 0.020591717370049167,
          "rotation": 0,
          "target": "1-2family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2family-room",
      "name": "2.Family Room",
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
          "yaw": -2.259940276082416,
          "pitch": 0.0685578734835186,
          "rotation": 0,
          "target": "0-1kitchen-dining-room"
        },
        {
          "yaw": -1.771360325670564,
          "pitch": -0.01234896775970995,
          "rotation": 0,
          "target": "2-3owners-suite-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3owners-suite-bedroom",
      "name": "3.Owner’s Suite Bedroom",
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
          "yaw": -0.292694497963371,
          "pitch": 0.07610131320692304,
          "rotation": 0,
          "target": "3-4owners-suite-bathroom"
        },
        {
          "yaw": 0.3305472745767055,
          "pitch": 0.10276645964139242,
          "rotation": 0,
          "target": "4-5bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4owners-suite-bathroom",
      "name": "4.Owner’s Suite Bathroom",
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
          "yaw": 3.1221534437416896,
          "pitch": 0.18289324776156235,
          "rotation": 0,
          "target": "2-3owners-suite-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5bedroom-2",
      "name": "5.Bedroom 2",
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
          "yaw": -0.0249947623460276,
          "pitch": 0.0996376909768486,
          "rotation": 0,
          "target": "5-6bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6bedroom-3",
      "name": "6.Bedroom 3",
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
          "yaw": 0.11449689646639172,
          "pitch": 0.13332043803061033,
          "rotation": 0,
          "target": "6-7hall-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7hall-bathroom",
      "name": "7.Hall Bathroom",
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
          "yaw": 2.77904172892843,
          "pitch": 0.1239629859721596,
          "rotation": 0,
          "target": "7-8rooftop-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-8rooftop-terrace",
      "name": "8.Rooftop Terrace",
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
          "yaw": 2.2889654932850316,
          "pitch": 0.06242301823817442,
          "rotation": 0,
          "target": "0-1kitchen-dining-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU 2over2 upper-Hudson",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
