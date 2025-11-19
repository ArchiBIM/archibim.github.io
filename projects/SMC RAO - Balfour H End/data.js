var APP_DATA = {
  "scenes": [
    {
      "id": "0-lower---entry",
      "name": "Lower - Entry",
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
          "yaw": 2.6889952802099115,
          "pitch": 0.3630101779692314,
          "rotation": 0,
          "target": "1-lower---foyer"
        },
        {
          "yaw": 2.378250009692451,
          "pitch": -0.1850046888567256,
          "rotation": 0,
          "target": "5-main---great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lower---foyer",
      "name": "Lower - Foyer",
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
          "yaw": 0.38843682167614446,
          "pitch": 0.3902125721045593,
          "rotation": 0,
          "target": "0-lower---entry"
        },
        {
          "yaw": -2.879010655635657,
          "pitch": 0.4902721285011413,
          "rotation": 0,
          "target": "2-lower---rec-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lower---rec-room",
      "name": "Lower - Rec. Room",
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
          "yaw": -1.1317317311426933,
          "pitch": 0.29657081045093747,
          "rotation": 0,
          "target": "1-lower---foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main---powder-room",
      "name": "Main - Powder Room",
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
          "yaw": 2.0660265413018237,
          "pitch": 0.9001951911070023,
          "rotation": 0,
          "target": "4-main---breakfast"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main---breakfast",
      "name": "Main - Breakfast",
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
          "yaw": -0.8467736808535058,
          "pitch": 0.4181111981972272,
          "rotation": 0,
          "target": "7-upper---bedroom-2"
        },
        {
          "yaw": -0.26434223403983026,
          "pitch": 0.4451122123655207,
          "rotation": 0,
          "target": "6-main---kitchen"
        },
        {
          "yaw": -0.19128282117856088,
          "pitch": 0.18109604915647992,
          "rotation": 0,
          "target": "5-main---great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-main---great-room",
      "name": "Main - Great Room",
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
          "yaw": -0.5012847066443555,
          "pitch": 0.22511839557982327,
          "rotation": 0,
          "target": "6-main---kitchen"
        },
        {
          "yaw": -0.24614175087797463,
          "pitch": 0.3461747959605894,
          "rotation": 0,
          "target": "1-lower---foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-main---kitchen",
      "name": "Main - Kitchen",
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
          "yaw": 1.2759556393293696,
          "pitch": 0.5217442947565409,
          "rotation": 0,
          "target": "4-main---breakfast"
        },
        {
          "yaw": 2.300152283772529,
          "pitch": 0.3742662302684341,
          "rotation": 0,
          "target": "3-main---powder-room"
        },
        {
          "yaw": -0.922754473482712,
          "pitch": 0.29119632443455146,
          "rotation": 0,
          "target": "5-main---great-room"
        },
        {
          "yaw": -1.2523338571829505,
          "pitch": 0.5389733679182225,
          "rotation": 0,
          "target": "1-lower---foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-upper---bedroom-2",
      "name": "Upper - Bedroom 2",
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
          "yaw": 2.5795155698698355,
          "pitch": 0.22748084945642333,
          "rotation": 0,
          "target": "11-upper---owners-bedroom"
        },
        {
          "yaw": 2.981920151896336,
          "pitch": 0.5722816642717454,
          "rotation": 0,
          "target": "9-upper---hall-bath"
        },
        {
          "yaw": 2.983406962231051,
          "pitch": 0.8292118547563003,
          "rotation": 0,
          "target": "8-upper---bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upper---bedroom-3",
      "name": "Upper - Bedroom 3",
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
          "yaw": 1.7844349207546353,
          "pitch": 0.6742826998415818,
          "rotation": 0,
          "target": "7-upper---bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-upper---hall-bath",
      "name": "Upper - Hall Bath",
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
          "yaw": 0.3482020187302268,
          "pitch": 0.6242297238242962,
          "rotation": 0,
          "target": "7-upper---bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-upper---owners-bathroom",
      "name": "Upper - Owner's Bathroom",
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
          "yaw": 0.728647639282082,
          "pitch": 0.5781854135333155,
          "rotation": 0,
          "target": "11-upper---owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-upper---owners-bedroom",
      "name": "Upper - Owner's Bedroom",
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
          "yaw": 2.0840243816785886,
          "pitch": 0.4200162475761964,
          "rotation": 0,
          "target": "10-upper---owners-bathroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC RAO Balfour H End",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
