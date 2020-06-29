var APP_DATA = {
  "scenes": [
    {
      "id": "0-bedroom",
      "name": "Bedroom",
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
          "yaw": 2.9047750592832946,
          "pitch": 0.5511033077243184,
          "rotation": 0,
          "target": "3-living-room--kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-master-bedroom",
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
          "yaw": 1.279067330729422,
          "pitch": 0.5293633053379416,
          "rotation": 0,
          "target": "2-bathroom"
        },
        {
          "yaw": -0.2873357739226936,
          "pitch": 0.3954898087867793,
          "rotation": 0,
          "target": "3-living-room--kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom",
      "name": "Bathroom",
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
          "yaw": -2.6765486092166526,
          "pitch": 0.7267732628195738,
          "rotation": 0,
          "target": "1-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room--kitchen",
      "name": "Living Room / Kitchen",
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
          "yaw": 1.9951583242499726,
          "pitch": 0.37371817251105455,
          "rotation": 0,
          "target": "1-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FSC Dylan VR - Unit C5",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
