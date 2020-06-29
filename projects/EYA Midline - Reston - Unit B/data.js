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
          "yaw": -0.31417685794366257,
          "pitch": 0.12605989917333105,
          "rotation": 0,
          "target": "1-1-st-floor-study"
        },
        {
          "yaw": 0.5275104423377694,
          "pitch": 0.30379208510751354,
          "rotation": 0,
          "target": "2-1-st-floor-stairs"
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
          "yaw": -1.607879429956009,
          "pitch": 0.19471974756520893,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1-st-floor-stairs",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8290435804609544,
          "pitch": 0.13750759595480488,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        },
        {
          "yaw": -1.2801941754069244,
          "pitch": 0.16755021058584063,
          "rotation": 0,
          "target": "4-1-st-floor-garage"
        },
        {
          "yaw": -2.7881331026216323,
          "pitch": 0.14297390674281374,
          "rotation": 0,
          "target": "3-1-st-floor-bathroom"
        },
        {
          "yaw": 0.18978825681733547,
          "pitch": -0.03555035752378011,
          "rotation": 0,
          "target": "7-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1-st-floor-bathroom",
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
          "yaw": -1.431030891190245,
          "pitch": 0.085711681865007,
          "rotation": 0,
          "target": "2-1-st-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-1-st-floor-garage",
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
          "yaw": 0.06156935753885051,
          "pitch": 0.06900620178086037,
          "rotation": 0,
          "target": "2-1-st-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2-nd-floor-kitchen",
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
          "yaw": 1.8258854363338717,
          "pitch": 0.18675480139047096,
          "rotation": 0,
          "target": "7-2-nd-floor-dining-room"
        },
        {
          "yaw": 2.514277903808651,
          "pitch": 0.22948976596896742,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2-nd-floor-kitchen-2",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.835522705299077,
          "pitch": 0.2746361841302427,
          "rotation": 0,
          "target": "5-2-nd-floor-kitchen"
        },
        {
          "yaw": -0.6198828759270008,
          "pitch": 0.3212114682955374,
          "rotation": 0,
          "target": "7-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-2-nd-floor-dining-room",
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
          "yaw": 2.9357190423786017,
          "pitch": 0.193073275521364,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen-2"
        },
        {
          "yaw": -0.29981597598543175,
          "pitch": 0.29999017257246763,
          "rotation": 0,
          "target": "8-2-nd-floor-living-room"
        },
        {
          "yaw": -1.7589308277821942,
          "pitch": -0.051908591144364635,
          "rotation": 0,
          "target": "9-3-rd-floor-master-bedroom"
        },
        {
          "yaw": -2.5442632635165463,
          "pitch": 0.23852160327041894,
          "rotation": 0,
          "target": "2-1-st-floor-stairs"
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3352247323474451,
          "pitch": -0.048540306939113265,
          "rotation": 0,
          "target": "9-3-rd-floor-master-bedroom"
        },
        {
          "yaw": -0.8742490333310524,
          "pitch": 0.16380812469097705,
          "rotation": 0,
          "target": "5-2-nd-floor-kitchen"
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
          "yaw": -0.32505511700019163,
          "pitch": 0.1958988148499845,
          "rotation": 0,
          "target": "7-2-nd-floor-dining-room"
        },
        {
          "yaw": 0.9059142071397677,
          "pitch": 0.07017558537719815,
          "rotation": 0,
          "target": "10-3-rd-floor-master-bathroom"
        },
        {
          "yaw": -0.11340612109429316,
          "pitch": 0.20243056891360922,
          "rotation": 0,
          "target": "11-3-rd-floor-bedroom-2"
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
          "yaw": 1.904016203986771,
          "pitch": 0.2625028121417561,
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
          "yaw": 1.4055856819408543,
          "pitch": 0.24291909670746747,
          "rotation": 0,
          "target": "12-3-rd-floor-bathroom-2"
        },
        {
          "yaw": 0.13236094527742104,
          "pitch": -0.11133596025821646,
          "rotation": 0,
          "target": "13-4-th-floor-loft"
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
          "yaw": -1.2225280181962752,
          "pitch": 0.02602736337883016,
          "rotation": 0,
          "target": "11-3-rd-floor-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-4-th-floor-loft",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.22399836465371337,
          "pitch": 0.2133944825738041,
          "rotation": 0,
          "target": "9-3-rd-floor-master-bedroom"
        },
        {
          "yaw": 1.6602816200552102,
          "pitch": 0.03924514206692287,
          "rotation": 0,
          "target": "16-4-th-floor-terrace"
        },
        {
          "yaw": -1.4990100517236442,
          "pitch": 0.1242776216627064,
          "rotation": 0,
          "target": "15-4-th-floor-bathroom"
        },
        {
          "yaw": -2.9899497198605864,
          "pitch": 0.19966259226265493,
          "rotation": 0,
          "target": "14-4-th-floor-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-4-th-floor-bedroom-3",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7146862271317485,
          "pitch": 0.16752880773541534,
          "rotation": 0,
          "target": "13-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-4-th-floor-bathroom",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8601074326577471,
          "pitch": 0.3249867400969748,
          "rotation": 0,
          "target": "13-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-4-th-floor-terrace",
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
          "yaw": 0.689110595230094,
          "pitch": 0.0798282618996069,
          "rotation": 0,
          "target": "13-4-th-floor-loft"
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
