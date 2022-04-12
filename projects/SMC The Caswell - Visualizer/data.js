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
          "yaw": -0.90513596173491,
          "pitch": 0.2708554322572514,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 1.0478203213488584,
          "pitch": -0.2286221751526245,
          "rotation": 0,
          "target": "2-owners-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
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
          "yaw": 0.9773947616041703,
          "pitch": 0.2396803436351167,
          "rotation": 0,
          "target": "0-family-room"
        },
        {
          "yaw": 0.46257810904086405,
          "pitch": -0.10941059554320276,
          "rotation": 0,
          "target": "2-owners-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-owners-bath",
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
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "SMC-Caswell Interior Visualizer",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
