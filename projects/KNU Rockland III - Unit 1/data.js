var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer-rec-room",
      "name": "Foyer-Rec. Room",
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
          "yaw": -0.15888712010148254,
          "pitch": -0.39388261428729265,
          "rotation": 0,
          "target": "1-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-family-room",
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
          "yaw": -2.498617961721134,
          "pitch": 0.45281269748133646,
          "rotation": 0,
          "target": "0-foyer-rec-room"
        },
        {
          "yaw": 2.9408787266844936,
          "pitch": 0.20744690904217578,
          "rotation": 0,
          "target": "2-kitchen-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-dining-room",
      "name": "Kitchen-Dining Room",
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
          "yaw": 2.8646407229936823,
          "pitch": 0.2143032916201335,
          "rotation": 0,
          "target": "1-family-room"
        },
        {
          "yaw": 1.6443845388034273,
          "pitch": -0.20633935317357732,
          "rotation": 0,
          "target": "3-owners-suite-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-owners-suite-bedroom",
      "name": "Owner’s Suite Bedroom",
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
          "yaw": 1.7527347063105525,
          "pitch": 0.051355549021742775,
          "rotation": 0,
          "target": "4-owners-suite-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-owners-suite-bathroom",
      "name": "Owner’s Suite Bathroom",
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
          "yaw": -2.734767474416948,
          "pitch": 0.4370145154438596,
          "rotation": 0,
          "target": "3-owners-suite-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-2",
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
      "linkHotspots": [
        {
          "yaw": 0.5881644814597848,
          "pitch": 0.10296412580955305,
          "rotation": 0,
          "target": "6-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom-2",
      "name": "Bathroom 2",
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
          "yaw": 2.3506838191547965,
          "pitch": 0.1791660746205963,
          "rotation": 0,
          "target": "5-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-loft",
      "name": "Loft",
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
          "yaw": -0.03778220831242507,
          "pitch": 0.051218513711905445,
          "rotation": 0,
          "target": "8-rooftop-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-rooftop-terrace",
      "name": "Rooftop Terrace",
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
          "yaw": -3.0297241675550435,
          "pitch": 0.1439849512833824,
          "rotation": 0,
          "target": "7-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU-2202 Rockland III (BrambletonLPA4)",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
