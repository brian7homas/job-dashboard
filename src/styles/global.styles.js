import { Global, css } from '@emotion/react'

export const GlobalStyles = () => {
  return (
    <Global styles={css`
    :root{
      --color-white: hsl(0, 0%, 100%);
      --color-dark: hsl(0, 0%, 10%);
      --color-primary: #E63946;
      --color-secondary: #F1FAEE;
      --color-section-bg: #ececec;
      --color-primary-bg: #E63946;
      --color-custom-btn-bg: #A8DADC;
      --color-custom-btn-bg-hover: #1D3557;
      --color-heading: #1D3557;
      --color-p: #717275;
      --color-border: #e0e0e5;
      --color-link-hover: #E63946;
      --padding-content: .5em .85em;
      --padding-navbar: .5em .85em;
    }
    * {
      margin: 0;
      padding:0;
      box-sizing: border-box;
    }
              
                    
    html {
      font-family: 'Unbounded';
      font-weight: 400;
      font-size: 62.5%;
      color: var(--color-dark);
    }
    body {
      font-size: 1.6rem;
    }
    h1 {
      font-size: 4.8rem;
  }
`} />
  )
}
