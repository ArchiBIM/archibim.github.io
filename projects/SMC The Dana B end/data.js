var APP_DATA = {
  "scenes": [
    {
      "id": "0-bacement-entry",
      "name": "Bacement-Entry",
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
          "yaw": 0.025489000133283923,
          "pitch": -0.08785272723547166,
          "rotation": 0,
          "target": "2-bacement-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bacement-lower",
      "name": "Bacement-Lower",
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
          "yaw": 0.30672661402613066,
          "pitch": 0.3086425077203945,
          "rotation": 0,
          "target": "2-bacement-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bacement-stairs",
      "name": "Bacement-Stairs",
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
          "yaw": -0.5944458194658111,
          "pitch": 0.7350853166784432,
          "rotation": 0,
          "target": "0-bacement-entry"
        },
        {
          "yaw": 2.547390519806278,
          "pitch": 0.5886395563745488,
          "rotation": 0,
          "target": "1-bacement-lower"
        },
        {
          "yaw": -2.2261765380831093,
          "pitch": 0.13150055472861055,
          "rotation": 0,
          "target": "5-first-floor-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-first-floor-dining-room",
      "name": "First Floor-Dining Room",
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
          "yaw": -0.34056643553131494,
          "pitch": 0.43226600389515824,
          "rotation": 0,
          "target": "4-first-floor-kitchen"
        },
        {
          "yaw": -1.0752463813853907,
          "pitch": 0.2301403016528898,
          "rotation": 0,
          "target": "5-first-floor-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-first-floor-kitchen",
      "name": "First Floor-Kitchen",
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
          "yaw": -0.09056003452956674,
          "pitch": 0.2751752777381107,
          "rotation": 0,
          "target": "5-first-floor-living-room"
        },
        {
          "yaw": -2.694341934228625,
          "pitch": 0.7399966623802339,
          "rotation": 0,
          "target": "3-first-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-first-floor-living-room",
      "name": "First Floor-Living Room",
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
          "yaw": 0.016725769712309102,
          "pitch": 0.2925316537174858,
          "rotation": 0,
          "target": "4-first-floor-kitchen"
        },
        {
          "yaw": 0.46670441755152225,
          "pitch": 0.24433256151429816,
          "rotation": 0,
          "target": "3-first-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-second-floor-bathroom-2",
      "name": "Second Floor-Bathroom 2",
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
          "yaw": -2.920216865503754,
          "pitch": 0.5666070201248328,
          "rotation": 0,
          "target": "5-first-floor-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-second-floor-bedroom-1",
      "name": "Second Floor-Bedroom 1",
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
          "yaw": 1.2314455354459408,
          "pitch": 0.6376909775515216,
          "rotation": 0,
          "target": "9-second-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-second-floor-bedroom-2",
      "name": "Second Floor-Bedroom 2",
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
          "yaw": -2.900973707175293,
          "pitch": 0.7048822979663285,
          "rotation": 0,
          "target": "9-second-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-second-floor-hall",
      "name": "Second Floor-Hall",
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
          "yaw": -0.3520821212097065,
          "pitch": 0.4963275066766375,
          "rotation": 0,
          "target": "11-second-floor-master-bedroom"
        },
        {
          "yaw": 0.5531283098544684,
          "pitch": 0.7787350326039544,
          "rotation": 0,
          "target": "6-second-floor-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-second-floor-master-bathroom",
      "name": "Second Floor-Master Bathroom",
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
          "yaw": 0.8115875201779481,
          "pitch": 0.41086639843771877,
          "rotation": 0,
          "target": "11-second-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-second-floor-master-bedroom",
      "name": "Second Floor-Master Bedroom",
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
          "yaw": -0.3632393368339457,
          "pitch": 0.352067615145387,
          "rotation": 0,
          "target": "9-second-floor-hall"
        },
        {
          "yaw": -1.4168220098064594,
          "pitch": 0.5003586903290174,
          "rotation": 0,
          "target": "10-second-floor-master-bathroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC The Dana B end",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
