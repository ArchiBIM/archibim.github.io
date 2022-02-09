var APP_DATA = {
  "scenes": [
    {
      "id": "0-p2_family-room",
      "name": "P2_Family room",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2310016006005995,
          "pitch": 0.31188093845039333,
          "rotation": 0,
          "target": "1-p2_kitchen"
        },
        {
          "yaw": -0.5509409161782131,
          "pitch": 0.14017133151747174,
          "rotation": 0,
          "target": "2-p2_dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-p2_kitchen",
      "name": "P2_Kitchen",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1827387226506385,
          "pitch": 0.07068342920848103,
          "rotation": 0,
          "target": "2-p2_dining"
        },
        {
          "yaw": -2.843111804098804,
          "pitch": 0.39759101088737836,
          "rotation": 0,
          "target": "0-p2_family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-p2_dining",
      "name": "P2_Dining",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10455200004271603,
          "pitch": 0.0078221407353265,
          "rotation": 0,
          "target": "0-p2_family-room"
        },
        {
          "yaw": 0.022074010880125172,
          "pitch": 0.29175787399368147,
          "rotation": 0,
          "target": "1-p2_kitchen"
        },
        {
          "yaw": 0.8038431869269189,
          "pitch": -0.0316773420915446,
          "rotation": 0,
          "target": "3-p2_m-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-p2_m-bathroom",
      "name": "P2_M Bathroom",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0368493107442163,
          "pitch": 0.26467850876425913,
          "rotation": 0,
          "target": "2-p2_dining"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BBH-2201 the Heron Interior-Package 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
