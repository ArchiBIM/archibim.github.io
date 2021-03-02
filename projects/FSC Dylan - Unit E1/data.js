var APP_DATA = {
  "scenes": [
    {
      "id": "0-e1-bathroom",
      "name": "E1 Bathroom",
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
          "yaw": -1.0717549000595774,
          "pitch": 0.6870930596048623,
          "rotation": 0,
          "target": "1-e1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-e1-bedroom",
      "name": "E1 Bedroom",
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
          "yaw": -0.32624170882828807,
          "pitch": 0.7356069454822745,
          "rotation": 0,
          "target": "0-e1-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-e1-kitchen---living-room",
      "name": "E1 Kitchen - Living Room",
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
          "yaw": 2.8024319118363845,
          "pitch": 0.6392161643686212,
          "rotation": 0,
          "target": "1-e1-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FSC Dylan - Unit E1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
