TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_A8751B32_8194_886B_41DC_2E37A703290B",
  "mapLocations": [
   {
    "x": 954.36,
    "map": {
     "thumbnailUrl": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_t.png",
     "fieldOfViewOverlayInsideOpacity": 0.28,
     "width": 5400,
     "fieldOfViewOverlayInsideColor": "#E7CB00",
     "height": 4000,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 0.5,
     "image": {
      "levels": [
       {
        "height": 1185,
        "width": 1600,
        "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 592,
        "grayscale": true,
        "width": 800,
        "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_lq.png",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "id": "map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
     "label": "\u041f\u043b\u0430\u043d 3 \u044d\u0442\u0430\u0436\u0430",
     "maximumZoomFactor": 1.2,
     "overlays": [
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_ABC3C348_B907_0E2A_41C1_7D46B458E612",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 846.73,
        "width": 215.25,
        "y": 2037.95,
        "height": 180.02,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 31,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_11_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 846.73,
        "y": 2037.95,
        "width": 215.25,
        "height": 180.02,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 63,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_11.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_AAE59DB7_B91D_FA66_41E4_EFEC7F00D8C3",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1807.95,
        "width": 171.97,
        "y": 2025.05,
        "height": 206,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 30,
           "width": 25,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_12_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 1807.95,
        "y": 2025.05,
        "width": 171.97,
        "height": 206,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 50,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_12.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_AA2902FE_B905_0FE6_41E3_976E9620E490",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 2980.55,
        "width": 215.25,
        "y": 1888.25,
        "height": 188.68,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 31,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_14_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 2980.55,
        "y": 1888.25,
        "width": 215.25,
        "height": 188.68,
        "image": {
         "levels": [
          {
           "height": 55,
           "width": 63,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_14.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_AA9ED4D8_B90B_0A29_41BA_6CB9DD1C38AF",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 4058.6,
        "width": 197.94,
        "y": 1635.76,
        "height": 206,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 30,
           "width": 29,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_15_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 4058.6,
        "y": 1635.76,
        "width": 197.94,
        "height": 206,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 58,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_15.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_AA28C672_B90E_F6FE_41DC_10077CB4498A",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 4315.31,
        "width": 197.94,
        "y": 2248.63,
        "height": 214.66,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 31,
           "width": 29,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_16_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 4315.31,
        "y": 2248.63,
        "width": 197.94,
        "height": 214.66,
        "image": {
         "levels": [
          {
           "height": 63,
           "width": 58,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_16.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_ACF0E0B1_B90D_0A7B_41C0_62DAA524F506",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 3227.89,
        "width": 189.28,
        "y": 1036.57,
        "height": 180.02,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 28,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_17_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 3227.89,
        "y": 1036.57,
        "width": 189.28,
        "height": 180.02,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 56,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_17.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_ACC7071F_B905_1627_41D9_7077D0C0071C",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 4269.99,
        "width": 197.94,
        "y": 927.51,
        "height": 214.66,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 31,
           "width": 29,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_18_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 4269.99,
        "y": 927.51,
        "width": 197.94,
        "height": 214.66,
        "image": {
         "levels": [
          {
           "height": 63,
           "width": 58,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_18.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_ADB5D75A_B907_1629_41D7_F205F2D6D2E7",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1391.42,
        "width": 180.62,
        "y": 2954.13,
        "height": 188.68,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 26,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_19_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 1391.42,
        "y": 2954.13,
        "width": 180.62,
        "height": 188.68,
        "image": {
         "levels": [
          {
           "height": 55,
           "width": 53,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_19.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_AC7537E5_B905_161B_41B9_C54FFAE6F443",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 512.26,
        "width": 189.28,
        "y": 2988.92,
        "height": 188.68,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 28,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_20_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 512.26,
        "y": 2988.92,
        "width": 189.28,
        "height": 188.68,
        "image": {
         "levels": [
          {
           "height": 55,
           "width": 56,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_20.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 9)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_AC6739CE_B97B_3A29_41E2_B620DDA4A7C8",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 2428.83,
        "width": 206.6,
        "y": 3515.02,
        "height": 180.02,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 30,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_21_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 2428.83,
        "y": 3515.02,
        "width": 206.6,
        "height": 180.02,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 61,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_21.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_C58C084D_DD52_4477_41C9_15B111889C4F.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_DE7FFF12_CB52_6BCD_41D6_78D54097E051",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1613.36,
        "width": 204.32,
        "y": 3808.95,
        "height": 174.83,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 18,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_22_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 1613.36,
        "y": 3808.95,
        "width": 204.32,
        "height": 174.83,
        "image": {
         "levels": [
          {
           "height": 51,
           "width": 60,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_22.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0.15,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayRadiusScale": 0.13,
     "class": "Map"
    },
    "y": 2127.96,
    "angle": 125.89,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 120,
  "label": "\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0434\u0432\u0435\u0440\u044c 3 \u044d\u0442\u0430\u0436",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_AE438B5B_8195_88DA_41D1_D538B920E8F7",
      "maps": [
       {
        "hfov": 36.24,
        "yaw": -51.67,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 197,
           "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 11.75
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -51.67,
        "hfov": 36.24,
        "image": {
         "levels": [
          {
           "height": 559,
           "width": 552,
           "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 11.75
       }
      ]
     },
     {
      "id": "panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_t.jpg"
 },
 {
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "class": "MapPlayer",
  "viewerArea": "this.MapViewer"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_A8751B32_8194_886B_41DC_2E37A703290B_camera",
  "initialSequence": {
   "restartMovementDelay": 3000,
   "movements": [
    {
     "targetYaw": -50.96,
     "path": "shortest",
     "pitchSpeed": 34.17,
     "yawSpeed": 67.65,
     "easing": "cubic_in_out",
     "targetPitch": 8.46,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 64.07,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -10.67,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_A0982E76_B90B_36F8_41DF_DEB58E825ABE",
   "restartMovementOnUserInteraction": true,
   "repeat": 0,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "idleSequence": "this.sequence_A0982E76_B90B_36F8_41DF_DEB58E825ABE",
  "initialPosition": {
   "hfov": 120,
   "yaw": 64.07,
   "class": "PanoramaCameraPosition",
   "pitch": -10.67
  },
  "timeToIdle": 3000
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 1893.93,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "y": 2128.06,
    "angle": 39.39,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0413\u043e\u0441\u0442\u0438\u043d\u043d\u0430\u044f (1) 69.6 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468, this.camera_C5703919_DD52_441F_41C2_333B0162D03C); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_AE6E4C0A_81EC_883A_41D9_58CCA5870883",
      "maps": [
       {
        "hfov": 7.3,
        "yaw": 44.18,
        "image": {
         "levels": [
          {
           "height": 87,
           "width": 54,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 2.25
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 44.18,
        "hfov": 7.3,
        "image": {
         "levels": [
          {
           "height": 175,
           "width": 109,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 2.25
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A8751B32_8194_886B_41DC_2E37A703290B, this.camera_C52C98A1_DD52_442C_41C0_33150F45DC16); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_AD4160C3_81EB_F829_41B1_E766D470E8F6",
      "maps": [
       {
        "hfov": 11.87,
        "yaw": -148.44,
        "image": {
         "levels": [
          {
           "height": 65,
           "width": 89,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.69
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -148.44,
        "hfov": 11.87,
        "image": {
         "levels": [
          {
           "height": 130,
           "width": 178,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.69
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_AE829FF8_81F4_87E6_41B8_B72CA8418C8C",
      "maps": [
       {
        "hfov": 7.12,
        "yaw": 17.76,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 53,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 2.36
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 17.76,
        "hfov": 7.12,
        "image": {
         "levels": [
          {
           "height": 107,
           "width": 106,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 2.36
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A65A2C67_81B4_88EA_41DA_9969D058A589, this.camera_C54A38FF_DD52_4414_41D9_204751F28954); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BB82DE91_81AC_8826_41DD_C6A5FC3B22AA",
      "maps": [
       {
        "hfov": 7.4,
        "yaw": 167.61,
        "image": {
         "levels": [
          {
           "height": 55,
           "width": 62,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -28.32
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 167.61,
        "hfov": 7.4,
        "image": {
         "levels": [
          {
           "height": 110,
           "width": 125,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -28.32
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_C57E1936_DD52_4415_41E3_FCE71D0F4266); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B4F94E45_8195_882E_4183_4F822DA6A013",
      "maps": [
       {
        "hfov": 6.95,
        "yaw": 41.39,
        "image": {
         "levels": [
          {
           "height": 69,
           "width": 56,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_8_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -23.72
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 41.39,
        "hfov": 6.95,
        "image": {
         "levels": [
          {
           "height": 139,
           "width": 113,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -23.72
       }
      ]
     },
     {
      "id": "panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A, this.camera_C55C58E3_DD52_442C_41E1_9D7D94375412); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_8A71D058_9865_84D4_41D8_72BC7DD55F08",
      "maps": [
       {
        "hfov": 8.54,
        "yaw": 114.74,
        "image": {
         "levels": [
          {
           "height": 68,
           "width": 63,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_9_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.59
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 114.74,
        "hfov": 8.54,
        "image": {
         "levels": [
          {
           "height": 137,
           "width": 127,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.59
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_camera",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 44.65,
   "class": "PanoramaCameraPosition",
   "pitch": -0.33
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_A65A2C67_81B4_88EA_41DA_9969D058A589",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 1481.73,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "y": 3048.47,
    "angle": -50.8,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0413\u043e\u0441\u0442\u0438\u043d\u043d\u0430\u044f (8) 69.6 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE, this.camera_C5EC2A5B_DD52_441C_41D0_BE7BE31D908E); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B1075475_8195_78E9_41B1_8E9CDDBA751A",
      "maps": [
       {
        "hfov": 8.3,
        "yaw": -25.34,
        "image": {
         "levels": [
          {
           "height": 58,
           "width": 65,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.88
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -25.34,
        "hfov": 8.3,
        "image": {
         "levels": [
          {
           "height": 116,
           "width": 131,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.88
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A8751B32_8194_886B_41DC_2E37A703290B, this.camera_C5AB59EB_DD52_4433_41B5_AB9687F51408); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B1D60AE2_8195_89EA_41CE_50A38208F9E1",
      "maps": [
       {
        "hfov": 10.07,
        "yaw": 39.39,
        "image": {
         "levels": [
          {
           "height": 128,
           "width": 75,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.53
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 39.39,
        "hfov": 10.07,
        "image": {
         "levels": [
          {
           "height": 256,
           "width": 150,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.53
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_C5E39A46_DD52_4474_41D0_E6BDC0DB6777); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B19AE8AF_81AC_887A_41DB_7271AD80722D",
      "maps": [
       {
        "hfov": 9.29,
        "yaw": 97.25,
        "image": {
         "levels": [
          {
           "height": 59,
           "width": 72,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.53
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 97.25,
        "hfov": 9.29,
        "image": {
         "levels": [
          {
           "height": 119,
           "width": 144,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -15.53
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1, this.camera_C4186A6B_DD52_443C_41E6_5C74B9C03609); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B18F8D08_81AD_8826_41D4_26ABCFC2BC0A",
      "maps": [
       {
        "hfov": 5.06,
        "yaw": 118.51,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 37,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -0.65
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 118.51,
        "hfov": 5.06,
        "image": {
         "levels": [
          {
           "height": 122,
           "width": 75,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.65
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468, this.camera_C5F05A30_DD52_442D_41E9_02AD5A5A07C8); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B0EDBB00_81AB_8826_41D8_02D87F19A812",
      "maps": [
       {
        "hfov": 5.79,
        "yaw": 133.32,
        "image": {
         "levels": [
          {
           "height": 49,
           "width": 43,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.69
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 133.32,
        "hfov": 5.79,
        "image": {
         "levels": [
          {
           "height": 99,
           "width": 86,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.69
       }
      ]
     },
     {
      "id": "panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A, this.camera_C5C7EA1A_DD52_441C_41E1_6E64C75E3CF4); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_8B69D370_9866_84D2_41CF_FFF28AC404EF",
      "maps": [
       {
        "hfov": 10.28,
        "yaw": 173.74,
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 77,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.52
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 173.74,
        "hfov": 10.28,
        "image": {
         "levels": [
          {
           "height": 231,
           "width": 155,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.52
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0, this.camera_C5B869D3_DD52_446C_41CC_B82FD17469E7); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_A071613E_B905_0A68_4190_287323AB3F76",
      "maps": [
       {
        "hfov": 10.22,
        "yaw": 56.68,
        "image": {
         "levels": [
          {
           "height": 83,
           "width": 82,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_8_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.01
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 56.68,
        "hfov": 10.22,
        "image": {
         "levels": [
          {
           "height": 166,
           "width": 164,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -22.01
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_camera",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -19.26,
   "class": "PanoramaCameraPosition",
   "pitch": -3.11
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 606.9,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "y": 3083.26,
    "angle": 65.56,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u0430\u0431\u0438\u043d\u0435\u0442 (9) 69.6 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 93.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A65A2C67_81B4_88EA_41DA_9969D058A589, this.camera_C4B19B2D_DD52_4434_41DA_0B7105289171); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_990128D2_97E6_838A_41DF_02182DF11006",
      "maps": [
       {
        "hfov": 12.19,
        "yaw": 25.75,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 19,
           "url": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.16
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 25.75,
        "hfov": 12.19,
        "image": {
         "levels": [
          {
           "height": 159,
           "width": 189,
           "url": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -16.16
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_camera",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 16.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0.77
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 3088.18,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "y": 1982.59,
    "angle": 101.12,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0413\u043e\u0441\u0442\u0438\u043d\u043d\u0430\u044f (3) 69.6 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1, this.camera_C4953B1A_DD52_441D_41CB_2AC7A9454E0C); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B7AD573E_81B4_985A_41A1_5E2C369139DD",
      "maps": [
       {
        "hfov": 8.7,
        "yaw": -38.96,
        "image": {
         "levels": [
          {
           "height": 82,
           "width": 64,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.53
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -38.96,
        "hfov": 8.7,
        "image": {
         "levels": [
          {
           "height": 164,
           "width": 129,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.53
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A65A2C67_81B4_88EA_41DA_9969D058A589, this.camera_C47FFB05_DD52_45F4_41E3_5C1812B2790E); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B75E9590_81B7_982C_41D2_DFE3256EA869",
      "maps": [
       {
        "hfov": 8.97,
        "yaw": 138.69,
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 70,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.02
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 138.69,
        "hfov": 8.97,
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 140,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -17.02
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A8751B32_8194_886B_41DC_2E37A703290B, this.camera_C4569AD4_DD52_4415_41D2_B2D4ECE89837); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B66E76F4_81B4_B9EE_41D2_809D0047CC09",
      "maps": [
       {
        "hfov": 9.26,
        "yaw": 166.68,
        "image": {
         "levels": [
          {
           "height": 67,
           "width": 69,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.95
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 166.68,
        "hfov": 9.26,
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 139,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.95
       }
      ]
     },
     {
      "id": "panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468, this.camera_C469CB0F_DD52_45F3_41DE_10CA48E7E6E3); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_876B20D1_97E2_83A8_41C4_64B9A8C81F63",
      "maps": [
       {
        "hfov": 7.12,
        "yaw": -2.35,
        "image": {
         "levels": [
          {
           "height": 52,
           "width": 53,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.63
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -2.35,
        "hfov": 7.12,
        "image": {
         "levels": [
          {
           "height": 104,
           "width": 107,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.63
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A, this.camera_C44D2AFB_DD52_441C_41E6_1E2BB5B2EFB6); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_8A9A978A_9863_8C48_41D9_74D28573A68F",
      "maps": [
       {
        "hfov": 11.86,
        "yaw": 87.45,
        "image": {
         "levels": [
          {
           "height": 93,
           "width": 88,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.22
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 87.45,
        "hfov": 11.86,
        "image": {
         "levels": [
          {
           "height": 187,
           "width": 177,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.22
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0, this.camera_C426EAB4_DD52_4414_41DF_25A881ED4EDB); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_A01B3F19_B905_F628_41B4_45D325B5AD81",
      "maps": [
       {
        "hfov": 11.37,
        "yaw": 162.81,
        "image": {
         "levels": [
          {
           "height": 82,
           "width": 100,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_9_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -32.8
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 162.81,
        "hfov": 11.37,
        "image": {
         "levels": [
          {
           "height": 164,
           "width": 201,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -32.8
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_camera",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -3.21,
   "class": "PanoramaCameraPosition",
   "pitch": -0.33
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 3322.53,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "y": 1126.58,
    "angle": 408.61,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0421.\u0443.  (6) 7.9 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75, this.camera_C4A3BB38_DD52_441C_41AD_3A10A8872F88); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B6F4F510_81B4_9826_41AC_9E5E44AAFCD4",
      "maps": [
       {
        "hfov": 14.83,
        "yaw": 15.94,
        "image": {
         "levels": [
          {
           "height": 99,
           "width": 116,
           "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.6
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 15.94,
        "hfov": 14.83,
        "image": {
         "levels": [
          {
           "height": 199,
           "width": 232,
           "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -17.6
       }
      ]
     },
     {
      "id": "panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_C4ADBB41_DD52_446C_41E8_DB1ED57BB75A); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_A133F612_B93B_3638_41E3_8280E5477FFB",
      "maps": [
       {
        "hfov": 6.91,
        "yaw": 147.04,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 54,
           "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.27
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 147.04,
        "hfov": 6.91,
        "image": {
         "levels": [
          {
           "height": 123,
           "width": 109,
           "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.27
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_camera",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 12.8,
   "class": "PanoramaCameraPosition",
   "pitch": 5.65
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 4368.95,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "y": 1034.85,
    "angle": 250.51,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0421.\u0443.  (7) 7.9 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_C599E98E_DD52_44F4_41CF_42C42F0B6E0E); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_872FCB9D_97E5_85E9_41DE_DA9C3EC97CB2",
      "maps": [
       {
        "hfov": 7.09,
        "yaw": 19,
        "image": {
         "levels": [
          {
           "height": 54,
           "width": 54,
           "url": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.98
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 19,
        "hfov": 7.09,
        "image": {
         "levels": [
          {
           "height": 108,
           "width": 108,
           "url": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.98
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_camera",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 17.09,
   "class": "PanoramaCameraPosition",
   "pitch": -1.97
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_A6500C2D_81B4_887E_41B3_B68964AB9468",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 4157.57,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "y": 1738.76,
    "angle": 174.27,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041f\u0440\u0438\u0435\u043c\u043d\u0430\u044f (4) 18.9 \u043a\u0432\u043c",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_C40A4A7F_DD52_4414_41C3_7776D39B2448); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BA5A5AAB_819D_887A_41DE_85179B387AD2",
      "maps": [
       {
        "hfov": 17.08,
        "yaw": 80.78,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 127,
           "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.08
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 80.78,
        "hfov": 17.08,
        "image": {
         "levels": [
          {
           "height": 282,
           "width": 255,
           "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.08
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C, this.camera_C434CA99_DD52_441C_41A3_E197EE33ECDC); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B82D31B5_819F_986E_41B0_45EBE4E4E260",
      "maps": [
       {
        "hfov": 10.41,
        "yaw": -21.04,
        "image": {
         "levels": [
          {
           "height": 106,
           "width": 89,
           "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -29.25
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -21.04,
        "hfov": 10.41,
        "image": {
         "levels": [
          {
           "height": 212,
           "width": 178,
           "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -29.25
       }
      ]
     },
     {
      "id": "panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_camera",
  "timeToIdle": 10000,
  "initialPosition": {
   "yaw": -13.04,
   "class": "PanoramaCameraPosition",
   "pitch": 5.29
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 4414.28,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "y": 2355.96,
    "angle": -32.87,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041f\u0440\u0438\u0435\u043c\u043d\u0430\u044f (5) 18.9 \u043a\u0432\u043c",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468, this.camera_C5939977_DD52_4414_41D0_87D82BC82B5B); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B943F966_819C_88EA_41D6_29CA18F28041",
      "maps": [
       {
        "hfov": 14.97,
        "yaw": 2.23,
        "image": {
         "levels": [
          {
           "height": 116,
           "width": 132,
           "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -32.57
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 2.23,
        "hfov": 14.97,
        "image": {
         "levels": [
          {
           "height": 233,
           "width": 265,
           "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -32.57
       }
      ]
     },
     {
      "id": "panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_C5646954_DD52_4414_41E4_AB55CC8F86FD); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_871F8056_97FF_835C_41D4_35F864B9A029",
      "maps": [
       {
        "hfov": 8.21,
        "yaw": -40.01,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 63,
           "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.65
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -40.01,
        "hfov": 8.21,
        "image": {
         "levels": [
          {
           "height": 107,
           "width": 126,
           "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.65
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_camera",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 12.73,
   "class": "PanoramaCameraPosition",
   "pitch": -2.8
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 2532.13,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "y": 3605.03,
    "angle": 184.49,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0411\u0430\u043b\u043a\u043e\u043d (10)",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_C58769A1_DD52_442C_41E7_FD9D8C41CDE7); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_A8AB1009_81FB_B826_41D7_406E14CE8195",
      "maps": [
       {
        "hfov": 25.36,
        "yaw": 162.84,
        "image": {
         "levels": [
          {
           "height": 181,
           "width": 189,
           "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.83
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 162.84,
        "hfov": 25.36,
        "image": {
         "levels": [
          {
           "height": 362,
           "width": 379,
           "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.83
       }
      ]
     },
     {
      "id": "panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA, this.camera_C5B269BE_DD52_4414_41B7_32CBA4C275D7); this.setMediaBehaviour(this.playList_C58C084D_DD52_4477_41C9_15B111889C4F, 0, this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_8C13A8AE_985E_8465_41E1_032046D37A83",
      "maps": [
       {
        "hfov": 10.49,
        "yaw": 0.66,
        "image": {
         "levels": [
          {
           "height": 83,
           "width": 95,
           "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -34.88
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 0.66,
        "hfov": 10.49,
        "image": {
         "levels": [
          {
           "height": 166,
           "width": 191,
           "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -34.88
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_camera",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -8,
   "class": "PanoramaCameraPosition",
   "pitch": -27.99
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_A8751B32_8194_886B_41DC_2E37A703290B_camera",
    "media": "this.panorama_A8751B32_8194_886B_41DC_2E37A703290B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C5368853_DD52_4413_41D4_0D4388B13A3D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_C5368853_DD52_4413_41D4_0D4388B13A3D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_camera",
    "media": "this.panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C5362855_DD52_4417_41B1_E67A0A6008B5, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_C5362855_DD52_4417_41B1_E67A0A6008B5",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_camera",
    "media": "this.panorama_A65A2C67_81B4_88EA_41DA_9969D058A589",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C537A85B_DD52_4413_41E7_13E41CEEFD3F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_C537A85B_DD52_4413_41E7_13E41CEEFD3F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_camera",
    "media": "this.panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C537485B_DD52_4413_41DB_3296F71E8584, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_C537485B_DD52_4413_41DB_3296F71E8584",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_camera",
    "media": "this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C534E85C_DD52_4415_41DD_09791B88BAC7, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "id": "PanoramaPlayListItem_C534E85C_DD52_4415_41DD_09791B88BAC7",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_camera",
    "media": "this.panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C534785C_DD52_4415_41E0_EEA7AA345B83, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_C534785C_DD52_4415_41E0_EEA7AA345B83",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_camera",
    "media": "this.panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C535F85C_DD52_4415_41B8_833602DAAE98, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_C535F85C_DD52_4415_41B8_833602DAAE98",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_camera",
    "media": "this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C53A885D_DD52_4417_41D3_DC84C1D75962, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "id": "PanoramaPlayListItem_C53A885D_DD52_4417_41D3_DC84C1D75962",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_camera",
    "media": "this.panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C53A085D_DD52_4417_41E4_E6DFCC0E67CD, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_C53A085D_DD52_4417_41E4_E6DFCC0E67CD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_camera",
    "media": "this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A",
    "end": "this.trigger('tourEnded')",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C53BA85D_DD52_4417_41E7_E0EA0010DB0F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "id": "PanoramaPlayListItem_C53BA85D_DD52_4417_41E7_E0EA0010DB0F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 1715.52,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "y": 3896.36,
    "angle": -191.39,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430 1",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A, this.camera_C4870B23_DD52_4433_41E7_A73C541BC53E); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_A1FAF953_B90D_FA38_41D6_29013DD28338",
      "maps": [
       {
        "hfov": 7.43,
        "yaw": -160.52,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 71,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 39.4
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -160.52,
        "hfov": 7.43,
        "image": {
         "levels": [
          {
           "height": 123,
           "width": 143,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 39.4
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D8E275AB_CBB7_DE83_41D3_AC215F2BB1DF",
      "maps": [
       {
        "hfov": 47.77,
        "yaw": -159.83,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 55,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 11.5
       }
      ],
      "items": [
       {
        "yaw": -159.83,
        "hfov": 47.77,
        "image": {
         "levels": [
          {
           "height": 209,
           "width": 727,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 11.5
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "- \u041e\u0421\u0422\u041e -"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':1,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':1,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':1,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_DEB7A4EC_CB4E_7E5A_41B9_23D29B7E6E94, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DFF4E784_CB4E_FACA_41E5_6742608D5D13",
      "maps": [
       {
        "hfov": 8.5,
        "yaw": 158.47,
        "image": {
         "levels": [
          {
           "height": 69,
           "width": 63,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.01
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 158.47,
        "hfov": 8.5,
        "image": {
         "levels": [
          {
           "height": 138,
           "width": 127,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.01
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "popupMaxWidth": "100%",
      "rotationY": 0,
      "popupMaxHeight": "100%",
      "hfov": 6.47,
      "yaw": 158.47,
      "hideEasing": "cubic_out",
      "id": "popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D",
      "hideDuration": 1000,
      "showDuration": 1000,
      "image": {
       "levels": [
        {
         "height": 1024,
         "width": 720,
         "url": "media/popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "showEasing": "cubic_in",
      "class": "PopupPanoramaOverlay",
      "pitch": -6.01
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_t.jpg"
 },
 {
  "id": "panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -161.43,
   "class": "PanoramaCameraPosition",
   "pitch": 38.71
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_C58C084D_DD52_4477_41C9_15B111889C4F",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_camera",
    "media": "this.panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C53BF85E_DD52_4415_41EA_135056F35F26, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_C53BF85E_DD52_4415_41EA_135056F35F26",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
 {
  "id": "playList_C5306851_DD52_446F_41E5_D990A6239EB2",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "class": "MapPlayListItem"
   }
  ]
 },
 {
  "id": "playList_C531A851_DD52_446F_41E6_87E7E101D4C6",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "class": "MapPlayListItem"
   }
  ]
 },
 "this.popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D",
 {
  "levels": [
   {
    "height": 2117,
    "width": 1489,
    "url": "media/popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2048,
    "width": 1440,
    "url": "media/popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1024,
    "width": 720,
    "url": "media/popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 512,
    "width": 360,
    "url": "media/popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_DEB7A4EC_CB4E_7E5A_41B9_23D29B7E6E94",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C52C98A1_DD52_442C_41C0_33150F45DC16",
  "initialSequence": {
   "restartMovementDelay": 3000,
   "movements": [
    {
     "targetYaw": 64.07,
     "path": "shortest",
     "pitchSpeed": 30.35,
     "yawSpeed": 59.97,
     "easing": "cubic_in_out",
     "targetPitch": -10.67,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -50.96,
     "path": "shortest",
     "pitchSpeed": 34.17,
     "yawSpeed": 67.65,
     "easing": "cubic_in_out",
     "targetPitch": 8.46,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -38.2,
     "path": "shortest",
     "pitchSpeed": 4.95,
     "yawSpeed": 8.95,
     "easing": "cubic_in_out",
     "targetPitch": 2.94,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_C52CA8A2_DD52_442C_4171_EE8A028C4B99",
   "restartMovementOnUserInteraction": true,
   "repeat": 0,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "idleSequence": "this.sequence_C52CA8A2_DD52_442C_4171_EE8A028C4B99",
  "initialPosition": {
   "hfov": 120,
   "yaw": -38.2,
   "class": "PanoramaCameraPosition",
   "pitch": 2.94
  },
  "timeToIdle": 3000
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C55C58E3_DD52_442C_41E1_9D7D94375412",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -3.67,
   "class": "PanoramaCameraPosition",
   "pitch": -20.57
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C54A38FF_DD52_4414_41D9_204751F28954",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -11.76,
   "class": "PanoramaCameraPosition",
   "pitch": 2.2
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C5703919_DD52_441F_41C2_333B0162D03C",
  "timeToIdle": 10000,
  "initialPosition": {
   "yaw": -10.29,
   "class": "PanoramaCameraPosition",
   "pitch": -2.94
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C57E1936_DD52_4415_41E3_FCE71D0F4266",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 163.84,
   "class": "PanoramaCameraPosition",
   "pitch": -6.61
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C5646954_DD52_4414_41E4_AB55CC8F86FD",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -2.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C5939977_DD52_4414_41D0_87D82BC82B5B",
  "timeToIdle": 10000,
  "initialPosition": {
   "yaw": -9.55,
   "class": "PanoramaCameraPosition",
   "pitch": -2.2
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C599E98E_DD52_44F4_41CF_42C42F0B6E0E",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -38.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C58769A1_DD52_442C_41E7_FD9D8C41CDE7",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 87.43,
   "class": "PanoramaCameraPosition",
   "pitch": -0.73
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C5B269BE_DD52_4414_41B7_32CBA4C275D7",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -159.43,
   "class": "PanoramaCameraPosition",
   "pitch": 38.2
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C5B869D3_DD52_446C_41CC_B82FD17469E7",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 153.55,
   "class": "PanoramaCameraPosition",
   "pitch": -13.96
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C5AB59EB_DD52_4433_41B5_AB9687F51408",
  "initialSequence": {
   "restartMovementDelay": 3000,
   "movements": [
    {
     "targetYaw": 64.07,
     "path": "shortest",
     "pitchSpeed": 32.36,
     "yawSpeed": 64.01,
     "easing": "cubic_in_out",
     "targetPitch": -10.67,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -50.96,
     "path": "shortest",
     "pitchSpeed": 34.17,
     "yawSpeed": 67.65,
     "easing": "cubic_in_out",
     "targetPitch": 8.46,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -44.82,
     "path": "shortest",
     "pitchSpeed": 2.83,
     "yawSpeed": 4.67,
     "easing": "cubic_in_out",
     "targetPitch": 6.61,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_C5AB69EC_DD52_4434_41EA_7E3BBE355DEE",
   "restartMovementOnUserInteraction": true,
   "repeat": 0,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "idleSequence": "this.sequence_C5AB69EC_DD52_4434_41EA_7E3BBE355DEE",
  "initialPosition": {
   "hfov": 120,
   "yaw": -44.82,
   "class": "PanoramaCameraPosition",
   "pitch": 6.61
  },
  "timeToIdle": 3000
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C5C7EA1A_DD52_441C_41E1_6E64C75E3CF4",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -8.82,
   "class": "PanoramaCameraPosition",
   "pitch": -19.84
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C5F05A30_DD52_442D_41E9_02AD5A5A07C8",
  "timeToIdle": 10000,
  "initialPosition": {
   "yaw": -15.43,
   "class": "PanoramaCameraPosition",
   "pitch": -5.88
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C5E39A46_DD52_4474_41D0_E6BDC0DB6777",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 141.06,
   "class": "PanoramaCameraPosition",
   "pitch": -5.88
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C5EC2A5B_DD52_441C_41D0_BE7BE31D908E",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 18.37,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C4186A6B_DD52_443C_41E6_5C74B9C03609",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 14.69,
   "class": "PanoramaCameraPosition",
   "pitch": -5.88
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C40A4A7F_DD52_4414_41C3_7776D39B2448",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C434CA99_DD52_441C_41A3_E197EE33ECDC",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 18.37,
   "class": "PanoramaCameraPosition",
   "pitch": -13.22
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C426EAB4_DD52_4414_41DF_25A881ED4EDB",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 44.82,
   "class": "PanoramaCameraPosition",
   "pitch": -8.08
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C4569AD4_DD52_4415_41D2_B2D4ECE89837",
  "initialSequence": {
   "restartMovementDelay": 3000,
   "movements": [
    {
     "targetYaw": 64.07,
     "path": "shortest",
     "pitchSpeed": 32.69,
     "yawSpeed": 64.68,
     "easing": "cubic_in_out",
     "targetPitch": -10.67,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -50.96,
     "path": "shortest",
     "pitchSpeed": 34.17,
     "yawSpeed": 67.65,
     "easing": "cubic_in_out",
     "targetPitch": 8.46,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -47.02,
     "path": "shortest",
     "pitchSpeed": 4.23,
     "yawSpeed": 7.5,
     "easing": "cubic_in_out",
     "targetPitch": -2.2,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_C456BAD4_DD52_4415_41B6_C502D6ACAFA9",
   "restartMovementOnUserInteraction": true,
   "repeat": 0,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "idleSequence": "this.sequence_C456BAD4_DD52_4415_41B6_C502D6ACAFA9",
  "initialPosition": {
   "hfov": 120,
   "yaw": -47.02,
   "class": "PanoramaCameraPosition",
   "pitch": -2.2
  },
  "timeToIdle": 3000
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C44D2AFB_DD52_441C_41E6_1E2BB5B2EFB6",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -4.41,
   "class": "PanoramaCameraPosition",
   "pitch": -15.43
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C47FFB05_DD52_45F4_41E3_5C1812B2790E",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -19.1,
   "class": "PanoramaCameraPosition",
   "pitch": 2.94
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C469CB0F_DD52_45F3_41DE_10CA48E7E6E3",
  "timeToIdle": 10000,
  "initialPosition": {
   "yaw": -16.9,
   "class": "PanoramaCameraPosition",
   "pitch": 0.73
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C4953B1A_DD52_441D_41CB_2AC7A9454E0C",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 13.96,
   "class": "PanoramaCameraPosition",
   "pitch": 1.47
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C4870B23_DD52_4433_41E7_A73C541BC53E",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -10.29,
   "class": "PanoramaCameraPosition",
   "pitch": -23.51
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C4B19B2D_DD52_4434_41DA_0B7105289171",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -15.43,
   "class": "PanoramaCameraPosition",
   "pitch": 3.67
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C4A3BB38_DD52_441C_41AD_3A10A8872F88",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": 16.16,
   "class": "PanoramaCameraPosition",
   "pitch": -2.94
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_C4ADBB41_DD52_446C_41E8_DB1ED57BB75A",
  "timeToIdle": 3000,
  "initialPosition": {
   "yaw": -39.67,
   "class": "PanoramaCameraPosition",
   "pitch": 2.2
  },
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "progressHeight": 20,
  "toolTipOpacity": 1,
  "progressBottom": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "minWidth": 100,
  "borderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "class": "ViewerArea",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 10,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#990000"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarLeft": 0,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "paddingLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadHeight": 30,
  "progressRight": 0,
  "minHeight": 50,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   1
  ],
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "top": 0,
  "playbackBarHeight": 20,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#AAAAAA",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 4,
  "progressOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "left": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
 },
 {
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "height": 142,
  "paddingTop": 0,
  "minWidth": 1,
  "borderRadius": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "gap": 10,
  "minHeight": 1,
  "horizontalAlign": "center",
  "shadow": false,
  "width": "100%",
  "class": "Container",
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "id": "component_623707BC_7161_2E78_41BB_A46DF471E4F7",
  "data": {
   "name": "Container44746"
  },
  "bottom": "0%",
  "paddingBottom": 0,
  "left": "0%",
  "layout": "horizontal",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "scroll"
 },
 {
  "progressHeight": 20,
  "toolTipOpacity": 1,
  "right": "0%",
  "progressBottom": 2,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "minWidth": 1,
  "borderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "class": "ViewerArea",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#990000"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "height": "42.61%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarLeft": 0,
  "width": "31.37%",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "paddingLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadHeight": 30,
  "progressRight": 0,
  "minHeight": 1,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   1
  ],
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "top": "0.06%",
  "playbackBarHeight": 20,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "id": "MapViewer",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#AAAAAA",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 4,
  "progressOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 0,
  "paddingTop": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0
  ],
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "backgroundColorDirection": "vertical",
  "minHeight": 0,
  "shadow": false,
  "class": "UIComponent",
  "top": 0,
  "visible": false,
  "backgroundOpacity": 0.55,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent16006"
  },
  "bottom": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "backgroundColor": [],
  "minWidth": 0,
  "paddingTop": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "minHeight": 0,
  "shadow": false,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "top": 0,
  "visible": false,
  "backgroundOpacity": 1,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage16007"
  },
  "bottom": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0
 },
 {
  "pressedIconColor": "#888888",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "paddingRight": 5,
  "iconWidth": 20,
  "iconColor": "#000000",
  "fontSize": 12,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconHeight": 20,
  "textDecoration": "none",
  "paddingTop": 5,
  "minWidth": 0,
  "shadowSpread": 1,
  "borderRadius": 0,
  "paddingLeft": 5,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "gap": 5,
  "backgroundColorDirection": "vertical",
  "minHeight": 0,
  "shadow": false,
  "class": "CloseButton",
  "rollOverIconColor": "#666666",
  "top": 10,
  "fontWeight": "normal",
  "cursor": "hand",
  "visible": false,
  "borderColor": "#000000",
  "iconLineWidth": 5,
  "backgroundOpacity": 0.3,
  "id": "closeButtonPopupPanorama",
  "fontStyle": "normal",
  "data": {
   "name": "CloseButton16008"
  },
  "layout": "horizontal",
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "paddingBottom": 5,
  "iconBeforeLabel": true,
  "label": "",
  "right": 10
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_C531A851_DD52_446F_41E6_87E7E101D4C6.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "vrPolyfillScale": 1,
 "height": "100%",
 "paddingTop": 0,
 "minWidth": 20,
 "creationPolicy": "delayed",
 "borderRadius": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "minHeight": 20,
 "shadow": false,
 "class": "Player",
 "scrollBarMargin": 2,
 "scripts": {
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); }
 },
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})