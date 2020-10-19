import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import {AmsterdamCoordinates, ZOOM} from "../../const.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = AmsterdamCoordinates;
    const zoom = ZOOM;
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    offers.forEach((item) => {
      const array = item.coordinates.split(`,`);
      leaflet.marker([array[0], array[1]], {icon}).addTo(map);
    });
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}


Map.propTypes = {
  offers: PropTypes.array.isRequired
};

export default Map;
