var APP_DATA = {
  "scenes": [
    {
      "id": "0-1foyer",
      "name": "1.Foyer",
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
          "yaw": -0.1246594606949234,
          "pitch": -0.36349340931968754,
          "rotation": 0,
          "target": "2-3dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2kitchen",
      "name": "2.Kitchen",
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
          "yaw": 2.0796380346599976,
          "pitch": 0.3582754610269703,
          "rotation": 0,
          "target": "2-3dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3dining-room",
      "name": "3.Dining Room",
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
          "yaw": -1.201452069090097,
          "pitch": 0.24562536420767245,
          "rotation": 0,
          "target": "0-1foyer"
        },
        {
          "yaw": 0.03525921511839414,
          "pitch": 0.3000376855219322,
          "rotation": 0,
          "target": "1-2kitchen"
        },
        {
          "yaw": -2.6532077844993136,
          "pitch": 0.357000269287175,
          "rotation": 0,
          "target": "3-4family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4family-room",
      "name": "4.Family Room",
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
          "yaw": -0.18293197025277586,
          "pitch": 0.33146223187931056,
          "rotation": 0,
          "target": "2-3dining-room"
        },
        {
          "yaw": -1.149240626582266,
          "pitch": -0.5298360737574885,
          "rotation": 0,
          "target": "4-5owners-suite-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5owners-suite-bedroom",
      "name": "5.Owner’s Suite Bedroom",
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
          "yaw": -0.4535983558898167,
          "pitch": 0.19090417443033303,
          "rotation": 0,
          "target": "5-6owners-suite-bathroom"
        },
        {
          "yaw": -0.06599684917104298,
          "pitch": 0.1490701423842431,
          "rotation": 0,
          "target": "6-7bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6owners-suite-bathroom",
      "name": "6.Owner’s Suite Bathroom",
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
          "yaw": 3.077990309842873,
          "pitch": 0.36305254140945564,
          "rotation": 0,
          "target": "4-5owners-suite-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7bedroom-2",
      "name": "7.Bedroom 2",
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
          "yaw": -0.07561917546010477,
          "pitch": 0.12886586411804934,
          "rotation": 0,
          "target": "7-8bathroom-2"
        },
        {
          "yaw": -0.5269186082440935,
          "pitch": -0.06112750680938106,
          "rotation": 0,
          "target": "8-9loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-8bathroom-2",
      "name": "8.Bathroom 2",
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
          "yaw": 3.1117519197863768,
          "pitch": 0.4182158835697187,
          "rotation": 0,
          "target": "6-7bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-9loft",
      "name": "9.Loft",
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
          "yaw": 2.0037977275656758,
          "pitch": 0.17675161885078516,
          "rotation": 0,
          "target": "9-10bedroom-3"
        },
        {
          "yaw": 2.5077506032187955,
          "pitch": 0.17117261787585036,
          "rotation": 0,
          "target": "10-11bathroom-3"
        },
        {
          "yaw": -0.1353002123293603,
          "pitch": 0.14039570586298922,
          "rotation": 0,
          "target": "11-12rooftop-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-10bedroom-3",
      "name": "10.Bedroom 3",
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
          "yaw": 0.3187486472684071,
          "pitch": -0.03559723647106772,
          "rotation": 0,
          "target": "10-11bathroom-3"
        },
        {
          "yaw": -0.46346136607731303,
          "pitch": 0.0652659693167923,
          "rotation": 0,
          "target": "8-9loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-11bathroom-3",
      "name": "11.Bathroom 3",
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
          "yaw": -2.985095981375256,
          "pitch": 0.0415377091060094,
          "rotation": 0,
          "target": "9-10bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-12rooftop-terrace",
      "name": "12.Rooftop Terrace",
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
          "yaw": -1.3603693720055041,
          "pitch": 0.09238794573151488,
          "rotation": 0,
          "target": "8-9loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU Catoctin Walk_TH - Langford",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
