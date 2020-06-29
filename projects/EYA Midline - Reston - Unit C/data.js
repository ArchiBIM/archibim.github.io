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
          "yaw": 0.12570476031783429,
          "pitch": 0.12126421854598846,
          "rotation": 0,
          "target": "3-1-st-floor-garage"
        },
        {
          "yaw": 0.3292155597991808,
          "pitch": 0.3610029459966384,
          "rotation": 0,
          "target": "1-1-st-floor-study"
        },
        {
          "yaw": -0.13593426824582622,
          "pitch": -0.4707228327547526,
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
          "yaw": -0.15197231934989475,
          "pitch": 0.38557753346298185,
          "rotation": 0,
          "target": "2-1-st-floor-bathroom"
        },
        {
          "yaw": -0.6754274792974382,
          "pitch": 0.4108992007717127,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
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
          "yaw": -2.5356905896288886,
          "pitch": 0.6159046252415834,
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
          "yaw": -1.2858922527354526,
          "pitch": 0.3341899667429189,
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
          "yaw": -0.0890879842612815,
          "pitch": 0.38321416946809705,
          "rotation": 0,
          "target": "5-2-nd-floor-living-room"
        },
        {
          "yaw": 0.5052522320805366,
          "pitch": 0.21929000929010556,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
        },
        {
          "yaw": 1.4827404032331906,
          "pitch": 0.4665075232921474,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        },
        {
          "yaw": -2.5808296264259027,
          "pitch": 0.39475192227457967,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen"
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
          "yaw": 0.005582705814719091,
          "pitch": 0.42467885794489213,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        },
        {
          "yaw": -1.5564921107276906,
          "pitch": 0.3336134112810427,
          "rotation": 0,
          "target": "8-3-rd-floor-hallway"
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
          "yaw": -0.9519743171783617,
          "pitch": 0.5718591041099081,
          "rotation": 0,
          "target": "7-2-nd-floor-family-room"
        },
        {
          "yaw": 0.524042598457962,
          "pitch": 0.3037212897315005,
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
          "yaw": 1.0767298984736033,
          "pitch": 0.2642476763908892,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        },
        {
          "yaw": 1.8457083165609447,
          "pitch": 0.4155739971821575,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen"
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
          "yaw": -1.8786751264174466,
          "pitch": 0.849696119579729,
          "rotation": 0,
          "target": "4-2-nd-floor-dining-room"
        },
        {
          "yaw": -2.8878727050521906,
          "pitch": 0.2815076471901996,
          "rotation": 0,
          "target": "13-4-th-floor-terrace"
        },
        {
          "yaw": 0.11945801608588269,
          "pitch": 0.2548544077966888,
          "rotation": 0,
          "target": "9-3-rd-floor-master-bedroom"
        },
        {
          "yaw": 2.878555415069946,
          "pitch": 0.7649805751595053,
          "rotation": 0,
          "target": "12-3-rd-floor-bathroom-2"
        },
        {
          "yaw": 3.0897408450312644,
          "pitch": 0.37590056240467007,
          "rotation": 0,
          "target": "11-3-rd-floor-bedroom-2"
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
          "yaw": 2.8861357881539593,
          "pitch": 0.4660529503509814,
          "rotation": 0,
          "target": "10-3-rd-floor-master-bathroom"
        },
        {
          "yaw": 2.0518791981637206,
          "pitch": 0.3907097835704967,
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
          "yaw": -2.8361370075423196,
          "pitch": 0.6253728865554518,
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
          "yaw": 2.1133726155043835,
          "pitch": 0.4778762110983301,
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
          "yaw": -1.570109529862858,
          "pitch": 0.7630340216594576,
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
          "yaw": 0.002791371862830516,
          "pitch": 0.3406813861152411,
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
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
