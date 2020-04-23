var APP_DATA = {
  "scenes": [
    {
      "id": "0-third-floor-1",
      "name": "Third Floor 1",
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
        "yaw": 0.5877818513168016,
        "pitch": 0.19194138573961794,
        "fov": 1.2342559994395403
      },
      "linkHotspots": [
        {
          "yaw": 0.22464076501475816,
          "pitch": 0.27699202547340995,
          "rotation": 0,
          "target": "1-third-floor-2"
        },
        {
          "yaw": 0.8357769628103675,
          "pitch": 0.18280040213219095,
          "rotation": 0,
          "target": "2-third-floor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-third-floor-2",
      "name": "Third Floor 2",
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
          "yaw": 1.555896135173513,
          "pitch": 0.2375263926500697,
          "rotation": 0,
          "target": "0-third-floor-1"
        },
        {
          "yaw": -0.6665250261670366,
          "pitch": 0.26238484755053904,
          "rotation": 0,
          "target": "2-third-floor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-third-floor-3",
      "name": "Third Floor 3",
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
          "yaw": 0.5695633646421285,
          "pitch": 0.2980968274158222,
          "rotation": 0,
          "target": "1-third-floor-2"
        },
        {
          "yaw": -0.4827553376107261,
          "pitch": 0.1695590133748226,
          "rotation": 0,
          "target": "0-third-floor-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMC Paisley VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
