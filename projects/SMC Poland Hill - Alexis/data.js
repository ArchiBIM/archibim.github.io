var APP_DATA = {
  "scenes": [
    {
      "id": "0-lower-lvl-bathroom",
      "name": "Lower Lvl Bathroom",
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
          "yaw": 2.6565005829065464,
          "pitch": 1.226447965281178,
          "rotation": 0,
          "target": "2-lower-rec-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lower-lvl-den",
      "name": "Lower Lvl Den",
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
          "yaw": -0.808852047573648,
          "pitch": 0.7027927747194198,
          "rotation": 0,
          "target": "2-lower-rec-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lower-rec-room",
      "name": "Lower Rec Room",
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
          "yaw": 0.055631745985646575,
          "pitch": 0.5562020013453193,
          "rotation": 0,
          "target": "0-lower-lvl-bathroom"
        },
        {
          "yaw": 0.40154239456343,
          "pitch": 0.522667927923715,
          "rotation": 0,
          "target": "1-lower-lvl-den"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entry",
      "name": "Entry",
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
          "yaw": 0.4576658172710104,
          "pitch": 0.30678674749534984,
          "rotation": 0,
          "target": "4-living-room"
        },
        {
          "yaw": 0.3366235187408968,
          "pitch": 0.6174584137738002,
          "rotation": 0,
          "target": "7-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living-room",
      "name": "Living Room",
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
          "yaw": 0.4263162519994417,
          "pitch": 0.3214618407812555,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": 1.4620180627690615,
          "pitch": 0.3024307555452914,
          "rotation": 0,
          "target": "3-entry"
        },
        {
          "yaw": -0.513821773483425,
          "pitch": 0.3313772530824721,
          "rotation": 0,
          "target": "6-eating-room"
        },
        {
          "yaw": 2.0989591116474937,
          "pitch": 0.375062090597865,
          "rotation": 0,
          "target": "1-lower-lvl-den"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
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
          "yaw": -1.1689343141000315,
          "pitch": 0.26079091873978477,
          "rotation": 0,
          "target": "6-eating-room"
        },
        {
          "yaw": -3.007287396013247,
          "pitch": 0.5056039042026583,
          "rotation": 0,
          "target": "8-owners-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-eating-room",
      "name": "Eating Room",
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
          "yaw": 1.1452077522488544,
          "pitch": 0.3030121540616264,
          "rotation": 0,
          "target": "4-living-room"
        },
        {
          "yaw": -0.27388762843410674,
          "pitch": 0.43312341244459773,
          "rotation": 0,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-upper-flex-space",
      "name": "Upper Flex Space",
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
          "yaw": 0.20146151987892935,
          "pitch": 0.5431004840080611,
          "rotation": 0,
          "target": "8-owners-suite"
        },
        {
          "yaw": -1.5626192577230071,
          "pitch": -0.03551200327163606,
          "rotation": 0,
          "target": "10-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-owners-suite",
      "name": "Owners Suite",
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
          "yaw": 0.7524384441069465,
          "pitch": 0.5606475133295241,
          "rotation": 0,
          "target": "9-owners-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-owners-bathroom",
      "name": "Owners Bathroom",
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
          "yaw": -2.36722834755731,
          "pitch": 0.8767721612152588,
          "rotation": 0,
          "target": "8-owners-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-loft",
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
          "yaw": 1.8040090544175555,
          "pitch": 0.3424982847964735,
          "rotation": 0,
          "target": "12-terrace"
        },
        {
          "yaw": 0.28084423577040774,
          "pitch": 0.3497469806495612,
          "rotation": 0,
          "target": "11-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-office",
      "name": "Office",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "12-terrace",
      "name": "Terrace",
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
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "SMC Poland Hill - Alexis",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
