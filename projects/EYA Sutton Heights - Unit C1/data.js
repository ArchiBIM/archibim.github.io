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
          "yaw": -0.016111162547169045,
          "pitch": -0.1916814353533045,
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
          "yaw": -2.5048752836124777,
          "pitch": -0.13926444335316646,
          "rotation": 0,
          "target": "2-second-floor-landing"
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
          "yaw": 1.561511786502427,
          "pitch": 0.525111523767066,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -1.5092556259987386,
          "pitch": 0.4842996230530492,
          "rotation": 0,
          "target": "1-rec-room"
        },
        {
          "yaw": -0.6305369795650471,
          "pitch": -0.21957505099542196,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": -0.016493808329444803,
          "pitch": -0.1108744773980419,
          "rotation": 0,
          "target": "4-kitchen"
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
          "yaw": 1.991256483572804,
          "pitch": 0.2486899084436196,
          "rotation": 0,
          "target": "2-second-floor-landing"
        },
        {
          "yaw": 0.9206837447216607,
          "pitch": 0.11838834041796531,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.6540343835715543,
          "pitch": 0.11225517181141598,
          "rotation": 0,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
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
          "yaw": 1.5541889103694864,
          "pitch": 0.26464023180793816,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": -1.3578422252421447,
          "pitch": 0.2881457263065652,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": -0.18865856003533565,
          "pitch": -0.17894028776800397,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining",
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
          "yaw": 0.6535362083711895,
          "pitch": 0.1685118197757678,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.014647130113718987,
          "pitch": 0.2545405977800179,
          "rotation": 0,
          "target": "2-second-floor-landing"
        },
        {
          "yaw": -0.46693082817247245,
          "pitch": -0.25964663329824766,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
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
          "yaw": 1.5355077619124042,
          "pitch": 0.3681372705743051,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": 0.6081040870298828,
          "pitch": -0.41662411314512227,
          "rotation": 0,
          "target": "11-loft"
        },
        {
          "yaw": -0.13052099053800603,
          "pitch": 0.10606336178200237,
          "rotation": 0,
          "target": "7-owners-bedroom"
        },
        {
          "yaw": -2.8115400463106024,
          "pitch": 0.13640928104175387,
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
          "yaw": 1.0154598994054673,
          "pitch": 0.3701954216490222,
          "rotation": 0,
          "target": "8-owners-bathroom"
        },
        {
          "yaw": 1.664594211899578,
          "pitch": 0.4170161039751701,
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
          "yaw": 1.071802930616883,
          "pitch": 0.46675243581256254,
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
          "yaw": -1.8448264392731524,
          "pitch": 0.03226993274612866,
          "rotation": 0,
          "target": "10-bathroom-2"
        },
        {
          "yaw": -1.3028220764564757,
          "pitch": 0.09101667206514108,
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
          "yaw": -0.3672113169064488,
          "pitch": 0.31462590556822434,
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
          "yaw": -1.6577680316623482,
          "pitch": 0.12571963589643786,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        },
        {
          "yaw": 0.32719543836473086,
          "pitch": 0.08203802788591474,
          "rotation": 0,
          "target": "13-roof-terrace"
        },
        {
          "yaw": 2.1921862220351196,
          "pitch": 0.0987017217557522,
          "rotation": 0,
          "target": "12-bedroom-3"
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
          "yaw": 1.3141183241957126,
          "pitch": 0.08510621544495933,
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
          "yaw": 2.7426390465222443,
          "pitch": 0.0686072957962125,
          "rotation": 0,
          "target": "11-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EYA Sutton Heights - Unit C1 Loft",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
