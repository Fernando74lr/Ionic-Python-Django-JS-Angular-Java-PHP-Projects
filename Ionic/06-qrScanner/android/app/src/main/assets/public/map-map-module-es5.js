(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"], {
    /***/
    "862v":
    /*!*****************************************!*\
      !*** ./src/app/pages/map/map.module.ts ***!
      \*****************************************/

    /*! exports provided: MapPageModule */

    /***/
    function v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPageModule", function () {
        return MapPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./map-routing.module */
      "oLE7");
      /* harmony import */


      var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./map.page */
      "YKfG");

      var MapPageModule = function MapPageModule() {
        _classCallCheck(this, MapPageModule);
      };

      MapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
      })], MapPageModule);
      /***/
    },

    /***/
    "E/o+":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function EO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n  <div id='map'></div>\r\n\r\n  <ion-back-button defaultHref=\"/tabs/tab2\"\r\n                   text=\" \"\r\n                   class=\"back-button\"\r\n                   icon=\"close-circle\"></ion-back-button>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "YKfG":
    /*!***************************************!*\
      !*** ./src/app/pages/map/map.page.ts ***!
      \***************************************/

    /*! exports provided: MapPage */

    /***/
    function YKfG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPage", function () {
        return MapPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./map.page.html */
      "E/o+");
      /* harmony import */


      var _map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./map.page.scss */
      "uob5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var MapPage = /*#__PURE__*/function () {
        function MapPage(route) {
          _classCallCheck(this, MapPage);

          this.route = route;
        }

        _createClass(MapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var geo = this.route.snapshot.paramMap.get('geo');
            geo = geo.substring(4);
            geo = geo.split(',');
            this.lat = Number(geo[0]);
            this.lng = Number(geo[1]);
            console.log(this.lat, this.lng);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            mapboxgl.accessToken = 'pk.eyJ1IjoiZmVybmFuZG83NGxyIiwiYSI6ImNrZ3NlZGRucDAwZnMycW4yeDgwNDZ6ZnoifQ.WBETnEn0ibpMNFksLJfHbA';
            var map = new mapboxgl.Map({
              style: 'mapbox://styles/mapbox/light-v10',
              center: [this.lng, this.lat],
              zoom: 15.5,
              pitch: 45,
              bearing: -17.6,
              container: 'map',
              antialias: true
            });
            map.on('load', function () {
              // Resize Map to the container dimentions
              map.resize(); // Default MarkerEdificio Empire State

              var marker = new mapboxgl.Marker().setLngLat([_this.lng, _this.lat]).addTo(map);
              var layers = map.getStyle().layers;
              var labelLayerId;

              for (var i = 0; i < layers.length; i++) {
                if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                  labelLayerId = layers[i].id;
                  break;
                }
              }

              map.addLayer({
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                  'fill-extrusion-color': '#aaa',
                  'fill-extrusion-height': ['interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'height']],
                  'fill-extrusion-base': ['interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'min_height']],
                  'fill-extrusion-opacity': 0.6
                }
              }, labelLayerId);
            });
          }
        }]);

        return MapPage;
      }();

      MapPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      MapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map',
        template: _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MapPage);
      /***/
    },

    /***/
    "oLE7":
    /*!*************************************************!*\
      !*** ./src/app/pages/map/map-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: MapPageRoutingModule */

    /***/
    function oLE7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
        return MapPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./map.page */
      "YKfG");

      var routes = [{
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
      }];

      var MapPageRoutingModule = function MapPageRoutingModule() {
        _classCallCheck(this, MapPageRoutingModule);
      };

      MapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MapPageRoutingModule);
      /***/
    },

    /***/
    "uob5":
    /*!*****************************************!*\
      !*** ./src/app/pages/map/map.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function uob5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100% !important;\n  height: 100% !important;\n  background-color: #f6f6f4;\n}\n\n.back-button {\n  position: fixed;\n  top: 20px;\n  right: 3px;\n  font: 23px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXAvbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jbWFwIHtcclxuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY0O1xyXG59XHJcblxyXG4uYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDNweDtcclxuICAgIGZvbnQ6IDIzcHghaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=map-map-module-es5.js.map