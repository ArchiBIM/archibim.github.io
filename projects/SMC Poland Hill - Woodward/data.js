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
          "yaw": -0.008264923900457077,
          "pitch": 0.34067192719506423,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -2.304996706716821,
          "pitch": 0.6704917479153707,
          "rotation": 0,
          "target": "13-lower-walkout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
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
          "yaw": 2.321034648822872,
          "pitch": 0.47862866329125353,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -1.1217097672734475,
          "pitch": 0.443313679522646,
          "rotation": 0,
          "target": "2-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-room",
      "name": "Dining Room",
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
          "yaw": -1.5447240609365593,
          "pitch": 0.4294141085340897,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 1.1049379905440109,
          "pitch": 0.5377169483387192,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 1.2969935657534037,
          "pitch": 0.27494022962862985,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -0.6512794478908894,
          "pitch": 0.311954270306515,
          "rotation": 0,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living Room",
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
          "yaw": 0.45190849382658094,
          "pitch": 0.4043750492611231,
          "rotation": 0,
          "target": "2-dining-room"
        },
        {
          "yaw": 0.3648517529393889,
          "pitch": 0.16062868443660072,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -0.41537666430910036,
          "pitch": 0.32745529314983557,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": 0.5248159972429995,
          "pitch": -0.1079756691337419,
          "rotation": 0,
          "target": "6-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bedroom",
      "name": "Master Bedroom",
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
          "yaw": -0.3893823335608886,
          "pitch": 0.4414756872486514,
          "rotation": 0,
          "target": "5-master-bathroom"
        },
        {
          "yaw": 0.41416268815969914,
          "pitch": 0.3564526126790071,
          "rotation": 0,
          "target": "2-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-bathroom",
      "name": "Master Bathroom",
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
          "yaw": -3.037794227719921,
          "pitch": 0.6109332090195174,
          "rotation": 0,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upper-flex-space",
      "name": "Upper Flex Space",
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
          "yaw": 0.3907038844097208,
          "pitch": 0.2817357115160881,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -3.088651492637352,
          "pitch": 0.2850366530280759,
          "rotation": 0,
          "target": "7-terrace"
        },
        {
          "yaw": -1.1819621394382018,
          "pitch": 0.30702859541139915,
          "rotation": 0,
          "target": "9-upper-bathroom"
        },
        {
          "yaw": -2.0166224216926576,
          "pitch": 0.15453900851810154,
          "rotation": 0,
          "target": "8-upper-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-terrace",
      "name": "Terrace",
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
          "yaw": 3.1151994905996556,
          "pitch": 0.28386048702931177,
          "rotation": 0,
          "target": "6-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upper-bedroom",
      "name": "Upper Bedroom",
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
          "yaw": -2.331345060344429,
          "pitch": 0.5441094793879291,
          "rotation": 0,
          "target": "6-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-upper-bathroom",
      "name": "Upper Bathroom",
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
          "yaw": 2.8869938436428235,
          "pitch": 0.44193452957299506,
          "rotation": 0,
          "target": "6-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-lower-bathroom",
      "name": "Lower Bathroom",
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
          "yaw": 0.09455897848781447,
          "pitch": 0.4697619537684101,
          "rotation": 0,
          "target": "12-lower-recreation-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-lower-den",
      "name": "Lower Den",
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
          "yaw": 2.527655940814446,
          "pitch": 0.42156643851893705,
          "rotation": 0,
          "target": "12-lower-recreation-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-lower-recreation-room",
      "name": "Lower Recreation Room",
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
          "yaw": 0.11945797936206226,
          "pitch": 0.2755032234289434,
          "rotation": 0,
          "target": "13-lower-walkout"
        },
        {
          "yaw": -0.7430307002610235,
          "pitch": 0.26883057273802535,
          "rotation": 0,
          "target": "10-lower-bathroom"
        },
        {
          "yaw": -1.012800508942373,
          "pitch": 0.33564222402312893,
          "rotation": 0,
          "target": "11-lower-den"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-lower-walkout",
      "name": "Lower Walkout",
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
          "yaw": 0.06411380900705765,
          "pitch": -0.06952892327408122,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -2.95325792603024,
          "pitch": 0.36242944741157146,
          "rotation": 0,
          "target": "12-lower-recreation-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC Polland Hill VR - Woodward B",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
