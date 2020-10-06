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
          "yaw": -1.3574617535419229,
          "pitch": 0.6728020681846072,
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
          "yaw": 0.08076123685737713,
          "pitch": 0.3724016546464668,
          "rotation": 0,
          "target": "3-second-floor---kitchen"
        },
        {
          "yaw": -0.6253689545124885,
          "pitch": 0.43201649566539757,
          "rotation": 0,
          "target": "4-second-floor---stairs"
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
          "yaw": -0.42407605460890885,
          "pitch": 0.2820517878043507,
          "rotation": 0,
          "target": "3-second-floor---kitchen"
        },
        {
          "yaw": 0.09223986665736916,
          "pitch": 0.33520290843921074,
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
          "yaw": 0.15008752873859166,
          "pitch": 0.3021422461372545,
          "rotation": 0,
          "target": "2-second-floor---great-room"
        },
        {
          "yaw": -2.8070213607550265,
          "pitch": 0.4512896284365375,
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
          "yaw": 0.059567439452575144,
          "pitch": 0.265711870371689,
          "rotation": 0,
          "target": "1-second-floor---dining-room"
        },
        {
          "yaw": -2.7999860343600282,
          "pitch": 0.4581914389493562,
          "rotation": 0,
          "target": "2-second-floor---great-room"
        },
        {
          "yaw": -0.9557076784616054,
          "pitch": 0.5181043074511091,
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
          "yaw": 0.8386409875956033,
          "pitch": 0.30458647633509983,
          "rotation": 0,
          "target": "7-third-floor---owners-suite"
        },
        {
          "yaw": 0.514884019317785,
          "pitch": 0.7761620009852788,
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
          "yaw": -2.8004584472014233,
          "pitch": 0.5298744056623068,
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
          "yaw": 0.8023819294061667,
          "pitch": 0.4995962324562129,
          "rotation": 0,
          "target": "6-third-floor---owners-bathroom"
        },
        {
          "yaw": 2.19870165325612,
          "pitch": 0.30155875408022226,
          "rotation": 0,
          "target": "5-third-floor---bedroom-2"
        },
        {
          "yaw": 2.503332886645129,
          "pitch": 0.7878654584197005,
          "rotation": 0,
          "target": "4-second-floor---stairs"
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
          "yaw": -1.4856669048470152,
          "pitch": 0.700425062450881,
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
          "yaw": 0.9642326834518897,
          "pitch": 0.5983417768742321,
          "rotation": 0,
          "target": "8-fourth-floor---bedroom-3"
        },
        {
          "yaw": -2.4893439909651676,
          "pitch": 0.5270464391152494,
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
        "yaw": -1.0382427075443985,
        "pitch": 0.020511352431892504,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2867023201349213,
          "pitch": 0.629842309052389,
          "rotation": 0,
          "target": "9-fourth-floor---loft"
        },
        {
          "yaw": -1.3768440481183966,
          "pitch": 0.5704855341470392,
          "rotation": 0,
          "target": "7-third-floor---owners-suite"
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
