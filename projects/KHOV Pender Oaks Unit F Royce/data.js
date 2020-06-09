var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen-living",
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
        "fov": 1.5707963267948965
      },
      "linkHotspots": [
        {
          "yaw": 1.1061332180991971,
          "pitch": 0.253258751258878,
          "rotation": 0,
          "target": "1-foyer-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-foyer-kitchen",
      "name": "Foyer-Kitchen",
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
        "yaw": -0.05907229897180599,
        "pitch": -0.000004664053047775951,
        "fov": 1.4108347438219848
      },
      "linkHotspots": [
        {
          "yaw": -0.8143628959584408,
          "pitch": 0.24857499317178266,
          "rotation": 0,
          "target": "0-kitchen-living"
        },
        {
          "yaw": 2.9578981350965243,
          "pitch": 0.435776200485936,
          "rotation": 0,
          "target": "5-bedroom-2"
        },
        {
          "yaw": 2.967391563021269,
          "pitch": 0.1760126582913788,
          "rotation": 0,
          "target": "2-bathroom-2"
        },
        {
          "yaw": 1.40763441933389,
          "pitch": 0.14774567592986187,
          "rotation": 0,
          "target": "3-master-bathroom"
        },
        {
          "yaw": 1.3153116492759142,
          "pitch": 0.40213399969296937,
          "rotation": 0,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom-2",
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
        "fov": 1.5707963267948965
      },
      "linkHotspots": [
        {
          "yaw": 1.1515079384571613,
          "pitch": 0.2861775398229174,
          "rotation": 0,
          "target": "1-foyer-kitchen"
        },
        {
          "yaw": 0.7785479398043584,
          "pitch": 0.6521327099815402,
          "rotation": 0,
          "target": "5-bedroom-2"
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
        "fov": 1.5707963267948965
      },
      "linkHotspots": [
        {
          "yaw": -0.4469039205325327,
          "pitch": 0.44747910786019496,
          "rotation": 0,
          "target": "4-master-bedroom"
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
        "fov": 1.5707963267948965
      },
      "linkHotspots": [
        {
          "yaw": 3.1103142192911024,
          "pitch": 0.2620138915947319,
          "rotation": 0,
          "target": "3-master-bathroom"
        },
        {
          "yaw": -3.0127492890777905,
          "pitch": 0.3274390748468736,
          "rotation": 0,
          "target": "1-foyer-kitchen"
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
        "fov": 1.5707963267948965
      },
      "linkHotspots": [
        {
          "yaw": 3.0184992254674805,
          "pitch": 0.12577273631932684,
          "rotation": 0,
          "target": "2-bathroom-2"
        },
        {
          "yaw": 2.302841821129209,
          "pitch": 0.23539917027900792,
          "rotation": 0,
          "target": "1-foyer-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KHOV Pender Oaks Unit F Roice",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
