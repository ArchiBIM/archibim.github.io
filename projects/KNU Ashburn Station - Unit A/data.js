var APP_DATA = {
  "scenes": [
    {
      "id": "0-unit-a-kitchen---living",
      "name": "Unit A Kitchen - Living",
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
          "yaw": 2.4881642638520667,
          "pitch": 0.798768212288941,
          "rotation": 0,
          "target": "1-unit-a-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-unit-a-bedroom",
      "name": "Unit A Bedroom",
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
          "yaw": 2.07513914040927,
          "pitch": 0.7135898258627087,
          "rotation": 0,
          "target": "0-unit-a-kitchen---living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-unit-a-bathroom",
      "name": "Unit A Bathroom",
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
          "yaw": -2.461889199594399,
          "pitch": 0.9850825474071243,
          "rotation": 0,
          "target": "0-unit-a-kitchen---living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU Ashburn Station - Unit A",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
