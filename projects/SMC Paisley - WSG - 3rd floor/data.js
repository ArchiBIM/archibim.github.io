var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "Kitchen",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -1.268551068176233,
        "pitch": -0.06922988415502118,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7809071122813691,
          "pitch": 0.3847916081392171,
          "rotation": 0,
          "target": "1-breakfast"
        },
        {
          "yaw": 2.2244799888561264,
          "pitch": 0.2773813447897915,
          "rotation": 0,
          "target": "2-great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-breakfast",
      "name": "Breakfast",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.3361828070179804,
        "pitch": -0.038895909044445176,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5706633498745504,
          "pitch": 0.16986166042659967,
          "rotation": 0,
          "target": "2-great-room"
        },
        {
          "yaw": 0.8104623176919894,
          "pitch": 0.43716207359803505,
          "rotation": 0,
          "target": "0-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-great-room",
      "name": "Great Room",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.39799558148794745,
        "pitch": -0.002992847441428026,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8694855703832776,
          "pitch": 0.35306290924666506,
          "rotation": 0,
          "target": "0-kitchen"
        },
        {
          "yaw": 0.03524863521657551,
          "pitch": 0.195174572286831,
          "rotation": 0,
          "target": "1-breakfast"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC Paisley 3-rd floor",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
