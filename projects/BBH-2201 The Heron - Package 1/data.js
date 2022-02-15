var APP_DATA = {
  "scenes": [
    {
      "id": "0-p1_1st-floor-foyer",
      "name": "P1_1st Floor-Foyer",
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
          "yaw": -0.3302718251753909,
          "pitch": -0.012688468407098696,
          "rotation": 0,
          "target": "1-p1_1st-floor-garage"
        },
        {
          "yaw": -0.9939350039001056,
          "pitch": -0.035258037876857884,
          "rotation": 0,
          "target": "2-p1_1st-floor-bedroom-1"
        },
        {
          "yaw": -1.4138446267810103,
          "pitch": -0.016757957678741775,
          "rotation": 0,
          "target": "3-p1_1st-floor-bathroom-1"
        },
        {
          "yaw": 0.17246932764613554,
          "pitch": -0.104654505558468,
          "rotation": 0,
          "target": "4-p1_2nd-floor-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-p1_1st-floor-garage",
      "name": "P1_1st Floor-Garage",
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
          "yaw": 2.738172719023942,
          "pitch": 0.02188535850954665,
          "rotation": 0,
          "target": "0-p1_1st-floor-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-p1_1st-floor-bedroom-1",
      "name": "P1_1st Floor-Bedroom 1",
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
          "yaw": -2.185046076216276,
          "pitch": -0.05765268966417203,
          "rotation": 0,
          "target": "3-p1_1st-floor-bathroom-1"
        },
        {
          "yaw": 2.6682222678035856,
          "pitch": -0.12687346658636223,
          "rotation": 0,
          "target": "0-p1_1st-floor-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-p1_1st-floor-bathroom-1",
      "name": "P1_1st Floor-Bathroom 1",
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
          "yaw": -1.4700554213733312,
          "pitch": -0.2974622031364973,
          "rotation": 0,
          "target": "0-p1_1st-floor-foyer"
        },
        {
          "yaw": -2.842773542383636,
          "pitch": -0.22752166546630193,
          "rotation": 0,
          "target": "2-p1_1st-floor-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-p1_2nd-floor-family-room",
      "name": "P1_2nd Floor-Family room",
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
          "yaw": -0.9025200322073577,
          "pitch": 0.06695247942207416,
          "rotation": 0,
          "target": "0-p1_1st-floor-foyer"
        },
        {
          "yaw": -0.5447894414066106,
          "pitch": 0.04628409933118505,
          "rotation": 0,
          "target": "5-p1_2nd-floor-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-p1_2nd-floor-dining",
      "name": "P1_2nd Floor-Dining",
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
          "yaw": -2.90572647655568,
          "pitch": 0.04014364351058575,
          "rotation": 0,
          "target": "4-p1_2nd-floor-family-room"
        },
        {
          "yaw": -1.4942752150559961,
          "pitch": -0.02809898643319464,
          "rotation": 0,
          "target": "6-p1_3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-p1_3rd-floor-hall",
      "name": "P1_3rd Floor-Hall",
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
          "yaw": -0.8825395711050739,
          "pitch": 0.113180481351975,
          "rotation": 0,
          "target": "4-p1_2nd-floor-family-room"
        },
        {
          "yaw": 1.566212027584485,
          "pitch": -0.06592522484799801,
          "rotation": 0,
          "target": "11-p1_3rd-floor-bedroom-3"
        },
        {
          "yaw": 0.049780260248688535,
          "pitch": 0.057676360464544274,
          "rotation": 0,
          "target": "7-p1_3rd-floor-owners-bedroom"
        },
        {
          "yaw": -0.12857247054786924,
          "pitch": -0.18896730802606676,
          "rotation": 0,
          "target": "13-20-terrace-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-p1_3rd-floor-owners-bedroom",
      "name": "P1_3rd Floor-Owners Bedroom",
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
          "yaw": 1.8876495829275255,
          "pitch": 0,
          "rotation": 0,
          "target": "8-p1_3rd-floor-owners-bathroom"
        },
        {
          "yaw": -2.222130354729183,
          "pitch": 0.015955222293227322,
          "rotation": 0,
          "target": "6-p1_3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-p1_3rd-floor-owners-bathroom",
      "name": "P1_3rd Floor-Owners Bathroom",
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
          "yaw": -1.9857750072303908,
          "pitch": 0.30597719772653065,
          "rotation": 0,
          "target": "7-p1_3rd-floor-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-p1_3rd-floor-bedroom-2",
      "name": "P1_3rd Floor-Bedroom 2",
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
          "yaw": -0.5641011282153983,
          "pitch": 0.03299174386049053,
          "rotation": 0,
          "target": "10-p1_3rd-floor-bathroom-2"
        },
        {
          "yaw": -2.2770596504710525,
          "pitch": -0.02139438407419547,
          "rotation": 0,
          "target": "6-p1_3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-p1_3rd-floor-bathroom-2",
      "name": "P1_3rd Floor-Bathroom 2",
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
          "yaw": -1.6350361328240943,
          "pitch": 0.08036148671758525,
          "rotation": 0,
          "target": "9-p1_3rd-floor-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-p1_3rd-floor-bedroom-3",
      "name": "P1_3rd Floor-Bedroom 3",
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
          "yaw": 0.14032285934243482,
          "pitch": 0.013746751203479235,
          "rotation": 0,
          "target": "12-p1_3rd-floor-bathroom-3"
        },
        {
          "yaw": 2.6181306766886934,
          "pitch": -0.20628647356502583,
          "rotation": 0,
          "target": "6-p1_3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-p1_3rd-floor-bathroom-3",
      "name": "P1_3rd Floor-Bathroom 3",
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
          "yaw": -2.815630310321218,
          "pitch": -0.03880203631900159,
          "rotation": 0,
          "target": "11-p1_3rd-floor-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-20-terrace-1",
      "name": "20 Terrace 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3945590849566365,
          "pitch": 0.2476140212091913,
          "rotation": 0,
          "target": "14-20-terrace-2"
        },
        {
          "yaw": -0.555044510051804,
          "pitch": 0.1012165824858915,
          "rotation": 0,
          "target": "6-p1_3rd-floor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-20-terrace-2",
      "name": "20 Terrace 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.44726962506232937,
          "pitch": 0.30364330372740156,
          "rotation": 0,
          "target": "13-20-terrace-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BBH-the Heron Interior_Package1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
