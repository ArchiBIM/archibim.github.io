var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-st-floor-bathroom",
      "name": "1-st Floor Bathroom",
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
          "yaw": -1.4652699971477325,
          "pitch": 0.8826565438899738,
          "rotation": 0,
          "target": "1-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1-st-floor-entry",
      "name": "1-st Floor Entry",
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
          "yaw": -0.5253515674727893,
          "pitch": 0.3625976917412306,
          "rotation": 0,
          "target": "2-1-st-floor-garage"
        },
        {
          "yaw": -1.3019623876754842,
          "pitch": 0.35240371509542,
          "rotation": 0,
          "target": "0-1-st-floor-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1-st-floor-garage",
      "name": "1-st Floor Garage",
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
          "yaw": 0.10016812305667777,
          "pitch": 0.3467739253140145,
          "rotation": 0,
          "target": "1-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1-st-floor-stairs",
      "name": "1-st Floor Stairs",
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
          "yaw": 0.16161469833369324,
          "pitch": 0.47998992942157237,
          "rotation": 0,
          "target": "8-2-nd-floor-living-room"
        },
        {
          "yaw": -1.370932927146642,
          "pitch": 0.42978394636589456,
          "rotation": 0,
          "target": "2-1-st-floor-garage"
        },
        {
          "yaw": 1.690276837258284,
          "pitch": 0.45849234160782615,
          "rotation": 0,
          "target": "1-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-1-st-floor-study",
      "name": "1-st Floor Study",
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
          "yaw": -1.6271198697173688,
          "pitch": 0.48042666709003967,
          "rotation": 0,
          "target": "1-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2-nd-floor-dining-room",
      "name": "2-nd Floor Dining Room",
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
          "yaw": 2.2071483693687597,
          "pitch": 0.4939251373695992,
          "rotation": 0,
          "target": "7-2-nd-floor-kitchen"
        },
        {
          "yaw": -0.40288253211424774,
          "pitch": 0.37439081454425605,
          "rotation": 0,
          "target": "8-2-nd-floor-living-room"
        },
        {
          "yaw": 2.9377462955866527,
          "pitch": 0.5457309477884102,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen-2"
        },
        {
          "yaw": -1.5164406363984408,
          "pitch": 0.44820850332939344,
          "rotation": 0,
          "target": "12-3-rd-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2-nd-floor-kitchen-2",
      "name": "2-nd Floor Kitchen 2",
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
          "yaw": -0.46411851780719005,
          "pitch": 0.34616866460583395,
          "rotation": 0,
          "target": "8-2-nd-floor-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-2-nd-floor-kitchen",
      "name": "2-nd Floor Kitchen",
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
          "yaw": 1.7965706973063114,
          "pitch": 0.21927399614322596,
          "rotation": 0,
          "target": "5-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-2-nd-floor-living-room",
      "name": "2-nd Floor Living Room",
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
          "yaw": -1.1579577597559592,
          "pitch": 0.26577987033551587,
          "rotation": 0,
          "target": "7-2-nd-floor-kitchen"
        },
        {
          "yaw": -0.8516904764385558,
          "pitch": 0.2292927956223032,
          "rotation": 0,
          "target": "6-2-nd-floor-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-3-rd-floor-bathroom-2",
      "name": "3-rd Floor Bathroom 2",
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
          "yaw": -1.3787899870087408,
          "pitch": 0.6005308548598478,
          "rotation": 0,
          "target": "10-3-rd-floor-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-3-rd-floor-bedroom-2",
      "name": "3-rd Floor Bedroom 2",
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
          "yaw": 1.3482505511127982,
          "pitch": 0.6062524928217528,
          "rotation": 0,
          "target": "9-3-rd-floor-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-3-rd-floor-master-bathroom",
      "name": "3-rd Floor Master Bathroom",
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
          "yaw": 1.2225127420547803,
          "pitch": 0.9981513031023894,
          "rotation": 0,
          "target": "12-3-rd-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-3-rd-floor-master-bedroom",
      "name": "3-rd Floor Master Bedroom",
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
          "yaw": 0.9188485244580988,
          "pitch": 0.501403212712102,
          "rotation": 0,
          "target": "12-3-rd-floor-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-4-th-floor-bathroom",
      "name": "4-th Floor Bathroom",
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
          "yaw": -2.0403717438295175,
          "pitch": 0.4545651732680689,
          "rotation": 0,
          "target": "15-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-4-th-floor-bedroom-3",
      "name": "4-th Floor Bedroom 3",
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
          "yaw": 0.6155370696811104,
          "pitch": 0.4345368512021359,
          "rotation": 0,
          "target": "15-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-4-th-floor-loft",
      "name": "4-th Floor Loft",
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
          "yaw": -1.5484759615243924,
          "pitch": 0.769416811549835,
          "rotation": 0,
          "target": "13-4-th-floor-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-4-th-floor-terrace",
      "name": "4-th Floor Terrace",
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
          "yaw": 0.747955311807667,
          "pitch": 0.3102977195118033,
          "rotation": 0,
          "target": "15-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EYA Midline - Reston - Unit B",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
