import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import ProductContainer from './components/ProductCard/ProductContainer'
import UserCardContainer from './components/UserCard/UserCardContainer'

import Carts from './components/Carts/Carts'

export default function App() {
  return (
    <>
      {/* <div>
        <h1>Hello World</h1>
      </div> */}
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer> */}
      
      {/* <ProductContainer></ProductContainer>
      <UserCardContainer></UserCardContainer> */}

      <Carts></Carts>
      
    </>
  );
}
