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
          "yaw": 1.211870186948584,
          "pitch": 0.02460584342836647,
          "rotation": 0,
          "target": "1-rec-room"
        },
        {
          "yaw": -0.21911712357391266,
          "pitch": -0.12017787127932777,
          "rotation": 0,
          "target": "2-second-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-rec-room",
      "name": "Rec Room",
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
          "yaw": 0.7739554305496945,
          "pitch": 0.026536885284304645,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-second-floor-landing",
      "name": "Second Floor Landing",
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
          "yaw": 1.6192202888921878,
          "pitch": 0.5581951506266858,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -0.5396049913306697,
          "pitch": 0.06037606546071217,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": 0.44129814871980066,
          "pitch": 0.17672131003076252,
          "rotation": 0,
          "target": "4-dining"
        },
        {
          "yaw": 1.0675702352598222,
          "pitch": 0.24202272439393901,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
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
          "yaw": 1.8475771359340305,
          "pitch": 0.41623427594628026,
          "rotation": 0,
          "target": "4-dining"
        },
        {
          "yaw": 0.8427042806686504,
          "pitch": -0.22570488059603733,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining",
      "name": "Dining",
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
          "yaw": 1.7695069646805024,
          "pitch": 0.011829393365799135,
          "rotation": 0,
          "target": "2-second-floor-landing"
        },
        {
          "yaw": 1.0557774918230436,
          "pitch": -0.23876517141869513,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        },
        {
          "yaw": 2.923364912330787,
          "pitch": 0.1723586390655356,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -0.18903145374200925,
          "pitch": 0.3174687948034727,
          "rotation": 0,
          "target": "3-living-room"
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
          "yaw": -0.036638188332885235,
          "pitch": 0.2904084981384827,
          "rotation": 0,
          "target": "4-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-3rd-floor-corridor",
      "name": "3rd Floor Corridor",
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
          "yaw": 1.2113281429644758,
          "pitch": 0.15520490460342984,
          "rotation": 0,
          "target": "4-dining"
        },
        {
          "yaw": -2.6976442294644443,
          "pitch": 0.025080612622957688,
          "rotation": 0,
          "target": "7-owners-bedroom"
        },
        {
          "yaw": 0.09739426168417964,
          "pitch": -0.2887726148992975,
          "rotation": 0,
          "target": "11-loft"
        },
        {
          "yaw": -0.20967648910826142,
          "pitch": -0.006843533901832899,
          "rotation": 0,
          "target": "9-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-owners-bedroom",
      "name": "Owner’s Bedroom",
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
          "yaw": 2.3148326032133175,
          "pitch": -0.1342465806874884,
          "rotation": 0,
          "target": "8-owners-bathroom"
        },
        {
          "yaw": -1.4487502912964452,
          "pitch": -0.06415900876331904,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-owners-bathroom",
      "name": "Owner’s Bathroom",
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
          "yaw": -1.4261833316296517,
          "pitch": 0.040012372082438574,
          "rotation": 0,
          "target": "7-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-2",
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
          "yaw": 0.55216896852526,
          "pitch": -0.05431407477215977,
          "rotation": 0,
          "target": "10-bathroom-2"
        },
        {
          "yaw": 2.244121877301226,
          "pitch": -0.04634585455290008,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom-2",
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
          "yaw": 1.9001035875539118,
          "pitch": -0.015586704162055653,
          "rotation": 0,
          "target": "9-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-loft",
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
          "yaw": 1.222507489401309,
          "pitch": -0.0072131112863722535,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        },
        {
          "yaw": -2.156057225430759,
          "pitch": 0.07623949173606981,
          "rotation": 0,
          "target": "12-bedroom-3"
        },
        {
          "yaw": 0.02403684897430125,
          "pitch": 0.028169974390792163,
          "rotation": 0,
          "target": "13-roof-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-3",
      "name": "Bedroom 3",
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
          "yaw": -1.3220060231971864,
          "pitch": 0.11266914985578502,
          "rotation": 0,
          "target": "11-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-roof-terrace",
      "name": "Roof Terrace",
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
          "yaw": -0.6026984318283084,
          "pitch": 0.071044808295607,
          "rotation": 0,
          "target": "11-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EYA Sutton Heights - Unit B2 Loft",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
