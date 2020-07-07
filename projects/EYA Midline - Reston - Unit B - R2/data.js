var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-st-floor-entry",
      "name": "1-st Floor Entry",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1325695141596448,
          "pitch": 0.4275671944390531,
          "rotation": 0,
          "target": "3-1-st-floor-study"
        },
        {
          "yaw": -0.32346689502571024,
          "pitch": 0.38026037838283244,
          "rotation": 0,
          "target": "2-1-st-floor-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1-st-floor-stairs",
      "name": "1-st Floor Stairs",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.049639508847684866,
          "pitch": 0.6867619665675111,
          "rotation": 0,
          "target": "2-1-st-floor-garage"
        },
        {
          "yaw": 3.0482202371526945,
          "pitch": 0.5173992247801493,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1-st-floor-garage",
      "name": "1-st Floor Garage",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0281935128303967,
          "pitch": 0.24464374989872617,
          "rotation": 0,
          "target": "1-1-st-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1-st-floor-study",
      "name": "1-st Floor Study",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.656411956699685,
          "pitch": 0.5553632516780773,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-1-st-floor-bathroom",
      "name": "1-st Floor Bathroom",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6251118301213046,
          "pitch": 0.6723651071407541,
          "rotation": 0,
          "target": "1-1-st-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2-nd-floor-dining-room",
      "name": "2-nd Floor Dining Room",
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
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.969539549509702,
          "pitch": 0.3501786428503557,
          "rotation": 0,
          "target": "5-2-nd-floor-dining-room"
        },
        {
          "yaw": -0.44952483221530315,
          "pitch": 0.49562294599771306,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen-1"
        },
        {
          "yaw": 0.4480993926079293,
          "pitch": 0.41854716363801714,
          "rotation": 0,
          "target": "7-2-nd-floor-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2-nd-floor-kitchen-1",
      "name": "2-nd Floor Kitchen 1",
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
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6487533049398513,
          "pitch": 0.3072535946395121,
          "rotation": 0,
          "target": "5-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-2-nd-floor-kitchen-2",
      "name": "2-nd Floor Kitchen 2",
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
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.134267299582733,
          "pitch": 0.2949089630100392,
          "rotation": 0,
          "target": "5-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-2-nd-floor-living-room",
      "name": "2-nd Floor Living Room",
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
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4363328257350023,
          "pitch": 0.3243950635298596,
          "rotation": 0,
          "target": "5-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-3-rd-floor-bathroom-2",
      "name": "3-rd Floor Bathroom 2",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.240790708693556,
          "pitch": 0.7443075995981481,
          "rotation": 0,
          "target": "10-3-rd-floor-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-3-rd-floor-bedroom-2",
      "name": "3-rd Floor Bedroom 2",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8892623784666336,
          "pitch": 0.6213877917125856,
          "rotation": 0,
          "target": "9-3-rd-floor-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-3-rd-floor-master-bathroom",
      "name": "3-rd Floor Master Bathroom",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01559677989943431,
          "pitch": 0.6685637941581906,
          "rotation": 0,
          "target": "12-3-rd-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-3-rd-floor-master-bedroom",
      "name": "3-rd Floor Master Bedroom",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0276779523475685,
          "pitch": 0.41235164754465536,
          "rotation": 0,
          "target": "11-3-rd-floor-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-4-th-floor-terrace",
      "name": "4-th Floor Terrace",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.24635930167653441,
          "pitch": 0.3688308428015752,
          "rotation": 0,
          "target": "14-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-4-th-floor-loft",
      "name": "4-th Floor Loft",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39148139020821304,
          "pitch": 0.6587814389919977,
          "rotation": 0,
          "target": "16-4-th-floor-bathroom"
        },
        {
          "yaw": -1.3103344186974244,
          "pitch": 0.6483211150047943,
          "rotation": 0,
          "target": "15-4-th-floor-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-4-th-floor-bedroom-3",
      "name": "4-th Floor Bedroom 3",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.325440545549551,
          "pitch": 0.4637380015171395,
          "rotation": 0,
          "target": "14-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-4-th-floor-bathroom",
      "name": "4-th Floor Bathroom",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.586608426477481,
          "pitch": 0.5962708606473104,
          "rotation": 0,
          "target": "14-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EYA Midline Reston - Unit B VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
