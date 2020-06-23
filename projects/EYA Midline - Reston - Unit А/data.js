var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-st-floor-entry",
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
          "yaw": 2.6817960184073915,
          "pitch": 0.27934396212145174,
          "rotation": 0,
          "target": "1-1-st-floor-study"
        },
        {
          "yaw": 0.6630371227286425,
          "pitch": 0.17305301822832675,
          "rotation": 0,
          "target": "2-1-st-floor-garage"
        },
        {
          "yaw": 0.3939607551352662,
          "pitch": -0.4174028957782596,
          "rotation": 0,
          "target": "3-2-nd-floor-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1-st-floor-study",
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
          "yaw": -0.0208941061519603,
          "pitch": 0.23132982527075185,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
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
          "yaw": -0.03466839140070377,
          "pitch": 0.13283979328296347,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-2-nd-floor-dining-room",
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
          "yaw": 1.74423830409512,
          "pitch": 0.36678280035244626,
          "rotation": 0,
          "target": "0-1-st-floor-entry"
        },
        {
          "yaw": 2.929737949827273,
          "pitch": 0.24843659721208944,
          "rotation": 0,
          "target": "4-2-nd-floor-kitchen"
        },
        {
          "yaw": -0.3179165890132829,
          "pitch": 0.35811579535740634,
          "rotation": 0,
          "target": "6-2-nd-floor-living-room"
        },
        {
          "yaw": 0.7517375084679934,
          "pitch": -0.022444976204482714,
          "rotation": 0,
          "target": "7-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-2-nd-floor-kitchen",
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
          "yaw": -0.2555458826465724,
          "pitch": 0.27123497427751175,
          "rotation": 0,
          "target": "5-2-nd-floor-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2-nd-floor-kitchen-2",
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
          "yaw": -2.089113450475688,
          "pitch": 0.2668120417448492,
          "rotation": 0,
          "target": "6-2-nd-floor-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2-nd-floor-living-room",
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
          "yaw": 1.1193457934663247,
          "pitch": 0.3651889710029792,
          "rotation": 0,
          "target": "3-2-nd-floor-dining-room"
        },
        {
          "yaw": 0.3368443657437208,
          "pitch": 0.08414687322510161,
          "rotation": 0,
          "target": "7-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-3-rd-floor-hallway",
      "name": "3-rd Floor Hallway",
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
          "yaw": -0.18429209849638895,
          "pitch": 0.14576982461772658,
          "rotation": 0,
          "target": "3-2-nd-floor-dining-room"
        },
        {
          "yaw": 0.05254305138003268,
          "pitch": 0.13462830886967936,
          "rotation": 0,
          "target": "8-3-rd-floor-master-bedroom"
        },
        {
          "yaw": 2.4851156436585766,
          "pitch": 0.32690336797342034,
          "rotation": 0,
          "target": "10-3-rd-floor-bedroom-2"
        },
        {
          "yaw": -0.6533498001311102,
          "pitch": -0.3522541001246271,
          "rotation": 0,
          "target": "14-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-3-rd-floor-master-bedroom",
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
          "yaw": 0.07533329488284402,
          "pitch": 0.250034118136222,
          "rotation": 0,
          "target": "7-3-rd-floor-hallway"
        },
        {
          "yaw": -0.5036930295439888,
          "pitch": 0.19868308241401422,
          "rotation": 0,
          "target": "9-3-rd-floor-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-3-rd-floor-master-bathroom",
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
          "yaw": 0.7499850624062958,
          "pitch": 0.32084800257113244,
          "rotation": 0,
          "target": "8-3-rd-floor-master-bedroom"
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
          "yaw": -1.1602449662376326,
          "pitch": 0.21839091366595653,
          "rotation": 0,
          "target": "11-3-rd-floor-bathroom-2"
        },
        {
          "yaw": 0.06760433588033976,
          "pitch": 0.2857369707367141,
          "rotation": 0,
          "target": "7-3-rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-3-rd-floor-bathroom-2",
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
          "yaw": 2.6792580481542574,
          "pitch": 0.2557771711704966,
          "rotation": 0,
          "target": "10-3-rd-floor-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-4-th-floor-bathroom",
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
          "yaw": -1.952820215669849,
          "pitch": 0.3259167163246719,
          "rotation": 0,
          "target": "13-4-th-floor-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-4-th-floor-bedroom-3",
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
          "yaw": 1.4017787597370859,
          "pitch": 0.1991799064923434,
          "rotation": 0,
          "target": "12-4-th-floor-bathroom"
        },
        {
          "yaw": -0.006906799938136032,
          "pitch": 0.18376492989722237,
          "rotation": 0,
          "target": "14-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-4-th-floor-loft",
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
          "yaw": -0.24569554004517968,
          "pitch": 0.20388960984989346,
          "rotation": 0,
          "target": "7-3-rd-floor-hallway"
        },
        {
          "yaw": 0.15924850274137548,
          "pitch": 0.14815452528306494,
          "rotation": 0,
          "target": "13-4-th-floor-bedroom-3"
        },
        {
          "yaw": -1.7866902750963654,
          "pitch": 0.16279106864830872,
          "rotation": 0,
          "target": "15-4-th-floor-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-4-th-floor-terrace",
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
          "yaw": -0.10425787579965373,
          "pitch": 0.13824278307468596,
          "rotation": 0,
          "target": "14-4-th-floor-loft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EYA Midline Reston - Unit A VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
