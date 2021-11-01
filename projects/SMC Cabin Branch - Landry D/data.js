var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-fl-foyer",
      "name": "1 fl. Foyer",
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
          "yaw": 1.1088050848236932,
          "pitch": 0.6228932069792812,
          "rotation": 0,
          "target": "1-1-fl-bedroom-2"
        },
        {
          "yaw": 2.049222946939161,
          "pitch": 0.6041440164739846,
          "rotation": 0,
          "target": "2-1-fl-hall-bath"
        },
        {
          "yaw": -3.0312923686939364,
          "pitch": 0.44480992699975985,
          "rotation": 0,
          "target": "3-1-fl-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1-fl-bedroom-2",
      "name": "1 fl. Bedroom 2",
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
          "yaw": -2.377961531044047,
          "pitch": 0.8884913550795837,
          "rotation": 0,
          "target": "0-1-fl-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1-fl-hall-bath",
      "name": "1 fl. Hall Bath",
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
          "yaw": 2.461850876629873,
          "pitch": 0.6938285462958493,
          "rotation": 0,
          "target": "0-1-fl-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1-fl-kitchen",
      "name": "1 fl. Kitchen",
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
          "yaw": 1.4944877744152727,
          "pitch": 0.3369801591008539,
          "rotation": 0,
          "target": "4-1-fl-eating"
        },
        {
          "yaw": 1.587804789616901,
          "pitch": 0.21102069760934938,
          "rotation": 0,
          "target": "5-1-fl-family-room"
        },
        {
          "yaw": -1.4234272980172697,
          "pitch": 0.5226974148447674,
          "rotation": 0,
          "target": "0-1-fl-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-1-fl-eating",
      "name": "1 fl. Eating",
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
          "yaw": 1.735858624547924,
          "pitch": 0.3905634651633765,
          "rotation": 0,
          "target": "3-1-fl-kitchen"
        },
        {
          "yaw": -1.3391560020034898,
          "pitch": 0.35917962811181425,
          "rotation": 0,
          "target": "5-1-fl-family-room"
        },
        {
          "yaw": -0.5977148269463513,
          "pitch": 0.38618210431809885,
          "rotation": 0,
          "target": "6-1-fl-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-1-fl-family-room",
      "name": "1 fl. Family Room",
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
          "yaw": 0.48692780001877267,
          "pitch": 0.16370585271381088,
          "rotation": 0,
          "target": "10-2-fl-upper-flex-space"
        },
        {
          "yaw": 1.3157997213889079,
          "pitch": 0.3368355965950496,
          "rotation": 0,
          "target": "4-1-fl-eating"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-1-fl-owners-bedroom",
      "name": "1 fl. Owner's Bedroom",
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
          "yaw": 1.05666290118962,
          "pitch": 0.6744164364502083,
          "rotation": 0,
          "target": "7-1-fl-owners-bath"
        },
        {
          "yaw": 2.021337133100438,
          "pitch": -0.03328044808134223,
          "rotation": 0,
          "target": "10-2-fl-upper-flex-space"
        },
        {
          "yaw": 2.42540727250047,
          "pitch": 0.360042299546798,
          "rotation": 0,
          "target": "5-1-fl-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-1-fl-owners-bath",
      "name": "1 fl. Owner's Bath",
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
          "yaw": -1.2692052743052074,
          "pitch": 0.40505849842967834,
          "rotation": 0,
          "target": "6-1-fl-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-2-fl-bedroom-3",
      "name": "2 fl. Bedroom 3",
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
          "yaw": -2.770328925439255,
          "pitch": 0.6885312612704464,
          "rotation": 0,
          "target": "10-2-fl-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-2-fl-study",
      "name": "2 fl. Study",
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
          "yaw": -2.052735381607075,
          "pitch": 0.5718151575250658,
          "rotation": 0,
          "target": "10-2-fl-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-2-fl-upper-flex-space",
      "name": "2 fl. Upper Flex Space",
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
          "yaw": -2.897123730071165,
          "pitch": 0.34226151418753936,
          "rotation": 0,
          "target": "9-2-fl-study"
        },
        {
          "yaw": -2.286868818508566,
          "pitch": 0.582904430655347,
          "rotation": 0,
          "target": "8-2-fl-bedroom-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC Cabin Branch - Landry D",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
