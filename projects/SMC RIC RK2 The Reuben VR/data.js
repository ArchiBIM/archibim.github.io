var APP_DATA = {
  "scenes": [
    {
      "id": "0-lower-level",
      "name": "Lower Level",
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
        "yaw": 0.4644897279221034,
        "pitch": 0.13883683807164537,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9275462183795877,
          "pitch": 0.7534299398508093,
          "rotation": 0,
          "target": "1-main-level-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-main-level-entry",
      "name": "Main Level Entry",
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
        "yaw": 0.39383694076342124,
        "pitch": 0.15389838169053682,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8567940815375259,
          "pitch": 0.3455646260740579,
          "rotation": 0,
          "target": "2-main-level-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-level-dining-room",
      "name": "Main Level Dining Room",
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
        "yaw": -0.7335588820326251,
        "pitch": -0.006688457939098669,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6515593867786205,
          "pitch": 0.43698583258087353,
          "rotation": 0,
          "target": "3-main-level-kitchen"
        },
        {
          "yaw": -0.01243495673396744,
          "pitch": 0.33050931248167004,
          "rotation": 0,
          "target": "4-main-level-living-room"
        },
        {
          "yaw": -1.3861078355325844,
          "pitch": 0.5607774721081817,
          "rotation": 0,
          "target": "1-main-level-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-level-kitchen",
      "name": "Main Level Kitchen",
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
        "yaw": 0.5306301778074172,
        "pitch": 0.09367901416456093,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1765571941679589,
          "pitch": 0.3510762505997924,
          "rotation": 0,
          "target": "4-main-level-living-room"
        },
        {
          "yaw": 1.4305764150804023,
          "pitch": 0.4740989765152932,
          "rotation": 0,
          "target": "2-main-level-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main-level-living-room",
      "name": "Main Level Living Room",
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
        "yaw": 0.6088361412294852,
        "pitch": -0.00837311899083737,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1359006089919248,
          "pitch": 0.29539305570181895,
          "rotation": 0,
          "target": "2-main-level-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-main-level-master-bathroom",
      "name": "Main Level Master Bathroom",
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
          "yaw": 1.5603558813929324,
          "pitch": 0.9673306654737459,
          "rotation": 0,
          "target": "6-main-level-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-main-level-master-bedroom",
      "name": "Main Level Master Bedroom",
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
        "yaw": -1.7957369808017756,
        "pitch": 0.2748740494118991,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.136879836947589,
          "pitch": 0.5840421905950279,
          "rotation": 0,
          "target": "5-main-level-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-main-level-bedroom-2",
      "name": "Main Level Bedroom 2",
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
        "yaw": -0.168747085286455,
        "pitch": 0.1175271963681439,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8282309593008286,
          "pitch": 0.6643270161097625,
          "rotation": 0,
          "target": "8-main-level-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-main-level-bathroom",
      "name": "Main Level Bathroom",
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
        "yaw": 0.38325233398920133,
        "pitch": 0.4048271683539575,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "SMC RIC RK2 The Bethany VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
