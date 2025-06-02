import { Component } from '@angular/core';
import { Popup } from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
  zoom = 12;

  showPopup(map, event) {
    const popup = new Popup()
      .setLngLat([this.lng, this.lat])
      .setHTML('<h1>Marcador</h1>')
      .addTo(map);
  }
}