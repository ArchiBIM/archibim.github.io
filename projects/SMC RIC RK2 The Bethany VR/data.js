var APP_DATA = {
  "scenes": [
    {
      "id": "0-0-basement-floor",
      "name": "0 Basement Floor",
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
          "yaw": 0.1949845100740788,
          "pitch": -0.1601225249838567,
          "rotation": 0,
          "target": "1-1-st-fl-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1-st-fl-entry",
      "name": "1-st fl. Entry",
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
          "yaw": -0.16686181197409944,
          "pitch": 0.3927627333915229,
          "rotation": 0,
          "target": "0-0-basement-floor"
        },
        {
          "yaw": 0.3626898654543851,
          "pitch": -0.13317343421236316,
          "rotation": 0,
          "target": "2-2-nd-fl-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-2-nd-fl-stairs",
      "name": "2-nd fl. Stairs",
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
          "yaw": 0.7781883706935346,
          "pitch": 0.11834638149124643,
          "rotation": 0,
          "target": "5-2-nd-fl-family-room"
        },
        {
          "yaw": -0.4813549512972397,
          "pitch": 0.11361855011006128,
          "rotation": 0,
          "target": "3-2-nd-fl-kitchen"
        },
        {
          "yaw": -1.5044134808645495,
          "pitch": 0.07257990940711068,
          "rotation": 0,
          "target": "4-2-nd-fl-eating-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-2-nd-fl-kitchen",
      "name": "2-nd fl. Kitchen",
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
          "yaw": -0.506945692947502,
          "pitch": -0.013788631352364078,
          "rotation": 0,
          "target": "6-3-rd-fl-owners-bedroom-"
        },
        {
          "yaw": 0.17582811336892412,
          "pitch": 0.1658950195195974,
          "rotation": 0,
          "target": "2-2-nd-fl-stairs"
        },
        {
          "yaw": -0.9924752608547607,
          "pitch": 0.0771450709419419,
          "rotation": 0,
          "target": "5-2-nd-fl-family-room"
        },
        {
          "yaw": 1.929904260559856,
          "pitch": 0.10404472217245342,
          "rotation": 0,
          "target": "4-2-nd-fl-eating-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-2-nd-fl-eating-room",
      "name": "2-nd fl. Eating Room",
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
          "yaw": 0.4771337943079015,
          "pitch": 0.4069940184906855,
          "rotation": 0,
          "target": "2-2-nd-fl-stairs"
        },
        {
          "yaw": -0.4217766725950298,
          "pitch": 0.24970721456411482,
          "rotation": 0,
          "target": "3-2-nd-fl-kitchen"
        },
        {
          "yaw": 0.12050818149951503,
          "pitch": 0.07476966058652224,
          "rotation": 0,
          "target": "5-2-nd-fl-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2-nd-fl-family-room",
      "name": "2-nd fl. Family Room",
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
          "yaw": -1.4266332605267102,
          "pitch": 0.25055355427160464,
          "rotation": 0,
          "target": "3-2-nd-fl-kitchen"
        },
        {
          "yaw": -2.373393619802311,
          "pitch": 0.4520745469078733,
          "rotation": 0,
          "target": "2-2-nd-fl-stairs"
        },
        {
          "yaw": -2.0359916627419743,
          "pitch": 0.11121967534574395,
          "rotation": 0,
          "target": "4-2-nd-fl-eating-room"
        },
        {
          "yaw": 1.553296256636008,
          "pitch": -0.11733857237879164,
          "rotation": 0,
          "target": "6-3-rd-fl-owners-bedroom-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-3-rd-fl-owners-bedroom-",
      "name": "3-rd fl. Owners Bedroom ",
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
          "yaw": -0.26888074536102025,
          "pitch": 0.08781839779415535,
          "rotation": 0,
          "target": "7-3-rd-fl-owners-bath"
        },
        {
          "yaw": 0.3804609842682112,
          "pitch": -0.0029242197274559345,
          "rotation": 0,
          "target": "10-4-roof-terrace"
        },
        {
          "yaw": 0.3022190449283677,
          "pitch": 0.05406349324102422,
          "rotation": 0,
          "target": "8-3-rd-fl-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-3-rd-fl-owners-bath",
      "name": "3-rd fl. Owners Bath",
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
          "yaw": -2.304341777445538,
          "pitch": 0.12925330157063364,
          "rotation": 0,
          "target": "6-3-rd-fl-owners-bedroom-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-3-rd-fl-bedroom-2",
      "name": "3-rd fl. Bedroom 2",
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
          "yaw": 0.47759314415827525,
          "pitch": 0.03288610187962604,
          "rotation": 0,
          "target": "9-3-rd-fl-bath-2"
        },
        {
          "yaw": 0.0031491721252550064,
          "pitch": 0.05976292815872242,
          "rotation": 0,
          "target": "5-2-nd-fl-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-3-rd-fl-bath-2",
      "name": "3-rd fl. Bath 2",
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
          "yaw": 2.767285085946247,
          "pitch": 0.20617334795963593,
          "rotation": 0,
          "target": "8-3-rd-fl-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-4-roof-terrace",
      "name": "4 Roof Terrace",
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
          "yaw": 0.08873475282531906,
          "pitch": 0.041274172959635536,
          "rotation": 0,
          "target": "6-3-rd-fl-owners-bedroom-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC The Bethany VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
