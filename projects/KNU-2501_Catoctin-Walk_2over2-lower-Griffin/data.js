var APP_DATA = {
  "scenes": [
    {
      "id": "0-1kitchen-dining-room",
      "name": "1.Kitchen-Dining Room",
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
          "yaw": 2.5411922877267203,
          "pitch": 0.3484162595270899,
          "rotation": 0,
          "target": "1-2family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2family-room",
      "name": "2.Family Room",
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
          "yaw": -0.4596402166883351,
          "pitch": 0.32623187718693636,
          "rotation": 0,
          "target": "0-1kitchen-dining-room"
        },
        {
          "yaw": 0.369685470361091,
          "pitch": -0.16402133242747574,
          "rotation": 0,
          "target": "2-3owners-suite-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3owners-suite-bedroom",
      "name": "3.Owner’s Suite Bedroom",
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
          "yaw": -0.6816621308308104,
          "pitch": 0.11009070252418773,
          "rotation": 0,
          "target": "3-4owners-suite-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4owners-suite-bathroom",
      "name": "4.Owner’s Suite Bathroom",
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
          "yaw": 3.117574665492775,
          "pitch": 0.12590090466271775,
          "rotation": 0,
          "target": "2-3owners-suite-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5bedroom-2",
      "name": "5.Bedroom 2",
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
          "yaw": -2.820713469301692,
          "pitch": 0.09364104536046369,
          "rotation": 0,
          "target": "5-6hall-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6hall-bathroom",
      "name": "6.Hall Bathroom",
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
          "yaw": 2.9953813089598444,
          "pitch": 0.1604651139178479,
          "rotation": 0,
          "target": "4-5bedroom-2"
        },
        {
          "yaw": -3.0610112337178297,
          "pitch": 0.32215815369982437,
          "rotation": 0,
          "target": "6-7bedroom-3-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7bedroom-3-family-room",
      "name": "7.Bedroom 3-Family Room",
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
          "yaw": -1.765467323096093,
          "pitch": 0.32234530634598,
          "rotation": 0,
          "target": "5-6hall-bathroom"
        },
        {
          "yaw": 3.0915281100378262,
          "pitch": 0.22470180204521917,
          "rotation": 0,
          "target": "2-3owners-suite-bedroom"
        },
        {
          "yaw": 2.860812879293724,
          "pitch": 0.46620446722157993,
          "rotation": 0,
          "target": "1-2family-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU-2501 Catoctin Walk_2over2 lower - Griffin",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
