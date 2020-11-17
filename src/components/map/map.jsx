import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  _create() {
    const {offers, hoveredId} = this.props;
    const {cityLatitude, cityLongitude, cityZoom} = offers[0];

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const brightIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(`map`, {
      center: [cityLatitude, cityLongitude],
      zoom: cityZoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView([cityLatitude, cityLongitude], cityZoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    offers.forEach((item) => {

      if (item.id === hoveredId) {
        leaflet.marker([item.offerLatitude, item.offerLongitude], {brightIcon}).addTo(this.map);
      } else {
        leaflet.marker([item.offerLatitude, item.offerLongitude], {icon}).addTo(this.map);
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
