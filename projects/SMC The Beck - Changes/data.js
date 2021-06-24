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
          "yaw": 0.22872599974820318,
          "pitch": 0.3434620617719304,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.12415793857391044,
          "pitch": 0.4129997751069894,
          "rotation": 0,
          "target": "11-basement_recroom"
        },
        {
          "yaw": 0.03850079994619904,
          "pitch": 0.19653348006416316,
          "rotation": 0,
          "target": "2-eating"
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
          "yaw": -0.022914339760173874,
          "pitch": 0.17122735035069603,
          "rotation": 0,
          "target": "3-familly-room"
        },
        {
          "yaw": -0.7837794902974515,
          "pitch": 0.13030940554634185,
          "rotation": 0,
          "target": "2-eating"
        },
        {
          "yaw": -1.881355785171472,
          "pitch": 0.17042798965771233,
          "rotation": 0,
          "target": "11-basement_recroom"
        },
        {
          "yaw": -2.2880100593199195,
          "pitch": 0.4857130709963329,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-eating",
      "name": "Eating",
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
          "yaw": 2.062950292134497,
          "pitch": 0.26707809864592313,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 1.163497635393048,
          "pitch": 0.29652355616699566,
          "rotation": 0,
          "target": "4-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-familly-room",
      "name": "Familly room",
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
          "yaw": -1.2733927502133184,
          "pitch": 0.4349367444026093,
          "rotation": 0,
          "target": "2-eating"
        },
        {
          "yaw": -1.4498830574831416,
          "pitch": 0.0927417030752622,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -1.7838483512302332,
          "pitch": 0.24318189437235027,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -2.010980675450611,
          "pitch": 0.4355658743136228,
          "rotation": 0,
          "target": "4-owners-bedroom"
        },
        {
          "yaw": -1.1325932209645977,
          "pitch": 0.06129019845286621,
          "rotation": 0,
          "target": "6-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-owners-bedroom",
      "name": "Owner's bedroom",
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
          "yaw": -2.278832470276649,
          "pitch": 0.31849748445563186,
          "rotation": 0,
          "target": "3-familly-room"
        },
        {
          "yaw": 2.8612047853607514,
          "pitch": 0.1353607244064179,
          "rotation": 0,
          "target": "5-owners-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-owners-bathroom",
      "name": "Owner's bathroom",
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
          "yaw": 2.970206786001162,
          "pitch": 0.41153530767718216,
          "rotation": 0,
          "target": "4-owners-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-flex-space",
      "name": "Flex space",
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
          "yaw": -2.598967010092899,
          "pitch": 0.46648069284750804,
          "rotation": 0,
          "target": "7-bedroom-2"
        },
        {
          "yaw": 2.3760051662172748,
          "pitch": 0.41099345937840503,
          "rotation": 0,
          "target": "8-bedroom-3"
        },
        {
          "yaw": -1.6445311146947077,
          "pitch": 0.30519760006956886,
          "rotation": 0,
          "target": "3-familly-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
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
          "yaw": -0.37966427771851485,
          "pitch": 0.06525742403093204,
          "rotation": 0,
          "target": "8-bedroom-3"
        },
        {
          "yaw": -0.6122255080174153,
          "pitch": 0.15182422656341465,
          "rotation": 0,
          "target": "6-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-3",
      "name": "Bedroom 3",
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
          "yaw": 0.5492780606751495,
          "pitch": 0.26453661714754695,
          "rotation": 0,
          "target": "6-flex-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-basement_bathroom",
      "name": "Basement_Bathroom",
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
          "yaw": 1.7472884951446668,
          "pitch": 0.2991975561842555,
          "rotation": 0,
          "target": "11-basement_recroom"
        },
        {
          "yaw": 1.9708499884893733,
          "pitch": 0.6803457880337032,
          "rotation": 0,
          "target": "10-basement_bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-basement_bedroom",
      "name": "Basement_Bedroom",
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
          "yaw": -2.2367151273172894,
          "pitch": 0.26178450937531395,
          "rotation": 0,
          "target": "11-basement_recroom"
        },
        {
          "yaw": -2.893338773282549,
          "pitch": 0.29379538641960323,
          "rotation": 0,
          "target": "9-basement_bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-basement_recroom",
      "name": "Basement_Rec.Room",
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
          "yaw": -0.05373541256155079,
          "pitch": 0.00782325889690938,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -1.8082026122606258,
          "pitch": 0.02622464348941911,
          "rotation": 0,
          "target": "9-basement_bathroom"
        },
        {
          "yaw": -2.446924617880642,
          "pitch": 0.16479742354593263,
          "rotation": 0,
          "target": "10-basement_bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC - CVL BRH - The Beck_Opt.Basement",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
