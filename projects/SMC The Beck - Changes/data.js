var APP_DATA = {
  "scenes": [
    {
      "id": "0-opt-basement",
      "name": "Opt. Basement",
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
          "yaw": 0.03370703884411341,
          "pitch": 0.13592615845482747,
          "rotation": 0,
          "target": "1-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-foyer",
      "name": "Foyer",
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
          "yaw": 0.08100827505442254,
          "pitch": 0.37439724062462076,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
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
          "yaw": -0.013992159390083359,
          "pitch": 0.20924831415567624,
          "rotation": 0,
          "target": "4-familly-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-eating",
      "name": "Eating",
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
          "yaw": 0.1904167795620193,
          "pitch": 0.3989127584225649,
          "rotation": 0,
          "target": "4-familly-room"
        },
        {
          "yaw": 2.4233286186478704,
          "pitch": 0.6015472748771273,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-familly-room",
      "name": "Familly room",
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
          "yaw": -1.0272481488706848,
          "pitch": 0.3714647915906699,
          "rotation": 0,
          "target": "3-eating"
        },
        {
          "yaw": -1.7845747404360068,
          "pitch": 0.28886436423774775,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-owners-bathroom",
      "name": "Owner's bathroom",
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
          "yaw": 3.083917466420715,
          "pitch": 0.5581686496514031,
          "rotation": 0,
          "target": "6-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-owners-bedroom",
      "name": "Owner's bedroom",
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
          "yaw": 2.815911156635213,
          "pitch": 0.6880656358289414,
          "rotation": 0,
          "target": "5-owners-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "Bedroom 2",
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
          "yaw": -0.40540313953420615,
          "pitch": 0.38600621642661537,
          "rotation": 0,
          "target": "8-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-3",
      "name": "Bedroom 3",
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
          "yaw": 0.5453718935531029,
          "pitch": 0.3293319522534599,
          "rotation": 0,
          "target": "7-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-flex-space",
      "name": "Flex space",
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
          "yaw": -1.6860478952659417,
          "pitch": 0.492205887687323,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC The Beck - Opt Basement",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
