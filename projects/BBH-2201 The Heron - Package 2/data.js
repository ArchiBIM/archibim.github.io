var APP_DATA = {
  "scenes": [
    {
      "id": "0-p1_1st-floor-foyer",
      "name": "P1_1st Floor-Foyer",
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
          "yaw": -0.9600995445854199,
          "pitch": 0.025721854199712624,
          "rotation": 0,
          "target": "2-p1_1st-floor-bedroom-1"
        },
        {
          "yaw": -0.3079018112038483,
          "pitch": 0.10915255259645207,
          "rotation": 0,
          "target": "1-p1_1st-floor-garage"
        },
        {
          "yaw": -1.4636017921648303,
          "pitch": 0.08453630459625572,
          "rotation": 0,
          "target": "3-p1_1st-floor-bathroom-1"
        },
        {
          "yaw": 0.15475269382020684,
          "pitch": -0.08516109471418076,
          "rotation": 0,
          "target": "4-p1_2nd-floor-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-p1_1st-floor-garage",
      "name": "P1_1st Floor-Garage",
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
          "yaw": 2.818618003194544,
          "pitch": 0.37671915491846164,
          "rotation": 0,
          "target": "0-p1_1st-floor-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-p1_1st-floor-bedroom-1",
      "name": "P1_1st Floor-Bedroom 1",
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
          "yaw": -2.1213611809163453,
          "pitch": -0.022704309054532246,
          "rotation": 0,
          "target": "3-p1_1st-floor-bathroom-1"
        },
        {
          "yaw": 2.658052423181857,
          "pitch": -0.01642779814492812,
          "rotation": 0,
          "target": "0-p1_1st-floor-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-p1_1st-floor-bathroom-1",
      "name": "P1_1st Floor-Bathroom 1",
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
          "yaw": -3.0400258000706977,
          "pitch": -0.06346650822078281,
          "rotation": 0,
          "target": "2-p1_1st-floor-bedroom-1"
        },
        {
          "yaw": -1.5009460133058763,
          "pitch": -0.019848192336613835,
          "rotation": 0,
          "target": "0-p1_1st-floor-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-p1_2nd-floor-family-room",
      "name": "P1_2nd Floor-Family room",
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
          "yaw": -0.9051926680887803,
          "pitch": 0.0722179887076706,
          "rotation": 0,
          "target": "0-p1_1st-floor-foyer"
        },
        {
          "yaw": -0.5213791929436766,
          "pitch": 0.18484287317627235,
          "rotation": 0,
          "target": "5-p1_2nd-floor-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-p1_2nd-floor-dining",
      "name": "P1_2nd Floor-Dining",
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
          "yaw": -3.015204672899472,
          "pitch": 0.20798191307948954,
          "rotation": 0,
          "target": "4-p1_2nd-floor-family-room"
        },
        {
          "yaw": -1.5773954525585054,
          "pitch": -0.01186537029036927,
          "rotation": 0,
          "target": "6-p1_3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-p1_3rd-floor-hall",
      "name": "P1_3rd Floor-Hall",
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
          "yaw": -0.8805616777159244,
          "pitch": 0.038132044283155864,
          "rotation": 0,
          "target": "4-p1_2nd-floor-family-room"
        },
        {
          "yaw": 1.5982142900579657,
          "pitch": 0.14892513198940094,
          "rotation": 0,
          "target": "11-p1_3rd-floor-bedroom-3"
        },
        {
          "yaw": 0.102836010298617,
          "pitch": 0.01909629084998521,
          "rotation": 0,
          "target": "7-p1_3rd-floor-owners-bedroom"
        },
        {
          "yaw": -0.21273182875546226,
          "pitch": -0.16504390951963188,
          "rotation": 0,
          "target": "13-20-terrace-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-p1_3rd-floor-owners-bedroom",
      "name": "P1_3rd Floor-Owners Bedroom",
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
          "yaw": 1.8887500399488113,
          "pitch": 0.04386908629433606,
          "rotation": 0,
          "target": "8-p1_3rd-floor-owners-bathroom"
        },
        {
          "yaw": -2.152395567283749,
          "pitch": 0.09350296971179084,
          "rotation": 0,
          "target": "6-p1_3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-p1_3rd-floor-owners-bathroom",
      "name": "P1_3rd Floor-Owners Bathroom",
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
          "yaw": -2.054385487705993,
          "pitch": 0.12735105140794012,
          "rotation": 0,
          "target": "7-p1_3rd-floor-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-p1_3rd-floor-bedroom-2",
      "name": "P1_3rd Floor-Bedroom 2",
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
          "yaw": -0.575178619910913,
          "pitch": 0,
          "rotation": 0,
          "target": "10-p1_3rd-floor-bathroom-2"
        },
        {
          "yaw": -2.3147631956143613,
          "pitch": -0.11620480776995201,
          "rotation": 0,
          "target": "6-p1_3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-p1_3rd-floor-bathroom-2",
      "name": "P1_3rd Floor-Bathroom 2",
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
          "yaw": -1.6183285566192112,
          "pitch": -1.5993780522194356e-8,
          "rotation": 0,
          "target": "9-p1_3rd-floor-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-p1_3rd-floor-bedroom-3",
      "name": "P1_3rd Floor-Bedroom 3",
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
          "yaw": 1.6094454899095858,
          "pitch": 0.022629150633161288,
          "rotation": 0,
          "target": "12-p1_3rd-floor-bathroom-3"
        },
        {
          "yaw": 2.596558117254874,
          "pitch": -0.1563274933444223,
          "rotation": 0,
          "target": "6-p1_3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-p1_3rd-floor-bathroom-3",
      "name": "P1_3rd Floor-Bathroom 3",
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
          "yaw": 1.536229664646811,
          "pitch": 0.05707379825194714,
          "rotation": 0,
          "target": "6-p1_3rd-floor-hall"
        },
        {
          "yaw": -2.7099458207890414,
          "pitch": 0.1368217608477842,
          "rotation": 0,
          "target": "11-p1_3rd-floor-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-20-terrace-1",
      "name": "20 Terrace 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2955498357962636,
          "pitch": 0.2593444423312299,
          "rotation": 0,
          "target": "14-20-terrace-2"
        },
        {
          "yaw": -0.5550445531036949,
          "pitch": 0.08221497405054023,
          "rotation": 0,
          "target": "6-p1_3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-20-terrace-2",
      "name": "20 Terrace 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.48726157655635305,
          "pitch": 0.21765037548101418,
          "rotation": 0,
          "target": "13-20-terrace-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-p1_3rd-floor-bathroom-2",
      "name": "P1_3rd Floor-Bathroom 2",
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
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "BBH-the Heron Interior_Package2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
