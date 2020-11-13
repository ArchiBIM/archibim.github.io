var APP_DATA = {
  "scenes": [
    {
      "id": "0-lower-level",
      "name": "Lower Level",
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
          "yaw": 0.9275462183795877,
          "pitch": 0.7534299398508093,
          "rotation": 0,
          "target": "1-main-level-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-main-level-entry",
      "name": "Main Level Entry",
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
          "yaw": 0.9739851899401835,
          "pitch": 0.32154441999138683,
          "rotation": 0,
          "target": "2-main-leve-dining-room"
        },
        {
          "yaw": -0.8229116815165565,
          "pitch": 0.7912188179354587,
          "rotation": 0,
          "target": "0-lower-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-leve-dining-room",
      "name": "Main Leve Dining Room",
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
          "yaw": -0.6634342227301939,
          "pitch": 0.4092363187457444,
          "rotation": 0,
          "target": "3-main-level-kitchen"
        },
        {
          "yaw": -1.4083860203942091,
          "pitch": 0.5370375588614742,
          "rotation": 0,
          "target": "1-main-level-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-level-kitchen",
      "name": "Main Level Kitchen",
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
          "yaw": -0.14408953187531992,
          "pitch": 0.3346024604994966,
          "rotation": 0,
          "target": "4-main-level-living-room"
        },
        {
          "yaw": 1.428489898075842,
          "pitch": 0.4371397756683191,
          "rotation": 0,
          "target": "2-main-leve-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main-level-living-room",
      "name": "Main Level Living Room",
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
          "yaw": 0.13924409074974342,
          "pitch": 0.28130953086398236,
          "rotation": 0,
          "target": "2-main-leve-dining-room"
        },
        {
          "yaw": 1.226497084891637,
          "pitch": 0.5652262638780989,
          "rotation": 0,
          "target": "6-main-level-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-main-level-master-bathroom",
      "name": "Main Level Master Bathroom",
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
          "yaw": 1.5603558813929324,
          "pitch": 0.9673306654737459,
          "rotation": 0,
          "target": "6-main-level-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-main-level-master-bedroom",
      "name": "Main Level Master Bedroom",
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
          "yaw": -2.136879836947589,
          "pitch": 0.5840421905950279,
          "rotation": 0,
          "target": "5-main-level-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-main-level-bedroom-2",
      "name": "Main Level Bedroom 2",
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
          "yaw": -0.8282309593008286,
          "pitch": 0.6643270161097625,
          "rotation": 0,
          "target": "8-main-level-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-main-level-bathroom",
      "name": "Main Level Bathroom",
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
    }
  ],
  "name": "SMC RIC RK2 The Bethany VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
