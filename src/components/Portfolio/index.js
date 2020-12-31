import React from 'react'
import PropTypes from 'prop-types'

import { PortfolioCard } from './PortfolioCard'
import { StyledSection, Container, Heading, PortfoliosWrapper } from './styles'

const Portfolio = ({ portfolios, portfolioRef }) => {
  return (
    <StyledSection>
      <Container ref={portfolioRef}>
        <Heading>some of my work.</Heading>
        <PortfoliosWrapper>
          {portfolios.map(portfolio => (
            <PortfolioCard key={portfolio.title} {...portfolio} />
          ))}
        </PortfoliosWrapper>
      </Container>
    </StyledSection>
  )
}

Portfolio.propTypes = {
  portfolios: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
      stack: PropTypes.string,
    })
  ),
  portfolioRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
}

export default Portfolio
