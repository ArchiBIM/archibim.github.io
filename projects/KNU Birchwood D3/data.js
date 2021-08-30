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
          "yaw": -0.01732331577578705,
          "pitch": 0.2436143081114608,
          "rotation": 0,
          "target": "1-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-livingroom",
      "name": "Livingroom",
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
          "yaw": -1.0922178269241236,
          "pitch": 0.07063038201821925,
          "rotation": 0,
          "target": "0-entry-with-laundry"
        },
        {
          "yaw": 0.14502758399211046,
          "pitch": -0.005529115551663466,
          "rotation": 0,
          "target": "2-master-bedroom"
        },
        {
          "yaw": -2.2710310069320503,
          "pitch": 0.10452441702757653,
          "rotation": 0,
          "target": "4-bedroom-2"
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
          "yaw": -2.1600483577146044,
          "pitch": 0.11757039712519912,
          "rotation": 0,
          "target": "3-master-bathroom"
        },
        {
          "yaw": 0.6722005612275499,
          "pitch": 0.11269603682833207,
          "rotation": 0,
          "target": "1-livingroom"
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
          "yaw": -2.100234624774947,
          "pitch": 0.21644791536055408,
          "rotation": 0,
          "target": "2-master-bedroom"
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
          "yaw": -1.3406833461016916,
          "pitch": 0.1071616424741908,
          "rotation": 0,
          "target": "1-livingroom"
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
