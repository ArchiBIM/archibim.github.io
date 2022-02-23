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
          "yaw": 0.16877873068569293,
          "pitch": -0.19390256828232744,
          "rotation": 0,
          "target": "4-2nd-floor-family-room"
        },
        {
          "yaw": -0.3198293035829103,
          "pitch": 0.034161157367128325,
          "rotation": 0,
          "target": "1-1st-floor-garage"
        },
        {
          "yaw": -0.9761987059354933,
          "pitch": 0.055555435145169696,
          "rotation": 0,
          "target": "2-1st-floor-bedroom-1"
        },
        {
          "yaw": -1.4990966391596743,
          "pitch": 0.09317701604160789,
          "rotation": 0,
          "target": "3-1st-floor-bathroom-1"
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
          "yaw": 2.8229384626497573,
          "pitch": 0.12699331544020076,
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
          "yaw": 3.10720234777866,
          "pitch": 0.07429954104851433,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        },
        {
          "yaw": -2.0450057943517113,
          "pitch": -0.0641689469230009,
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
          "yaw": 3.0573664849758124,
          "pitch": -0.024977784583452234,
          "rotation": 0,
          "target": "2-1st-floor-bedroom-1"
        },
        {
          "yaw": -1.4581940646571407,
          "pitch": 0.12961930257037935,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
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
          "yaw": -0.9034118319536031,
          "pitch": 0.029747814256960936,
          "rotation": 0,
          "target": "0-1st-floor-foyer"
        },
        {
          "yaw": -0.5183180937766387,
          "pitch": 0.21302930302112344,
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
          "yaw": -0.10665280145970613,
          "pitch": 0.5332487326771727,
          "rotation": 0,
          "target": "6-2nd-floor-dining"
        },
        {
          "yaw": -2.996745944330522,
          "pitch": 0.2199207464912707,
          "rotation": 0,
          "target": "4-2nd-floor-family-room"
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
          "yaw": 1.9841356698676718,
          "pitch": -0.19623374327164456,
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
          "yaw": 0.11942892337420474,
          "pitch": 0.030967864344606966,
          "rotation": 0,
          "target": "8-3rd-floor-owners-bedroom"
        },
        {
          "yaw": 1.9201605673175548,
          "pitch": 0.02933580030835259,
          "rotation": 0,
          "target": "12-3rd-floor-bedroom-3"
        },
        {
          "yaw": -2.6827241811166367,
          "pitch": 0.03661534840033731,
          "rotation": 0,
          "target": "10-3rd-floor-bedroom-2"
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
          "yaw": 1.8884673023543543,
          "pitch": -0.0016995636592618268,
          "rotation": 0,
          "target": "9-3rd-floor-owners-bathroom"
        },
        {
          "yaw": -2.14241462541451,
          "pitch": 0.03868027635561688,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
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
          "yaw": -2.0435169873335255,
          "pitch": 0.319683916269323,
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
          "yaw": -0.5647594807622554,
          "pitch": 0.014190312644419834,
          "rotation": 0,
          "target": "11-3rd-floor-bathroom-2"
        },
        {
          "yaw": -2.322223749822646,
          "pitch": 0.06517964346917182,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
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
          "yaw": -1.6650758926673142,
          "pitch": 0.0464910721921008,
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
          "yaw": 1.5669921042068644,
          "pitch": -0.04019422844667986,
          "rotation": 0,
          "target": "13-3rd-floor-bathroom-3"
        },
        {
          "yaw": 2.8339324276246707,
          "pitch": 0.11235699322345383,
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
          "yaw": 1.5154187699661028,
          "pitch": 0.02500391980809269,
          "rotation": 0,
          "target": "7-3rd-floor-hall"
        },
        {
          "yaw": -2.834267484009125,
          "pitch": 0.04788986596408762,
          "rotation": 0,
          "target": "12-3rd-floor-bedroom-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BBH-the Heron Interior-Package 4",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
