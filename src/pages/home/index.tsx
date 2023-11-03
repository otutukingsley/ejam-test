import React, { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';
import PageContainer from 'components/Container/Container';

import guranteeIcon from './assets/ejam-checkmark-starburst.svg';
import deliveryIcon from './assets/ejam-truck-light.svg';
import heartIcon from './assets/ejam-heart-outline.svg';
import checkMarkIcon from './assets/ejam-arrow-sync-checkmark.svg';
import arrowNext from './assets/ejam-arrow-right.svg';
import arrowPrev from './assets/ejam-arrow-left.svg';
import clarifonIcon from './assets/clarifon-logo.svg';
import notionIcon from './assets/notion-logo.svg';
import mcfeeIcon from './assets/mcfee-logo.svg';
import checkMark from './assets/check-mark.svg';
import clarifonChargerImg from './assets/clarifon-charger.png';
import clarifonCustomerImg from './assets/clarifon-customer-image.png';
import orderedProduct from './assets/ordered-product.png';
import verifiedIco from './assets/verified-ico.svg';
import stockIcon from './assets/stock-icon.svg';
import blueCheckMark from './assets/blue-check-mark.svg';
import percentIcon from './assets/percent-icon.svg';
import whiteArrowRight from './assets/white-arrow-right.svg';
import padLock from './assets/padlock.svg';
import visaIcon from './assets/visa.svg';
import amexIcon from './assets/amex.svg';
import mastercardIcon from './assets/mastercard.svg';
import applePayIcon from './assets/apple-pay.svg';
import opayIcon from './assets/opay.svg';
import googlepayIcon from './assets/google-pay.svg';
import paypalIcon from './assets/paypal.svg';
import orderGuranteeIcon from './assets/guarantee-icon.svg';

const ejamHeaderContent = [
  {
    id: 1,
    text: '30-day Satisfaction Guarantee',
    icon: guranteeIcon,
  },
  {
    id: 2,
    text: 'Free delivery on orders over $40.00',
    icon: deliveryIcon,
  },
  {
    id: 3,
    text: '50.000+ Happy Customers',
    icon: heartIcon,
  },
  {
    id: 4,
    text: '100% Money Back Guarantee',
    icon: checkMarkIcon,
  },
];

const customerReviews = [
  {
    id: 1,
    rating: 5,
    name: 'Ken T.',
    verified: true,
    comment:
      'As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.',
    image: clarifonCustomerImg,
  },
];

const reasons = [
  {
    id: 1,
    reason: 'Negative Ion Technology may <span>help with allergens</span> ',
  },
  {
    id: 2,
    reason: 'Designed for <span>air rejuvenation</span> ',
  },
  {
    id: 3,
    reason: '<span>Perfect for every room</span> in all types of places. ',
  },
];

const financeCards = [
  {
    id: 1,
    icon: visaIcon,
  },
  {
    id: 2,
    icon: opayIcon,
  },
  {
    id: 3,
    icon: paypalIcon,
  },
  {
    id: 4,
    icon: mastercardIcon,
  },
  {
    id: 5,
    icon: googlepayIcon,
  },
  {
    id: 6,
    icon: applePayIcon,
  },
  {
    id: 7,
    icon: amexIcon,
  },
];

const Home = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [ productRating ] = useState(5);

  const handleNextClick = useCallback(() => {
    const container = scrollContainerRef.current;
    container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
  }, []);

  const handlePrevClick = useCallback(() => {
    const container = scrollContainerRef.current;
    container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
  }, []);

  const indicators = [
    {
      id: 1,
      status: 'done',
      text: 'Cart Review',
    },
    {
      id: 2,
      status: 'done',
      text: 'Checkout',
    },
    {
      id: 3,
      status: 'ongoing',
      text: 'Special Offer',
    },
    {
      id: 4,
      status: 'pending',
      text: 'Confirmation',
    },
  ];

  return (
    <div className="app-wrapper">
      <header id="main-header">
        <div className="upper-header">
          <PageContainer>
            <div className="header-group-wrapper">
              <div className="header-group-content">
                <div className="header-group-main">
                  <div className="header-group-list" ref={ scrollContainerRef }>
                    <>
                      { ejamHeaderContent.map(item => (
                        <div key={ item.id } className="header-group-list-item">
                          <div className="header-group-list-item-item">
                            <Image
                              alt="icon-image"
                              src={ item.icon }
                              className="header-list-item-icon"
                            />
                            <div className="header-group-list-item-item-text">
                              { item.text }
                            </div>
                          </div>
                        </div>
                      )) }
                    </>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-group-btn-container">
              <button
                className="btn header-group--prev-btn btn-none"
                type="button"
                onClick={ () => handlePrevClick() }
              >
                <Image alt="icon-image" src={ arrowPrev } />
              </button>
              <button
                className="btn header-group--next-btn btn-none"
                type="button"
                onClick={ () => handleNextClick() }
              >
                <Image alt="icon-image" src={ arrowNext } />
              </button>
            </div>
          </PageContainer>
        </div>
        <div className="lower-header">
          <PageContainer>
            <div className="lower-header-wrapper">
              <Link href={ '/' } className="lower-header-clarifon-logo-link">
                <Image
                  alt="clarifon logo image"
                  src={ clarifonIcon }
                  className="clarifon-logo-static"
                />
              </Link>
              <div className="lower-header-partners-wrapper">
                <Link href={ '/' } className="lower-header-mcfee-logo-link">
                  <Image
                    alt="mcfee logo image"
                    src={ mcfeeIcon }
                    className="mcfee-logo-static"
                  />
                </Link>
                <Link href={ '/' } className="lower-header-notion-logo-link">
                  <Image
                    alt="notion logo image"
                    src={ notionIcon }
                    className="notion-logo-static"
                  />
                </Link>
              </div>
            </div>
          </PageContainer>
        </div>
      </header>

      <section className="order-progress">
        <PageContainer>
          <div className="order-progress-title-section">
            <h3 className="order-progress-title">
              Wait ! your order in progress.
            </h3>
            <p className="order-progress-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <div className="order-progress-indicators">
            <>
              { indicators.map(item => (
                <div key={ item.id } className="progress-indicator-content">
                  <div
                    className={ classnames('progress-indicator', {
                      'progress-green': item.status === 'done',
                      'progress-blue': item.status === 'ongoing',
                      'progress-outline-blue': item.status === 'pending',
                    }) }
                  >
                    { item.status === 'done' ? (
                      <Image
                        alt="done indicator"
                        src={ checkMark }
                        className="progress-done-indicator"
                      />
                    ) : (
                      <span className="progress-undone">{ item.id }</span>
                    ) }
                  </div>
                  <div
                    className={ classnames('order-progress-indicator-text', {
                      'progress-ongoing': item.status === 'ongoing',
                    }) }
                  >
                    <span className="progress-indicator-step">
                      Step { item.id }:{ ' ' }
                    </span>{ ' ' }
                    <span className="progress-indicator-text">{ item.text }</span>
                  </div>
                </div>
              )) }
            </>
          </div>
          <div className="ordered-product-container">
            <div className="ordered-product-grid">
              <div className="ordered-product-left-grid">
                <div className="order-product-left-grid-image-wrapper">
                  <Image
                    alt="clarifon ordered product image"
                    src={ clarifonChargerImg }
                    className="clarifon-ordered-product-static"
                  />
                </div>
                <ul className="order-product-left-grid-reviews-wrapper">
                  { customerReviews.map(review => (
                    <li key={ review.id } className="customer-review-card">
                      <div className="customer-review-details-wrapper">
                        <div className="customer-image-wrapper">
                          <Image
                            alt="customer image"
                            src={ review.image }
                            className="customer-image-static"
                          />
                        </div>

                        <div className="customer-review-details">
                          <ul className="review-rating">
                            { Array.from({ length: 5 }, (_, index) => (
                              <li key={ index }>
                                { index < review.rating ? '★' : '☆' }
                              </li>
                            )) }
                          </ul>
                          <div className="customer-review-name-verified">
                            <div className="customer-review-name">
                              { review.name }
                            </div>
                            { review.verified && (
                              <div className="verified-badge">
                                <span className="verified-badge-icon">
                                  <Image
                                    alt="verified batch"
                                    src={ verifiedIco }
                                    className="verified-image-static"
                                  />
                                </span>
                                <span className="verified-badge-text">
                                  Verified Customer
                                </span>
                              </div>
                            ) }
                          </div>
                        </div>
                      </div>
                      <div className="customer-review-comment">
                        &#34;{ review.comment }&#34;
                      </div>
                    </li>
                  )) }
                </ul>
              </div>
              <div className="ordered-product-right-grid">
                <div className="ordered-product-right-grid-title">
                  <span className="title-blue-text one-time">
                    one time only
                  </span>{ ' ' }
                  <span className="title-default-text">
                    special price for 6 extra Clarifion for only
                  </span>{ ' ' }
                  <span className="title-blue-text">$14 each</span>{ ' ' }
                  <span className="title-default-text">($84.00 total!)</span>
                </div>
                <div className="ordered-product-details-wrapper">
                  <div className="ordered-product-image-wrapper">
                    <Image
                      alt="ordered product"
                      src={ orderedProduct }
                      className="ordered-product-image-static"
                    />
                  </div>
                  <div className="ordered-product-details">
                    <div className="ordered-product-name-price">
                      <div className="ordered-product-name">
                        Clarifion Air Ionizer
                      </div>
                      <div className="ordered-product-price">
                        <span className="ordered-product-price strike-through">
                          $180
                        </span>
                        <span className="ordered-product-discount-price">
                          $84
                        </span>
                      </div>
                    </div>
                    <ul className="review-rating">
                      { Array.from({ length: 5 }, (_, index) => (
                        <li key={ index }>{ index < productRating ? '★' : '☆' }</li>
                      )) }
                    </ul>
                    <div className="ordered-product-in-stock">
                      <Image
                        alt="stock icon"
                        src={ stockIcon }
                        className="ordered-product-in-stock-static"
                      />
                      <span className="ordered-product-in-stock-text">
                        12 left in Stock
                      </span>
                    </div>
                    <div className="ordered-product-desc">
                      Simply plug a Clarifion into any standard outlet and
                      replace bulky, expensive air purifiers with a simple.
                    </div>
                  </div>
                </div>
                <ul className="ordered-product-reasons">
                  { reasons.map(reason => (
                    <li key={ reason.id } className="ordered-product-reason-item">
                      <Image
                        alt="ordered product reason check"
                        src={ blueCheckMark }
                        className="ordered-product-reason-static"
                      />
                      <div
                        dangerouslySetInnerHTML={ { __html: reason.reason } }
                        className="ordered-product-reason-text"
                      />
                    </li>
                  )) }
                </ul>
                <div className="ordered-product-discount-details">
                  <Image
                    alt="discount icon"
                    src={ percentIcon }
                    className="percent-icon-static"
                  />
                  <div className="ordered-product-discount-desc">
                    Save<span className="blue-text"> 53%</span> and get
                    <span className="blue-text"> 6 extra Clarifision</span> for
                    only
                    <span className="blue-text"> $14 Each</span>.
                  </div>
                </div>
                <div className="ordered-product-discount-claim">
                  <div className="ordered-product-discount-claim-cta">
                    <button className="btn btn-xl-green">
                      yes - claim my discount
                      <Image
                        alt="claim discount arrow right"
                        src={ whiteArrowRight }
                        className="claim-discount-static"
                      />
                    </button>
                    <div className="ordered-product-discount-claim-perks">
                      <div className="perks-free-shipping discount-claim-perks-text perks-free-item">
                        Free shipping
                      </div>
                      <div className="ssl-encryption perks-free-item">
                        <Image
                          alt="ssl icon"
                          src={ padLock }
                          className="ssl-icon-image-static"
                        />
                        <span className="discount-claim-perks-text">
                          Secure 256-bit SSL encryption
                        </span>
                      </div>
                      <ul className="perks-payment-methods-static perks-free-item">
                        { financeCards.map(financeCard => (
                          <li
                            key={ financeCard.id }
                            className="perks-payment-method-static-wrapper"
                          >
                            <Image
                              alt="finance card icon"
                              src={ financeCard.icon }
                              className="perks-payment-method-image-static"
                            />
                          </li>
                        )) }
                      </ul>
                    </div>
                  </div>
                  <div className="ordered-product-no-discount">
                    <Link href="/">No thanks, I don’t want this.</Link>
                  </div>
                </div>
                <div className="ordered-product-gurantee">
                  <div className="ordered-product-gurantee-static-wrapper">
                    <Image
                      alt="gurantee icon"
                      src={ orderGuranteeIcon }
                      className="ordered-product-gurantee-static"
                    />
                  </div>

                  <div className="ordered-product-gurantee-desc">
                    If you are not completely thrilled with your Clarifion - We
                    have a{ ' ' }
                    <span className="ordered-product-gurantee-desc-bold">
                      30 day satisfaction guarantee
                    </span>
                    . Please refer to our return policy at the bottom of the
                    page for more details. Happy Shopping!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <footer id="main-footer">
        <PageContainer>
          <div className="footer-wrapper">
            <div className="footer-copyright">
              <div className="footer-copyright-dated">Copyright (c) 2023</div>
              <div className="footer-copyright-email">
                chineduotutu3@gmail.com
              </div>
            </div>
            <div className="footer-ssl">
              <div className="ssl-encryption">
                <Image
                  alt="ssl icon"
                  src={ padLock }
                  className="ssl-icon-image-static"
                />
                <span className="discount-claim-perks-text">
                  Secure 256-bit SSL encryption
                </span>
              </div>
            </div>
          </div>
        </PageContainer>
      </footer>
    </div>
  );
};

export default Home;
