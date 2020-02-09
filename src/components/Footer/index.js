import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Copyright = styled.div`
text-align: center;
color: #fff;
font-weight: 600;
font-family: "Arial", Arial, sans-serif;
`;

const Footer = () => (
    <div>
        <Copyright>{('\u00A9')} Patrick Ching 2018</Copyright>
    </div>
);

export default Footer

