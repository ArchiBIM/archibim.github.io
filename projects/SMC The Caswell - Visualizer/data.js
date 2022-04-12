var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen-living-1",
      "name": "Kitchen-Living 1",
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
          "yaw": 1.5386203322429282,
          "pitch": 0.31738317869601396,
          "rotation": 0,
          "target": "1-kitchen-living-2"
        },
        {
          "yaw": 2.070701700595073,
          "pitch": -0.05244607888630881,
          "rotation": 0,
          "target": "2-owners-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-living-2",
      "name": "Kitchen-Living 2",
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
          "yaw": -1.514642362210246,
          "pitch": 0.3512981198664047,
          "rotation": 0,
          "target": "1-kitchen-living-2"
        },
        {
          "yaw": 2.226249478996964,
          "pitch": -0.26061122025346073,
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
  "name": "The Caswell",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
