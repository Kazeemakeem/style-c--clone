import {createGlobalStyle} from "styled-components"

 const GlobalStyle =  createGlobalStyle`
    *{
        margin: 0;
        padding: 0px;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
 `

export default GlobalStyle;