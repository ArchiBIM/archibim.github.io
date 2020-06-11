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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.40951061686360113,
          "pitch": 0.34591505891112817,
          "rotation": 0,
          "target": "1-dining-kitchen"
        },
        {
          "yaw": -0.1623889350687513,
          "pitch": 0.2292385211914283,
          "rotation": 0,
          "target": "2-living"
        },
        {
          "yaw": -0.9173614499418736,
          "pitch": -0.023749470442192333,
          "rotation": 0,
          "target": "3-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-kitchen",
      "name": "Dining-Kitchen",
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
          "yaw": -0.9176414796518326,
          "pitch": 0.12666573096783296,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -2.195440785966408,
          "pitch": 0.2547722185225574,
          "rotation": 0,
          "target": "5-bedroom-2"
        },
        {
          "yaw": -2.013385548482752,
          "pitch": 0.28765316638465066,
          "rotation": 0,
          "target": "6-bathroom-2"
        },
        {
          "yaw": 2.0299727459806673,
          "pitch": 0.3940273842132278,
          "rotation": 0,
          "target": "3-master-bedroom"
        },
        {
          "yaw": -2.920487430700584,
          "pitch": 0.4654817115506127,
          "rotation": 0,
          "target": "2-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living",
      "name": "Living",
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
          "yaw": -2.6160676929388114,
          "pitch": 0.3117542607039798,
          "rotation": 0,
          "target": "3-master-bedroom"
        },
        {
          "yaw": -3.1067593883706444,
          "pitch": 0.5145632353331919,
          "rotation": 0,
          "target": "1-dining-kitchen"
        },
        {
          "yaw": 2.874094228425207,
          "pitch": 0.24415640467413624,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 2.1856769268165905,
          "pitch": 0.42603651385909913,
          "rotation": 0,
          "target": "5-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-master-bedroom",
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
          "yaw": 2.5257328113371162,
          "pitch": 0.2508030745648284,
          "rotation": 0,
          "target": "1-dining-kitchen"
        },
        {
          "yaw": 2.9735153332468256,
          "pitch": 0.2770979938323599,
          "rotation": 0,
          "target": "4-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bathroom",
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
          "yaw": 0.14141042130969517,
          "pitch": 0.3739552193019211,
          "rotation": 0,
          "target": "3-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-2",
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
          "yaw": -2.6256727907962105,
          "pitch": 0.24352708667092138,
          "rotation": 0,
          "target": "1-dining-kitchen"
        },
        {
          "yaw": -3.0506290605423274,
          "pitch": 0.2671736098770179,
          "rotation": 0,
          "target": "6-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom-2",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4923296459614637,
          "pitch": 0.3464874691324873,
          "rotation": 0,
          "target": "2-living"
        },
        {
          "yaw": -1.113982474689113,
          "pitch": 0.6174694886215946,
          "rotation": 0,
          "target": "5-bedroom-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KHOV Pender Oaks Unit C Dunbar",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
