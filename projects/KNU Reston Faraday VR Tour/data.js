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
          "yaw": -1.2181307949911222,
          "pitch": 0.056257443712485866,
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
          "yaw": -1.2290824933730011,
          "pitch": 0.5071854945988346,
          "rotation": 0,
          "target": "3-second-floor---kitchen"
        },
        {
          "yaw": 0.004996391189003191,
          "pitch": 0.2617513721571285,
          "rotation": 0,
          "target": "2-second-floor---dining-room"
        },
        {
          "yaw": -2.66712203254877,
          "pitch": 0.6175840550614282,
          "rotation": 0,
          "target": "4-second-floor---great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-second-floor---dining-room",
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
          "yaw": -0.9109548596590926,
          "pitch": 0.13718538953378712,
          "rotation": 0,
          "target": "5-third-floor---owners-suite"
        },
        {
          "yaw": 0.14621399960692472,
          "pitch": 0.3983393900770338,
          "rotation": 0,
          "target": "3-second-floor---kitchen"
        },
        {
          "yaw": -0.35958849269105286,
          "pitch": 0.1718568617148737,
          "rotation": 0,
          "target": "4-second-floor---great-room"
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
          "yaw": 0.18734031733630374,
          "pitch": 0.3041587451183059,
          "rotation": 0,
          "target": "4-second-floor---great-room"
        },
        {
          "yaw": -1.6595000198090606,
          "pitch": 0.04210157214112975,
          "rotation": 0,
          "target": "5-third-floor---owners-suite"
        },
        {
          "yaw": -2.6257757134421276,
          "pitch": 0.3856843381661079,
          "rotation": 0,
          "target": "2-second-floor---dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-second-floor---great-room",
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
          "yaw": -0.6211552129906739,
          "pitch": 0.28635905121696226,
          "rotation": 0,
          "target": "3-second-floor---kitchen"
        },
        {
          "yaw": 0.21189295136911745,
          "pitch": 0.4243968913119076,
          "rotation": 0,
          "target": "0-ground-floor---foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-third-floor---owners-suite",
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
        "yaw": -0.6001340954653429,
        "pitch": 0.0032216154726949497,
        "fov": 1.5125484644340466
      },
      "linkHotspots": [
        {
          "yaw": 2.2222701681871184,
          "pitch": 0.6957480352530947,
          "rotation": 0,
          "target": "6-third-floor---bedroom-2"
        },
        {
          "yaw": 1.2128384463488153,
          "pitch": 0.47244657041787974,
          "rotation": 0,
          "target": "7-third-floor---owners-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-third-floor---bedroom-2",
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
        "yaw": -1.2113585647276466,
        "pitch": 0.0027689785354958474,
        "fov": 1.5125484644340466
      },
      "linkHotspots": [
        {
          "yaw": 0.020780234240671547,
          "pitch": 0.5973459600540725,
          "rotation": 0,
          "target": "5-third-floor---owners-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-third-floor---owners-bathroom",
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
          "yaw": -2.8746262624502776,
          "pitch": 0.916555550237133,
          "rotation": 0,
          "target": "5-third-floor---owners-suite"
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
        "yaw": 0.5495892009595575,
        "pitch": 0.0021511275978980393,
        "fov": 1.5125484644340466
      },
      "linkHotspots": [
        {
          "yaw": -1.3678165864326886,
          "pitch": 0.6112990746488336,
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
        "yaw": -2.6382923291312927,
        "pitch": 0.002645108304891508,
        "fov": 1.5125484644340466
      },
      "linkHotspots": [
        {
          "yaw": 0.6571726439097478,
          "pitch": 0.6369497358618688,
          "rotation": 0,
          "target": "8-fourth-floor---bedroom-3"
        },
        {
          "yaw": -2.4156262029060525,
          "pitch": 0.6893351282623854,
          "rotation": 0,
          "target": "10-fourth-floor---roof-terrace"
        },
        {
          "yaw": 3.0773395054435664,
          "pitch": 0.5013612815618522,
          "rotation": 0,
          "target": "5-third-floor---owners-suite"
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
        "yaw": -1.5038744399490866,
        "pitch": 0.013699484176335375,
        "fov": 1.5125484644340466
      },
      "linkHotspots": [
        {
          "yaw": -2.1972321863036566,
          "pitch": 0.6971853389479961,
          "rotation": 0,
          "target": "9-fourth-floor---loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU Reston Faraday VR Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
