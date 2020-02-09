import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { css } from 'styled-components'

import Footer from '../components/Footer'
import './index.css'

const sizes = {
    giant: 1170,
    desktop: 992,
    tablet: 768,
    phone: 814
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
    return accumulator
}, {});

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
          title="Papahanaumokuakea"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div
          style={{
            margin: '0 auto',
            paddingTop: 0,
          }}
        >
              {children()}
        </div>
        {/*<Footer />*/}
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper