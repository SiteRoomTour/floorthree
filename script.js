TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "Panorama",
  "id": "panorama_A8751B32_8194_886B_41DC_2E37A703290B",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 2127.96,
    "x": 954.36,
    "angle": 125.89,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideOpacity": 0.28,
     "width": 5400,
     "fieldOfViewOverlayInsideColor": "#E7CB00",
     "height": 4000,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 0.5,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 1185,
        "class": "ImageResourceLevel",
        "width": 1600,
        "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8.png"
       },
       {
        "height": 592,
        "class": "ImageResourceLevel",
        "grayscale": true,
        "width": 800,
        "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_lq.png"
       }
      ]
     },
     "id": "map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
     "label": "\u041f\u043b\u0430\u043d 3 \u044d\u0442\u0430\u0436\u0430",
     "maximumZoomFactor": 1.2,
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_ABC3C348_B907_0E2A_41C1_7D46B458E612",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 215.25,
        "y": 2037.95,
        "height": 180.02,
        "x": 846.73,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 31,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_11_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 2037.95,
        "x": 846.73,
        "width": 215.25,
        "height": 180.02,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 63,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_11.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "id": "overlay_AAE59DB7_B91D_FA66_41E4_EFEC7F00D8C3",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 171.97,
        "y": 2025.05,
        "height": 206,
        "x": 1807.95,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 25,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_12_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 2025.05,
        "x": 1807.95,
        "width": 171.97,
        "height": 206,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 61,
           "class": "ImageResourceLevel",
           "width": 50,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_12.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "id": "overlay_AA2902FE_B905_0FE6_41E3_976E9620E490",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 215.25,
        "y": 1888.25,
        "height": 188.68,
        "x": 2980.55,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 31,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_14_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 1888.25,
        "x": 2980.55,
        "width": 215.25,
        "height": 188.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "class": "ImageResourceLevel",
           "width": 63,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_14.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "id": "overlay_AA9ED4D8_B90B_0A29_41BA_6CB9DD1C38AF",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 197.94,
        "y": 1635.76,
        "height": 206,
        "x": 4058.6,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 29,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_15_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 1635.76,
        "x": 4058.6,
        "width": 197.94,
        "height": 206,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 61,
           "class": "ImageResourceLevel",
           "width": 58,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_15.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "id": "overlay_AA28C672_B90E_F6FE_41DC_10077CB4498A",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 197.94,
        "y": 2248.63,
        "height": 214.66,
        "x": 4315.31,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 31,
           "class": "ImageResourceLevel",
           "width": 29,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_16_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 2248.63,
        "x": 4315.31,
        "width": 197.94,
        "height": 214.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 58,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_16.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "id": "overlay_ACF0E0B1_B90D_0A7B_41C0_62DAA524F506",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 189.28,
        "y": 1036.57,
        "height": 180.02,
        "x": 3227.89,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_17_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 1036.57,
        "x": 3227.89,
        "width": 189.28,
        "height": 180.02,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_17.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "id": "overlay_ACC7071F_B905_1627_41D9_7077D0C0071C",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 197.94,
        "y": 927.51,
        "height": 214.66,
        "x": 4269.99,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 31,
           "class": "ImageResourceLevel",
           "width": 29,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_18_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 927.51,
        "x": 4269.99,
        "width": 197.94,
        "height": 214.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 58,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_18.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "id": "overlay_ADB5D75A_B907_1629_41D7_F205F2D6D2E7",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 180.62,
        "y": 2954.13,
        "height": 188.68,
        "x": 1391.42,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 26,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_19_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 2954.13,
        "x": 1391.42,
        "width": 180.62,
        "height": 188.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "class": "ImageResourceLevel",
           "width": 53,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_19.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "id": "overlay_AC7537E5_B905_161B_41B9_C54FFAE6F443",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 189.28,
        "y": 2988.92,
        "height": 188.68,
        "x": 512.26,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_20_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 2988.92,
        "x": 512.26,
        "width": 189.28,
        "height": 188.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_20.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "id": "overlay_AC6739CE_B97B_3A29_41E2_B620DDA4A7C8",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 206.6,
        "y": 3515.02,
        "height": 180.02,
        "x": 2428.83,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 30,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_21_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 3515.02,
        "x": 2428.83,
        "width": 206.6,
        "height": 180.02,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 61,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_21.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.playList_D2B09C13_DD6D_B81A_41E7_F520FDC70842.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_DE7FFF12_CB52_6BCD_41D6_78D54097E051",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 204.32,
        "y": 3808.95,
        "height": 174.83,
        "x": 1613.36,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 18,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_22_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 3808.95,
        "x": 1613.36,
        "width": 204.32,
        "height": 174.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 60,
           "url": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_HS_22.png"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0.15,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayRadiusScale": 0.13,
     "thumbnailUrl": "media/map_A84F0741_B90A_F61A_41C9_27A3D7B204A8_t.png"
    }
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 120,
  "label": "\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0434\u0432\u0435\u0440\u044c 3 \u044d\u0442\u0430\u0436",
  "vfov": 180,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_AE438B5B_8195_88DA_41D1_D538B920E8F7",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 36.24,
        "yaw": -51.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 197,
           "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 11.75
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -51.67,
        "hfov": 36.24,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 559,
           "class": "ImageResourceLevel",
           "width": 552,
           "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 11.75
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0",
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_t.jpg"
 },
 {
  "class": "MapPlayer",
  "viewerArea": "this.MapViewer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A8751B32_8194_886B_41DC_2E37A703290B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 63.52,
   "pitch": 1.32
  },
  "timeToIdle": 3000
 },
 {
  "class": "Panorama",
  "id": "panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 2128.06,
    "x": 1893.93,
    "angle": 39.39,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0413\u043e\u0441\u0442\u0438\u043d\u043d\u0430\u044f (1) 69.6 \u043a\u0432.\u043c.",
  "vfov": 180,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468, this.camera_D2F45C81_DD6D_B8F6_41DF_BEC332CFCF40); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "id": "overlay_AE6E4C0A_81EC_883A_41D9_58CCA5870883",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.3,
        "yaw": 44.18,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 87,
           "class": "ImageResourceLevel",
           "width": 54,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 2.25
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 44.18,
        "hfov": 7.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 175,
           "class": "ImageResourceLevel",
           "width": 109,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 2.25
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A8751B32_8194_886B_41DC_2E37A703290B, this.camera_D2ACAC9B_DD6D_B80B_41E3_1E9C35F1CCAB); this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "id": "overlay_AD4160C3_81EB_F829_41B1_E766D470E8F6",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.87,
        "yaw": -148.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 65,
           "class": "ImageResourceLevel",
           "width": 89,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.69
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -148.44,
        "hfov": 11.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 130,
           "class": "ImageResourceLevel",
           "width": 178,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -7.69
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "id": "overlay_AE829FF8_81F4_87E6_41B8_B72CA8418C8C",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.12,
        "yaw": 17.76,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 53,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 2.36
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 17.76,
        "hfov": 7.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 107,
           "class": "ImageResourceLevel",
           "width": 106,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 2.36
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A65A2C67_81B4_88EA_41DA_9969D058A589, this.camera_D2C02C8A_DD6D_B80A_41CC_B3E6E14F4DF2); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "id": "overlay_BB82DE91_81AC_8826_41DD_C6A5FC3B22AA",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.4,
        "yaw": 167.61,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "class": "ImageResourceLevel",
           "width": 62,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_6_0_0_map.gif"
          }
         ]
        },
        "pitch": -28.32
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 167.61,
        "hfov": 7.4,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 110,
           "class": "ImageResourceLevel",
           "width": 125,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_6_0.png"
          }
         ]
        },
        "pitch": -28.32
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_D2DEAC93_DD6D_B81B_41B6_DD2300F2CBFA); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "id": "overlay_B4F94E45_8195_882E_4183_4F822DA6A013",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.95,
        "yaw": 41.39,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 69,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_8_0_0_map.gif"
          }
         ]
        },
        "pitch": -23.72
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 41.39,
        "hfov": 6.95,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 139,
           "class": "ImageResourceLevel",
           "width": 113,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_8_0.png"
          }
         ]
        },
        "pitch": -23.72
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_tcap0",
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A, this.camera_D2E7BC79_DD6D_B816_41D1_01B592F3A957); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "id": "overlay_8A71D058_9865_84D4_41D8_72BC7DD55F08",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.54,
        "yaw": 114.74,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 68,
           "class": "ImageResourceLevel",
           "width": 63,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_9_0_0_map.gif"
          }
         ]
        },
        "pitch": -4.59
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 114.74,
        "hfov": 8.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 137,
           "class": "ImageResourceLevel",
           "width": 127,
           "url": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_0_HS_9_0.png"
          }
         ]
        },
        "pitch": -4.59
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 44.65,
   "pitch": -0.33
  },
  "timeToIdle": 3000
 },
 {
  "class": "Panorama",
  "id": "panorama_A65A2C67_81B4_88EA_41DA_9969D058A589",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 3048.47,
    "x": 1481.73,
    "angle": -50.8,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0413\u043e\u0441\u0442\u0438\u043d\u043d\u0430\u044f (8) 69.6 \u043a\u0432.\u043c.",
  "vfov": 180,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE, this.camera_D0510D48_DD6D_B875_41B4_5DC0D625B72D); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "id": "overlay_B1075475_8195_78E9_41B1_8E9CDDBA751A",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.3,
        "yaw": -25.34,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 65,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -19.88
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -25.34,
        "hfov": 8.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 116,
           "class": "ImageResourceLevel",
           "width": 131,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -19.88
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A8751B32_8194_886B_41DC_2E37A703290B, this.camera_D0472D40_DD6D_B875_41EA_300CFA235434); this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "id": "overlay_B1D60AE2_8195_89EA_41CE_50A38208F9E1",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.07,
        "yaw": 39.39,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 128,
           "class": "ImageResourceLevel",
           "width": 75,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 0.53
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 39.39,
        "hfov": 10.07,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 256,
           "class": "ImageResourceLevel",
           "width": 150,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 0.53
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_D04D4D36_DD6D_B81D_41C2_85D12937CEEA); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "id": "overlay_B19AE8AF_81AC_887A_41DB_7271AD80722D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.29,
        "yaw": 97.25,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 72,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -15.53
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 97.25,
        "hfov": 9.29,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 144,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -15.53
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1, this.camera_D1968D15_DD6D_B81F_41C7_38CC1C314FF5); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "id": "overlay_B18F8D08_81AD_8826_41D4_26ABCFC2BC0A",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.06,
        "yaw": 118.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 61,
           "class": "ImageResourceLevel",
           "width": 37,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_5_0_0_map.gif"
          }
         ]
        },
        "pitch": -0.65
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 118.51,
        "hfov": 5.06,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 122,
           "class": "ImageResourceLevel",
           "width": 75,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_5_0.png"
          }
         ]
        },
        "pitch": -0.65
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468, this.camera_D0733D2E_DD6D_B80D_41E8_2DBD207D78C3); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "id": "overlay_B0EDBB00_81AB_8826_41D8_02D87F19A812",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.79,
        "yaw": 133.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 49,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_6_0_0_map.gif"
          }
         ]
        },
        "pitch": -1.69
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 133.32,
        "hfov": 5.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 99,
           "class": "ImageResourceLevel",
           "width": 86,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_6_0.png"
          }
         ]
        },
        "pitch": -1.69
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_tcap0",
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A, this.camera_D07AFD26_DD6D_B83D_41EA_6E1B24EF4A08); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "id": "overlay_8B69D370_9866_84D2_41CF_FFF28AC404EF",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.28,
        "yaw": 173.74,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "class": "ImageResourceLevel",
           "width": 77,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_7_0_0_map.gif"
          }
         ]
        },
        "pitch": -9.52
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 173.74,
        "hfov": 10.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 231,
           "class": "ImageResourceLevel",
           "width": 155,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_7_0.png"
          }
         ]
        },
        "pitch": -9.52
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0, this.camera_D060CD1D_DD6D_B80F_41D8_D96472E34881); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_A071613E_B905_0A68_4190_287323AB3F76",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.22,
        "yaw": 56.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 83,
           "class": "ImageResourceLevel",
           "width": 82,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_8_0_0_map.gif"
          }
         ]
        },
        "pitch": -22.01
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 56.68,
        "hfov": 10.22,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 166,
           "class": "ImageResourceLevel",
           "width": 164,
           "url": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_0_HS_8_0.png"
          }
         ]
        },
        "pitch": -22.01
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.26,
   "pitch": -3.11
  },
  "timeToIdle": 3000
 },
 {
  "class": "Panorama",
  "id": "panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 3083.26,
    "x": 606.9,
    "angle": 65.56,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u0430\u0431\u0438\u043d\u0435\u0442 (9) 69.6 \u043a\u0432.\u043c.",
  "vfov": 180,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_tcap0",
      "rotate": true,
      "hfov": 93.6,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A65A2C67_81B4_88EA_41DA_9969D058A589, this.camera_D0E95D82_DD6D_B8F5_41D7_5BA0DB513429); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "id": "overlay_990128D2_97E6_838A_41DF_02182DF11006",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.19,
        "yaw": 25.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 19,
           "url": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -16.16
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 25.75,
        "hfov": 12.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 159,
           "class": "ImageResourceLevel",
           "width": 189,
           "url": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -16.16
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 16.58,
   "pitch": 0.77
  },
  "timeToIdle": 3000
 },
 {
  "class": "Panorama",
  "id": "panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1982.59,
    "x": 3088.18,
    "angle": 101.12,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0413\u043e\u0441\u0442\u0438\u043d\u043d\u0430\u044f (3) 69.6 \u043a\u0432.\u043c.",
  "vfov": 180,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1, this.camera_D02B2D51_DD6D_B817_41D5_1DDE393E725A); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "id": "overlay_B7AD573E_81B4_985A_41A1_5E2C369139DD",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.7,
        "yaw": -38.96,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 82,
           "class": "ImageResourceLevel",
           "width": 64,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -1.53
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -38.96,
        "hfov": 8.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 164,
           "class": "ImageResourceLevel",
           "width": 129,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -1.53
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A65A2C67_81B4_88EA_41DA_9969D058A589, this.camera_D0048D70_DD6D_B815_41E8_80378F24C82D); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "id": "overlay_B75E9590_81B7_982C_41D2_DFE3256EA869",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.97,
        "yaw": 138.69,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 70,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -17.02
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 138.69,
        "hfov": 8.97,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "class": "ImageResourceLevel",
           "width": 140,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -17.02
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A8751B32_8194_886B_41DC_2E37A703290B, this.camera_D01E1D78_DD6D_B815_41EA_D47F65B4C016); this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "id": "overlay_B66E76F4_81B4_B9EE_41D2_809D0047CC09",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.26,
        "yaw": 166.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 69,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -5.95
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 166.68,
        "hfov": 9.26,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 139,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -5.95
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_tcap0",
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468, this.camera_D00AED68_DD6D_B835_41B6_74A463433B2B); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "id": "overlay_876B20D1_97E2_83A8_41C4_64B9A8C81F63",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.12,
        "yaw": -2.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 52,
           "class": "ImageResourceLevel",
           "width": 53,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_6_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.63
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -2.35,
        "hfov": 7.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 104,
           "class": "ImageResourceLevel",
           "width": 107,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_6_0.png"
          }
         ]
        },
        "pitch": -7.63
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A, this.camera_D03FAD61_DD6D_B837_41B2_C5CACCA428C4); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "id": "overlay_8A9A978A_9863_8C48_41D9_74D28573A68F",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.86,
        "yaw": 87.45,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 93,
           "class": "ImageResourceLevel",
           "width": 88,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_7_0_0_map.gif"
          }
         ]
        },
        "pitch": 0.22
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 87.45,
        "hfov": 11.86,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 187,
           "class": "ImageResourceLevel",
           "width": 177,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_7_0.png"
          }
         ]
        },
        "pitch": 0.22
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0, this.camera_D0268D59_DD6D_B817_41DD_6D31EA9C63B8); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_A01B3F19_B905_F628_41B4_45D325B5AD81",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.37,
        "yaw": 162.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 82,
           "class": "ImageResourceLevel",
           "width": 100,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_9_0_0_map.gif"
          }
         ]
        },
        "pitch": -32.8
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 162.81,
        "hfov": 11.37,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 164,
           "class": "ImageResourceLevel",
           "width": 201,
           "url": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_0_HS_9_0.png"
          }
         ]
        },
        "pitch": -32.8
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.21,
   "pitch": -0.33
  },
  "timeToIdle": 3000
 },
 {
  "class": "Panorama",
  "id": "panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1126.58,
    "x": 3322.53,
    "angle": 408.61,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0421.\u0443.  (6) 7.9 \u043a\u0432.\u043c.",
  "vfov": 180,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75, this.camera_D2EA8C71_DD6D_B816_41A8_1E40265BBFC5); this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "id": "overlay_B6F4F510_81B4_9826_41AC_9E5E44AAFCD4",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.83,
        "yaw": 15.94,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 99,
           "class": "ImageResourceLevel",
           "width": 116,
           "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -17.6
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 15.94,
        "hfov": 14.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 199,
           "class": "ImageResourceLevel",
           "width": 232,
           "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -17.6
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_tcap0",
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_D21F6C68_DD6D_B836_41E0_CAAE4B145E61); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "id": "overlay_A133F612_B93B_3638_41E3_8280E5477FFB",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.91,
        "yaw": 147.04,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 61,
           "class": "ImageResourceLevel",
           "width": 54,
           "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -19.27
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 147.04,
        "hfov": 6.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 123,
           "class": "ImageResourceLevel",
           "width": 109,
           "url": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -19.27
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 12.8,
   "pitch": 5.65
  },
  "timeToIdle": 3000
 },
 {
  "class": "Panorama",
  "id": "panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1034.85,
    "x": 4368.95,
    "angle": 250.51,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0421.\u0443.  (7) 7.9 \u043a\u0432.\u043c.",
  "vfov": 180,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_tcap0",
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_D1B2FCF3_DD6D_B81B_41EA_DA20AF2F3999); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "id": "overlay_872FCB9D_97E5_85E9_41DE_DA9C3EC97CB2",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.09,
        "yaw": 19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 54,
           "url": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -12.98
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 19,
        "hfov": 7.09,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 108,
           "class": "ImageResourceLevel",
           "width": 108,
           "url": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -12.98
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.09,
   "pitch": -1.97
  },
  "timeToIdle": 3000
 },
 {
  "class": "Panorama",
  "id": "panorama_A6500C2D_81B4_887E_41B3_B68964AB9468",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1738.76,
    "x": 4157.57,
    "angle": 174.27,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041f\u0440\u0438\u0435\u043c\u043d\u0430\u044f (4) 18.9 \u043a\u0432\u043c",
  "vfov": 180,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_D1891CFC_DD6D_B80D_41D9_BCD13D311129); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "id": "overlay_BA5A5AAB_819D_887A_41DE_85179B387AD2",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 17.08,
        "yaw": 80.78,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 141,
           "class": "ImageResourceLevel",
           "width": 127,
           "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -3.08
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 80.78,
        "hfov": 17.08,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 282,
           "class": "ImageResourceLevel",
           "width": 255,
           "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -3.08
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C, this.camera_D183FD05_DD6D_B9FF_41E0_E84EA2373C85); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "id": "overlay_B82D31B5_819F_986E_41B0_45EBE4E4E260",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.41,
        "yaw": -21.04,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 106,
           "class": "ImageResourceLevel",
           "width": 89,
           "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -29.25
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -21.04,
        "hfov": 10.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 212,
           "class": "ImageResourceLevel",
           "width": 178,
           "url": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -29.25
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_tcap0",
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -13.04,
   "pitch": 5.29
  },
  "timeToIdle": 10000
 },
 {
  "class": "Panorama",
  "id": "panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 2355.96,
    "x": 4414.28,
    "angle": -32.87,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041f\u0440\u0438\u0435\u043c\u043d\u0430\u044f (5) 18.9 \u043a\u0432\u043c",
  "vfov": 180,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468, this.camera_D1A56CE2_DD6D_B835_41E6_7CC68D2A15BD); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "id": "overlay_B943F966_819C_88EA_41D6_29CA18F28041",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.97,
        "yaw": 2.23,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 116,
           "class": "ImageResourceLevel",
           "width": 132,
           "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -32.57
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 2.23,
        "hfov": 14.97,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 233,
           "class": "ImageResourceLevel",
           "width": 265,
           "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -32.57
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_tcap0",
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_D1BBECEB_DD6D_B80B_41EB_2D0BB1131520); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "id": "overlay_871F8056_97FF_835C_41D4_35F864B9A029",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.21,
        "yaw": -40.01,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 63,
           "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.65
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -40.01,
        "hfov": 8.21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 107,
           "class": "ImageResourceLevel",
           "width": 126,
           "url": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -14.65
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 12.73,
   "pitch": -2.8
  },
  "timeToIdle": 3000
 },
 {
  "class": "Panorama",
  "id": "panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 3605.03,
    "x": 2532.13,
    "angle": 184.49,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0411\u0430\u043b\u043a\u043e\u043d (10)",
  "vfov": 180,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F, this.camera_D2B97CA3_DD6D_B83A_41E3_904D51F94C06); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "id": "overlay_A8AB1009_81FB_B826_41D7_406E14CE8195",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 25.36,
        "yaw": 162.84,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 181,
           "class": "ImageResourceLevel",
           "width": 189,
           "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -2.83
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 162.84,
        "hfov": 25.36,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 362,
           "class": "ImageResourceLevel",
           "width": 379,
           "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -2.83
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_tcap0",
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA, this.camera_D1A1CCD9_DD6D_B817_41E3_D389708EB04E); this.setMediaBehaviour(this.playList_D2B09C13_DD6D_B81A_41E7_F520FDC70842, 0, this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A)"
       }
      ],
      "id": "overlay_8C13A8AE_985E_8465_41E1_032046D37A83",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.49,
        "yaw": 0.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 83,
           "class": "ImageResourceLevel",
           "width": 95,
           "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -34.88
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 0.66,
        "hfov": 10.49,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 166,
           "class": "ImageResourceLevel",
           "width": 191,
           "url": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -34.88
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8,
   "pitch": -27.99
  },
  "timeToIdle": 3000
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A8751B32_8194_886B_41DC_2E37A703290B_camera",
    "media": "this.panorama_A8751B32_8194_886B_41DC_2E37A703290B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D2362C19_DD6D_B817_41DE_BF05C1198786, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_D2362C19_DD6D_B817_41DE_BF05C1198786",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0_camera",
    "media": "this.panorama_A6507579_81B4_98E6_41DF_1DD94CC6F8F0",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D237BC19_DD6D_B817_41E2_1DC6C3AAC892, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_D237BC19_DD6D_B817_41E2_1DC6C3AAC892",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A65A2C67_81B4_88EA_41DA_9969D058A589_camera",
    "media": "this.panorama_A65A2C67_81B4_88EA_41DA_9969D058A589",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D2370C1A_DD6D_B815_41E2_59ECAE99C15F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_D2370C1A_DD6D_B815_41E2_59ECAE99C15F",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE_camera",
    "media": "this.panorama_A6512461_81B4_98E6_41D8_9CAC646AC6CE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D208AC1A_DD6D_B815_41C0_2E364769A217, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_D208AC1A_DD6D_B815_41C0_2E364769A217",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F_camera",
    "media": "this.panorama_A652A4A0_81B4_F866_41C7_1D2E4CFA602F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D2082C1A_DD6D_B815_41D6_20D180E29303, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "id": "PanoramaPlayListItem_D2082C1A_DD6D_B815_41D6_20D180E29303",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1_camera",
    "media": "this.panorama_A6B4FD2F_81B4_887A_41A2_1051A1E670C1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D209AC1A_DD6D_B815_41D4_0080507B2D14, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_D209AC1A_DD6D_B815_41D4_0080507B2D14",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75_camera",
    "media": "this.panorama_A6A8A70D_81B4_983E_41C2_339EFBCA0E75",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D2095C1A_DD6D_B815_41CB_064F60C1CA8D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_D2095C1A_DD6D_B815_41CB_064F60C1CA8D",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468_camera",
    "media": "this.panorama_A6500C2D_81B4_887E_41B3_B68964AB9468",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D20AAC1B_DD6D_B80B_41C9_4E2471592A06, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "id": "PanoramaPlayListItem_D20AAC1B_DD6D_B80B_41C9_4E2471592A06",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C_camera",
    "media": "this.panorama_A6A28492_81B4_B82B_41D2_DAF854FCEC8C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D20A5C1B_DD6D_B80B_41D2_181D3BF1DBAD, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_D20A5C1B_DD6D_B80B_41D2_181D3BF1DBAD",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A_camera",
    "media": "this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D20BDC1B_DD6D_B80B_41D1_17D11B6D9104, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "id": "PanoramaPlayListItem_D20BDC1B_DD6D_B80B_41D1_17D11B6D9104",
    "end": "this.trigger('tourEnded')",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "class": "Panorama",
  "id": "panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 3896.36,
    "x": 1715.52,
    "angle": -191.39,
    "map": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430 1",
  "vfov": 180,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_tcap0",
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_A8751B32_8194_886B_41DC_2E37A703290B_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A6F6EE75_81B4_88EE_4192_9B8466C9181A, this.camera_D19C2D0D_DD6D_B80F_41E3_35738CDF5AC2); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "id": "overlay_A1FAF953_B90D_FA38_41D6_29013DD28338",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.43,
        "yaw": -160.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 61,
           "class": "ImageResourceLevel",
           "width": 71,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 39.4
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -160.52,
        "hfov": 7.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 123,
           "class": "ImageResourceLevel",
           "width": 143,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 39.4
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_D8E275AB_CBB7_DE83_41D3_AC215F2BB1DF",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 47.77,
        "yaw": -159.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 55,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_5_0_map.gif"
          }
         ]
        },
        "pitch": 11.5
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "- \u041e\u0421\u0422\u041e -"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -159.83,
        "hfov": 47.77,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 209,
           "class": "ImageResourceLevel",
           "width": 727,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_5_0.png"
          }
         ]
        },
        "pitch": 11.5
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':1,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':1,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':1,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_DEB7A4EC_CB4E_7E5A_41B9_23D29B7E6E94, null, null, null, null, false)"
       }
      ],
      "id": "overlay_DFF4E784_CB4E_FACA_41E5_6742608D5D13",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.5,
        "yaw": 158.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 69,
           "class": "ImageResourceLevel",
           "width": 63,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_6_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.01
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 158.47,
        "hfov": 8.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 138,
           "class": "ImageResourceLevel",
           "width": 127,
           "url": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_0_HS_6_0.png"
          }
         ]
        },
        "pitch": -6.01
       }
      ]
     },
     {
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "yaw": 158.47,
      "hideEasing": "cubic_out",
      "pitch": -6.01,
      "hfov": 6.47,
      "showDuration": 1000,
      "hideDuration": 1000,
      "showEasing": "cubic_in",
      "id": "popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D",
      "rotationX": 0,
      "popupMaxWidth": "100%",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1024,
         "class": "ImageResourceLevel",
         "width": 720,
         "url": "media/popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D_0_2.jpg"
        }
       ]
      },
      "rotationY": 0,
      "popupMaxHeight": "100%"
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -161.43,
   "pitch": 38.71
  }
 },
 {
  "class": "PlayList",
  "id": "playList_D2B09C13_DD6D_B81A_41E7_F520FDC70842",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA_camera",
    "media": "this.panorama_8B0A54AA_985F_8C60_41C4_02BFFDE7A6AA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D20B6C1B_DD6D_B80B_41C9_BCDE2928651A, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_D20B6C1B_DD6D_B80B_41C9_BCDE2928651A",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
 {
  "class": "PlayList",
  "id": "playList_D2357C17_DD6D_B81B_41D2_E214AA38FE2B",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_D2353C18_DD6D_B815_41E6_FEE2F613F413",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_A84F0741_B90A_F61A_41C9_27A3D7B204A8",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2117,
    "class": "ImageResourceLevel",
    "width": 1489,
    "url": "media/popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1440,
    "url": "media/popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 720,
    "url": "media/popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 360,
    "url": "media/popup_DF8C921E_CB4E_55F6_41D7_33523C530E2D_0_3.jpg"
   }
  ],
  "id": "ImageResource_DEB7A4EC_CB4E_7E5A_41B9_23D29B7E6E94"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D21F6C68_DD6D_B836_41E0_CAAE4B145E61",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -39.67,
   "pitch": 2.2
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D2EA8C71_DD6D_B816_41A8_1E40265BBFC5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 16.16,
   "pitch": -2.94
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D2E7BC79_DD6D_B816_41D1_01B592F3A957",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.67,
   "pitch": -20.57
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D2F45C81_DD6D_B8F6_41DF_BEC332CFCF40",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.29,
   "pitch": -2.94
  },
  "timeToIdle": 10000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D2C02C8A_DD6D_B80A_41CC_B3E6E14F4DF2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -11.76,
   "pitch": 2.2
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D2DEAC93_DD6D_B81B_41B6_DD2300F2CBFA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.84,
   "pitch": -6.61
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D2ACAC9B_DD6D_B80B_41E3_1E9C35F1CCAB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -38.2,
   "pitch": 2.94
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D2B97CA3_DD6D_B83A_41E3_904D51F94C06",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.43,
   "pitch": -0.73
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D1A1CCD9_DD6D_B817_41E3_D389708EB04E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -159.43,
   "pitch": 38.2
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D1A56CE2_DD6D_B835_41E6_7CC68D2A15BD",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.55,
   "pitch": -2.2
  },
  "timeToIdle": 10000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D1BBECEB_DD6D_B80B_41EB_2D0BB1131520",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -2.2,
   "pitch": 0
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D1B2FCF3_DD6D_B81B_41EA_DA20AF2F3999",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -38.94,
   "pitch": 0
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D1891CFC_DD6D_B80D_41D9_BCD13D311129",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D183FD05_DD6D_B9FF_41E0_E84EA2373C85",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 18.37,
   "pitch": -13.22
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D19C2D0D_DD6D_B80F_41E3_35738CDF5AC2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.29,
   "pitch": -23.51
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D1968D15_DD6D_B81F_41C7_38CC1C314FF5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 14.69,
   "pitch": -5.88
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D060CD1D_DD6D_B80F_41D8_D96472E34881",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 153.55,
   "pitch": -13.96
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D07AFD26_DD6D_B83D_41EA_6E1B24EF4A08",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.82,
   "pitch": -19.84
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D0733D2E_DD6D_B80D_41E8_2DBD207D78C3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.43,
   "pitch": -5.88
  },
  "timeToIdle": 10000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D04D4D36_DD6D_B81D_41C2_85D12937CEEA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 141.06,
   "pitch": -5.88
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D0472D40_DD6D_B875_41EA_300CFA235434",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -44.82,
   "pitch": 6.61
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D0510D48_DD6D_B875_41B4_5DC0D625B72D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 18.37,
   "pitch": 0
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D02B2D51_DD6D_B817_41D5_1DDE393E725A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.96,
   "pitch": 1.47
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D0268D59_DD6D_B817_41DD_6D31EA9C63B8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 44.82,
   "pitch": -8.08
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D03FAD61_DD6D_B837_41B2_C5CACCA428C4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.41,
   "pitch": -15.43
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D00AED68_DD6D_B835_41B6_74A463433B2B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.9,
   "pitch": 0.73
  },
  "timeToIdle": 10000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D0048D70_DD6D_B815_41E8_80378F24C82D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.1,
   "pitch": 2.94
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D01E1D78_DD6D_B815_41EA_D47F65B4C016",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -47.02,
   "pitch": -2.2
  },
  "timeToIdle": 3000
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D0E95D82_DD6D_B8F5_41D7_5BA0DB513429",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.43,
   "pitch": 3.67
  },
  "timeToIdle": 3000
 }
], "children": [
 {
  "class": "ViewerArea",
  "borderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarBorderSize": 2,
  "progressBorderRadius": 0,
  "borderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 4,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarBottom": 10,
  "shadow": false,
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 0,
  "progressBorderColor": "#AAAAAA",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "playbackBarOpacity": 1,
  "minHeight": 50,
  "paddingBottom": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontStyle": "normal",
  "playbackBarProgressOpacity": 1,
  "playbackBarHeight": 20,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "progressBackgroundOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "width": "100%",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "height": "100%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarLeft": 0,
  "paddingLeft": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "progressBottom": 0,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   1
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 20,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "top": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "transitionMode": "blending",
  "toolTipDisplayTime": 600,
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "progressBarBackgroundColor": [
   "#990000"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "progressBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderRadius": 3,
  "left": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "progressRight": 0,
  "toolTipTextShadowBlurRadius": 3
 },
 {
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "height": 142,
  "width": "100%",
  "paddingTop": 0,
  "gap": 10,
  "borderSize": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "verticalAlign": "middle",
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "shadow": false,
  "bottom": "0%",
  "id": "component_623707BC_7161_2E78_41BB_A46DF471E4F7",
  "data": {
   "name": "Container44746"
  },
  "backgroundOpacity": 0,
  "creationPolicy": "delayed",
  "paddingBottom": 0,
  "minHeight": 1,
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "contentOpaque": false,
  "overflow": "scroll"
 },
 {
  "class": "ViewerArea",
  "borderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarBorderSize": 2,
  "progressBorderRadius": 0,
  "borderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 4,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowColor": "#333333",
  "shadow": false,
  "toolTipFontSize": 12,
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBottom": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 0,
  "progressBorderColor": "#AAAAAA",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "minHeight": 1,
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "paddingBottom": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeight": 20,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "minWidth": 1,
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "width": "31.37%",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "height": "42.61%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarLeft": 0,
  "paddingLeft": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "progressBottom": 2,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   1
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 20,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "top": "0.06%",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipDisplayTime": 600,
  "transitionMode": "blending",
  "id": "MapViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "progressBarBackgroundColor": [
   "#990000"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "progressBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderRadius": 3,
  "right": "0%",
  "progressRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBorderColor": "#AAAAAA"
 },
 {
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "backgroundColorRatios": [
   0
  ],
  "minWidth": 0,
  "paddingTop": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "top": 0,
  "shadow": false,
  "visible": false,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent2115"
  },
  "bottom": 0,
  "backgroundOpacity": 0.55,
  "paddingBottom": 0,
  "minHeight": 0,
  "left": 0,
  "right": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  }
 },
 {
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [],
  "backgroundColorRatios": [],
  "minWidth": 0,
  "paddingTop": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "scaleMode": "custom",
  "top": 0,
  "shadow": false,
  "visible": false,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage2116"
  },
  "bottom": 0,
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "minHeight": 0,
  "left": 0,
  "right": 0
 },
 {
  "class": "CloseButton",
  "shadowColor": "#000000",
  "iconHeight": 20,
  "backgroundColorDirection": "vertical",
  "paddingRight": 5,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "minWidth": 0,
  "paddingTop": 5,
  "gap": 5,
  "fontSize": 12,
  "borderSize": 0,
  "paddingLeft": 5,
  "borderRadius": 0,
  "verticalAlign": "middle",
  "textDecoration": "none",
  "horizontalAlign": "center",
  "fontFamily": "Arial",
  "iconWidth": 20,
  "fontWeight": "normal",
  "fontStyle": "normal",
  "top": 10,
  "rollOverIconColor": "#666666",
  "cursor": "hand",
  "iconLineWidth": 5,
  "shadow": false,
  "visible": false,
  "id": "closeButtonPopupPanorama",
  "borderColor": "#000000",
  "fontColor": "#FFFFFF",
  "backgroundOpacity": 0.3,
  "shadowSpread": 1,
  "pressedIconColor": "#888888",
  "paddingBottom": 5,
  "label": "",
  "minHeight": 0,
  "shadowBlurRadius": 6,
  "iconBeforeLabel": true,
  "data": {
   "name": "CloseButton2117"
  },
  "right": 10,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "iconColor": "#000000",
  "layout": "horizontal"
 }
], 
 "class": "Player",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "paddingTop": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "height": "100%",
 "scrollBarWidth": 10,
 "width": "100%",
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "scripts": {
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getKey": function(key){  return window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "creationPolicy": "delayed",
 "layout": "absolute",
 "paddingBottom": 0,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_D2353C18_DD6D_B815_41E6_FEE2F613F413.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "overflow": "visible"
})