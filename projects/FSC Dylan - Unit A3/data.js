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
          "yaw": 0.49904937933233384,
          "pitch": 0.5373482458032335,
          "rotation": 0,
          "target": "3-a3-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-a3-den",
      "name": "A3 Den",
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
          "yaw": 0.3909231359438117,
          "pitch": 0.396274296566709,
          "rotation": 0,
          "target": "2-a3-kitchen---living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-a3-kitchen---living",
      "name": "A3 Kitchen - Living",
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
          "yaw": 0.4751049811564325,
          "pitch": 0.2533623656178463,
          "rotation": 0,
          "target": "1-a3-den"
        },
        {
          "yaw": 0.967886433093188,
          "pitch": 0.5835721681023429,
          "rotation": 0,
          "target": "3-a3-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-a3-master-bedroom",
      "name": "A3 Master Bedroom",
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
          "yaw": 2.5977752898976405,
          "pitch": 0.7174574328425543,
          "rotation": 0,
          "target": "0-a3-bathroom"
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
