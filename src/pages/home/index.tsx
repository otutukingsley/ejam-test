import React, { useCallback, useRef } from 'react';
import PageContainer from 'components/Container/Container';
import Image from 'next/image';
import classnames from 'classnames';
import Link from 'next/link';

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

const Home = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

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
                    Step { item.id }: { item.text }
                  </div>
                </div>
              )) }
            </>
          </div>
        </PageContainer>
      </section>
    </div>
  );
};

export default Home;
