var APP_DATA = {
  "scenes": [
    {
      "id": "0-b1-bathroom",
      "name": "B1 Bathroom",
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
          "yaw": -1.6907785251970537,
          "pitch": 0.5497635383308843,
          "rotation": 0,
          "target": "1-b1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-b1-bedroom",
      "name": "B1 Bedroom",
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
          "yaw": 2.643852468149115,
          "pitch": 0.5999344048400346,
          "rotation": 0,
          "target": "0-b1-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-b1-entry",
      "name": "B1 Entry",
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
          "yaw": 0.09430957924688244,
          "pitch": 0.504564647290696,
          "rotation": 0,
          "target": "3-b1-kitchen---living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-b1-kitchen---living-room",
      "name": "B1 Kitchen - Living Room",
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
          "yaw": 0.6459967289193926,
          "pitch": 0.25624779144437326,
          "rotation": 0,
          "target": "2-b1-entry"
        },
        {
          "yaw": -2.54822402929903,
          "pitch": 0.46791564062131386,
          "rotation": 0,
          "target": "1-b1-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FSC Dylan - Unit B1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
