import React from 'react'
import Link from 'next/link'

import { StyledHeader, NavigationContainer, Item, Logo, Anchor } from './styles'

export const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <Logo>juliancanderson</Logo>
        </a>
      </Link>
      <NavigationContainer>
        <Item>
          <Link href="/now">
            <a>Now</a>
          </Link>
        </Item>
        <Item>
          <Link href="/bookshelf">
            <a>Bookshelf</a>
          </Link>
        </Item>
        <Item>
          <Anchor href="mailto:hello@julian.so">Contact</Anchor>
        </Item>
        {/* <Item>
          <a href="https://notes.julian.so" target="_blank">
            Notes
          </a>
        </Item> */}

        {/* <Item>
          <Link href="/nfts">
            <a>NFTs</a>
          </Link>
        </Item> */}
        {/* //TODO fix darkTheme */}
        {/* <Item
          style={{
            marginLeft: rem(40),
          }}
        >
          <Toggle onClick={() => toggle()}>
            {!dark ? (
              <img src={sun} alt="sun" />
            ) : (
              <img src={moon} alt="moon" />
            )}
          </Toggle>
        </Item> */}
      </NavigationContainer>
    </StyledHeader>
  )
}

// https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
