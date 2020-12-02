import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {postReview} from "../../store/api-actions";

import {connect} from "react-redux";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: `0`,
        review: ``,
        formValidation: false,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.postReviewAction = this.props.postReviewAction.bind(this);
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

      this.setState(() => {

        return (
          {
            rating: ``,
            review: ``,
            formValidation: false,
          }
        );
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

          rating={this.state.rating}
          review={this.state.review}
        >
        </Component>
      );
    }
  }

  WithReviewForm.propTypes = {
    id: PropTypes.number.isRequired,
    postReviewAction: PropTypes.func.isRequired,
  };


  const mapDispatchToProps = (dispatch) => ({
    postReviewAction(data, id) {
      dispatch(postReview(data, id));
    }
  });


  return connect(null, mapDispatchToProps)(WithReviewForm);
};


export default withReviewForm;
