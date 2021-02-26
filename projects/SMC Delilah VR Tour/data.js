var APP_DATA = {
  "scenes": [
    {
      "id": "0-lower-lvl-entry",
      "name": "Lower lvl. Entry",
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
          "yaw": -1.2401562301962592,
          "pitch": 0.6231902021928395,
          "rotation": 0,
          "target": "1-main-lvl-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-main-lvl-dining-room",
      "name": "Main lvl. Dining Room",
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
          "yaw": 0.8374471097934553,
          "pitch": 0.29816035064185087,
          "rotation": 0,
          "target": "2-main-lvl-living-room"
        },
        {
          "yaw": -0.6237146455520239,
          "pitch": 0.6917705089281547,
          "rotation": 0,
          "target": "7-upper-lvl-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-lvl-living-room",
      "name": "Main lvl. Living Room",
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
          "yaw": -0.534722817363317,
          "pitch": 0.2915144382034107,
          "rotation": 0,
          "target": "1-main-lvl-dining-room"
        },
        {
          "yaw": 0.5298576672530739,
          "pitch": 0.638423552348371,
          "rotation": 0,
          "target": "0-lower-lvl-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-upper-lvl-bathroom",
      "name": "Upper lvl. Bathroom",
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
          "yaw": -3.0942961542461838,
          "pitch": 0.7501753955246357,
          "rotation": 0,
          "target": "8-loft-lvl"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-upper-lvl-bedroom-2",
      "name": "Upper lvl. Bedroom 2",
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
          "yaw": 2.797532352690281,
          "pitch": 0.650545361025852,
          "rotation": 0,
          "target": "8-loft-lvl"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-upper-lvl-bedroom-3",
      "name": "Upper lvl. Bedroom 3",
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
          "yaw": -3.0897472235476613,
          "pitch": 0.8464137579030719,
          "rotation": 0,
          "target": "4-upper-lvl-bedroom-2"
        },
        {
          "yaw": 2.6898242903398195,
          "pitch": 0.3520540533155483,
          "rotation": 0,
          "target": "7-upper-lvl-master-bedroom"
        },
        {
          "yaw": 2.9135813590214354,
          "pitch": 0.6215172905339124,
          "rotation": 0,
          "target": "3-upper-lvl-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upper-lvl-master-bathroom",
      "name": "Upper lvl. Master Bathroom",
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
          "yaw": 2.251477014272429,
          "pitch": 0.607626838062048,
          "rotation": 0,
          "target": "7-upper-lvl-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-upper-lvl-master-bedroom",
      "name": "Upper lvl. Master Bedroom",
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
          "yaw": 0.761644782077159,
          "pitch": 0.5951127025185379,
          "rotation": 0,
          "target": "6-upper-lvl-master-bathroom"
        },
        {
          "yaw": 2.3185826418606137,
          "pitch": 0.32463014820817193,
          "rotation": 0,
          "target": "5-upper-lvl-bedroom-3"
        },
        {
          "yaw": 2.458248992897772,
          "pitch": 0.402510536969805,
          "rotation": 0,
          "target": "8-loft-lvl"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-loft-lvl",
      "name": "Loft lvl.",
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
          "yaw": -2.78761655081553,
          "pitch": 0.7706707057336484,
          "rotation": 0,
          "target": "9-loft-lvl-terrace"
        },
        {
          "yaw": 1.216736678910726,
          "pitch": 0.8083513924968173,
          "rotation": 0,
          "target": "7-upper-lvl-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-loft-lvl-terrace",
      "name": "Loft lvl. Terrace",
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
          "yaw": 2.8106982789844333,
          "pitch": 0.7200141958302435,
          "rotation": 0,
          "target": "8-loft-lvl"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Delilah D VR tour R2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
