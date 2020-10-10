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
        "yaw": -0.2966128654729925,
        "pitch": 0.011647090988351039,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1032530851665179,
          "pitch": 0.0654965151112723,
          "rotation": 0,
          "target": "4-second-floor---stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-second-floor---dining-room",
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
          "yaw": -0.03811711712872601,
          "pitch": 0.32850368117578554,
          "rotation": 0,
          "target": "4-second-floor---stairs"
        },
        {
          "yaw": -0.5751826906485569,
          "pitch": 0.26722404118611465,
          "rotation": 0,
          "target": "3-second-floor---kitchen"
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
          "yaw": -0.42566920361859495,
          "pitch": 0.2763888611304832,
          "rotation": 0,
          "target": "3-second-floor---kitchen"
        },
        {
          "yaw": 0.0486901796058703,
          "pitch": 0.30736083429743033,
          "rotation": 0,
          "target": "4-second-floor---stairs"
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
          "yaw": 0.16377407685674328,
          "pitch": 0.2866163507739845,
          "rotation": 0,
          "target": "2-second-floor---great-room"
        },
        {
          "yaw": -2.7326523787312986,
          "pitch": 0.4183810173169942,
          "rotation": 0,
          "target": "1-second-floor---dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-second-floor---stairs",
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
          "yaw": -0.012711197944955899,
          "pitch": 0.28247018215006214,
          "rotation": 0,
          "target": "1-second-floor---dining-room"
        },
        {
          "yaw": -2.7940087365255852,
          "pitch": 0.4858175056747367,
          "rotation": 0,
          "target": "2-second-floor---great-room"
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
          "yaw": 0.8343710822478663,
          "pitch": 0.29424893828307397,
          "rotation": 0,
          "target": "7-third-floor---owners-suite"
        },
        {
          "yaw": 0.4994176688955996,
          "pitch": -0.0724647486812966,
          "rotation": 0,
          "target": "9-fourth-floor---loft"
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
          "yaw": -2.794257433117009,
          "pitch": 0.5199618853527177,
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
          "yaw": 0.7706359464375279,
          "pitch": 0.5171809863279293,
          "rotation": 0,
          "target": "6-third-floor---owners-bathroom"
        },
        {
          "yaw": 2.19211991895496,
          "pitch": 0.3117276941243414,
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
          "yaw": -1.5695068085524504,
          "pitch": 0.5039047355677031,
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
          "yaw": 0.9138171530076917,
          "pitch": 0.7427239841306523,
          "rotation": 0,
          "target": "8-fourth-floor---bedroom-3"
        },
        {
          "yaw": -2.439021396985339,
          "pitch": 0.4982530735162438,
          "rotation": 0,
          "target": "10-fourth-floor---roof-terrace"
        },
        {
          "yaw": -2.93691560763623,
          "pitch": 0.39594161261410754,
          "rotation": 0,
          "target": "5-third-floor---bedroom-2"
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
          "yaw": -2.315600912479159,
          "pitch": 0.6729912970110838,
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
