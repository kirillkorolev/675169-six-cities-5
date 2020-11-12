import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState({
        isActive: !this.state.isActive,
      });
    }

    render() {
      const {isActive} = this.state;

      return (
        <Component
          {...this.props}
          isActive={isActive}
          onHandleClick={this.handleClick}
        >

        </Component>
      );
    }
  }

  withActiveItem.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onHandleClick: PropTypes.func.isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;
