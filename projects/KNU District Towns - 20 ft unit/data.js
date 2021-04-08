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
          "yaw": 1.4698102490687948,
          "pitch": 0.5278664928534162,
          "rotation": 0,
          "target": "1-flex-space"
        },
        {
          "yaw": -0.10273538054978815,
          "pitch": -0.4170477915475246,
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
          "yaw": -0.14334763935290873,
          "pitch": 0.4846463008789872,
          "rotation": 0,
          "target": "0-foyer"
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
          "yaw": -0.07308657327222079,
          "pitch": 0.236722280436652,
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
          "yaw": -0.5630196829748186,
          "pitch": 0.44599717273302986,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.3292737893459936,
          "pitch": 0.29074948749881635,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -2.2727074708462744,
          "pitch": 0.3794100060135541,
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
          "yaw": 2.746821715341045,
          "pitch": 0.5000122406403573,
          "rotation": 0,
          "target": "5-owners-bathroom"
        },
        {
          "yaw": -2.3317120149650066,
          "pitch": 0.44774385067433364,
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
          "yaw": -2.909825843769113,
          "pitch": 0.6368733375026956,
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
          "yaw": 2.999515938742549,
          "pitch": 0.568783787045362,
          "rotation": 0,
          "target": "7-bathroom-2"
        },
        {
          "yaw": 2.062979433641461,
          "pitch": -0.20307250723734427,
          "rotation": 0,
          "target": "8-loft-1"
        },
        {
          "yaw": 2.1068166632180194,
          "pitch": 0.46326711266966747,
          "rotation": 0,
          "target": "4-owners-bedroom"
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
          "yaw": -0.8564168063126516,
          "pitch": 0.5151486997922223,
          "rotation": 0,
          "target": "6-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-loft-1",
      "name": "Loft 1",
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
          "yaw": -0.21051382477650193,
          "pitch": 0.5427071155733145,
          "rotation": 0,
          "target": "9-loft-2"
        },
        {
          "yaw": 1.5734882408179258,
          "pitch": 0.7642234588965255,
          "rotation": 0,
          "target": "6-bedroom-2"
        },
        {
          "yaw": -3.0753378386524233,
          "pitch": 0.7396192506974444,
          "rotation": 0,
          "target": "10-rooftop-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-loft-2",
      "name": "Loft 2",
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
          "yaw": 0.8871544324546701,
          "pitch": 0.4998312577288946,
          "rotation": 0,
          "target": "8-loft-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-rooftop-terrace",
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
          "yaw": 0.21380155501573306,
          "pitch": 0.4353412023092069,
          "rotation": 0,
          "target": "8-loft-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU - District Towns_Elv.2 _20'End",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
