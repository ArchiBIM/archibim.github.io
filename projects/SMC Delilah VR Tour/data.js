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
          "yaw": 0.22845962078980264,
          "pitch": 0.46833539905849975,
          "rotation": 0,
          "target": "1-lower-lvl"
        },
        {
          "yaw": -1.1102869486055233,
          "pitch": -0.26719478893179627,
          "rotation": 0,
          "target": "2-main-lvl-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lower-lvl",
      "name": "Lower lvl.",
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
          "yaw": 0.2747781119739727,
          "pitch": 0.3689913911393834,
          "rotation": 0,
          "target": "0-lower-lvl-entry"
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
          "yaw": -0.7193280307898906,
          "pitch": 0.3876896626022024,
          "rotation": 0,
          "target": "4-main-lvl-kitchen"
        },
        {
          "yaw": 0.15517859119482935,
          "pitch": 0.3605682942153585,
          "rotation": 0,
          "target": "0-lower-lvl-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-lvl-dining",
      "name": "Main lvl. Dining",
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
          "yaw": -0.38723223943116025,
          "pitch": 0.3405249340270302,
          "rotation": 0,
          "target": "6-upper-lvl-stairs"
        },
        {
          "yaw": 0.7986446317567868,
          "pitch": 0.28434152487844955,
          "rotation": 0,
          "target": "4-main-lvl-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main-lvl-kitchen",
      "name": "Main lvl. Kitchen",
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
          "yaw": 0.9088558208409552,
          "pitch": 0.431342431158944,
          "rotation": 0,
          "target": "2-main-lvl-living-room"
        },
        {
          "yaw": 0.29040830732071754,
          "pitch": 0.4362390292420404,
          "rotation": 0,
          "target": "0-lower-lvl-entry"
        },
        {
          "yaw": -1.3182190819460313,
          "pitch": 0.28698170061138306,
          "rotation": 0,
          "target": "3-main-lvl-dining"
        },
        {
          "yaw": -0.6308856440551995,
          "pitch": 0.2519780066690096,
          "rotation": 0,
          "target": "5-main-lvl-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-main-lvl-bathroom",
      "name": "Main lvl. Bathroom",
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
          "yaw": -1.8927836414454298,
          "pitch": 0.18915939203935395,
          "rotation": 0,
          "target": "2-main-lvl-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upper-lvl-stairs",
      "name": "Upper lvl. Stairs",
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
          "yaw": -0.009336316057700245,
          "pitch": 0.6132267891930017,
          "rotation": 0,
          "target": "7-upper-lvl-master-bedroom"
        },
        {
          "yaw": 2.9439741916214492,
          "pitch": 0.66701509389652,
          "rotation": 0,
          "target": "11-upper-lvl-bedroom-3"
        },
        {
          "yaw": 2.676865986459921,
          "pitch": 0.7247892608904127,
          "rotation": 0,
          "target": "10-upper-lvl-bedroom-2"
        },
        {
          "yaw": 2.1807604463868033,
          "pitch": 1.063071675111594,
          "rotation": 0,
          "target": "9-upper-lvl-bathroom"
        },
        {
          "yaw": -2.3998336238110856,
          "pitch": 0.4222672265807237,
          "rotation": 0,
          "target": "12-loft-lvl"
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-upper-lvl-master-bath",
      "name": "Upper lvl. Master Bath",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-upper-lvl-bathroom",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-upper-lvl-bedroom-2",
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
          "yaw": -0.5992787566339182,
          "pitch": 0.6666798929006195,
          "rotation": 0,
          "target": "6-upper-lvl-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-upper-lvl-bedroom-3",
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
          "yaw": 0.45180101666684713,
          "pitch": 0.6324321146856136,
          "rotation": 0,
          "target": "6-upper-lvl-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-loft-lvl",
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
          "yaw": 0.9073883956947153,
          "pitch": 0.5280828375858135,
          "rotation": 0,
          "target": "13-loft-lvl-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-loft-lvl-terrace",
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
          "yaw": 0.1468838431510271,
          "pitch": 0.43873744539238757,
          "rotation": 0,
          "target": "12-loft-lvl"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Delilah D VR tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
