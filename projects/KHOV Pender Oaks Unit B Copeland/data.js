var APP_DATA = {
  "scenes": [
    {
      "id": "0-unit-b---living-room",
      "name": "Unit B - Living Room",
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
        "yaw": -2.8732448512767856,
        "pitch": 0.012139991943506345,
        "fov": 1.571795826961563
      },
      "linkHotspots": [
        {
          "yaw": -2.7007329302172245,
          "pitch": 0.32572359627613956,
          "rotation": 0,
          "target": "1-unit-b---kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-unit-b---kitchen",
      "name": "Unit B - Kitchen",
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
        "yaw": -1.1190236696074294,
        "pitch": 0.012604160331601832,
        "fov": 1.571795826961563
      },
      "linkHotspots": [
        {
          "yaw": 0.041601657542091885,
          "pitch": 0.1912064543768608,
          "rotation": 0,
          "target": "0-unit-b---living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KHOV Pender Oaks Unit B - Copeland",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
