var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer-kitchen",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.608071859423818,
          "pitch": 0.37817865054078936,
          "rotation": 0,
          "target": "2-master-bedroom"
        },
        {
          "yaw": -0.8079090007977321,
          "pitch": 0.32424067740253015,
          "rotation": 0,
          "target": "1-kitchen-living"
        },
        {
          "yaw": 1.92075000907119,
          "pitch": 0.6285701358919802,
          "rotation": 0,
          "target": "4-bedroom-2"
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
          "yaw": 0.985296187390162,
          "pitch": 0.3084463913662354,
          "rotation": 0,
          "target": "0-foyer-kitchen"
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
          "yaw": 1.120432123695453,
          "pitch": 0.4327980631902548,
          "rotation": 0,
          "target": "3-master-bathroom"
        },
        {
          "yaw": 2.7588409625121333,
          "pitch": 0.23999862553020535,
          "rotation": 0,
          "target": "0-foyer-kitchen"
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
          "yaw": -0.9938503265568066,
          "pitch": 0.545543922289152,
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
          "yaw": -2.6862313561246633,
          "pitch": 0.3083886433134211,
          "rotation": 0,
          "target": "0-foyer-kitchen"
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
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "KHOV VR Pender Oaks-E Unit Larkin",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
