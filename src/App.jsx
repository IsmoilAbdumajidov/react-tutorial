import React, { createContext, useEffect, useReducer } from 'react'
import HTTPRequests from './components/10-11-dars/11-HTTP-requests/HTTPRequests'
import Products from './components/12-13-dars/Products'
import UseReducerHook from './components/15-dars/UseReducerHook'
import UseRefHook from './components/16-dars/UseRefHook'
import MainContainer from './components/17-dars/MainContainer'
import UseContextUseReducerHook from './components/18-useContext-useReducer/UseContextHook'
import Carausel from './components/20-dars/Carausel'
import ShoppingProducts from './components/20-dars/ShoppingProducts'
import { reduserFn } from './components/20-dars/reduserFn'
// import Navbar from './components/2-dars/Navbar'
// import Content from './components/2-dars/Content'
// import NestedComponents from './components/3-dars/NestedComponents'
// import JSX from './components/3-dars/JSX'
// import Props from './components/3-4-dars/Props'
// import State from './components/5-dars/State'
// import ClickHandler from './components/6-dars/ClickHandler'
// import Parent from './components/6-dars/Parent'
// import Counter from './components/6-dars/Counter'
// import ListRendering from './components/7-dars/ListRendering'
// import Styling from './components/7-dars/styling/Styling'
// import Forms from './components/7-dars/Forms'
// import ModulePage from './components/8-dars/ModulePage'
// import RgbColor from './components/9-dars/RgbColor'
// import Carausel from './components/10-dars/Carausel'


// import NestedComponents from './components/3-dars/NestedComponents'
// import Navbar from './components/3-dars/Navbar'

const initilValue = {
  cart: []
}

export const ProductContext = createContext()


const App = () => {
  const [state, dispatch] = useReducer(reduserFn, initilValue)

  const cartToLS = JSON.parse(localStorage.getItem("cart")) || []

  useEffect(() => {
    dispatch({ type: "REFRESH", payload: cartToLS })
  }, [])





  return (
    <div>
      {/* <Navbar /> */}
      {/* <Navbar /> */}
      {/* <Content /> */}
      {/* <NestedComponents /> */}
      {/* <JSX  /> */}
      {/* <Props /> */}
      {/* <State /> */}
      {/* <ClickHandler/> */}
      {/* <Parent/> */}
      {/* <Counter /> */}
      {/* <ListRendering /> */}
      {/* <Styling /> */}
      {/* <Forms /> */}
      {/* <ModulePage /> */}
      {/* <RgbColor/> */}
      {/* <Carausel /> */}
      {/* <HTTPRequests/> */}
      {/* <Products /> */}
      {/* <UseReducerHook /> */}
      {/* <UseRefHook /> */}
      {/* <MainContainer /> */}
      {/* <UseContextUseReducerHook /> */}
      {/* <Carausel /> */}
      <ProductContext.Provider value={[state, dispatch]} >
        <ShoppingProducts />
      </ProductContext.Provider>
    </div>
  )


}

export default App