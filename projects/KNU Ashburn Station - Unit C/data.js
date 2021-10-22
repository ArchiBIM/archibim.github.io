var APP_DATA = {
  "scenes": [
    {
      "id": "0-c-living-room",
      "name": "C Living Room",
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
          "yaw": 0.1971078958505874,
          "pitch": 0.29497242143272473,
          "rotation": 0,
          "target": "1-c-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-c-kitchen",
      "name": "C Kitchen",
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
          "yaw": 2.2985852736840506,
          "pitch": 0.3240229353224038,
          "rotation": 0,
          "target": "0-c-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU Ashburn Station - Unit C",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
