var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room--kitchen",
      "name": "Living Room / Kitchen",
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
          "yaw": 0.6372452178911026,
          "pitch": 0.30473588048900346,
          "rotation": 0,
          "target": "3-entry"
        },
        {
          "yaw": 0.7083736001449772,
          "pitch": 0.472913790776742,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom",
      "name": "Bedroom",
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
          "yaw": 2.768121669181899,
          "pitch": 0.4640285206534749,
          "rotation": 0,
          "target": "2-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom",
      "name": "Bathroom",
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
          "yaw": -2.0466265023110104,
          "pitch": 0.5648767636102932,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entry",
      "name": "Entry",
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
          "yaw": 0.16055077453458466,
          "pitch": 0.4721877547733726,
          "rotation": 0,
          "target": "0-living-room--kitchen"
        },
        {
          "yaw": -0.33651334055551985,
          "pitch": 0.6156064573007427,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FSC Dylan VR - Unit B1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
