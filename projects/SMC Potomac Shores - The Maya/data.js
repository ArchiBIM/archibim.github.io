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
          "yaw": -0.02232732389779457,
          "pitch": -0.21965274166818283,
          "rotation": 0,
          "target": "2-stairs-to-ml"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-recroom",
      "name": "Rec.room",
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
          "yaw": -2.1783060279724626,
          "pitch": 0.44194895910339227,
          "rotation": 0,
          "target": "2-stairs-to-ml"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-stairs-to-ml",
      "name": "Stairs to ML",
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
          "yaw": 1.563500294240849,
          "pitch": 0.7130868739161969,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -1.5670862356717485,
          "pitch": 0.6374111716472992,
          "rotation": 0,
          "target": "1-recroom"
        },
        {
          "yaw": -0.03257486490065453,
          "pitch": 0.0022726546581264273,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-famili-room",
      "name": "Famili room",
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
          "yaw": -0.5998307533795213,
          "pitch": 0.35522313988054854,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.025650243260683325,
          "pitch": 0.21473874632567203,
          "rotation": 0,
          "target": "5-eating"
        },
        {
          "yaw": 0.8157638972311094,
          "pitch": 0.07577533693586957,
          "rotation": 0,
          "target": "9-stairs-to-loft"
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
          "yaw": -1.086311026314629,
          "pitch": 0.39207877828930826,
          "rotation": 0,
          "target": "5-eating"
        },
        {
          "yaw": -0.06426342008979802,
          "pitch": 0.21742715996728457,
          "rotation": 0,
          "target": "2-stairs-to-ml"
        },
        {
          "yaw": 1.5207145168592895,
          "pitch": 0.30361181012976246,
          "rotation": 0,
          "target": "3-famili-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-eating",
      "name": "Eating",
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
          "yaw": 0.7928596325324051,
          "pitch": 0.4328744371784925,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.025881273042363873,
          "pitch": 0.20821055398725719,
          "rotation": 0,
          "target": "3-famili-room"
        },
        {
          "yaw": -0.2998495416237663,
          "pitch": 0.5510155841925943,
          "rotation": 0,
          "target": "2-stairs-to-ml"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-owners-bedroom",
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
          "yaw": 0.48154560856225537,
          "pitch": 0.39352200475552657,
          "rotation": 0,
          "target": "7-owners-bathroom"
        },
        {
          "yaw": -1.2933288398220775,
          "pitch": 0.31676385882462554,
          "rotation": 0,
          "target": "9-stairs-to-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-owners-bathroom",
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
          "yaw": 1.5396648300695475,
          "pitch": 0.40033101710399954,
          "rotation": 0,
          "target": "6-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-flex-space",
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
          "yaw": 0.7641601609627067,
          "pitch": 0.38914422233115964,
          "rotation": 0,
          "target": "9-stairs-to-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-stairs-to-loft",
      "name": "Stairs to Loft",
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
          "yaw": -0.9583669747345365,
          "pitch": 0.5613712353581715,
          "rotation": 0,
          "target": "3-famili-room"
        },
        {
          "yaw": -0.9646063584716131,
          "pitch": 0.007177774819540517,
          "rotation": 0,
          "target": "8-flex-space"
        },
        {
          "yaw": -0.033358004033825495,
          "pitch": -0.20516131568831497,
          "rotation": 0,
          "target": "10-loft---4th-bedroom"
        },
        {
          "yaw": 1.6394600821215581,
          "pitch": 0.3659010136305838,
          "rotation": 0,
          "target": "6-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-loft---4th-bedroom",
      "name": "Loft - 4th bedroom",
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
          "yaw": -2.0936152827443006,
          "pitch": 0.4996754478649308,
          "rotation": 0,
          "target": "9-stairs-to-loft"
        },
        {
          "yaw": -0.07993872716836137,
          "pitch": 0.3056672758636374,
          "rotation": 0,
          "target": "11-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-terrace",
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
      "linkHotspots": [
        {
          "yaw": 2.87551850381354,
          "pitch": 0.3573665721607071,
          "rotation": 0,
          "target": "10-loft---4th-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC-Potomac Shores - The Maya",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
