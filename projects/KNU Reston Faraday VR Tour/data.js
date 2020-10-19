var APP_DATA = {
  "scenes": [
    {
      "id": "0-ground-floor---foyer",
      "name": "Ground Floor - Foyer",
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
          "yaw": -1.3880881174748332,
          "pitch": 0.6548244567732695,
          "rotation": 0,
          "target": "1-second-floor---stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-second-floor---stairs",
      "name": "Second Floor - Stairs",
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
          "yaw": 0.004662958582356325,
          "pitch": 0.2707228303547211,
          "rotation": 0,
          "target": "4-second-floor---dining-room"
        },
        {
          "yaw": -1.2439115448654476,
          "pitch": 0.535542239301602,
          "rotation": 0,
          "target": "3-second-floor---kitchen"
        },
        {
          "yaw": 1.5477388264270386,
          "pitch": 0.7712868379860556,
          "rotation": 0,
          "target": "0-ground-floor---foyer"
        },
        {
          "yaw": -2.732312763223124,
          "pitch": 0.5569201668682702,
          "rotation": 0,
          "target": "2-second-floor---great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-second-floor---great-room",
      "name": "Second Floor - Great Room",
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
          "yaw": -0.5083331829642468,
          "pitch": 0.31102182876196593,
          "rotation": 0,
          "target": "3-second-floor---kitchen"
        },
        {
          "yaw": 0.05607420106371386,
          "pitch": 0.3539231583904101,
          "rotation": 0,
          "target": "1-second-floor---stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-second-floor---kitchen",
      "name": "Second Floor - Kitchen",
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
          "yaw": 0.22284721754748915,
          "pitch": 0.31186685489435106,
          "rotation": 0,
          "target": "2-second-floor---great-room"
        },
        {
          "yaw": -2.7385439294121507,
          "pitch": 0.4340915566062957,
          "rotation": 0,
          "target": "4-second-floor---dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-second-floor---dining-room",
      "name": "Second Floor - Dining Room",
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
          "yaw": 0.15670875758251057,
          "pitch": 0.41060260006388205,
          "rotation": 0,
          "target": "3-second-floor---kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-third-floor---bedroom-2",
      "name": "Third Floor - Bedroom 2",
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
          "yaw": -0.1270751911102348,
          "pitch": 0.6617635383250882,
          "rotation": 0,
          "target": "7-third-floor---owners-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-third-floor---owners-bathroom",
      "name": "Third Floor - Owners Bathroom",
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
          "yaw": -2.59491179312192,
          "pitch": 0.4894532599545265,
          "rotation": 0,
          "target": "7-third-floor---owners-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-third-floor---owners-suite",
      "name": "Third Floor - Owners Suite",
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
          "yaw": 1.0586007676417832,
          "pitch": 0.4956928145438333,
          "rotation": 0,
          "target": "6-third-floor---owners-bathroom"
        },
        {
          "yaw": 2.3875136885790056,
          "pitch": 0.3050515680855064,
          "rotation": 0,
          "target": "5-third-floor---bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-fourth-floor---bedroom-3",
      "name": "Fourth Floor - Bedroom 3",
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
          "yaw": -2.667408425213246,
          "pitch": 0.575210270855198,
          "rotation": 0,
          "target": "9-fourth-floor---loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-fourth-floor---loft",
      "name": "Fourth Floor - Loft",
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
          "yaw": 0.5197267823973313,
          "pitch": 0.42764855060901397,
          "rotation": 0,
          "target": "8-fourth-floor---bedroom-3"
        },
        {
          "yaw": -2.5989654102014015,
          "pitch": 0.7464580250463655,
          "rotation": 0,
          "target": "10-fourth-floor---roof-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-fourth-floor---roof-terrace",
      "name": "Fourth Floor - Roof Terrace",
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
          "yaw": -2.806821380874119,
          "pitch": 0.5308401074825753,
          "rotation": 0,
          "target": "9-fourth-floor---loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU Reston Faraday VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
