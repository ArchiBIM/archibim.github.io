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
          "yaw": -1.0864771850505797,
          "pitch": 0.6765466404451228,
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
          "yaw": -0.34491486412811767,
          "pitch": 0.6346591904985566,
          "rotation": 0,
          "target": "0-e1-bathroom"
        },
        {
          "yaw": -2.788002248997344,
          "pitch": 0.5948261189288999,
          "rotation": 0,
          "target": "2-e1-kitchen--living"
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
          "yaw": 2.7479072104162077,
          "pitch": 0.6231198154548299,
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
