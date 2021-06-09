var APP_DATA = {
  "scenes": [
    {
      "id": "0-bacement-entry",
      "name": "Bacement-Entry",
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
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "4-first-floor-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bacement-lower",
      "name": "Bacement-Lower",
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
          "yaw": 0.11877981158307094,
          "pitch": 0.0551082591406562,
          "rotation": 0,
          "target": "0-bacement-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-first-floor-dining-room",
      "name": "First Floor-Dining Room",
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
          "yaw": -0.3521347813011637,
          "pitch": 0.4030411607539932,
          "rotation": 0,
          "target": "3-first-floor-kitchen"
        },
        {
          "yaw": -1.0478887069883047,
          "pitch": 0.21700716745446869,
          "rotation": 0,
          "target": "4-first-floor-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-first-floor-kitchen",
      "name": "First Floor-Kitchen",
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
          "yaw": -0.06984505290686727,
          "pitch": 0.25308169295868055,
          "rotation": 0,
          "target": "4-first-floor-living-room"
        },
        {
          "yaw": -2.415183687336059,
          "pitch": 0.7356370984449647,
          "rotation": 0,
          "target": "2-first-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-first-floor-living-room",
      "name": "First Floor-Living Room",
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
          "yaw": 0.9552978062975797,
          "pitch": 0.40762909218855015,
          "rotation": 0,
          "target": "8-second-floor-hall"
        },
        {
          "yaw": 0.44647306300071143,
          "pitch": 0.22367969197786586,
          "rotation": 0,
          "target": "2-first-floor-dining-room"
        },
        {
          "yaw": 0.009743089985025932,
          "pitch": 0.31963909059151874,
          "rotation": 0,
          "target": "3-first-floor-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-second-floor-bathroom-2",
      "name": "Second Floor-Bathroom 2",
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
          "yaw": -2.519379301018848,
          "pitch": 0.8639238959941142,
          "rotation": 0,
          "target": "8-second-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-second-floor-bedroom-1",
      "name": "Second Floor-Bedroom 1",
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
          "yaw": 1.300076322573812,
          "pitch": 0.7363382766225364,
          "rotation": 0,
          "target": "8-second-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-second-floor-bedroom-2",
      "name": "Second Floor-Bedroom 2",
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
          "yaw": -2.8876402686263027,
          "pitch": 0.6690613923425772,
          "rotation": 0,
          "target": "8-second-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-second-floor-hall",
      "name": "Second Floor-Hall",
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
          "yaw": -3.126635624379267,
          "pitch": 0.6748841774047722,
          "rotation": 0,
          "target": "6-second-floor-bedroom-1"
        },
        {
          "yaw": 1.9730208645533427,
          "pitch": 0.7090971837989422,
          "rotation": 0,
          "target": "7-second-floor-bedroom-2"
        },
        {
          "yaw": 0.5182744744708057,
          "pitch": 0.8520763147935035,
          "rotation": 0,
          "target": "5-second-floor-bathroom-2"
        },
        {
          "yaw": -0.31302628355922835,
          "pitch": 0.6156715016043748,
          "rotation": 0,
          "target": "10-second-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-second-floor-master-bathroom",
      "name": "Second Floor-Master Bathroom",
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
          "yaw": 0.8445306831674451,
          "pitch": 0.38681253223339596,
          "rotation": 0,
          "target": "10-second-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-second-floor-master-bedroom",
      "name": "Second Floor-Master Bedroom",
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
          "yaw": -1.4075107055780087,
          "pitch": 0.49185906387609535,
          "rotation": 0,
          "target": "9-second-floor-master-bathroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC_The-Dana_VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
