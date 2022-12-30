import React, { Component } from 'react';
import './styles.css';

import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import ProductItem from "../../containers/ProductItem"
import Loader from '../../containers/ProductItem/ItemLoader';
import ContentLoader from "react-content-loader"
// @Actions
import ProductsActions from "../../redux/actions/products";
import AdActions from "../../redux/actions/ad";

class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0,
      animating: false
    }
  }

  componentDidMount(){
    const {onGetBestSeller, onGetFavorite, onGetNewest, onGetListAd} = this.props;
    document.title = "[ApumStore] Trang bán hàng"
    onGetListAd({active: 1});
    onGetBestSeller();
    onGetFavorite();
    onGetNewest();
  }
  next = () => {
    const {activeIndex, animating} = this.state;
    const {listAd} = this.props;
    if (animating) return;
    const nextIndex = activeIndex === listAd.length - 1 ? 0 : activeIndex + 1;
    this.setState({activeIndex : nextIndex});
  }

  previous = () => {
    const {animating, activeIndex} = this.state;
    const {listAd} = this.props;
    if (animating) return;
    const nextIndex = activeIndex === 0 ? listAd.length - 1 : activeIndex - 1;
    this.setState({activeIndex : nextIndex});
  }

  goToIndex = (newIndex) => {
    const {animating} = this.state
    if (animating) return;
    this.setState({activeIndex : newIndex});
  }

  render() {
    const {activeIndex} = this.state;
    const { t, bestSeller, newest, favorite, listAd } = this.props;
    
    return (<>
      <div className="promo-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
          <div className="col-md-3 col-sm-6 d-none d-md-block align-self-center">
               
      <div className="w-100 h-100 position-absolute top-0 start-0 text-white  d-flex justify-content-center align-items-center flex-column">
        <div className="px-4 py-5 card bg-opacity-10 text-center" style={{backgroundColor:'rgb(103 152 215)'}}>
          <div className="fw-bolder fs-1">
             Apum Store
          </div>
          {t('cart.slug')}
             <Link className="button"to="/promotion">
            <button > {t('cart.slug1')}
            
        <svg className="button__svg" role="presentational" viewBox="0 0 600 600">
          <defs>
            <clipPath id="myClip">
              <rect x={0} y={0} width="100%" height="50%" />
            </clipPath>
          </defs>
          <g clipPath="url(#myClip)">
            <g id="money">
              <path d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z" fill="#699e64" stroke="#323c44" strokeMiterlimit={10} strokeWidth={14} />
              <path d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z" fill="#699e64" stroke="#323c44" strokeMiterlimit={10} strokeWidth={14} />
            </g>
            <g id="creditcard">
              <path d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z" fill="#a76fe2" stroke="#323c44" strokeMiterlimit={10} strokeWidth={14} />
              <path d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z" fill="#ffdc67" />
              <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
            </g>
          </g>
          <g id="wallet">
            <path d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z" fill="#a4bdc1" stroke="#323c44" strokeMiterlimit={10} strokeWidth={14} />
            <path d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z" fill="#a4bdc1" stroke="#323c44" strokeMiterlimit={10} strokeWidth={14} />
            <path d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z" fill="#a4bdc1" stroke="#323c44" strokeMiterlimit={10} strokeWidth={14} />
            <path d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z" fill="#7b8f91" />
            <path d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z" fill="#323c44" />
          </g>
        </svg>
      </button>
      </Link>
         </div>
         
        </div>
            </div>
            {/* <div className="col-md-3 col-sm-6 d-none d-md-block align-self-center">
              <div className="single-promo promo1 my-1 rounded">
                <i className="fa fa-sync-alt"></i>
                <p>{t('home.feature.1')}</p>
              </div>
              <div className="single-promo promo2 my-1 rounded">
                <i className="fa fa-truck"></i>
                <p>{t('cart.free-ship')}</p>
              </div>
            </div> */}
            {listAd ? <div className="col-12 col-md-6 align-self-center">
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                style
              >
                <CarouselIndicators items={listAd} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {listAd.map((item) => {
                  return (
                      <CarouselItem
                        onExiting={() => this.setState({animating: true})}
                        onExited={() => this.setState({animating: false})}
                        key={item._id}
                      >
                        <Link to={item.link.replace("https://localhost:5000/#", "")}>
                        <img src={item.image.public_url} alt={item.name} />
                        </Link>
                        
                      </CarouselItem>
                    
                  );
                })}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            </div> : <div className="col-12 col-md-6 align-self-center"><ContentLoader 
                speed={0}
                width="100%"
                height={276}
                viewBox="0 0 636 276"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="3" y="3" rx="12" ry="12" width="636" height="276" />
              </ContentLoader></div>}
            <div className="col-md-3 col-sm-6 d-none d-md-block align-self-center">
            <div className="single-promo promo2 my-1 rounded">
                <i className="fa fa-truck"></i>
                <p>{t('cart.free-ship')}</p>
              </div>
              <div className="single-promo promo1 my-1 rounded">
                <i className="fa fa-sync-alt"></i>
                <p>{t('home.feature.3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maincontent-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <div className="latest-product">
                <h2 className="text-center">{t('home.list.best')}</h2>
                <div className="shadow p-3 mb-5 bg-white rounded">
                  <div className="row">
                    {bestSeller ? bestSeller.map((product, index) => {
                      return (
                          <ProductItem product={product._id} key={index} />
                        )
                    }) : <Loader/>}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="latest-product">
                <h2 className="text-center">{t('home.list.new')}</h2>
                <div className="shadow p-3 mb-5 bg-white rounded">
                  <div className="row">
                    {newest ? newest.map((product, index) => {
                      return (
                          <ProductItem product={product} key={index} />
                        )
                    }) : <Loader/>}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="latest-product">
                <h2 className="text-center">{t('home.list.favorite')}</h2>
                <div className="shadow p-3 mb-5 bg-white rounded">
                  <div className="row">
                    {favorite ? favorite.map((product, index) => {
                      return (
                          <ProductItem product={product} key={index} />
                        )
                    }) : <Loader/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    bestSeller: state.products.best,
    favorite: state.products.favorite,
    newest: state.products.new,
    listAd: state.ad.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBestSeller: () => {
      dispatch(ProductsActions.onGetBestSeller());
    },
    onGetFavorite: () => {
      dispatch(ProductsActions.onGetFavorite());
    },
    onGetNewest: () => {
      dispatch(ProductsActions.onGetNewest());
    },
    onGetListAd: (params) => {
      dispatch(AdActions.onGetList(params));
    },
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect,
  withTranslation()
)(HomePage);