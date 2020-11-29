import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {postReview} from "../../store/api-actions";

import {connect} from "react-redux";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``,
        formValidation: false,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.postReviewAction = this.postReviewAction.bind(this);
    }

    validateForm() {
      const isValid = (this.state.review.length > 50 && this.state.review.length < 300) && this.state.rating;

      this.setState({
        formValidation: isValid,
      });
    }

    handleSubmit(evt) {
      evt.preventDefault();

      this.postReviewAction(this.state, this.props.id);

      this.setState({
        rating: ``,
        review: ``,
        formValidation: false,
      });
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;

      this.setState({[name]: value},
          () => {
            this.validateForm();
          });
    }

    render() {

      return (
        <Component
          {...this.props}
          onSubmitAction={this.handleSubmit}
          onHandleFieldChange={this.handleFieldChange}
        >
        </Component>
      );
    }
  }

  WithReviewForm.propTypes = {
    // onHandleFieldChange: PropTypes.func.isRequired,

    postReviewAction: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };

  return WithReviewForm;
};

const mapDispatchToProps = (dispatch) => ({
  postReviewAction(data, id) {
    dispatch(postReview(data, id));
  }
});

export {withReviewForm};
export default connect(null, mapDispatchToProps)(withReviewForm);

// export default withReviewForm;
