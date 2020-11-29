import React, {PureComponent} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import FavoritesEmpty from "../favorites-empty/favorites-empty";

import FavoritesList from "../favorites-list/favorites-list";

import {fetchFavoriteList} from "../../store/api-actions";
import {getFavorite} from "../../store/reducers/offers-data/selectors";

import {connect} from "react-redux";

import PropTypes from "prop-types";

import getUniqueCitiesList from "../../utils";

class FavoritesScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadFavoriteAction();
  }

  render() {
    const {favorite, favoriteCityNames} = this.props;

    return (
      <div className="page">
        <Header/>
        <main
          className={`page__main page__main--favorites ${favorite.length === 0 ? `page__main--favorites-empty` : ``}`}
        >
          <div className="page__favorites-container container">
            {favorite.length === 0 ?
              <FavoritesEmpty/> :

              <FavoritesList offers={favorite} cityNames={favoriteCityNames}/>

              // <section className="favorites">
              //   <h1 className="favorites__title">Saved listing</h1>
              //   <ul className="favorites__list">
              //     {favorite.map((offer) => (
              //       <FavoritesItem key={offer.id}/>
              //     ))}
              //   </ul>
              // </section>
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
  favoriteCityNames: PropTypes.array.isRequired,

  loadFavoriteAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favorite: getFavorite(state),
  favoriteCityNames: getUniqueCitiesList(state.favorite),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteAction(id) {
    dispatch(fetchFavoriteList(id));
  },
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);

// export default FavoritesScreen;
