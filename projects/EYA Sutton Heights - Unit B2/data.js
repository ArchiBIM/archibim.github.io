var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3300780288129346,
          "pitch": 0.4795799937823215,
          "rotation": 0,
          "target": "1-rec-room"
        },
        {
          "yaw": -0.1936191312536657,
          "pitch": -0.14214677698222644,
          "rotation": 0,
          "target": "2-second-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-rec-room",
      "name": "Rec Room",
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
          "yaw": 0.7085556271347802,
          "pitch": 0.35294752565992127,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-second-floor-landing",
      "name": "Second Floor Landing",
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
          "yaw": 1.5982000489419548,
          "pitch": 0.6199245338204715,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.15322090494979257,
          "pitch": 0.4125820624424783,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.9903208668101993,
          "pitch": 0.2682238435336082,
          "rotation": 0,
          "target": "5-living-room"
        },
        {
          "yaw": 0.514203217064626,
          "pitch": 0.39778101237935637,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "Dining",
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
          "yaw": 1.8647242052107442,
          "pitch": 0.3753067086986608,
          "rotation": 0,
          "target": "2-second-floor-landing"
        },
        {
          "yaw": 2.952985237973488,
          "pitch": 0.41529927397911237,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -0.11516249573000081,
          "pitch": 0.45474406966018677,
          "rotation": 0,
          "target": "5-living-room"
        },
        {
          "yaw": 1.1945541409011717,
          "pitch": -0.30078819603654416,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.012219353528482912,
          "pitch": 0.32050572785366604,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 0.0020366525057333718,
          "pitch": 0.2009176435198441,
          "rotation": 0,
          "target": "5-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living-room",
      "name": "Living Room",
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
          "yaw": 0.8845060731410417,
          "pitch": -0.2661350487361531,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        },
        {
          "yaw": 1.4584621057207396,
          "pitch": 0.5515113836320609,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 1.8518435966434543,
          "pitch": 0.2677940241973893,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-3rd-floor-corridor",
      "name": "3rd Floor Corridor",
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
          "yaw": 0.003006385894906316,
          "pitch": 0.3839420551473527,
          "rotation": 0,
          "target": "9-bedroom-2"
        },
        {
          "yaw": 0.2773773639284496,
          "pitch": -0.3183952857337147,
          "rotation": 0,
          "target": "12-loft"
        },
        {
          "yaw": -2.5823015224314076,
          "pitch": 0.7280420163045953,
          "rotation": 0,
          "target": "7-owners-bedroom"
        },
        {
          "yaw": 2.373976805877464,
          "pitch": 0.7537518820252451,
          "rotation": 0,
          "target": "2-second-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-owners-bedroom",
      "name": "Owner’s Bedroom",
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
          "yaw": -1.6619455638684784,
          "pitch": 0.5119964173092466,
          "rotation": 0,
          "target": "6-3rd-floor-corridor"
        },
        {
          "yaw": 2.335312919951404,
          "pitch": 0.593991943191325,
          "rotation": 0,
          "target": "8-owners-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-owners-bathroom",
      "name": "Owner’s Bathroom",
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
          "yaw": -1.5195771292841673,
          "pitch": 0.44167350435382247,
          "rotation": 0,
          "target": "7-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-2",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.45969159642908153,
          "pitch": 0.5321358861431147,
          "rotation": 0,
          "target": "10-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom-2",
      "name": "Bathroom 2",
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
          "yaw": 1.8077742444498215,
          "pitch": 0.5284196781746822,
          "rotation": 0,
          "target": "9-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-3",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.329653845497548,
          "pitch": 0.4083038437269053,
          "rotation": 0,
          "target": "12-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-loft",
      "name": "Loft",
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
          "yaw": -0.06254591605870274,
          "pitch": 0.20552362006320024,
          "rotation": 0,
          "target": "13-roof-terrace"
        },
        {
          "yaw": -2.168278482387919,
          "pitch": 0.49419667107240883,
          "rotation": 0,
          "target": "11-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-roof-terrace",
      "name": "Roof Terrace",
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
          "yaw": -0.6816843636299552,
          "pitch": 0.39356238112390507,
          "rotation": 0,
          "target": "12-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EYA Sutton Heights - Unit B2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
