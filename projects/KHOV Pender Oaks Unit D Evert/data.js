var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer-den",
      "name": "Foyer-Den",
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
          "yaw": 1.047452453656101,
          "pitch": 0.43705385593616164,
          "rotation": 0,
          "target": "1-kitchen-living"
        },
        {
          "yaw": 0.43849823256736187,
          "pitch": 0.09322461740164023,
          "rotation": 0,
          "target": "2-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-living",
      "name": "Kitchen-Living",
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
          "yaw": 2.798840963100064,
          "pitch": 0.2677009181237935,
          "rotation": 0,
          "target": "0-foyer-den"
        },
        {
          "yaw": -2.3297619480171328,
          "pitch": 0.4677327821717121,
          "rotation": 0,
          "target": "2-master-bedroom"
        },
        {
          "yaw": 1.8840278946144045,
          "pitch": 0.35104587596415904,
          "rotation": 0,
          "target": "5-bathroom-2"
        },
        {
          "yaw": 1.8045450603370057,
          "pitch": 0.5097594693554797,
          "rotation": 0,
          "target": "4-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-master-bedroom",
      "name": "Master Bedroom",
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
          "yaw": -2.932452230442994,
          "pitch": 0.3366182758239269,
          "rotation": 0,
          "target": "3-master-bathroom"
        },
        {
          "yaw": 2.2764700772542055,
          "pitch": 0.3947859396656881,
          "rotation": 0,
          "target": "1-kitchen-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-master-bathroom",
      "name": "Master Bathroom",
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
          "yaw": 1.2881473750298866,
          "pitch": 0.3265033779307167,
          "rotation": 0,
          "target": "2-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-2",
      "name": "Bedroom 2",
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
          "yaw": -2.575533742961115,
          "pitch": 0.29311723202932427,
          "rotation": 0,
          "target": "1-kitchen-living"
        },
        {
          "yaw": -2.975903629842291,
          "pitch": 0.25533904021176923,
          "rotation": 0,
          "target": "5-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bathroom-2",
      "name": "Bathroom 2",
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
          "yaw": 0.0770434942524556,
          "pitch": 0.34438133632750123,
          "rotation": 0,
          "target": "1-kitchen-living"
        },
        {
          "yaw": 0.4038363691026543,
          "pitch": 0.6158635338561655,
          "rotation": 0,
          "target": "4-bedroom-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KHOV Pender Oaks Unit D Evert",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
