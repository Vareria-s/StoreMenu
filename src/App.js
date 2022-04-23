import './App.css';
import Content from "./components/Content/Content";
import FirstMenu from "./components/Header/FirstMenu/FirstMenu";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import SecondMenu from "./components/Header/SecondMenu/SecondMenu";
import {BrowserRouter} from "react-router-dom";
import MenuBurgerMobileVersion from "./components/MenuBurgerMobileVersion/MenuBurgerMobileVersion";
import React, {createContext, useReducer} from 'react';

export const MyContext= createContext();


export type asteroidsContextType = {
    burgerMenuWork: boolean,
    mobileBurgerMenuWork: boolean
}
export const initialState: asteroidsContextType = {
    burgerMenuWork: false,
    mobileBurgerMenuWork: false
}
export const BURGER_MENU_WORK = 'BURGER_MENU_WORK';
export const MOBILE_BURGER_MENU_WORK = 'MOBILE_BURGER_MENU_WORK';

function App() {

    const burgerReducer = (state, action) => {
        switch (action.type) {
            case BURGER_MENU_WORK:
                return {...state, burgerMenuWork: !state.burgerMenuWork};
            case MOBILE_BURGER_MENU_WORK:
                return {...state, mobileBurgerMenuWork: !state.mobileBurgerMenuWork};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(burgerReducer, initialState);

  return (
      <MyContext.Provider value={{state, dispatch}}>
          <BrowserRouter>
              <div className="app-wrapper">
                  <MenuBurger/>
                  <MenuBurgerMobileVersion/>
                  <div className="header">
                      <FirstMenu/>
                      <SecondMenu/>
                  </div>
                  <Content />
              </div>
          </BrowserRouter>
      </MyContext.Provider>
  );
}

export default App;
