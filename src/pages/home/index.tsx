import React, { useCallback, useRef } from 'react';
import PageContainer from 'components/Container/Container';
import Image from 'next/image';

import guranteeIcon from './assets/ejam-checkmark-starburst.svg';
import deliveryIcon from './assets/ejam-truck-light.svg';
import heartIcon from './assets/ejam-heart-outline.svg';
import checkMarkIcon from './assets/ejam-arrow-sync-checkmark.svg';
import arrowNext from './assets/ejam-arrow-right.svg';
import arrowPrev from './assets/ejam-arrow-left.svg';

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

  return (
    <div className="app-wrapper">
      <header id="main-header">
        <PageContainer>
          <div className="header-group-wrapper">
            <div className="header-group-content">
              <div className="header-group-main">
                <div className="header-group-list" ref={ scrollContainerRef }>
                  <>
                    { ejamHeaderContent.map(item => (
                      <div key={ item.id } className="header-group-list-item">
                        <div className="header-group-list-item-item">
                          <Image alt="icon-image" src={ item.icon } />
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
              className="btn header-group--prev-btn header-group--btn"
              type="button"
              onClick={ () => handlePrevClick() }
            >
              <Image alt="icon-image" src={ arrowPrev } />
            </button>
            <button
              className="btn header-group--next-btn header-group--btn"
              type="button"
              onClick={ () => handleNextClick() }
            >
              <Image alt="icon-image" src={ arrowNext } />
            </button>
          </div>
        </PageContainer>
      </header>
    </div>
  );
};

export default Home;
