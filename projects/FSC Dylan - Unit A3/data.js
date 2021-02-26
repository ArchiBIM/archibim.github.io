var APP_DATA = {
  "scenes": [
    {
      "id": "0-a3-bathroom",
      "name": "A3 Bathroom",
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
          "yaw": 0.47244880609459017,
          "pitch": 0.551103046704851,
          "rotation": 0,
          "target": "1-a3-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-a3-bedroom",
      "name": "A3 Bedroom",
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
          "yaw": 2.625139434008565,
          "pitch": 0.9236298281027686,
          "rotation": 0,
          "target": "0-a3-bathroom"
        },
        {
          "yaw": 1.0221842105534762,
          "pitch": 0.651150282966448,
          "rotation": 0,
          "target": "2-a3-kitchen---living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-a3-kitchen---living-room",
      "name": "A3 Kitchen - Living Room",
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
          "yaw": 0.4776482235687318,
          "pitch": 0.26340884525637165,
          "rotation": 0,
          "target": "3-a3-entry"
        },
        {
          "yaw": 0.9574204113799514,
          "pitch": 0.6114154030132788,
          "rotation": 0,
          "target": "1-a3-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-a3-entry",
      "name": "A3 Entry",
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
          "yaw": 0.280055130814139,
          "pitch": 0.45062025538388184,
          "rotation": 0,
          "target": "1-a3-bedroom"
        },
        {
          "yaw": 0.38186505274052607,
          "pitch": 0.25054935161254477,
          "rotation": 0,
          "target": "2-a3-kitchen---living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FSC Dylan - Unit A3",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
