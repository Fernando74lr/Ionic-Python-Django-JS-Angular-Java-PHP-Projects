import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var mapboxgl: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterViewInit {

  lat: number;
  lng: number;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    let geo: any = this.route.snapshot.paramMap.get('geo');

    geo = geo.substring(4);
    geo = geo.split(',');

    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);
    
    console.log(this.lat, this.lng)
  }

  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmVybmFuZG83NGxyIiwiYSI6ImNrZ3NlZGRucDAwZnMycW4yeDgwNDZ6ZnoifQ.WBETnEn0ibpMNFksLJfHbA';
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-74.0066, 40.7135],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    map.on('load', function () {
      const layers = map.getStyle().layers;
       
      let labelLayerId;
      for (let i = 0; i < layers.length; i++) {
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
        
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 0.6
        }
      },
      labelLayerId
      );
    });
  }

}
