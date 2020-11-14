import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        raiting: ``,
        text: ``,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          onSubmit={this.handleSubmit}
          onHandleFieldChange={this.handleFieldChange}
        >
        </Component>
      );
    }
  }

  WithReviewForm.PropTypes = {
    onHandleFieldChange: PropTypes.func.isRequired,
  };

  return WithReviewForm;
};

export default withReviewForm;
