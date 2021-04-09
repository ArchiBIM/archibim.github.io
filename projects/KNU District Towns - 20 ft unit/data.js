var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
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
          "yaw": 1.269945495183034,
          "pitch": 0.4219765483001403,
          "rotation": 0,
          "target": "1-flex-space"
        },
        {
          "yaw": -0.09425740564327612,
          "pitch": -0.20734397713819952,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-flex-space",
      "name": "Flex space",
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
          "yaw": 2.8632445174135075,
          "pitch": 0.17261889034245925,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -2.6279004517051128,
          "pitch": -0.3622729655424184,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
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
          "yaw": 0.39188268738944565,
          "pitch": 0.31748740110682405,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -0.21094121693369416,
          "pitch": 0.22660299376303428,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living room",
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
          "yaw": -0.5358828465610053,
          "pitch": 0.13045063021579928,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.1993879537519554,
          "pitch": 0.2455604403675995,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.1042859828765756,
          "pitch": -0.25547944348775786,
          "rotation": 0,
          "target": "4-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-owners-bedroom",
      "name": "Owner's bedroom",
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
          "yaw": 1.8964434163904151,
          "pitch": 0.20833248014977102,
          "rotation": 0,
          "target": "5-owners-bathroom"
        },
        {
          "yaw": -2.5839400224254945,
          "pitch": 0.2604484441893433,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -3.056936118770375,
          "pitch": 0.14480468049528383,
          "rotation": 0,
          "target": "6-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-owners-bathroom",
      "name": "Owner's bathroom",
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
          "yaw": 3.1305179913680083,
          "pitch": 0.6317649505467493,
          "rotation": 0,
          "target": "4-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-2",
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
          "yaw": -2.5810445701586637,
          "pitch": 0.044626293796907746,
          "rotation": 0,
          "target": "7-bathroom-2"
        },
        {
          "yaw": 2.1414879975282446,
          "pitch": 0.38980621557997,
          "rotation": 0,
          "target": "4-owners-bedroom"
        },
        {
          "yaw": 1.9513973976437917,
          "pitch": -0.2117125870025589,
          "rotation": 0,
          "target": "8-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bathroom-2",
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
          "yaw": -2.9958604616945372,
          "pitch": 0.5598202848887048,
          "rotation": 0,
          "target": "6-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-loft",
      "name": "Loft",
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
          "yaw": 3.00562648095179,
          "pitch": 0.1818420072635103,
          "rotation": 0,
          "target": "9-rooftop-terrace"
        },
        {
          "yaw": 2.4992711885856824,
          "pitch": 0.3666308597116146,
          "rotation": 0,
          "target": "6-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-rooftop-terrace",
      "name": "Rooftop Terrace",
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
          "yaw": 1.6545890484567654,
          "pitch": 0.3557648463147238,
          "rotation": 0,
          "target": "8-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU - District Towns_Elv.2 _20'End",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
