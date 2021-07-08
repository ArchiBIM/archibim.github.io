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
          "yaw": -0.005127805296416099,
          "pitch": 0.03610518152554221,
          "rotation": 0,
          "target": "2-second-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-study",
      "name": "Study",
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
          "yaw": -2.5445477056134393,
          "pitch": -0.12229080624584299,
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
          "yaw": 1.5734333359033439,
          "pitch": 0.6397103520054941,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -1.5495791810558686,
          "pitch": 0.7187266212625936,
          "rotation": 0,
          "target": "1-study"
        },
        {
          "yaw": -0.01919764399927537,
          "pitch": -0.06947521573253823,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
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
          "yaw": 0.05035735685727971,
          "pitch": 0.27119726448952974,
          "rotation": 0,
          "target": "2-second-floor-landing"
        },
        {
          "yaw": -0.1873758894055424,
          "pitch": -0.10104835690314928,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        },
        {
          "yaw": 1.419462935709399,
          "pitch": 0.35929664338600453,
          "rotation": 0,
          "target": "4-living-room"
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
          "yaw": 0.9640655537075382,
          "pitch": 0.3892853897826871,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 1.406849682045996,
          "pitch": 0.24232980504210744,
          "rotation": 0,
          "target": "5-dining"
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
          "yaw": 0.552680950841749,
          "pitch": 0.3250863948347842,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": -0.41785298975924334,
          "pitch": -0.11789978460990902,
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
          "yaw": 1.4761965053479384,
          "pitch": 0.6392306281507363,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 0.40625606765895306,
          "pitch": -0.1913238171429068,
          "rotation": 0,
          "target": "11-loft"
        },
        {
          "yaw": -0.14103415241524075,
          "pitch": 0.25636965825562896,
          "rotation": 0,
          "target": "7-owners-bedroom"
        },
        {
          "yaw": -2.784700366094844,
          "pitch": 0.2469191035355145,
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
          "yaw": 1.0207858895514939,
          "pitch": 0.056101589007019115,
          "rotation": 0,
          "target": "8-owners-bathroom"
        },
        {
          "yaw": 1.7203651230303318,
          "pitch": 0.2677139370690469,
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
          "yaw": 1.4112503422200362,
          "pitch": 0.41360984672009415,
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
          "yaw": -1.9324999273454129,
          "pitch": 0.14881211928022786,
          "rotation": 0,
          "target": "10-bathroom-2"
        },
        {
          "yaw": -1.3859859817021665,
          "pitch": 0.13584591500998577,
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
          "yaw": 1.358485209386476,
          "pitch": 0.45075463380797665,
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
          "yaw": -1.4129656332876426,
          "pitch": 0.16929732699036393,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        },
        {
          "yaw": 2.46994306471127,
          "pitch": 0.25672453042064447,
          "rotation": 0,
          "target": "12-bedroom-3"
        },
        {
          "yaw": 0.10283588497349072,
          "pitch": 0.20935833408916515,
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
          "yaw": 1.3584047588449675,
          "pitch": 0.31363885013447756,
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
          "yaw": 2.6137950559469845,
          "pitch": 0.39815407405089687,
          "rotation": 0,
          "target": "11-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EYA - Sutton Heights - Unit C1 Loft",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
