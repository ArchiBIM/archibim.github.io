var APP_DATA = {
  "scenes": [
    {
      "id": "0-basement",
      "name": "Basement",
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
          "yaw": -0.9270745051167992,
          "pitch": 0.5976573025307275,
          "rotation": 0,
          "target": "4-main-level---stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-main-level---dining-room",
      "name": "Main Level - Dining Room",
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
          "yaw": 0.217661396065159,
          "pitch": 0.4718390739736389,
          "rotation": 0,
          "target": "4-main-level---stairs"
        },
        {
          "yaw": -0.3487730240362463,
          "pitch": 0.3696835339595612,
          "rotation": 0,
          "target": "2-main-level---kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-level---kitchen",
      "name": "Main Level - Kitchen",
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
          "yaw": 0.2921733014019612,
          "pitch": 0.32642359926351183,
          "rotation": 0,
          "target": "1-main-level---dining-room"
        },
        {
          "yaw": -2.5440521661688607,
          "pitch": 0.4656335955193125,
          "rotation": 0,
          "target": "3-main-level---living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-level---living-room",
      "name": "Main Level - Living Room",
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
          "yaw": 0.09347678854425645,
          "pitch": 0.43185640405850734,
          "rotation": 0,
          "target": "2-main-level---kitchen"
        },
        {
          "yaw": -0.338066149360877,
          "pitch": 0.3185858536147137,
          "rotation": 0,
          "target": "4-main-level---stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main-level---stairs",
      "name": "Main Level - Stairs",
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
          "yaw": -1.685644239727461,
          "pitch": 0.5628269861019,
          "rotation": 0,
          "target": "1-main-level---dining-room"
        },
        {
          "yaw": 1.0182887929775077,
          "pitch": 0.31803593645167894,
          "rotation": 0,
          "target": "3-main-level---living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-upper-level---master-bathroom",
      "name": "Upper Level - Master Bathroom",
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
          "yaw": -2.257633925924738,
          "pitch": 0.545666821987215,
          "rotation": 0,
          "target": "5-upper-level---master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upper-level---master-bedroom",
      "name": "Upper Level - Master Bedroom",
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
          "yaw": 1.870332924473244,
          "pitch": 0.980014933482579,
          "rotation": 0,
          "target": "5-upper-level---master-bathroom"
        },
        {
          "yaw": 3.0379313842915936,
          "pitch": 0.32830816766450255,
          "rotation": 0,
          "target": "4-main-level---stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-upper-level---bathroom-2",
      "name": "Upper Level - Bathroom 2",
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
          "yaw": -2.6309942481834874,
          "pitch": 0.9079657340089753,
          "rotation": 0,
          "target": "4-main-level---stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upper-level---bedroom-2",
      "name": "Upper Level - Bedroom 2",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-loft",
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
          "yaw": -1.0075436162464975,
          "pitch": 0.6899655121048234,
          "rotation": 0,
          "target": "10-loft---terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-loft---terrace",
      "name": "Loft - Terrace",
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
          "yaw": 2.4494350862623033,
          "pitch": 0.6748648027956659,
          "rotation": 0,
          "target": "9-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC Riverfront at West Hyattsville - Kelly",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
