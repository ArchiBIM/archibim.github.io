var APP_DATA = {
  "scenes": [
    {
      "id": "0-view1-breackfast",
      "name": "View1 Breackfast",
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
          "yaw": 2.2353314419829573,
          "pitch": 0.10620746637181,
          "rotation": 0,
          "target": "1-view2-living"
        },
        {
          "yaw": -0.7874235748083027,
          "pitch": 0.09307774983285988,
          "rotation": 0,
          "target": "2-view3-kitchen"
        },
        {
          "yaw": 1.0220342040572135,
          "pitch": 0.08225578195142624,
          "rotation": 0,
          "target": "5-view6-storage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view2-living",
      "name": "View2 Living",
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
          "yaw": -1.8005178745153447,
          "pitch": 0.37118792548912083,
          "rotation": 0,
          "target": "0-view1-breackfast"
        },
        {
          "yaw": -0.3661533272862769,
          "pitch": 0.1725915312704025,
          "rotation": 0,
          "target": "5-view6-storage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-view3-kitchen",
      "name": "View3 Kitchen",
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
          "yaw": 1.1836302246822008,
          "pitch": 0.3289455911981989,
          "rotation": 0,
          "target": "0-view1-breackfast"
        },
        {
          "yaw": -2.755479159052456,
          "pitch": 0.0902083718025466,
          "rotation": 0,
          "target": "3-view4-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-view4-bedroom",
      "name": "View4 Bedroom",
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
          "yaw": 2.420406841807294,
          "pitch": 0.07476094828810176,
          "rotation": 0,
          "target": "2-view3-kitchen"
        },
        {
          "yaw": 1.3439185024302418,
          "pitch": 0.05181637020669427,
          "rotation": 0,
          "target": "4-view5-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-view5-bathroom",
      "name": "View5 Bathroom",
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
          "yaw": -3.034224951129911,
          "pitch": 0.1099465671463058,
          "rotation": 0,
          "target": "3-view4-bedroom"
        },
        {
          "yaw": 1.8843616356026498,
          "pitch": 0.10717786305763433,
          "rotation": 0,
          "target": "1-view2-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-view6-storage",
      "name": "View6 Storage",
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
    }
  ],
  "name": "SMCH Norby Interior Renderings",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
