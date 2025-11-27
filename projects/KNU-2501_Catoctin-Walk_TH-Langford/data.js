var APP_DATA = {
  "scenes": [
    {
      "id": "0-1foyer",
      "name": "1.Foyer",
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
          "yaw": 0.8729001264523077,
          "pitch": 0.22019494858338895,
          "rotation": 0,
          "target": "1-2study"
        },
        {
          "yaw": -0.13173251232138128,
          "pitch": -0.3860522327888134,
          "rotation": 0,
          "target": "2-3kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2study",
      "name": "2.Study",
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
          "yaw": 1.390540500925587,
          "pitch": 0.08997562045616014,
          "rotation": 0,
          "target": "0-1foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3kitchen",
      "name": "3.Kitchen",
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
          "yaw": 2.1652223338416405,
          "pitch": 0.19729977702078116,
          "rotation": 0,
          "target": "3-4dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4dining-room",
      "name": "4.Dining Room",
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
          "yaw": 0.09471570050340183,
          "pitch": 0.27184452716343266,
          "rotation": 0,
          "target": "2-3kitchen"
        },
        {
          "yaw": -1.1937949004911026,
          "pitch": 0.23216851386864157,
          "rotation": 0,
          "target": "0-1foyer"
        },
        {
          "yaw": -2.7750566474566973,
          "pitch": 0.3634875977277101,
          "rotation": 0,
          "target": "4-5family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5family-room",
      "name": "5.Family Room",
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
          "yaw": -0.20069262297923807,
          "pitch": 0.3003244919486434,
          "rotation": 0,
          "target": "3-4dining-room"
        },
        {
          "yaw": -1.1482964446553456,
          "pitch": -0.37050808328766394,
          "rotation": 0,
          "target": "5-6owners-suite-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6owners-suite-bedroom",
      "name": "6.Owner’s Suite Bedroom",
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
          "yaw": -0.004999959619151895,
          "pitch": 0.13173098718564802,
          "rotation": 0,
          "target": "4-5family-room"
        },
        {
          "yaw": -0.48148430226279615,
          "pitch": 0.10814918777902705,
          "rotation": 0,
          "target": "6-7owners-suite-bathroom"
        },
        {
          "yaw": -0.16352648014143867,
          "pitch": 0.12756911261464765,
          "rotation": 0,
          "target": "7-8bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7owners-suite-bathroom",
      "name": "7.Owner’s Suite Bathroom",
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
          "yaw": 3.0324154085107082,
          "pitch": 0.2618716360894453,
          "rotation": 0,
          "target": "5-6owners-suite-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-8bedroom-2",
      "name": "8.Bedroom 2",
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
          "yaw": -0.07237311899831411,
          "pitch": 0.08952430246442411,
          "rotation": 0,
          "target": "8-9bathroom-2"
        },
        {
          "yaw": -0.5459151052391675,
          "pitch": 0.08737884633423221,
          "rotation": 0,
          "target": "9-10loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-9bathroom-2",
      "name": "9.Bathroom 2",
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
          "yaw": -3.104554125213639,
          "pitch": 0.29251527822935586,
          "rotation": 0,
          "target": "7-8bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-10loft",
      "name": "10.Loft",
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
          "yaw": 2.011129719224966,
          "pitch": 0.17466205323817263,
          "rotation": 0,
          "target": "10-11bedroom-3"
        },
        {
          "yaw": 2.5208062397425524,
          "pitch": 0.1952199043540066,
          "rotation": 0,
          "target": "11-12bathroom-3"
        },
        {
          "yaw": 1.308714454405333,
          "pitch": 0.3303929216986532,
          "rotation": 0,
          "target": "4-5family-room"
        },
        {
          "yaw": 0.29477588854979153,
          "pitch": 0.09196747496663527,
          "rotation": 0,
          "target": "12-13rooftop-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-11bedroom-3",
      "name": "11.Bedroom 3",
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
          "yaw": 0.3261960276881979,
          "pitch": 0.04057186224416931,
          "rotation": 0,
          "target": "11-12bathroom-3"
        },
        {
          "yaw": 0.5322642013625156,
          "pitch": 0.03714326984875882,
          "rotation": 0,
          "target": "9-10loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-12bathroom-3",
      "name": "12.Bathroom 3",
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
          "yaw": -2.9749157438089924,
          "pitch": 0.0720513019413005,
          "rotation": 0,
          "target": "10-11bedroom-3"
        },
        {
          "yaw": 1.578740042161514,
          "pitch": 0.32628854869746426,
          "rotation": 0,
          "target": "9-10loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-13rooftop-terrace",
      "name": "13.Rooftop Terrace",
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
          "yaw": -1.3390815588449065,
          "pitch": 0.19012279708231183,
          "rotation": 0,
          "target": "9-10loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU Catoctin Walk - Townhome Langford",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
