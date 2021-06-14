var APP_DATA = {
  "scenes": [
    {
      "id": "0-bacement-entry",
      "name": "Bacement-Entry",
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
          "yaw": 0.02316024476922074,
          "pitch": -0.08826472377474914,
          "rotation": 0,
          "target": "2-bacement-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bacement-lower",
      "name": "Bacement-Lower",
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
          "yaw": 0.2750121682052704,
          "pitch": 0.2641742722421174,
          "rotation": 0,
          "target": "2-bacement-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bacement-stairs",
      "name": "Bacement-Stairs",
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
          "yaw": -2.1726163886587493,
          "pitch": 0.15628719662324642,
          "rotation": 0,
          "target": "5-first-floor-living-room"
        },
        {
          "yaw": 2.5752356842983772,
          "pitch": 0.572456328901044,
          "rotation": 0,
          "target": "1-bacement-lower"
        },
        {
          "yaw": -0.6003009284336631,
          "pitch": 0.7741423046049967,
          "rotation": 0,
          "target": "0-bacement-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-first-floor-dining-room",
      "name": "First Floor-Dining Room",
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
          "yaw": -0.354140946040042,
          "pitch": 0.4145424441957779,
          "rotation": 0,
          "target": "4-first-floor-kitchen"
        },
        {
          "yaw": -1.0494311815320003,
          "pitch": 0.23791183553082718,
          "rotation": 0,
          "target": "5-first-floor-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-first-floor-kitchen",
      "name": "First Floor-Kitchen",
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
          "yaw": -0.09562048637221743,
          "pitch": 0.25248406460285366,
          "rotation": 0,
          "target": "5-first-floor-living-room"
        },
        {
          "yaw": -2.3565590657261204,
          "pitch": 0.5832663661218014,
          "rotation": 0,
          "target": "3-first-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-first-floor-living-room",
      "name": "First Floor-Living Room",
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
          "yaw": 0.030081239266410265,
          "pitch": 0.3119822578371281,
          "rotation": 0,
          "target": "4-first-floor-kitchen"
        },
        {
          "yaw": 0.4543590439104115,
          "pitch": 0.19291707950173986,
          "rotation": 0,
          "target": "3-first-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-second-floor-bathroom-2",
      "name": "Second Floor-Bathroom 2",
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
          "yaw": -2.865158487054263,
          "pitch": 0.532031243403166,
          "rotation": 0,
          "target": "5-first-floor-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-second-floor-bedroom-1",
      "name": "Second Floor-Bedroom 1",
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
          "yaw": 1.180465954676194,
          "pitch": 0.6147051579076823,
          "rotation": 0,
          "target": "9-second-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-second-floor-bedroom-2",
      "name": "Second Floor-Bedroom 2",
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
          "yaw": -2.9793080301760675,
          "pitch": 0.6474234980513938,
          "rotation": 0,
          "target": "9-second-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-second-floor-hall",
      "name": "Second Floor-Hall",
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
          "yaw": 3.0950632872365773,
          "pitch": 0.7493170770358848,
          "rotation": 0,
          "target": "7-second-floor-bedroom-1"
        },
        {
          "yaw": 2.0081111941122334,
          "pitch": 0.8237082776543776,
          "rotation": 0,
          "target": "8-second-floor-bedroom-2"
        },
        {
          "yaw": 0.5312068458975503,
          "pitch": 0.8419121937754834,
          "rotation": 0,
          "target": "6-second-floor-bathroom-2"
        },
        {
          "yaw": -0.35870491374217295,
          "pitch": 0.4877966312123476,
          "rotation": 0,
          "target": "11-second-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-second-floor-master-bathroom",
      "name": "Second Floor-Master Bathroom",
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
          "yaw": 0.8554837119276932,
          "pitch": 0.5000226011894675,
          "rotation": 0,
          "target": "11-second-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-second-floor-master-bedroom",
      "name": "Second Floor-Master Bedroom",
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
          "yaw": -1.36473388420022,
          "pitch": 0.47711429586908416,
          "rotation": 0,
          "target": "10-second-floor-master-bathroom"
        },
        {
          "yaw": -0.35903694225314453,
          "pitch": 0.36067209450214577,
          "rotation": 0,
          "target": "9-second-floor-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC The Dana B end",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
