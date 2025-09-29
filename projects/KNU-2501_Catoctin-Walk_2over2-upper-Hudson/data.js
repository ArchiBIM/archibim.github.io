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
          "yaw": -0.5693216817249134,
          "pitch": 0.043654939145232774,
          "rotation": 0,
          "target": "1-2family-room"
        },
        {
          "yaw": -1.9573807262391245,
          "pitch": -0.36834947822768527,
          "rotation": 0,
          "target": "2-3owners-suite-bedroom"
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
          "yaw": -2.2581658295839304,
          "pitch": 0.1276495415849439,
          "rotation": 0,
          "target": "0-1kitchen-dining-room"
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
          "yaw": -0.28483767537605686,
          "pitch": 0.05535223892515262,
          "rotation": 0,
          "target": "3-4owners-suite-bathroom"
        },
        {
          "yaw": 0.27722562535813466,
          "pitch": -0.1047258373543194,
          "rotation": 0,
          "target": "7-8rooftop-terrace"
        },
        {
          "yaw": 0.26574286289947935,
          "pitch": 0.2192521183999787,
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
          "yaw": 3.11164532164881,
          "pitch": 0.04522833224050693,
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
          "yaw": -0.03331113092212945,
          "pitch": 0.24089347742998868,
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
          "yaw": 0.13323384438722563,
          "pitch": 0.3160322178536763,
          "rotation": 0,
          "target": "6-7hall-bathroom"
        },
        {
          "yaw": 0.03503909278389372,
          "pitch": 0.039133318406047835,
          "rotation": 0,
          "target": "2-3owners-suite-bedroom"
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
          "yaw": 2.5847144993036846,
          "pitch": 0.10227990489613603,
          "rotation": 0,
          "target": "5-6bedroom-3"
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
          "yaw": 2.305351970650584,
          "pitch": 0.02412598702924562,
          "rotation": 0,
          "target": "0-1kitchen-dining-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU-Catoctin Walk-2over2 upper-Hudson",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
