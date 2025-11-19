var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry-with-laundry",
      "name": "Entry with Laundry",
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
          "yaw": -0.031043512048938737,
          "pitch": 0.13589081212606757,
          "rotation": 0,
          "target": "1-living-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-dining",
      "name": "Living-Dining",
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
          "yaw": 0.14247754839400883,
          "pitch": 0.013253155395286598,
          "rotation": 0,
          "target": "2-primary-bedroom"
        },
        {
          "yaw": -2.292639918000713,
          "pitch": 0.018177102893597308,
          "rotation": 0,
          "target": "4-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-primary-bedroom",
      "name": "Primary Bedroom",
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
          "yaw": -2.111201476734511,
          "pitch": 0.07671552237979462,
          "rotation": 0,
          "target": "3-primary-bath"
        },
        {
          "yaw": 2.281608594913015,
          "pitch": 0.05823745317846196,
          "rotation": 0,
          "target": "1-living-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-primary-bath",
      "name": "Primary Bath",
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
          "yaw": -2.0795652594714937,
          "pitch": 0.026442752748334186,
          "rotation": 0,
          "target": "2-primary-bedroom"
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
          "yaw": -1.3680571936084789,
          "pitch": 0.11390635998291287,
          "rotation": 0,
          "target": "1-living-dining"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU Birchwood D3",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
