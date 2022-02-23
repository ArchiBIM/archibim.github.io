var APP_DATA = {
  "scenes": [
    {
      "id": "0-1st-floor-foyer",
      "name": "1st Floor-Foyer",
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
          "yaw": 0.1991646444165731,
          "pitch": -0.1386392191477892,
          "rotation": 0,
          "target": "4-2nd-floor-family-room"
        },
        {
          "yaw": -0.28367152036228127,
          "pitch": 0.07236645043526302,
          "rotation": 0,
          "target": "1-1st-floor-garage"
        },
        {
          "yaw": -0.9774694753574629,
          "pitch": 0.1276708650098417,
          "rotation": 0,
          "target": "2-1st-floor-bedroom-1"
        },
        {
          "yaw": -1.4672590812825668,
          "pitch": 0.13353396777561244,
          "rotation": 0,
          "target": "3-1st-floor-bathroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1st-floor-garage",
      "name": "1st Floor-Garage",
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
          "yaw": 2.82479728787035,
          "pitch": 0.12365810793862941,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1st-floor-bedroom-1",
      "name": "1st Floor-Bedroom 1",
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
          "yaw": -2.0182113344302657,
          "pitch": -0.05623370777777836,
          "rotation": 0,
          "target": "3-1st-floor-bathroom-1"
        },
        {
          "yaw": 2.6655146371227243,
          "pitch": 0.0067944080268738105,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1st-floor-bathroom-1",
      "name": "1st Floor-Bathroom 1",
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
          "yaw": -1.4533926586982773,
          "pitch": 0.12170595659251404,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        },
        {
          "yaw": -3.0952176725044858,
          "pitch": 0.05633149087606171,
          "rotation": 0,
          "target": "2-1st-floor-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-2nd-floor-family-room",
      "name": "2nd Floor-Family room",
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
          "yaw": -0.9027528469483457,
          "pitch": 0.06281680345701801,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        },
        {
          "yaw": -0.49431799550228206,
          "pitch": 0.23616287386945167,
          "rotation": 0,
          "target": "5-2nd-floor-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2nd-floor-kitchen",
      "name": "2nd Floor-Kitchen",
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
          "yaw": -3.0011312830081103,
          "pitch": 0.2587918830521936,
          "rotation": 0,
          "target": "4-2nd-floor-family-room"
        },
        {
          "yaw": -0.4226828919808163,
          "pitch": 0.5127925289834572,
          "rotation": 0,
          "target": "6-2nd-floor-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2nd-floor-dining",
      "name": "2nd Floor-Dining",
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
          "yaw": 1.2056250930128751,
          "pitch": 0.41178484656544967,
          "rotation": 0,
          "target": "5-2nd-floor-kitchen"
        },
        {
          "yaw": 1.9543577411004858,
          "pitch": -0.18948694373823827,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-3rd-floor-hall",
      "name": "3rd Floor-Hall",
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
          "yaw": 0.12048155909904956,
          "pitch": 0.03294345597012871,
          "rotation": 0,
          "target": "8-3rd-floor-owners-bedroom"
        },
        {
          "yaw": -2.6859579414624175,
          "pitch": 0.03541649898179777,
          "rotation": 0,
          "target": "10-3rd-floor-bedroom-2"
        },
        {
          "yaw": 1.9466795176348164,
          "pitch": 0.046283140665172695,
          "rotation": 0,
          "target": "12-3rd-floor-bedroom-3"
        },
        {
          "yaw": 2.289847608414636,
          "pitch": 0.030918497145631108,
          "rotation": 0,
          "target": "13-3rd-floor-bathroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-3rd-floor-owners-bedroom",
      "name": "3rd Floor-Owners Bedroom",
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
          "yaw": 1.8680364715956754,
          "pitch": -0.00917234084422347,
          "rotation": 0,
          "target": "9-3rd-floor-owners-bathroom"
        },
        {
          "yaw": -2.1879941070200744,
          "pitch": 0.06797244339320585,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-3rd-floor-owners-bathroom",
      "name": "3rd Floor-Owners Bathroom",
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
          "yaw": -2.02960908934309,
          "pitch": 0.2692413032708103,
          "rotation": 0,
          "target": "8-3rd-floor-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-3rd-floor-bedroom-2",
      "name": "3rd Floor-Bedroom 2",
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
          "yaw": -0.5539104431854422,
          "pitch": 0.008997860265328228,
          "rotation": 0,
          "target": "11-3rd-floor-bathroom-2"
        },
        {
          "yaw": -2.4129507396869823,
          "pitch": 0.05615171179806211,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-3rd-floor-bathroom-2",
      "name": "3rd Floor-Bathroom 2",
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
          "yaw": -1.5667661819051624,
          "pitch": 0.08931765582670437,
          "rotation": 0,
          "target": "10-3rd-floor-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-3rd-floor-bedroom-3",
      "name": "3rd Floor-Bedroom 3",
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
          "yaw": 2.821276097677588,
          "pitch": -0.004813003868404664,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        },
        {
          "yaw": 1.5720536204330866,
          "pitch": -0.017389876218711464,
          "rotation": 0,
          "target": "13-3rd-floor-bathroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-3rd-floor-bathroom-3",
      "name": "3rd Floor-Bathroom 3",
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
          "yaw": 1.5063793287636456,
          "pitch": 0.07088906617630464,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        },
        {
          "yaw": -2.828993840740882,
          "pitch": 0.016043346228025612,
          "rotation": 0,
          "target": "12-3rd-floor-bedroom-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BBH-the Heron Interior-Package 1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
