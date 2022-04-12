var APP_DATA = {
  "scenes": [
    {
      "id": "0-family-room",
      "name": "Family Room",
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
          "yaw": -0.35194771555931936,
          "pitch": 0.24174050352455367,
          "rotation": 0,
          "target": "1-kitchen-2"
        },
        {
          "yaw": -0.8044984898195437,
          "pitch": 0.2713481950606287,
          "rotation": 0,
          "target": "2-kitchen-1"
        },
        {
          "yaw": 0.8124468314487974,
          "pitch": 0.24138768557133794,
          "rotation": 0,
          "target": "3-owners-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-2",
      "name": "Kitchen 2",
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
          "yaw": -2.2287056373140555,
          "pitch": 0.6025447147149041,
          "rotation": 0,
          "target": "2-kitchen-1"
        },
        {
          "yaw": 2.4579666407881673,
          "pitch": 0.07215213876730253,
          "rotation": 0,
          "target": "0-family-room"
        },
        {
          "yaw": 1.7464674711756523,
          "pitch": -0.14024469198815126,
          "rotation": 0,
          "target": "3-owners-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-1",
      "name": "Kitchen 1",
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
          "yaw": -0.11958911340108713,
          "pitch": 0.4858588335959819,
          "rotation": 0,
          "target": "1-kitchen-2"
        },
        {
          "yaw": 0.6438131382193326,
          "pitch": -0.1041567827591976,
          "rotation": 0,
          "target": "3-owners-bath"
        },
        {
          "yaw": 0.969307639056403,
          "pitch": 0.2642491871071968,
          "rotation": 0,
          "target": "0-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-owners-bath",
      "name": "Owners Bath",
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
          "yaw": -1.6673462891196031,
          "pitch": 0.5172280570822636,
          "rotation": 0,
          "target": "0-family-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Caswell",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
