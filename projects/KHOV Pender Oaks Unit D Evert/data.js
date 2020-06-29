var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer-den",
      "name": "Foyer-Den",
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
          "yaw": 1.1797126166582004,
          "pitch": 0.33732998615893095,
          "rotation": 0,
          "target": "1-kitchen-living"
        },
        {
          "yaw": 0.4534521877139355,
          "pitch": 0.07982207257646756,
          "rotation": 0,
          "target": "2-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-living",
      "name": "Kitchen-Living",
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
          "yaw": 2.8428324397638685,
          "pitch": 0.24554389058255666,
          "rotation": 0,
          "target": "0-foyer-den"
        },
        {
          "yaw": -2.4689374892098144,
          "pitch": 0.40522980400803377,
          "rotation": 0,
          "target": "2-master-bedroom"
        },
        {
          "yaw": 2.0909186083835225,
          "pitch": 0.515664321343241,
          "rotation": 0,
          "target": "4-bedroom-2"
        },
        {
          "yaw": 2.0433360391610904,
          "pitch": 0.35105332276168255,
          "rotation": 0,
          "target": "5-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-master-bedroom",
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
          "yaw": -3.0212399554367746,
          "pitch": 0.2537820482693398,
          "rotation": 0,
          "target": "3-master-bathroom"
        },
        {
          "yaw": 2.2856488231623437,
          "pitch": 0.3442989582650391,
          "rotation": 0,
          "target": "1-kitchen-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-master-bathroom",
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
          "yaw": 1.3116780698471882,
          "pitch": 0.3989922574491551,
          "rotation": 0,
          "target": "2-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-2",
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
          "yaw": -2.5720924390475446,
          "pitch": 0.3035060646959291,
          "rotation": 0,
          "target": "1-kitchen-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bathroom-2",
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
          "yaw": 2.006891446302121,
          "pitch": 0.6138822014623102,
          "rotation": 0,
          "target": "4-bedroom-2"
        },
        {
          "yaw": 1.6256600476861376,
          "pitch": 0.3552786716304226,
          "rotation": 0,
          "target": "1-kitchen-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KHOV VR Pender Oaks-D Unit Evert",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
