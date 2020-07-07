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
          "yaw": 0.13929652739798826,
          "pitch": 0.35643116451032064,
          "rotation": 0,
          "target": "2-1-st-floor-garage"
        },
        {
          "yaw": 0.37006944039789147,
          "pitch": 0.4583250534443959,
          "rotation": 0,
          "target": "1-1-st-floor-study"
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
          "yaw": -1.4034719710384742,
          "pitch": 0.6370849263642882,
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7442853082540815,
          "pitch": 0.5755522112933757,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-2-nd-floor-kitchen",
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
          "yaw": 2.6537715292023627,
          "pitch": 0.4869671950639738,
          "rotation": 0,
          "target": "4-2-nd-floor-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-2-nd-floor-kitchen-2",
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
          "yaw": -2.360042944791365,
          "pitch": 0.5603540280312878,
          "rotation": 0,
          "target": "5-2-nd-floor-dining-room"
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0465266882760496,
          "pitch": 0.3676066826970228,
          "rotation": 0,
          "target": "6-2-nd-floor-living-room"
        },
        {
          "yaw": 0.4644406675117718,
          "pitch": 0.5524797047865171,
          "rotation": 0,
          "target": "4-2-nd-floor-kitchen-2"
        },
        {
          "yaw": -0.37652549703204663,
          "pitch": 0.5297395590871723,
          "rotation": 0,
          "target": "3-2-nd-floor-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2-nd-floor-living-room",
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
          "yaw": -1.3148219471383555,
          "pitch": 0.41890498598444736,
          "rotation": 0,
          "target": "7-3-rd-floor-hallway"
        },
        {
          "yaw": -0.10017554373070858,
          "pitch": 0.3498875785422886,
          "rotation": 0,
          "target": "3-2-nd-floor-kitchen"
        },
        {
          "yaw": -0.11548401315127776,
          "pitch": 0.5620265878920918,
          "rotation": 0,
          "target": "5-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-3-rd-floor-hallway",
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
          "yaw": -0.07806236539814826,
          "pitch": 0.4035123502864053,
          "rotation": 0,
          "target": "6-2-nd-floor-living-room"
        },
        {
          "yaw": -0.5664076264710864,
          "pitch": -0.44061313098352706,
          "rotation": 0,
          "target": "14-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-3-rd-floor-master-bedroom",
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
          "yaw": 2.828011612303407,
          "pitch": 0.7383657961400871,
          "rotation": 0,
          "target": "9-3-rd-floor-master-bathroom"
        },
        {
          "yaw": -1.9907494235272587,
          "pitch": 0.7033439360982783,
          "rotation": 0,
          "target": "7-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-3-rd-floor-master-bathroom",
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
      "linkHotspots": [],
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7181421607191307,
          "pitch": 0.7758227925697678,
          "rotation": 0,
          "target": "11-3-rd-floor-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-3-rd-floor-bathroom-2",
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
          "yaw": 1.6522089745223365,
          "pitch": 0.6206157247967976,
          "rotation": 0,
          "target": "10-3-rd-floor-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-4-th-floor-bedroom-3",
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
          "yaw": -1.4864246891873538,
          "pitch": 0.8563470922294787,
          "rotation": 0,
          "target": "13-4-th-floor-bathroom-3"
        },
        {
          "yaw": 3.119173304938987,
          "pitch": 0.316886307937434,
          "rotation": 0,
          "target": "14-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-4-th-floor-bathroom-3",
      "name": "4-th Floor Bathroom 3",
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
          "yaw": 1.5530766350136744,
          "pitch": 0.7792289157658523,
          "rotation": 0,
          "target": "12-4-th-floor-bedroom-3"
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10201236656459756,
          "pitch": 0.5016969543793355,
          "rotation": 0,
          "target": "12-4-th-floor-bedroom-3"
        },
        {
          "yaw": 3.1031383995574764,
          "pitch": 0.28078732227166725,
          "rotation": 0,
          "target": "15-4-th-floor-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-4-th-floor-terrace",
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
          "yaw": -0.07585430319165276,
          "pitch": 0.30705634255127023,
          "rotation": 0,
          "target": "14-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EYA Midline Reston - Unit A VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
