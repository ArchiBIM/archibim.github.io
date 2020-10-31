var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-st-floor-foyer",
      "name": "1-st Floor Foyer",
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
          "yaw": -1.4741085667420624,
          "pitch": 0.7757328114938726,
          "rotation": 0,
          "target": "4-2-nd-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2-nd-floor-dining-room",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16664518575077558,
          "pitch": 0.3988906707397888,
          "rotation": 0,
          "target": "2-2-nd-floor-kitchen"
        },
        {
          "yaw": -0.3962695639561069,
          "pitch": 0.3152247696943782,
          "rotation": 0,
          "target": "4-2-nd-floor-stairs"
        },
        {
          "yaw": -0.6644296671675889,
          "pitch": 0.4805357446137535,
          "rotation": 0,
          "target": "5-3-rd-floor-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-2-nd-floor-kitchen",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.19534895637272953,
          "pitch": 0.3072091909438228,
          "rotation": 0,
          "target": "3-2-nd-floor-living-room"
        },
        {
          "yaw": -2.7189423797410157,
          "pitch": 0.4016918719746272,
          "rotation": 0,
          "target": "1-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-2-nd-floor-living-room",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4871926509734621,
          "pitch": 0.30251842811998664,
          "rotation": 0,
          "target": "2-2-nd-floor-kitchen"
        },
        {
          "yaw": 0.0637434607817724,
          "pitch": 0.3576368918392543,
          "rotation": 0,
          "target": "4-2-nd-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-2-nd-floor-stairs",
      "name": "2-nd Floor Stairs",
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
          "yaw": -0.010637909275757806,
          "pitch": 0.29339196548804836,
          "rotation": 0,
          "target": "1-2-nd-floor-dining-room"
        },
        {
          "yaw": -2.7418359378713664,
          "pitch": 0.47680540560332574,
          "rotation": 0,
          "target": "3-2-nd-floor-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-3-rd-floor-bedroom",
      "name": "3-rd Floor Bedroom",
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
          "yaw": -0.3203078232232883,
          "pitch": 0.7045349288167184,
          "rotation": 0,
          "target": "6-3-rd-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-3-rd-floor-master-bedroom",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0199720111139108,
          "pitch": 0.5085864419362416,
          "rotation": 0,
          "target": "7-3-rd-floor-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-3-rd-floor-master-bathroom",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.798846357302013,
          "pitch": 0.8790836200375907,
          "rotation": 0,
          "target": "6-3-rd-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-4-th-floor-loft-bedroom",
      "name": "4-th Floor Loft Bedroom",
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
          "yaw": -2.815826261435884,
          "pitch": 0.5664885066347587,
          "rotation": 0,
          "target": "9-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-4-th-floor-loft",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5150119932782609,
          "pitch": 0.47245801580675995,
          "rotation": 0,
          "target": "8-4-th-floor-loft-bedroom"
        },
        {
          "yaw": -2.5884540626196877,
          "pitch": 0.7125684832065815,
          "rotation": 0,
          "target": "10-4-th-floor-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-4-th-floor-terrace",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.73581637820077,
          "pitch": 0.5245167738788794,
          "rotation": 0,
          "target": "9-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU Reston Faraday VR Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
