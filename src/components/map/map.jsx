import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
// import {amsterdamCoordinates, ZOOM} from "../../const.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  _create() {
    const {offers} = this.props;
    const {city} = offers[0];

    const {hoveredId} = this.props;

    const zoom = city.location.zoom;
    const coordinates = [city.location.latitude, city.location.longitude];


    const icon = leaflet.icon({
      iconUrl: `../img/pin.svg`,
      iconSize: [30, 30]
    });

    const brightIcon = leaflet.icon({
      iconUrl: `../img/pin-active.svg`,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(`map`, {
      center: coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(coordinates, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    offers.forEach((item) => {
      const array = item.coordinates.split(`,`);

      if (item.id === hoveredId) {
        leaflet.marker([array[0], array[1]], {brightIcon}).addTo(this.map);
      } else {
        leaflet.marker([array[0], array[1]], {icon}).addTo(this.map);
      }
    });
  }

  componentDidMount() {
    this._create();
  }

  componentDidUpdate() {
    this.map.remove();
    this._create();
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}


Map.propTypes = {
  offers: PropTypes.array.isRequired,
  hoveredId: PropTypes.number.isRequired,
};

export default Map;
