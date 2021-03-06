import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { UserContextProvider } from '../contexts/UserContext'
import { DrawerContextProvider } from '../contexts/DrawerContext'

const GlobalStyle = createGlobalStyle`
  
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        height: 100%;
        width: 100%;
    }


    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active
    {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    -webkit-text-fill-color: #7E8AA4 !important;
    }
`

const theme = {
  colors: {
    primary: {
      ocean: '#03BAFF',
      blue: '#5150E9',
      // purple: '#5823E3',
      purple: '#493b61',
      dark: '#0F0029',
      orange: '#b36e4e',
    },
    text: {
      neutral600: '#333A46',
      neutral400: '#7E8AA4',
      neutral200: '#C5CEE0',
      white: '#FFFFFF',
      orange: '#b36e4e',
    },
    background: {
      primary: '#fff',
    },
    status: {
      destructive: '#E13600',
      warning: '#FFB800',
      success: '#049601'
    },
    cards: {
      neutral40: '#F7F9FC',
      neutral60: '#E4E9F2',
    },
    button: {
      // primary: '#5823E3', 
      primary: '#493b61', 
      disabled: '#E4E9F2'
    },
    grayscale: {
      divider: '#dfe0eb',
    },
  },
  boxShadow: {
    primary: '0px 2px 4px rgba(0, 0, 0, 0.16)',
    top: '4px 0px 4px 2px rgba(0, 0, 0, 0.16)',
    bottom: '0px 2px 4px rgba(0, 0, 0, 0.16)',
  },
  breakpoints: {
    xs: '476px',
    sm: '576px',
    md: '872px',
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Nawi Tarot</title>
        </Head>
        <GlobalStyle />
        <UserContextProvider>
          <DrawerContextProvider>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </DrawerContextProvider>
        </UserContextProvider>
    </>
  )
}