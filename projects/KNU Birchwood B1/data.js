var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry-with-den",
      "name": "Entry with Den",
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
          "yaw": -0.09388687736134571,
          "pitch": 0.23777184253891193,
          "rotation": 0,
          "target": "1-living-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-dining",
      "name": "Living-Dining",
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
          "yaw": -2.910074731496282,
          "pitch": 0.05401647705284596,
          "rotation": 0,
          "target": "0-entry-with-den"
        },
        {
          "yaw": 2.082009407203123,
          "pitch": -0.023561679101852917,
          "rotation": 0,
          "target": "2-primary-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-primary-bedroom",
      "name": "Primary Bedroom",
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
          "yaw": -2.730089072554799,
          "pitch": 0.06927720075933941,
          "rotation": 0,
          "target": "1-living-dining"
        },
        {
          "yaw": 2.097384065748396,
          "pitch": 0.13865104529922156,
          "rotation": 0,
          "target": "3-primary-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-primary-bath",
      "name": "Primary Bath",
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
          "yaw": 1.901494975871639,
          "pitch": 0.018927279464559632,
          "rotation": 0,
          "target": "2-primary-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KNU Birchwood B1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
