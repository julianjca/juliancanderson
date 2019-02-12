import React from 'react'
import { Helmet } from 'react-helmet';
import { IoLogoGithub, IoLogoInstagram, IoMdMail, IoLogoLinkedin } from "react-icons/io";

import SEO from '../components/seo';
import TypingComponent from '../components/typing';

const IndexPage = () => (
  <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Julian Anderson - Web Developer</title>
        <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Open+Sans:300,400,500,600,700,800,900 " rel="stylesheet" />

      </Helmet>
      <SEO title="Home" keywords={['react developer', 'software engineer', 'front end web developer', 'web developer']} />
      <div className="layout-wrapper">
        <h1>
          Julian Christian Anderson
        </h1>
        <TypingComponent />
      </div>
      <div className="bottom-layout">
        <IoLogoGithub/>
        <IoLogoInstagram/>
        <IoMdMail/>
        <IoLogoLinkedin/>
      </div>
  </React.Fragment>

)

export default IndexPage
