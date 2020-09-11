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
          "yaw": -0.01553884115752524,
          "pitch": 0.25278089021015937,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -1.518812309505897,
          "pitch": 0.8345924472218531,
          "rotation": 0,
          "target": "13-lower-walkout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
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
          "yaw": 2.3458425363066855,
          "pitch": 0.48436130687990264,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -1.0547259376420612,
          "pitch": 0.4977144039013712,
          "rotation": 0,
          "target": "2-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-room",
      "name": "Dining Room",
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
          "yaw": 0.9644163728276443,
          "pitch": 0.5483584685243912,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 1.2734333315857036,
          "pitch": 0.23514863687345766,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 1.4898553516088162,
          "pitch": -0.27884441699456985,
          "rotation": 0,
          "target": "6-upper-flex-space"
        },
        {
          "yaw": -0.6589414514900209,
          "pitch": 0.31269179894631094,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": -1.4613897344037348,
          "pitch": 0.4973427906311514,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living Room",
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
          "yaw": -0.3899761727152029,
          "pitch": 0.3113332595779603,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": 0.4432512718547166,
          "pitch": 0.4605886920179323,
          "rotation": 0,
          "target": "2-dining-room"
        },
        {
          "yaw": 0.5293884533933877,
          "pitch": -0.020328653443907996,
          "rotation": 0,
          "target": "6-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bedroom",
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
          "yaw": -0.38486759999764075,
          "pitch": 0.4419317578337729,
          "rotation": 0,
          "target": "5-master-bathroom"
        },
        {
          "yaw": 0.39791542265563784,
          "pitch": 0.3234707486990498,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-bathroom",
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
          "yaw": -3.0556226657641012,
          "pitch": 0.5939217160825159,
          "rotation": 0,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upper-flex-space",
      "name": "Upper Flex Space",
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
          "yaw": -0.01750044608684931,
          "pitch": 0.2160809599760185,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -3.098989926037813,
          "pitch": 0.26826115954497176,
          "rotation": 0,
          "target": "7-terrace"
        },
        {
          "yaw": -1.1858222268799583,
          "pitch": 0.31645802162025305,
          "rotation": 0,
          "target": "9-upper-bathroom"
        },
        {
          "yaw": -1.9985011401685853,
          "pitch": 0.1487288069825894,
          "rotation": 0,
          "target": "8-upper-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-terrace",
      "name": "Terrace",
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
          "yaw": 3.135469038280055,
          "pitch": 0.41707079786497303,
          "rotation": 0,
          "target": "6-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upper-bedroom",
      "name": "Upper Bedroom",
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
          "yaw": -2.315098396657639,
          "pitch": 0.6497822365047288,
          "rotation": 0,
          "target": "6-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-upper-bathroom",
      "name": "Upper Bathroom",
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
          "yaw": 2.9613935055239313,
          "pitch": 0.5124676223814255,
          "rotation": 0,
          "target": "6-upper-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-lower-bathroom",
      "name": "Lower Bathroom",
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
          "yaw": 0.10985807091955024,
          "pitch": 0.5997414153486389,
          "rotation": 0,
          "target": "12-lower-recreation-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-lower-den",
      "name": "Lower Den",
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
          "yaw": 2.4977722183277535,
          "pitch": 0.4457975984998779,
          "rotation": 0,
          "target": "12-lower-recreation-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-lower-recreation-room",
      "name": "Lower Recreation Room",
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
          "yaw": -1.0063821424002075,
          "pitch": 0.3356633216688323,
          "rotation": 0,
          "target": "11-lower-den"
        },
        {
          "yaw": -0.7629012826353616,
          "pitch": 0.3541121506789029,
          "rotation": 0,
          "target": "10-lower-bathroom"
        },
        {
          "yaw": 0.13881844971886892,
          "pitch": 0.3336944955783423,
          "rotation": 0,
          "target": "13-lower-walkout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-lower-walkout",
      "name": "Lower Walkout",
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
          "yaw": -2.8572038081729296,
          "pitch": 0.4822081865917376,
          "rotation": 0,
          "target": "12-lower-recreation-room"
        },
        {
          "yaw": 0.06714526028690848,
          "pitch": -0.01729672337931909,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC Polland Hill - Woodward",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
