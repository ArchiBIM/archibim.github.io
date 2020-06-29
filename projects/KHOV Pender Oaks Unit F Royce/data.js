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
          "yaw": -0.8013922059879572,
          "pitch": 0.3049869596895789,
          "rotation": 0,
          "target": "1-kitchen-living"
        },
        {
          "yaw": 1.4078348702922696,
          "pitch": 0.3305808679258142,
          "rotation": 0,
          "target": "3-master-bathroom"
        },
        {
          "yaw": 1.353456828811824,
          "pitch": 0.5222440264255965,
          "rotation": 0,
          "target": "2-master-bedroom"
        },
        {
          "yaw": 2.9384680861506194,
          "pitch": 0.45527669365390544,
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
          "yaw": 1.107765466505068,
          "pitch": 0.23735786011134508,
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
          "yaw": 3.1009110369809303,
          "pitch": 0.23747247052574671,
          "rotation": 0,
          "target": "3-master-bathroom"
        },
        {
          "yaw": -3.02038332002709,
          "pitch": 0.33366223703334086,
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
          "yaw": 1.807867046297372,
          "pitch": 0.44119422702878275,
          "rotation": 0,
          "target": "2-master-bedroom"
        },
        {
          "yaw": 1.3603509051194784,
          "pitch": 0.5579417799630377,
          "rotation": 0,
          "target": "0-foyer-kitchen"
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
          "yaw": 2.8261213993547285,
          "pitch": 0.2560831471468994,
          "rotation": 0,
          "target": "5-bathroom-2"
        },
        {
          "yaw": 2.2998522090878257,
          "pitch": 0.24476166731851734,
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
      "linkHotspots": [
        {
          "yaw": 0.3729999643103916,
          "pitch": 0.33622299674298617,
          "rotation": 0,
          "target": "0-foyer-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KHOV VR Pender Oaks-F Unit Royce",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
