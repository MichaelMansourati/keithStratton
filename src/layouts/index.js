import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../styles/index.css'

export default ({ children }) =>
  <div id="main-container">
    <Helmet>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
    </Helmet>
    <div id="title-container">
      <h1 id="title">Keith Stratton</h1>
      <h3 id="subtitle">
        <div className="subtitle-subgroup">
          <div>composer.</div>
          <div>arranger.</div>
        </div>
        <div className="subtitle-subgroup">
          <div>performer.</div>
          <div>educator.</div>
        </div>
      </h3>
    </div>
    <div id="nav-content-container">
      <nav>
        <ul id="nav-list">
          <div className="row-break">
            <li className="nav-item"><Link to="/">home</Link></li>
            <li className="nav-item"><Link to="/biography/">biography</Link></li>
            <li className="nav-item"><Link to="/list_of_works/">list of works</Link></li>
          </div>
          <div className="row-break">
            <li className="nav-item"><Link to="/news_and_events/">news and events</Link></li>
            <li className="nav-item"><Link to="/contact/">contact</Link></li>
          </div>
        </ul>
      </nav>
      <div className="content-container">
        {children()}
      </div>
      <div id="right-content-margin"></div>
    </div>
  </div>
