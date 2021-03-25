var APP_DATA = {
  "scenes": [
    {
      "id": "0-b1-den",
      "name": "B1 Den",
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
          "yaw": 0.8525823896236915,
          "pitch": 0.5865015745367863,
          "rotation": 0,
          "target": "1-b1-kitchen---living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-b1-kitchen---living",
      "name": "B1 Kitchen - Living",
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
          "yaw": 0.5944376173175918,
          "pitch": 0.2544282198814152,
          "rotation": 0,
          "target": "0-b1-den"
        },
        {
          "yaw": -2.569287240287869,
          "pitch": 0.47314264267116357,
          "rotation": 0,
          "target": "3-b1-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-b1-master-bathroom",
      "name": "B1 Master Bathroom",
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
          "yaw": -1.701442274821904,
          "pitch": 0.571428256046298,
          "rotation": 0,
          "target": "3-b1-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-b1-master-bedroom",
      "name": "B1 Master Bedroom",
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
          "yaw": 2.6474725413637046,
          "pitch": 0.5979664561255795,
          "rotation": 0,
          "target": "2-b1-master-bathroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FSC Dylan - Unit B1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
