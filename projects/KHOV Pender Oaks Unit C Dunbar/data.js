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
          "yaw": -0.4453446794966922,
          "pitch": 0.36787874257476183,
          "rotation": 0,
          "target": "1-dining-kitchen"
        },
        {
          "yaw": -0.15778608769445412,
          "pitch": 0.2587127446789559,
          "rotation": 0,
          "target": "2-living"
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
          "yaw": -2.9083633788104795,
          "pitch": 0.4036607070789273,
          "rotation": 0,
          "target": "2-living"
        },
        {
          "yaw": -0.8663799180715479,
          "pitch": 0.12704555766467074,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -2.019546833057131,
          "pitch": 0.27017150631679065,
          "rotation": 0,
          "target": "5-bathroom-2"
        },
        {
          "yaw": -2.1631729562072604,
          "pitch": 0.3176139929016184,
          "rotation": 0,
          "target": "6-bedroom-2"
        },
        {
          "yaw": 1.8187305976035582,
          "pitch": 0.6987504422981416,
          "rotation": 0,
          "target": "3-master-bedroom"
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
          "yaw": -2.9059168185130897,
          "pitch": 0.36198492512020053,
          "rotation": 0,
          "target": "1-dining-kitchen"
        },
        {
          "yaw": 2.8946562414399413,
          "pitch": 0.3030777495248067,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -2.6153390496097675,
          "pitch": 0.3256386662011046,
          "rotation": 0,
          "target": "3-master-bedroom"
        },
        {
          "yaw": 2.1888242584327973,
          "pitch": 0.4156205992616826,
          "rotation": 0,
          "target": "5-bathroom-2"
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
          "yaw": 2.9658639703977823,
          "pitch": 0.28074052330338084,
          "rotation": 0,
          "target": "4-master-bathroom"
        },
        {
          "yaw": 2.524537737371544,
          "pitch": 0.2846127670340408,
          "rotation": 0,
          "target": "1-dining-kitchen"
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
          "yaw": 1.7209793080193423,
          "pitch": 0.33334003238855026,
          "rotation": 0,
          "target": "3-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bathroom-2",
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
          "yaw": -2.677718878965539,
          "pitch": 0.5796472033669673,
          "rotation": 0,
          "target": "6-bedroom-2"
        },
        {
          "yaw": -3.0533376818554228,
          "pitch": 0.33224095686987454,
          "rotation": 0,
          "target": "2-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-2",
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
          "yaw": -2.6315785957441484,
          "pitch": 0.2449408108492328,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KHOV VR Pender Oaks-C Unit Dunbar",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
