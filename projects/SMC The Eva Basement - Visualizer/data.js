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
          "yaw": 0.045568363235679143,
          "pitch": 0.2690292212200571,
          "rotation": 0,
          "target": "1-1-st-floor-kitchen"
        },
        {
          "yaw": -0.25136801317372814,
          "pitch": -0.2913376430190908,
          "rotation": 0,
          "target": "5-2-nd-floor-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1-st-floor-kitchen",
      "name": "1-st Floor Kitchen",
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
          "yaw": 2.2876665306815696,
          "pitch": 0.01385644407410247,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        },
        {
          "yaw": -1.8211419248407381,
          "pitch": -0.7912906891114595,
          "rotation": 0,
          "target": "5-2-nd-floor-flex-space"
        },
        {
          "yaw": -0.7660559068433255,
          "pitch": 0.1886898065554039,
          "rotation": 0,
          "target": "2-1-st-floor-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1-st-floor-family-room",
      "name": "1-st Floor Family room",
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
          "yaw": 0.1075829026918953,
          "pitch": 0.2522137955547006,
          "rotation": 0,
          "target": "1-1-st-floor-kitchen"
        },
        {
          "yaw": 0.4098050320304445,
          "pitch": 0.09437353617188293,
          "rotation": 0,
          "target": "9-basement-recroom-1"
        },
        {
          "yaw": -0.6698433795413479,
          "pitch": 0.0956588017904707,
          "rotation": 0,
          "target": "3-1-st-floor-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1-st-floor-owners-bedroom",
      "name": "1-st Floor Owner's bedroom",
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
          "yaw": 1.202364912883196,
          "pitch": 0.08411048801113452,
          "rotation": 0,
          "target": "4-1-st-floor-owners-bathroom"
        },
        {
          "yaw": 2.5956399388857507,
          "pitch": 0.22068553499715193,
          "rotation": 0,
          "target": "2-1-st-floor-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-1-st-floor-owners-bathroom",
      "name": "1-st Floor Owner's bathroom",
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
          "yaw": 1.709514270811339,
          "pitch": 0.35450987690897406,
          "rotation": 0,
          "target": "3-1-st-floor-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2-nd-floor-flex-space",
      "name": "2-nd Floor Flex space",
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
          "yaw": -0.5881030138341767,
          "pitch": 0.09570558954294484,
          "rotation": 0,
          "target": "6-2-nd-floor-bedroom"
        },
        {
          "yaw": -0.744179462098348,
          "pitch": 0.1086452544543377,
          "rotation": 0,
          "target": "7-2-nd-floor-bathroom"
        },
        {
          "yaw": -3.0837696225177833,
          "pitch": 0.3272912784706854,
          "rotation": 0,
          "target": "8-2-nd-floor-terrace"
        },
        {
          "yaw": 0.7256749843012233,
          "pitch": 0.18162414808452354,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2-nd-floor-bedroom",
      "name": "2-nd Floor Bedroom",
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
          "yaw": 1.6475350392108563,
          "pitch": 0.15023284043035545,
          "rotation": 0,
          "target": "5-2-nd-floor-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-2-nd-floor-bathroom",
      "name": "2-nd Floor Bathroom",
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
          "yaw": -2.779181456295147,
          "pitch": 0.06330050473104265,
          "rotation": 0,
          "target": "5-2-nd-floor-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-2-nd-floor-terrace",
      "name": "2-nd Floor Terrace",
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
          "yaw": -0.9639455019562408,
          "pitch": 0.20286782759978905,
          "rotation": 0,
          "target": "5-2-nd-floor-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-basement-recroom-1",
      "name": "Basement Rec.Room 1",
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
          "yaw": 0.10758293951529119,
          "pitch": 0.2566837180436732,
          "rotation": 0,
          "target": "10-basement-recroom-2"
        },
        {
          "yaw": -0.47446788873079626,
          "pitch": -0.4952308022440164,
          "rotation": 0,
          "target": "1-1-st-floor-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-basement-recroom-2",
      "name": "Basement Rec.Room 2",
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
          "yaw": -2.705529834009713,
          "pitch": 0.23200325424382484,
          "rotation": 0,
          "target": "9-basement-recroom-1"
        },
        {
          "yaw": 1.661740388030661,
          "pitch": -0.018236762000746864,
          "rotation": 0,
          "target": "12-basement-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-basement-bedroom",
      "name": "Basement Bedroom",
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
          "yaw": -1.683388751657997,
          "pitch": 0.07745965574145153,
          "rotation": 0,
          "target": "10-basement-recroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-basement-bathroom",
      "name": "Basement Bathroom",
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
          "yaw": 3.1333503245967265,
          "pitch": 0.3053778415877044,
          "rotation": 0,
          "target": "10-basement-recroom-2"
        },
        {
          "yaw": -2.537555408134889,
          "pitch": 0.12624811712255024,
          "rotation": 0,
          "target": "11-basement-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC - The Eva with Basement",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
