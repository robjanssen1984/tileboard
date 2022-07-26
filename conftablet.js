/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/

var CONFIG = {
   customTheme: CUSTOM_THEMES.TRANSPARENT, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 10,
   serverUrl: 'http://' + location.hostname + ':8000',
   wsUrl: 'ws://' + location.hostname + ':8000/api/websocket',
   authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   //mapboxToken: "XXXXXXXXXX", // Required if you are using Mapbox for device tracker
   debug: false, // Prints entities and state change info to the console.
   pingConnection: true, //ping connection to prevent silent disconnections
   locale: 'nl', // locale for date and number formats - available locales: it, de, es, fr, pt, ru, nl, pl, en-gb, en-us (default). See readme on adding custom locales.
   // next fields are optional
   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: true, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // HORIZONTALLY, VERTICALLY, GRID
   onReady: function () {},

header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         margin: '30px 130px 0px',
         fontSize: '26px'
      },
      right: [
         {
            type: HEADER_ITEMS.CUSTOM_HTML,
            html: ''
         },
         {
            type: HEADER_ITEMS.WEATHER,
            styles: {
               margin: '0'
            },
            icon: '&weather.huis.state',
            state: '',
            icons: {
               'clear-day': 'clear',
               'clear-night': 'nt-clear',
               'cloudy': 'cloudy',
               'exceptional': 'unknown',
               'fog': 'fog',
               'hail': 'sleet',
               'lightning': 'chancestorms',
               'lightning-rainy': 'tstorms',
               'partly-cloudy-day': 'partlycloudy',
               'partly-cloudy-night': 'nt-partlycloudy',
               'partlycloudy': 'partlycloudy',
               'pouring': 'rain',
               'snowy': 'snow',
               'snowy-rainy': 'sleet',
               'wind': 'unknown',
               'windy': 'unknown',
               'windy-variant': 'unknown'
            },
            
            fields: {
               temperature: '&weather.huis.attributes.temperature',
               temperatureUnit: ' °C',
            }
          }
      ],
      left: [
         {
            type: HEADER_ITEMS.CUSTOM_HTML,
            html: '<b><i></b></i>'
         },
         {
            type: HEADER_ITEMS.TIME,
            dateFormat: 'EEEE', //https://docs.angularjs.org/api/ng/filter/date
         },
      ]
   },

   screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 30, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
      slides: [
         { bg: 'images/image1.jpg' },
         {
            bg: 'images/image2.jpg',
            rightTop: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: '',
                  styles: { 
                            fontSize: '40px',
                            font: 'Verdana', 
                      
                  }
                  
               }
            ]
         },
         { bg: 'images/image3.jpg' },
         { bg: 'images/image4.jpg' },
      ]
   },

 pages: [
      {
         title: 'Hoofdpagina',
         bg: 'images/bg0.jpg',
         icon: 'mdi-home-outline', // home icon
         groups: [
            {
               title: '',
               width: 2,
               height: 2,
               row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
//tiles//

 {
                position: [1, 1],
                width: 1,
                id: 'media_player.woonkamer',
                type: TYPES.MEDIA_PLAYER,
                showSource: true,
                textSource: 'Sorgente',
                hideMuteButton: false,
                    //state: true,
                    //state: '@attributes.media_title',
                    input_select: '@attributes.source_list',
                    subtitle: '@attributes.media_title',
                    //bgSuffix: '@attributes.entity_picture',

                  },
                                    {
                     position: [0, 1],
                   id: 'camera.voordeur',
                   type: TYPES.CAMERA,
                   bgSize: 'cover',
                   width: 1,
                   state: true,
                   layout: {
                        type: TYPES.CAMERA_THUMBNAIL,
                        objFit: 'contain', 
                        id: 'camera.voordeur',
                        refresh: 1500,
                        bgSize: 'cover'
         },
             

                  },
                  
                  {
                     position: [0, 0],
                     width: 1,
                     type: TYPES.DEVICE_TRACKER,
                     map: 'yandex',
                     id: 'device_tracker.phone1', // using empty object for an unknown id
                      states: {
      			        home: "Thuis",
      			        not_home: "Afwezig",
      			        office: "Kantoor",
                     },
                        zoomLevels: [9, 13], // or [9] for only one map slide
                        bg: '@attributes.entity_picture', 
                        bgSuffix: '@attributes.entity_picture',
                        //hideEntityPicture: false, //hide entity pic, if you need only map
                        slidesDelay: 2 // delay before first slide animation
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     type: TYPES.DEVICE_TRACKER,
                     map: 'yandex',
                     id: 'device_tracker.phone2', // using empty object for an unknown id
                      states: {
      			        home: "Thuis",
      			        not_home: "Afwezig",
      			        office: "Kantoor",
                     },
                        zoomLevels: [9, 13], // or [9] for only one map slide
                        bg: '@attributes.entity_picture',
                        bgSuffix: '@attributes.entity_picture',
                        hideEntityPicture: false, //hide entity pic, if you need only map
                        slidesDelay: 2 // delay before first slide animation
                  },

                  {
                     position: [2, 0],
                     width: 1,
                     height: 1,
                     title: '',
                     subtitle: 'gas vandaag',
                     type: TYPES.GAUGE,
                     id: 'sensor.daily_gas', // Assign the sensor you want to display on the gauge
                     //id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 100, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'arch', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 2, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: '', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 1: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
                  
                                   {
                     position: [2, 1],
                     width: 1,
                     height: 1,
                     title: '',
                     subtitle: 'stroom vandaag',
                     type: TYPES.GAUGE,
                     id: 'sensor.daily_energy_delivered', // Assign the sensor you want to display on the gauge
                     //id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 100, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'arch', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 5, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: '', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 4: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
                  
                                  {
                        position: [3, 0],
                        width: 1,
                        title: '',
                        subtitle: 'Tafellamp',
                        id: 'light.voorkamer',
                        type: TYPES.LIGHT,
                            states: {
                                on: "Aan",
                        off: "Uit",
                        unavailable: "switch"
                                },
                    icons: {
                    on: "mdi-lightbulb-on",
                    off: "mdi-lightbulb",
                    unavailable: "mdi-lightbulb-off",}
                  },
                  {
                     position: [3, 1],
                     width: 1,
                      title: '',
                    subtitle: 'Keuken',
                    id: 'light.keukenlamp',
                    type: TYPES.LIGHT,
                        states: {
                        on: "Aan",
                        off: "Uit",
                        unavailable: "switch"
                                },
                    icons: {
                    on: "mdi-lightbulb-on",
                    off: "mdi-lightbulb",
                    unavailable: "mdi-lightbulb-off",}
                     
                  },
                        {
                     position: [4, 0],
                     width: 1,
                      title: '',
                    subtitle: 'Overloop',
                    id: 'light.hue_ambiance_spot_1',
                    type: TYPES.LIGHT,
                        states: {
                        on: "Aan",
                        off: "Uit",
                        unavailable: "switch"
                                },
                    icons: {
                    on: "mdi-lightbulb-on",
                    off: "mdi-lightbulb",
                    unavailable: "mdi-lightbulb-off",
                        
                    }
                     
                  },
                        {
                        position: [4, 1],
                        width: 1,
                        title: '',
                        subtitle: 'Tuin',
                        id: 'light.buitenlamp',
                        type: TYPES.LIGHT,
                            states: {
                                on: "Aan",
                                off: "Uit"
                                    },
                        icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",}
                  },

//tiles\\


                       ]
            },
/////////////////////////////////////////////////


//////////////////////MEDIA///////////////////////////


////////////////////////GROUP SENSOREN///////////////////
            


            
         ] //HOOFDPAGINA AFSLUITEN
         
         
         
      },
      
////////////////////////VOLGHENDE TABBLAD///////////////////      
      
      
      {
         title: 'Technisch',
         bg: 'images/bg0.jpg',
         icon: 'mdi-lightning-bolt-outline',
         groups: [
            {
               title: 'Verbruik vandaag',
               width: 2,
               height: 2,
               items: [
                  {
                     position: [0, 0],
                     width: 1,
                     height: 1,
                     title: '',
                     subtitle: 'gas',
                     type: TYPES.GAUGE,
                     id: 'sensor.daily_gas', // Assign the sensor you want to display on the gauge
                     //id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 100, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'arch', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 2, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: '', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 1: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },

                  {
                     position: [1, 0],
                     width: 1,
                     height: 1,
                     title: '',
                     subtitle: 'elektra',
                     type: TYPES.GAUGE,
                     id: 'sensor.daily_energy_delivered', // Assign the sensor you want to display on the gauge
                     //id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 100, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'arch', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 5, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: '', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 4: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
                  
                                              {
                     position: [0, 1],
                     width: 1,
                     height: 1,
                     title: '',
                     subtitle: 'Realtime',
                     type: TYPES.GAUGE,
                     id: 'sensor.dsmr_reading_electricity_currently_delivered', // Assign the sensor you want to display on the gauge
                     //id: {state: 11111}, // Remove after choosing to actual sensor ID
                     //value: function(item, entity) {
                     //   return entity.state;
                     //},
                     settings: {
                        size: 100, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'arch', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 2.5, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: '', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 2: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
                  
               ]
            },
///////////////////VOLGENDE KOLOM////////////////////            
            {
               title: 'Verbruik maand',
               width: 2,
               height: 2,
               // row: 1,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [

                  {
                     position: [0, 0],
                     width: 1,
                     height: 1,
                     title: '',
                     subtitle: 'gas',
                     type: TYPES.GAUGE,
                     id: 'sensor.monthly_gas', // Assign the sensor you want to display on the gauge
                     //id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 100, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'arch', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 140, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: '', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 130: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     height: 1,
                     title: '',
                     subtitle: 'elektra',
                     type: TYPES.GAUGE,
                     id: 'sensor.monthly_energy_delivered', // Assign the sensor you want to display on the gauge
                     //id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 100, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'arch', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 200, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: '', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 180: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                                },
                  },

                        ]
            },
            
              
              

            
         ]
      },
      
           {
         title: 'Verwarming',
         bg: 'images/bg0.jpg',
         icon: 'mdi-radiator',
         groups: [
           
            {
               title: '',
               width: 2,
               height: 2,
               // row: 1,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [

             {
                 position: [0, 0],
                 width: 1,
                 height: 1,
                 type: TYPES.CLIMATE,
                 unit: 'C',
                 id: 'climate.thermostaat_woonkamer',
                 state: function (item, entity) {
                    return 'lucht '
                       + entity.attributes.current_humidity; 
                 }
              },
              
                           {
                 position: [1, 0],
                 width: 1,
                 height: 1,
                 type: TYPES.CLIMATE,
                 unit: 'C',
                 id: 'climate.boven_leo',
                 state: function (item, entity) {
                    return 'lucht '
                       + entity.attributes.current_humidity; 
                 }
              },
              
            {
                 position: [0, 1],
                 width: 1,
                 height: 1,
                 type: TYPES.CLIMATE,
                 unit: 'C',
                 id: 'climate.woonkamer_voor',
                 state: function (item, entity) {
                    return 'lucht '
                       + entity.attributes.current_humidity; 
                 }
              },
              
                          {
                 position: [1, 1],
                 width: 1,
                 height: 1,
                 subtitle: '',
                 type: TYPES.CLIMATE,
                 unit: 'C',
                 id: 'climate.zolder_kantoor',
                 state: function (item, entity) {
                    return 'lucht '
                       + entity.attributes.current_humidity;
                 }
              },
              
                                        {
                 position: [2, 0],
                 width: 1,
                 height: 1,
                 subtitle: '',
                 type: TYPES.CLIMATE,
                 unit: 'C',
                 id: 'climate.boven_master',
                 state: function (item, entity) {
                    return 'lucht '
                       + entity.attributes.current_humidity;
                 }
              },
              
              {
                 position: [2, 1],
                 width: 1,
                 height: 1,
                 subtitle: '',
                 type: TYPES.CLIMATE,
                 unit: 'C',
                 id: 'climate.boven_misha',
                 state: function (item, entity) {
                    return 'lucht '
                       + entity.attributes.current_humidity;
												}
              },
              
              
            
                        ]
            },
            
         ]
      }, 
	  
	             {
         title: 'lampen',
         bg: 'images/bg0.jpg',
         icon: 'mdi-lightbulb',
         groups: [
           
            {
               title: '',
               width: 2,
               height: 2,
               // row: 1,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                   
                    {
                        position: [0,0],
                        width: 1,
                        title: '',
                        subtitle: 'Toilet',
                        id: 'light.wc',
                        type: TYPES.LIGHT,
                            states: {
                                on: "Aan",
                                off: "Uit"
                                    },
                        icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",}
                  },
                  
                                      {
                        position: [0, 1],
                        width: 1,
                        title: '',
                        subtitle: 'Tuin',
                        id: 'light.buitenlamp',
                        type: TYPES.LIGHT,
                            states: {
                                on: "Aan",
                                off: "Uit"
                                    },
                        icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",}
                  },
                            

                {
                        position: [1, 0],
                        width: 1,
                        title: '',
                        subtitle: 'Tafellamp',
                        id: 'light.voorkamer',
                        type: TYPES.LIGHT,
                            states: {
                                on: "Aan",
                        off: "Uit",
                        unavailable: "switch"
                                },
                    icons: {
                    on: "mdi-lightbulb-on",
                    off: "mdi-lightbulb",
                    unavailable: "mdi-lightbulb-off",}
                  },
                  {
                     position: [1, 1],
                     width: 1,
                      title: '',
                    subtitle: 'Keuken',
                    id: 'light.keukenlamp',
                    type: TYPES.LIGHT,
                        states: {
                        on: "Aan",
                        off: "Uit",
                        unavailable: "switch"
                                },
                    icons: {
                    on: "mdi-lightbulb-on",
                    off: "mdi-lightbulb",
                    unavailable: "mdi-lightbulb-off",}
                     
                  },
                  {
                     position: [3, 1],
                     width: 1,
                      title: '',
                    subtitle: 'Badkamer',
                    id: 'light.hal',
                    type: TYPES.LIGHT,
                        states: {
                        on: "Aan",
                        off: "Uit",
                        unavailable: "switch"
                                },
                    icons: {
                    on: "mdi-lightbulb-on",
                    off: "mdi-lightbulb",
                    unavailable: "mdi-lightbulb-off",
                        
                    }
                     
                  },
                                    {
                     position: [2, 0],
                     width: 1,
                      title: 'Rob',
                    subtitle: 'Nachtlamp',
                    id: 'light.rob',
                    type: TYPES.LIGHT,
                        states: {
                        on: "Aan",
                        off: "Uit",
                        unavailable: "switch"
                                },
                    icons: {
                    on: "mdi-lightbulb-on",
                    off: "mdi-lightbulb",
                    unavailable: "mdi-lightbulb-off"
                        
                    }
                     
                  },
                  {
                     position: [2, 1],
                     width: 1,
                      title: 'Zsuzsi',
                    subtitle: 'Nachtlamp',
                    id: 'light.zsuzsi',
                    type: TYPES.LIGHT,
                        states: {
                        on: "Aan",
                        off: "Uit",
                        unavailable: "switch"
                                },
                    icons: {
                    on: "mdi-lightbulb-on",
                    off: "mdi-lightbulb",
                    unavailable: "mdi-lightbulb-off",
                        
                    }
                     
                  },
                                    {
                     position: [3, 0],
                     width: 1,
                      title: '',
                    subtitle: 'Overloop',
                    id: 'light.hue_ambiance_spot_1',
                    type: TYPES.LIGHT,
                        states: {
                        on: "Aan",
                        off: "Uit",
                        unavailable: "switch"
                                },
                    icons: {
                    on: "mdi-lightbulb-on",
                    off: "mdi-lightbulb",
                    unavailable: "mdi-lightbulb-off",
                        
                    }
                     
                  },
        
         ]
            },
            
         ]
      } 
      
      
   ],
}
