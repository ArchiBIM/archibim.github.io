var APP_DATA = {
  "scenes": [
    {
      "id": "0-view1-breakfast",
      "name": "View1 Breakfast",
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
          "yaw": 2.186767978004908,
          "pitch": 0.033202714358161245,
          "rotation": 0,
          "target": "1-view2-living"
        },
        {
          "yaw": 0.5882181649677491,
          "pitch": 0.44407173998205174,
          "rotation": 0,
          "target": "6-view7-garage"
        },
        {
          "yaw": -0.7957671610288664,
          "pitch": 0.06312412227246256,
          "rotation": 0,
          "target": "2-view3-kitchen"
        },
        {
          "yaw": -0.952979824429038,
          "pitch": 0.05847127422045695,
          "rotation": 0,
          "target": "3-view4-bedroom"
        },
        {
          "yaw": -0.28378072219725503,
          "pitch": 0.0282714157983186,
          "rotation": 0,
          "target": "4-view5-bathroom"
        },
        {
          "yaw": 1.0184823638149911,
          "pitch": 0.05928272703064685,
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
          "yaw": -1.5859419962134673,
          "pitch": 0.3862364951503423,
          "rotation": 0,
          "target": "0-view1-breakfast"
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
          "yaw": 1.1265187660901095,
          "pitch": 0.26951220784932595,
          "rotation": 0,
          "target": "0-view1-breakfast"
        },
        {
          "yaw": -3.0563941864072497,
          "pitch": 0.3040657635504367,
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
          "yaw": 1.2416841077667549,
          "pitch": 0.09034666190794027,
          "rotation": 0,
          "target": "4-view5-bathroom"
        },
        {
          "yaw": 2.4376355599185384,
          "pitch": -0.012729651828797373,
          "rotation": 0,
          "target": "2-view3-kitchen"
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
          "yaw": -2.848521018434795,
          "pitch": 0.528101430395516,
          "rotation": 0,
          "target": "3-view4-bedroom"
        },
        {
          "yaw": 1.9308022123112165,
          "pitch": 0.2392660418811552,
          "rotation": 0,
          "target": "2-view3-kitchen"
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
      "linkHotspots": [
        {
          "yaw": 2.0766267461083805,
          "pitch": 0.06790183040207154,
          "rotation": 0,
          "target": "0-view1-breakfast"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-view7-garage",
      "name": "View7 Garage",
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
          "yaw": 0.033599013735532424,
          "pitch": 0.18269950257399614,
          "rotation": 0,
          "target": "7-view8-garage"
        },
        {
          "yaw": 1.345437180292814,
          "pitch": -0.18800263427317176,
          "rotation": 0,
          "target": "0-view1-breakfast"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-view8-garage",
      "name": "View8 Garage",
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
          "yaw": 0.016835437757986682,
          "pitch": 0.15214635069631122,
          "rotation": 0,
          "target": "6-view7-garage"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMCH - Norby Interior Renderings",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
