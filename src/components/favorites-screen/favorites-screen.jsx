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
    const {favorites} = this.props;

    const uniqueCities = getUniqueCitiesList(favorites);

    return (
      <div className={`page ${favorites.length === 0 ? `page--favorites-empty` : ``}`}>
        <Header/>
        <main
          className={`page__main page__main--favorites ${favorites.length === 0 ? `page__main--favorites-empty` : ``}`}
        >
          <div className="page__favorites-container container">

            {favorites.length === 0 ?
              <FavoritesEmpty /> :

              <FavoritesList offers={favorites} cityNames={uniqueCities}/>
            }
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}


FavoritesScreen.propTypes = {
  favorites: PropTypes.array.isRequired,
  loadFavoriteAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favorites: getFavorite(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteAction() {
    dispatch(fetchFavoriteList());
  },
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);

