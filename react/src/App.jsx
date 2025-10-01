import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import ProductContainer from './components/ProductCard/ProductContainer'
import UserCardContainer from './components/UserCard/UserCardContainer'

import Carts from './components/Carts/Carts'

import StringState from './components/State/StringState'
import NumberState from './components/State/NumberState'
import ObjectState from './components/State/ObjectState'
import ArrayState from './components/State/ArrayState'

import Counter from './components/Counter/Counter'
import Calculator from './components/Calculator/Calculator'
import QuoteContainer from './components/DummyJSON/QuoteContainer'

QuoteContainer

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

      {/* <Carts></Carts> */}

      {/* state 실습 1 */}
      {/* <StringState></StringState>
      <NumberState></NumberState>
      <ObjectState></ObjectState>
      <ArrayState></ArrayState> */}

      {/* state 실습 2 */}
      {/* <Counter></Counter>
      <Calculator></Calculator> */}

      {/* state 실습 3 */}
      <QuoteContainer></QuoteContainer>

    </>
  );
}
