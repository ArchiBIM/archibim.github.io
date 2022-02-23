var APP_DATA = {
  "scenes": [
    {
      "id": "0-1st-floor-foyer",
      "name": "1st Floor-Foyer",
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
          "yaw": -0.3117770439276377,
          "pitch": 0.14658298044468054,
          "rotation": 0,
          "target": "1-1st-floor-garage"
        },
        {
          "yaw": -0.9636948007826511,
          "pitch": 0.10262661902332226,
          "rotation": 0,
          "target": "2-1st-floor-bedroom-1"
        },
        {
          "yaw": 0.18041651525144786,
          "pitch": -0.1244885976647172,
          "rotation": 0,
          "target": "4-2nd-floor-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1st-floor-garage",
      "name": "1st Floor-Garage",
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
          "yaw": 2.862055959545895,
          "pitch": 0.17644933670834995,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1st-floor-bedroom-1",
      "name": "1st Floor-Bedroom 1",
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
          "yaw": 2.9357613339005004,
          "pitch": 0.3333871438269682,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        },
        {
          "yaw": -2.0093870432151437,
          "pitch": -0.06015784616638342,
          "rotation": 0,
          "target": "3-1st-floor-bathroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1st-floor-bathroom-1",
      "name": "1st Floor-Bathroom 1",
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
          "yaw": -1.3851372952995256,
          "pitch": 0.05469015246753095,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        },
        {
          "yaw": 3.0927848091961962,
          "pitch": 0.06790423171711701,
          "rotation": 0,
          "target": "2-1st-floor-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-2nd-floor-family-room",
      "name": "2nd Floor-Family room",
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
          "yaw": -0.9042832581272364,
          "pitch": 0.04399693444345942,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        },
        {
          "yaw": -0.5035803568856227,
          "pitch": 0.23191117545304607,
          "rotation": 0,
          "target": "5-2nd-floor-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2nd-floor-kitchen",
      "name": "2nd Floor-Kitchen",
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
          "yaw": -3.0355949893693435,
          "pitch": 0.20527027879690074,
          "rotation": 0,
          "target": "4-2nd-floor-family-room"
        },
        {
          "yaw": -0.275705437105362,
          "pitch": 0.47186562331623527,
          "rotation": 0,
          "target": "6-2nd-floor-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2nd-floor-dining",
      "name": "2nd Floor-Dining",
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
          "yaw": 1.367595930772877,
          "pitch": 0.3115162362491972,
          "rotation": 0,
          "target": "5-2nd-floor-kitchen"
        },
        {
          "yaw": 1.9746526280598715,
          "pitch": 0.07918493833104812,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-3rd-floor-hall",
      "name": "3rd Floor-Hall",
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
          "yaw": -2.695055811942895,
          "pitch": 0.03823968400032207,
          "rotation": 0,
          "target": "10-3rd-floor-bedroom-2"
        },
        {
          "yaw": 1.9065120061361336,
          "pitch": 0.09770653517558792,
          "rotation": 0,
          "target": "12-3rd-floor-bedroom-3"
        },
        {
          "yaw": 2.2960570297916467,
          "pitch": 0.06598261751490853,
          "rotation": 0,
          "target": "13-3rd-floor-bathroom-3"
        },
        {
          "yaw": 0.10851608088694853,
          "pitch": 0.0643364670438551,
          "rotation": 0,
          "target": "8-3rd-floor-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-3rd-floor-owners-bedroom",
      "name": "3rd Floor-Owners Bedroom",
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
          "yaw": -2.142455694527788,
          "pitch": -0.025763905905099804,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        },
        {
          "yaw": 1.895685172580249,
          "pitch": -0.02744824289768033,
          "rotation": 0,
          "target": "9-3rd-floor-owners-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-3rd-floor-owners-bathroom",
      "name": "3rd Floor-Owners Bathroom",
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
          "yaw": -1.9729150335871033,
          "pitch": 0.34221381082809543,
          "rotation": 0,
          "target": "8-3rd-floor-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-3rd-floor-bedroom-2",
      "name": "3rd Floor-Bedroom 2",
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
          "yaw": -2.3631551823730295,
          "pitch": 0.3740817972028019,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        },
        {
          "yaw": -0.5569751329257251,
          "pitch": 0.02054220812327756,
          "rotation": 0,
          "target": "11-3rd-floor-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-3rd-floor-bathroom-2",
      "name": "3rd Floor-Bathroom 2",
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
          "yaw": -1.5410780389637715,
          "pitch": 0.018002179630800086,
          "rotation": 0,
          "target": "10-3rd-floor-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-3rd-floor-bedroom-3",
      "name": "3rd Floor-Bedroom 3",
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
          "yaw": 1.595379925276112,
          "pitch": -0.03289221574080514,
          "rotation": 0,
          "target": "13-3rd-floor-bathroom-3"
        },
        {
          "yaw": 2.805590002016846,
          "pitch": 0.1066022603392458,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-3rd-floor-bathroom-3",
      "name": "3rd Floor-Bathroom 3",
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
          "yaw": 1.5511416799963413,
          "pitch": 0.06262520933766602,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        },
        {
          "yaw": -2.765847823418902,
          "pitch": -0.04296464430571767,
          "rotation": 0,
          "target": "12-3rd-floor-bedroom-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BBH-the Heron Interior-Package 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
