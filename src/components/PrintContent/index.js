import React from 'react';
// import "https://platform-api.sharethis.com/js/sharethis.js#property=620d29ac7f089d001d3ec76a&product=inline-reaction-buttons"
import "../social.js"

// import Layout from '@theme/Layout';
// import styles from '../pages/introduction.css'
// import './courses.module.css' // if needed then

// import Link from '@docusaurus/Link';

function socialShare() {
    // function printContent() {
    //     window.print()
    // }
    return (
        <>
<script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=620d29ac7f089d001d3ec76a&product=inline-reaction-buttons" async="async"></script>
<div class="sharethis-inline-reaction-buttons"></div>
    </>
  );
}

export default socialShare;