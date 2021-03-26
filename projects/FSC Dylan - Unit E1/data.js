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
          "yaw": -1.056994458771456,
          "pitch": 0.7154587489434086,
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
          "yaw": -0.3737266447266947,
          "pitch": 0.6051641177476341,
          "rotation": 0,
          "target": "0-e1-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-e1-kitchen--living",
      "name": "E1 Kitchen- Living",
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
          "yaw": 2.771946876463378,
          "pitch": 0.5661867857075364,
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
