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
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.023603281540411913,
        "pitch": -0.030921653185536968,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.058891404064009834,
          "pitch": 0.3545345272396112,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.1536887431372982,
          "pitch": 0.2428291570826424,
          "rotation": 0,
          "target": "2-dining-room"
        },
        {
          "yaw": -0.0003144234938776691,
          "pitch": 0.17117338114263703,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": -2.3596885032875843,
          "pitch": 0.7052521914035346,
          "rotation": 0,
          "target": "10-lower-rec-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
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
          "yaw": -0.874093429067738,
          "pitch": 0.23987663495862677,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": -1.958872868224418,
          "pitch": 0.5863642581939015,
          "rotation": 0,
          "target": "2-dining-room"
        },
        {
          "yaw": 2.326712197097649,
          "pitch": 0.40073305435800144,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-room",
      "name": "Dining Room",
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
          "yaw": 1.291340224994002,
          "pitch": 0.2629951280514362,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.8633952006834384,
          "pitch": 0.5761566922503913,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.673834589143782,
          "pitch": 0.43771370262734344,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": -1.5568147214960124,
          "pitch": 0.42841824163172326,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3013718298947392,
          "pitch": 0.42714726356132715,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": 0.6506082827922182,
          "pitch": 0.2914663430794242,
          "rotation": 0,
          "target": "2-dining-room"
        },
        {
          "yaw": 0.3780089559084523,
          "pitch": 0.24160840636260872,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bedroom",
      "name": "Master Bedroom",
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
          "yaw": -0.4052794570595193,
          "pitch": 0.5413085730216665,
          "rotation": 0,
          "target": "5-master-bathroom"
        },
        {
          "yaw": 0.395383208419144,
          "pitch": 0.41837476472946733,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-bathroom",
      "name": "Master Bathroom",
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
          "yaw": -3.0904052678105405,
          "pitch": 0.5662571969761796,
          "rotation": 0,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upper-bedroom",
      "name": "Upper Bedroom",
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
          "yaw": -2.178673815359499,
          "pitch": 0.8317575662310439,
          "rotation": 0,
          "target": "7-upper-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-upper-bathroom",
      "name": "Upper Bathroom",
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
          "yaw": 2.959003329388482,
          "pitch": 0.4882508940252812,
          "rotation": 0,
          "target": "8-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upper-flex-space",
      "name": "Upper Flex Space",
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
          "yaw": -1.0628012151756714,
          "pitch": 0.38112565859808356,
          "rotation": 0,
          "target": "7-upper-bathroom"
        },
        {
          "yaw": -1.205941722262569,
          "pitch": 0.41998563191835814,
          "rotation": 0,
          "target": "6-upper-bedroom"
        },
        {
          "yaw": -2.9541294602337054,
          "pitch": 0.49005615112776546,
          "rotation": 0,
          "target": "9-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-terrace",
      "name": "Terrace",
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
          "yaw": -3.087385765284438,
          "pitch": 0.48806351026983386,
          "rotation": 0,
          "target": "8-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-lower-rec-room",
      "name": "Lower Rec Room",
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
          "yaw": 0.14552230850866188,
          "pitch": 0.2288148243489303,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC Poland Hill - Woodward",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
