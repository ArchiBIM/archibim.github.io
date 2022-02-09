var APP_DATA = {
  "scenes": [
    {
      "id": "0-p1_family-room",
      "name": "P1_Family room",
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
          "yaw": -0.18949086991168684,
          "pitch": 0.35234203577062573,
          "rotation": 0,
          "target": "1-p1_kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-p1_kitchen",
      "name": "P1_Kitchen",
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
          "yaw": -2.9818685321432987,
          "pitch": 0.4260944324211646,
          "rotation": 0,
          "target": "0-p1_family-room"
        },
        {
          "yaw": -0.16575283550927722,
          "pitch": 0.039097171231745165,
          "rotation": 0,
          "target": "2-p1_dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-p1_dining",
      "name": "P1_Dining",
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
          "yaw": 0.0047999592801772906,
          "pitch": 0.32845263660448154,
          "rotation": 0,
          "target": "1-p1_kitchen"
        },
        {
          "yaw": 0.08859519493444168,
          "pitch": 0.007171657526487962,
          "rotation": 0,
          "target": "0-p1_family-room"
        },
        {
          "yaw": 0.782215893164274,
          "pitch": -0.05272823904220303,
          "rotation": 0,
          "target": "3-p1_m-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-p1_m-bathroom",
      "name": "P1_M Bathroom",
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
          "yaw": -3.078545502133295,
          "pitch": 0.7625540195821365,
          "rotation": 0,
          "target": "2-p1_dining"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BBH-2201 the Heron Interior-Package 1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
