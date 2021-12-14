import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './reducer';
//import Iframe from './iframe';
//import ReactPlayer from 'react-player/soundcloud';

const Button = {
  variants: {
    primaryAction: {
      bg: 'brand.black',
      borderColor: 'brand.black',
      borderRadius: '0rem',
      color: 'white',
      transition: 'none',
      _active: {
        opacity: '0.5',
        bg: 'brand.black'
      },
      _hover: {
        opacity: '0.8'
      }
    },
    primaryActionInactive: {
      bg: 'brand.blue',
      borderColor: 'brand.black',
      borderRadius: '0rem',
      color: 'white',
      opacity: '0.3',
      transition: 'none',
      _active: {
        bg: 'brand.black'
      }
    },
    primaryActionLined: {
      bg: 'transparent',
      borderColor: 'brand.black',
      borderRadius: '0rem',
      borderWidth: '0px',
      color: 'brand.blue',
      transition: 'none',
      _active: {
        opacity: '0.5'
      },
      _hover: {
        opacity: '0.8'
      }
    },
    primaryActionInverted: {
      bg: 'transparent',
      borderColor: 'brand.black',
      borderRadius: '0px',
      color: 'brand.blue',
      transition: 'none',
      _active: {
        opacity: '0.5'
      },
      _hover: {
        bg: 'brand.blue',
        color: 'white'
      }
    },
    secondaryAction: {
      bg: 'brand.brightGray',
      color: 'brand.darkGray',
      height: '2rem',
      fontSize: '0.8rem',
      borderRadius: '0px',
      transition: 'none',
      _active: {
        bg: 'brand.black'
      },
      _hover: {
        bg: 'brand.blue',
        color: 'brand.darkGray'
      }
    },
    secondaryActionLined: {
      bg: 'none',
      borderColor: 'brand.black',
      borderRadius: '0rem',
      borderWidth: '0px',
      color: 'brand.turquoise',
      transition: 'none',
      _active: {
        opacity: '0',
        bg: 'brand.turquoise'
      },
      _hover: {
        bg: 'brand.turquoise',
        color: 'brand.background'
      }
    },
    cancelAction: {
      bg: 'none',
      borderColor: 'brand.red',
      borderRadius: '0rem',
      borderWidth: '0px',
      color: 'brand.red',
      transition: 'none',
      _active: {
        opacity: '0.8',
        bg: 'brand.red'
      },
      _hover: {
        bg: 'brand.red',
        color: 'white'
      }
    },
    tertiaryAction: {
      bg: '#fff',
      color: '#000',
      borderRadius: '0rem',
      _hover: {
        bg: '#000',
        color: '#fff'
      },
      _active: {
        bg: 'gray.100',
        color: 'gray.400'
      }
    }
  }
};

const Link = {
  variants: {
    primaryAction: {
      alignItems: 'center',
      bg: 'brand.black',
      borderColor: 'brand.black',
      borderRadius: '0px',
      color: 'white',
      display: 'inline-flex',
      fontSize: '1rem',
      fontWeight: '300',
      height: 10,
      justifyContent: 'center',
      lineHeight: '1.2',
      paddingX: 4,
      transition: 'none',
      _hover: {
        bg: 'white',
        color: 'brand.blue',
        textDecoration: 'none'
      }
    },
    primaryActionInactive: {
      alignItems: 'center',
      bg: 'gray.600',
      borderRadius: '0px',
      color: 'gray.400',
      display: 'inline-flex',
      fontSize: '1rem',
      fontWeight: '300',
      height: 10,
      justifyContent: 'center',
      lineHeight: '1.2',
      paddingX: 4,
      transition: 'none',
      _hover: {
        color: 'gray.400',
        textDecoration: 'none'
      }
    }
  }
};

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        height: '100%'
      }
    }
  },
  colors: {
    brand: {
      black: '#000000',
      background: '#111111',
      darkGray: '#222222',
      neutralGray: '#556677',
      gray: '#444',
      lightGray: '#333333',
      brightGray: '#FDFDFD',
      blue: '#777',
      lightBlue: '#111111',
      turquoise: '#ffffff',
      red: '#FF0000'
    }
  },
  components: {
    Button,
    Link,
    Input: {
      variants: {
        outline: 'none',
        boxShadow: 'none'
      }
    },
    Textarea: {
      variants: {
        outline: 'none',
        boxShadow: 'none'
      }
    },
    MenuButton: {
      variants: {
        primary: {
          color: 'gray.300',
          _hover: { color: 'brand.blue' },
          _expanded: { color: 'brand.blue' },
          _focus: { color: 'brand.blue' }
        }
      }
    },
    MenuItem: {
      variants: {
        primary: {
          _focus: {
            bg: '#111',
            color: 'brand.blue'
          }
        }
      }
    }
  },
  fonts: {
    body: "'Courier New', sans-serif",
    heading: "'Courier New', sans-serif",
    mono: "'Courier', monospace"
  },
  fontWeights: {
    normal: 200,
    bold: 300
  }
});

function Root() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
