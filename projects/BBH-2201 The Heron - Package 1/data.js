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
          "yaw": -0.31332692570808796,
          "pitch": 0.04563143028597416,
          "rotation": 0,
          "target": "3-1st-floor-garage"
        },
        {
          "yaw": -0.9727094151486568,
          "pitch": 0.09397224074939992,
          "rotation": 0,
          "target": "1-1st-floor-bedroom-1"
        },
        {
          "yaw": 0.14301663531662,
          "pitch": -0.12991670614234607,
          "rotation": 0,
          "target": "4-2nd-floor-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1st-floor-bedroom-1",
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
          "yaw": 2.796431317248791,
          "pitch": 0.007384982946247121,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        },
        {
          "yaw": -2.036537134036168,
          "pitch": -0.040610521421857726,
          "rotation": 0,
          "target": "2-1st-floor-bathroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1st-floor-bathroom-1",
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
          "yaw": 3.0096589880583036,
          "pitch": 0.09441338143828659,
          "rotation": 0,
          "target": "1-1st-floor-bedroom-1"
        },
        {
          "yaw": -1.7827802431551518,
          "pitch": 0.1342486090941044,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1st-floor-garage",
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
          "yaw": 2.807847102196349,
          "pitch": 0.18797839936362948,
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
          "yaw": -0.8980963878740784,
          "pitch": 0.08107299551090819,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        },
        {
          "yaw": -0.5188112235122198,
          "pitch": 0.1944143364767541,
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
          "yaw": -3.038122657453293,
          "pitch": 0.19776411481088374,
          "rotation": 0,
          "target": "4-2nd-floor-family-room"
        },
        {
          "yaw": -0.43725221339183307,
          "pitch": 0.4634915192024138,
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
          "yaw": 1.161840367854559,
          "pitch": 0.41939561172587503,
          "rotation": 0,
          "target": "5-2nd-floor-kitchen"
        },
        {
          "yaw": 1.4406740282468036,
          "pitch": 0.17472583697868416,
          "rotation": 0,
          "target": "4-2nd-floor-family-room"
        },
        {
          "yaw": 1.9754176676412065,
          "pitch": -0.16744466553092607,
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
          "yaw": -2.4255636600255706,
          "pitch": 0.04770807029722057,
          "rotation": 0,
          "target": "10-3rd-floor-bedroom-2"
        },
        {
          "yaw": 1.5271680578806617,
          "pitch": 0.05278327753231693,
          "rotation": 0,
          "target": "12-3rd-floor-bedroom-3"
        },
        {
          "yaw": 0.12681834231266365,
          "pitch": 0.02861828906226016,
          "rotation": 0,
          "target": "8-3rd-floor-owners-bedroom"
        },
        {
          "yaw": -0.055319909109929455,
          "pitch": 0.0303477996822501,
          "rotation": 0,
          "target": "14-roof-terrace-1"
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
          "yaw": 1.8719313227789032,
          "pitch": 0.0270951250847542,
          "rotation": 0,
          "target": "9-3rd-floor-owners-bathroom"
        },
        {
          "yaw": -2.2197483877978232,
          "pitch": 0.04977113600098093,
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
          "yaw": -2.0389630867255963,
          "pitch": 0.29690041142933765,
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
          "yaw": -0.5898474515895344,
          "pitch": 0.009817857641415628,
          "rotation": 0,
          "target": "11-3rd-floor-bathroom-2"
        },
        {
          "yaw": -2.3547304657353365,
          "pitch": 0.38965673322167405,
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
          "yaw": -1.6172580403799977,
          "pitch": 0.11065859886027596,
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
          "yaw": 1.654411585361947,
          "pitch": -0.040617168684015326,
          "rotation": 0,
          "target": "13-3rd-floor-bathroom-3"
        },
        {
          "yaw": 2.6323212867284695,
          "pitch": 0.028470291954558746,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
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
          "yaw": 1.5094642217658247,
          "pitch": 0.09020423202736438,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        },
        {
          "yaw": -2.73124034957139,
          "pitch": 0.07178333860293584,
          "rotation": 0,
          "target": "12-3rd-floor-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-roof-terrace-1",
      "name": "Roof Terrace 1",
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
          "yaw": -0.5512270394256475,
          "pitch": 0.0851787765277301,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        },
        {
          "yaw": 0.3155612625901263,
          "pitch": 0.22265473452997497,
          "rotation": 0,
          "target": "15-roof-terrace-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-roof-terrace-2",
      "name": "Roof Terrace 2",
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
          "yaw": -0.5109793408448056,
          "pitch": 0.22753346036799904,
          "rotation": 0,
          "target": "14-roof-terrace-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BBH The Heron Interior - Package1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
