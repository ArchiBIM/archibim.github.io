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
          "yaw": -1.5183457613076392,
          "pitch": 0.06590688503220221,
          "rotation": 0,
          "target": "3-1st-floor-bathroom-1"
        },
        {
          "yaw": -0.9607137989142469,
          "pitch": 0.05471093217584766,
          "rotation": 0,
          "target": "2-1st-floor-bedroom-1"
        },
        {
          "yaw": -0.2939274386309876,
          "pitch": 0.06648481504472059,
          "rotation": 0,
          "target": "1-1st-floor-garage"
        },
        {
          "yaw": 0.15160443485881814,
          "pitch": -0.28721748364412925,
          "rotation": 0,
          "target": "4-2nd-floor-family-room"
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
          "yaw": 2.8242624199577797,
          "pitch": 0.0522535601557248,
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
          "yaw": -2.0834403416088314,
          "pitch": -0.09199371820336566,
          "rotation": 0,
          "target": "3-1st-floor-bathroom-1"
        },
        {
          "yaw": 2.8690335026082003,
          "pitch": 0.36885378985623163,
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
          "yaw": 3.1109228620798532,
          "pitch": 0.09182497126411171,
          "rotation": 0,
          "target": "2-1st-floor-bedroom-1"
        },
        {
          "yaw": -1.4067962805910756,
          "pitch": 0.0787685818912216,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
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
          "yaw": -0.8996795750062425,
          "pitch": 0.04034230673988226,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        },
        {
          "yaw": -0.47568998015325903,
          "pitch": 0.24418058732541326,
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
          "yaw": -0.10758297633868708,
          "pitch": 0.4472044119988503,
          "rotation": 0,
          "target": "6-2nd-floor-dining"
        },
        {
          "yaw": -3.0176322545456795,
          "pitch": 0.2329913427490382,
          "rotation": 0,
          "target": "4-2nd-floor-family-room"
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
          "yaw": 1.3030313250299095,
          "pitch": 0.3614680110349102,
          "rotation": 0,
          "target": "5-2nd-floor-kitchen"
        },
        {
          "yaw": 1.949630112613785,
          "pitch": -0.19831065378769708,
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
          "yaw": -2.67663324702864,
          "pitch": 0.025217791020423874,
          "rotation": 0,
          "target": "10-3rd-floor-bedroom-2"
        },
        {
          "yaw": 1.8984053098389255,
          "pitch": 0.10763749117083421,
          "rotation": 0,
          "target": "12-3rd-floor-bedroom-3"
        },
        {
          "yaw": 2.2753158683850128,
          "pitch": 0.06645982392810623,
          "rotation": 0,
          "target": "13-3rd-floor-bathroom-3"
        },
        {
          "yaw": 0.13831117747140453,
          "pitch": 0.05698825243319128,
          "rotation": 0,
          "target": "8-3rd-floor-owners-bedroom"
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
          "yaw": 1.8784154455079278,
          "pitch": -0.02346852084070683,
          "rotation": 0,
          "target": "9-3rd-floor-owners-bathroom"
        },
        {
          "yaw": -2.198656931659688,
          "pitch": -0.010978285617419203,
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
          "yaw": -1.993760815016607,
          "pitch": 0.32048401196315623,
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
          "yaw": -0.5901447305971406,
          "pitch": 0,
          "rotation": 0,
          "target": "11-3rd-floor-bathroom-2"
        },
        {
          "yaw": -2.343399583644187,
          "pitch": 0.38358387423086704,
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
          "yaw": -1.6166574738176074,
          "pitch": -1.7763568394002505e-15,
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
          "yaw": 2.7842757620683827,
          "pitch": 0.08242966505743077,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        },
        {
          "yaw": 1.5911949863864399,
          "pitch": -0.036947247721375476,
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
          "yaw": 1.517943541786579,
          "pitch": -0.011574087357594465,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        },
        {
          "yaw": -2.851593745065216,
          "pitch": -0.0035605379632990264,
          "rotation": 0,
          "target": "12-3rd-floor-bedroom-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BBH-the Heron Interior-Package 3",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
