import React from 'react';
import { translate } from 'react-i18next';

import * as deps from '../../deps';

import caroussel from '../../assets/caroussel.png';
import pro from '../../assets/pro.png';
import starter from '../../assets/starter.png';

const ComingSoon = () => (
  <div className="colums">
    <div className="column is-5 is-12-mobile is-half-tablet is-paddingless">
      <article className="message is-primary">
        <div className="message-header">
          <p>Coming soon</p>
        </div>
        <div className="message-body">
          Themes are under development, we will notify you upon release.
        </div>
      </article>
    </div>
  </div>
);

let Content = ({ t }) => (
  <div className="columns is-multiline">
    <div className="column is-5 is-12-mobile is-half-tablet">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-3">
              <img src={starter} alt="starter icon" />
            </div>
            <div className="column is-9">
              <div className="content">
                <h2>Starter theme</h2>
                <p>{t('starter-theme-description')}</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <span className=" card-footer-item">
            <strong>
              <small>
                <span style={{ color: '#27ae60' }}>Active</span>
              </small>
            </strong>
          </span>
        </footer>
      </div>
    </div>
    <div className="column is-5 is-12-mobile is-half-tablet">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-3">
              <img src={pro} alt="pro icon" />
            </div>
            <div className="column is-9">
              <div className="content">
                <h2>Pro theme</h2>
                <p>{t('pro-theme-description')}</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            className="card-footer-item"
            href="https://www.worona.org/starter-pro-theme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-small">
              <i className="fa fa-info-circle" />
            </span>
            &nbsp;&nbsp;Info
          </a>
          {/* <a
            className="card-footer-item"
            href="https://shop.worona.org/starter-pro-checkout"
            rel="noopener noreferrer"
          >
            <span className="icon is-small" >
              <i className="fa fa-shopping-cart" />
            </span>
            &nbsp;&nbsp;<span style={{ fontWeight: '600' }} >BUY NOW</span>
          </a> */}
        </footer>
      </div>
    </div>
    <div className="column is-5 is-12-mobile is-half-tablet">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-3">
              <img src={caroussel} alt="caroussel icon" />
            </div>
            <div className="column is-9">
              <div className="content">
                <h2>Caroussel theme</h2>
                <p>{t('caroussel-theme-description')}</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <span className=" card-footer-item">
            <strong>
              <small>Coming soon</small>
            </strong>
          </span>
        </footer>
      </div>
    </div>
  </div>
);

Content = translate('themesManager')(Content);

export default () => {
  const RootContainer = deps.elements.RootContainer;
  return (
    <RootContainer>
      <h1 className="title">Choose theme</h1>
      <hr />
      <Content />
    </RootContainer>
  );
};
