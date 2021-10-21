var APP_DATA = {
  "scenes": [
    {
      "id": "0-c-kitchen",
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
        "yaw": 0.101381386790111,
        "pitch": 0.18591472998111414,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3015200693452176,
          "pitch": 0.3142402403827482,
          "rotation": 0,
          "target": "1-c-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-c-living-room",
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
          "yaw": 0.19342409887937784,
          "pitch": 0.3058691184643578,
          "rotation": 0,
          "target": "0-c-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU Ashburn - Unit C",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
