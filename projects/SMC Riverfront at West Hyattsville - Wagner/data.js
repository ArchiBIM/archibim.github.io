var APP_DATA = {
  "scenes": [
    {
      "id": "0-basement",
      "name": "Basement",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0807061159091393,
          "pitch": 0.7002808450287823,
          "rotation": 0,
          "target": "3-first-floor---stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-first-floor---kitchen",
      "name": "First Floor - Kitchen",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1555537337371291,
          "pitch": 0.2711714953602353,
          "rotation": 0,
          "target": "2-first-floor---living-room"
        },
        {
          "yaw": -2.6272621484920027,
          "pitch": 0.6558689658743084,
          "rotation": 0,
          "target": "4-first-floor---dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-first-floor---living-room",
      "name": "First Floor - Living Room",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4593965717014648,
          "pitch": 0.3835778784950268,
          "rotation": 0,
          "target": "3-first-floor---stairs"
        },
        {
          "yaw": -2.071500191150612,
          "pitch": 0.37200127683691875,
          "rotation": 0,
          "target": "1-first-floor---kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-first-floor---stairs",
      "name": "First Floor - Stairs",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4454784075472258,
          "pitch": 0.4915598986047325,
          "rotation": 0,
          "target": "2-first-floor---living-room"
        },
        {
          "yaw": 1.5144817671959139,
          "pitch": 0.35392693279015397,
          "rotation": 0,
          "target": "4-first-floor---dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-first-floor---dining-room",
      "name": "First-Floor - Dining Room",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8630816162087172,
          "pitch": 0.41751690718187007,
          "rotation": 0,
          "target": "1-first-floor---kitchen"
        },
        {
          "yaw": -2.444479495692871,
          "pitch": 0.3553105617799286,
          "rotation": 0,
          "target": "3-first-floor---stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-second-floor---bedroom-2",
      "name": "Second Floor - Bedroom 2",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.792841116574591,
          "pitch": 0.7084961778570928,
          "rotation": 0,
          "target": "6-second-floor---bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-second-floor---bedroom-3",
      "name": "Second Floor - Bedroom 3",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1964147757056,
          "pitch": 0.7366326323060886,
          "rotation": 0,
          "target": "5-second-floor---bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-second-floor---master-bathroom",
      "name": "Second Floor - Master Bathroom",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.004711322799544,
          "pitch": 0.514583024198096,
          "rotation": 0,
          "target": "8-second-floor---master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-second-floor---master-bedroom",
      "name": "Second Floor - Master Bedroom",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.119059428186496,
          "pitch": 0.9120257058886931,
          "rotation": 0,
          "target": "7-second-floor---master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-third-floor---loft",
      "name": "Third Floor - Loft",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6298962136969344,
          "pitch": 0.4249511842085436,
          "rotation": 0,
          "target": "10-third-floor---terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-third-floor---terrace",
      "name": "Third Floor - Terrace",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1231063185051298,
          "pitch": 0.37299603146024296,
          "rotation": 0,
          "target": "9-third-floor---loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC Wagner VR Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
