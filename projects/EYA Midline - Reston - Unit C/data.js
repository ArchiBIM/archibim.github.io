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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3031329812608696,
          "pitch": 0.3977696674937121,
          "rotation": 0,
          "target": "1-1-st-floor-study"
        },
        {
          "yaw": 0.11395082578269644,
          "pitch": 0.15948405272677846,
          "rotation": 0,
          "target": "3-1-st-floor-garage"
        },
        {
          "yaw": -0.1359342097357974,
          "pitch": -0.48164551519854726,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1-st-floor-study",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6685352931693203,
          "pitch": 0.3700697564283839,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        },
        {
          "yaw": -0.17678344531613632,
          "pitch": 0.3696412997099685,
          "rotation": 0,
          "target": "2-1-st-floor-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1-st-floor-bathroom",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6923281783471182,
          "pitch": 0.5684382624293605,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        },
        {
          "yaw": -2.6124032473742993,
          "pitch": 0.5914448694238459,
          "rotation": 0,
          "target": "1-1-st-floor-study"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1-st-floor-garage",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2663169645564114,
          "pitch": 0.34686690995080127,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-2-nd-floor-dining-room",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4574629391181873,
          "pitch": 0.4507840523448987,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        },
        {
          "yaw": -0.0914232659993317,
          "pitch": 0.38509802108250923,
          "rotation": 0,
          "target": "5-2-nd-floor-living-room"
        },
        {
          "yaw": -2.618461472238245,
          "pitch": 0.37935209916660284,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen"
        },
        {
          "yaw": 0.685455643082701,
          "pitch": -0.06673497530427674,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2-nd-floor-living-room",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07800016531217935,
          "pitch": 0.3763367772533428,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2-nd-floor-kitchen",
      "name": "2-nd Floor Kitchen",
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
          "yaw": -0.9085039157911297,
          "pitch": 0.4395742791015351,
          "rotation": 0,
          "target": "7-2-nd-floor-family-room"
        },
        {
          "yaw": 0.5155366422910266,
          "pitch": 0.31242310218151026,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-2-nd-floor-family-room",
      "name": "2-nd Floor Family Room",
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
          "yaw": 1.8181484793449778,
          "pitch": 0.41238462941975307,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen"
        },
        {
          "yaw": 1.096748815236868,
          "pitch": 0.259955016041598,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-3-rd-floor-hallway",
      "name": "3-rd Floor Hallway",
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
          "yaw": -2.784682378298843,
          "pitch": 0.0695010345384599,
          "rotation": 0,
          "target": "13-4-th-floor-terrace"
        },
        {
          "yaw": 0.10394303427712437,
          "pitch": 0.24966076566522943,
          "rotation": 0,
          "target": "9-3-rd-floor-master-bedroom"
        },
        {
          "yaw": 0.9106439077851505,
          "pitch": 0.5059042965728366,
          "rotation": 0,
          "target": "11-3-rd-floor-bedroom-2"
        },
        {
          "yaw": 2.876187486979237,
          "pitch": 0.8049272232522569,
          "rotation": 0,
          "target": "12-3-rd-floor-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-3-rd-floor-master-bedroom",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.883009128683282,
          "pitch": 0.47304385155314854,
          "rotation": 0,
          "target": "10-3-rd-floor-master-bathroom"
        },
        {
          "yaw": 2.034653694565506,
          "pitch": 0.319357795245482,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-3-rd-floor-master-bathroom",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8799355320895597,
          "pitch": 0.4880176475073341,
          "rotation": 0,
          "target": "9-3-rd-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-3-rd-floor-bedroom-2",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.114066065548835,
          "pitch": 0.457124895484478,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-3-rd-floor-bathroom-2",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4782352629394389,
          "pitch": 0.8027833955782242,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.00558269976131065,
          "pitch": 0.33321929279344076,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EYA Midline Reston TH Unit C-1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
