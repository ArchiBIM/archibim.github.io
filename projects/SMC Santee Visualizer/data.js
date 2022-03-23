var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen-living-1",
      "name": "Kitchen-Living-1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1005269093556116,
          "pitch": 0.4578835198148923,
          "rotation": 0,
          "target": "1-kitchen-living-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-living-2",
      "name": "Kitchen-Living-2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10961578246852355,
          "pitch": 0.2581674935674645,
          "rotation": 0,
          "target": "0-kitchen-living-1"
        },
        {
          "yaw": -0.5539811168385178,
          "pitch": 0.3539793570436771,
          "rotation": 0,
          "target": "2-kitchen-living-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-living-3",
      "name": "Kitchen-Living-3",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5512314692039144,
          "pitch": 0.4912943731153554,
          "rotation": 0,
          "target": "1-kitchen-living-2"
        },
        {
          "yaw": -0.5914976118951287,
          "pitch": 0.4465824613746143,
          "rotation": 0,
          "target": "0-kitchen-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom-1",
      "name": "Bathroom-1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.00753913134489359,
          "pitch": 0.8776879033773994,
          "rotation": 0,
          "target": "4-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom-2",
      "name": "Bathroom-2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11215452886833077,
          "pitch": 0.8830548919049761,
          "rotation": 0,
          "target": "4-bathroom-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC Santee - Exterior Visualizer",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
