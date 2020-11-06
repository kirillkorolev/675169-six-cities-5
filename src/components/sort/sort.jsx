import React from "react";
import PropTypes from "prop-types";

import {types} from "../../const";

class Sort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.sortOffers = this.props.sortOffers;

    this.state = {
      opened: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.sortOffers = this.sortOffers.bind(this);
  }

  handleClick() {
    this.setState({
      opened: !this.state.opened,
    });
  }


  render() {
    const {filter} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0"
          onClick = {this.handleClick}
        >
          {filter}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.opened === true ? `places__options--opened` : ``}`}>
          {Object.values(types).map((item, i) => (
            <li className={`places__option ${item === filter ? `places__option--active` : ``}`} key={item + i} tabIndex="0"
              onClick = {() => {
                this.sortOffers(item);
                this.handleClick();
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

Sort.propTypes = {
  sortOffers: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Sort;
