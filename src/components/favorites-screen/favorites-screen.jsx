import React, {PureComponent} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import FavoritesEmpty from "../favorites-empty/favorites-empty";

import FavoritesList from "../favorites-list/favorites-list";

import {fetchFavoriteList} from "../../store/api-actions";
import {getFavorite} from "../../store/reducers/offers-data/selectors";

import {connect} from "react-redux";

import PropTypes from "prop-types";

import {getUniqueCitiesList} from "../../utils";

class FavoritesScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadFavoriteAction();
  }

  render() {
    const {favorite} = this.props;

    const uniqueCities = getUniqueCitiesList(favorite);

    return (
      <div className={`page ${favorite.length === 0 ? `page--favorites-empty` : ``}`}>
        <Header/>
        <main
          className={`page__main page__main--favorites ${favorite.length === 0 ? `page__main--favorites-empty` : ``}`}
        >
          <div className="page__favorites-container container">

            {favorite.length === 0 ?
              <FavoritesEmpty /> :

              <FavoritesList offers={favorite} cityNames={uniqueCities}/>

            }
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}


FavoritesScreen.propTypes = {
  favorite: PropTypes.array.isRequired,
  loadFavoriteAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favorite: getFavorite(state),

});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteAction() {
    dispatch(fetchFavoriteList());
  },
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);

