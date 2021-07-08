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
          "yaw": 1.5309201116727325,
          "pitch": 0.5094835462941045,
          "rotation": 0,
          "target": "1-study"
        },
        {
          "yaw": -0.1066368665079871,
          "pitch": -0.18319120075279294,
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
          "yaw": 0.7424818552624153,
          "pitch": 0.32620859918989353,
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
          "yaw": 1.627967060574596,
          "pitch": 0.6616342814390919,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.01919764586123307,
          "pitch": 0.39142727774046193,
          "rotation": 0,
          "target": "4-dining"
        },
        {
          "yaw": -0.6053193670787191,
          "pitch": 0.3225098450438857,
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
          "yaw": 0.1242212230274724,
          "pitch": 0.382977590715214,
          "rotation": 0,
          "target": "4-dining"
        },
        {
          "yaw": 0.9208877321904083,
          "pitch": 0.29776631142855514,
          "rotation": 0,
          "target": "2-second-floor-landing"
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
          "yaw": 2.9817765001786594,
          "pitch": 0.35080219421180203,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 1.8474182942471025,
          "pitch": 0.3475760348937893,
          "rotation": 0,
          "target": "2-second-floor-landing"
        },
        {
          "yaw": 1.1883204783816783,
          "pitch": -0.3017229809809958,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        },
        {
          "yaw": -0.14592202602993076,
          "pitch": 0.41703321845572994,
          "rotation": 0,
          "target": "5-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living-room",
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
          "yaw": 1.7239418491591074,
          "pitch": 0.41574533412380354,
          "rotation": 0,
          "target": "4-dining"
        },
        {
          "yaw": 0.8656893768021803,
          "pitch": -0.23165217513860803,
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
          "yaw": 0.8520469281438174,
          "pitch": 0.7168848341310934,
          "rotation": 0,
          "target": "4-dining"
        },
        {
          "yaw": -2.220602406927874,
          "pitch": 0.5051527668737279,
          "rotation": 0,
          "target": "7-owners-bedroom"
        },
        {
          "yaw": -0.011999427878809144,
          "pitch": 0.07425808041459803,
          "rotation": 0,
          "target": "9-bedroom-2"
        },
        {
          "yaw": 0.4146496207359345,
          "pitch": -0.6014061711617877,
          "rotation": 0,
          "target": "11-loft"
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
          "yaw": 2.321478117985933,
          "pitch": 0.1304049973474477,
          "rotation": 0,
          "target": "8-owners-bathroom"
        },
        {
          "yaw": -1.4860242319303794,
          "pitch": 0.4736732911455128,
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
          "yaw": -3.0963749247927836,
          "pitch": 0.41231155885440174,
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
          "yaw": 0.5476528048040858,
          "pitch": 0.049671173816960845,
          "rotation": 0,
          "target": "10-bathroom-2"
        },
        {
          "yaw": 2.2645535126400382,
          "pitch": 0.1168629987534402,
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
          "yaw": 1.8623069954500266,
          "pitch": 0.46748366236051453,
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
          "yaw": 2.1959415477023843,
          "pitch": 0.38872337466760243,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        },
        {
          "yaw": -2.1804857809097484,
          "pitch": 0.4331484525912046,
          "rotation": 0,
          "target": "12-bedroom-3"
        },
        {
          "yaw": 0.04662652268057954,
          "pitch": 0.09153211874318501,
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
          "yaw": -1.1255321607590467,
          "pitch": 0.2894551952353961,
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
          "yaw": -2.5142378154295084,
          "pitch": 0.37892119953047754,
          "rotation": 0,
          "target": "11-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EYA - Sutton Heights - Unit B2 Loft",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
