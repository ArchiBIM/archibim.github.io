var APP_DATA = {
  "scenes": [
    {
      "id": "0-c5-guest-bedroom",
      "name": "C5 Guest Bedroom",
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
          "yaw": 2.001083124337846,
          "pitch": 0.7266439167495786,
          "rotation": 0,
          "target": "1-c5-kitchen---living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-c5-kitchen---living",
      "name": "C5 Kitchen - Living",
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
          "yaw": 2.0417460355045574,
          "pitch": 0.46458384763081106,
          "rotation": 0,
          "target": "0-c5-guest-bedroom"
        },
        {
          "yaw": 0.8797622497313853,
          "pitch": 0.3399959908010324,
          "rotation": 0,
          "target": "3-c5-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-c5-master-bathroom",
      "name": "C5 Master Bathroom",
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
          "yaw": -1.836089484324411,
          "pitch": 0.6520379046119196,
          "rotation": 0,
          "target": "3-c5-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-c5-master-bedroom",
      "name": "C5 Master Bedroom",
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
          "yaw": 1.8069268658081086,
          "pitch": 0.48013679517820407,
          "rotation": 0,
          "target": "2-c5-master-bathroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FSC Dylan - Unit C5",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
