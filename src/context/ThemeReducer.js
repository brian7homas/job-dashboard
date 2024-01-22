export const INITIAL_STATE = { theme: !localStorage.getItem('dashboard-theme') ? 'light' : localStorage.getItem('dashboard-theme') }
export const ThemeReducer = (state, action) => {
  switch(action.type) {
    case 'DARK':{
      document.documentElement.style.setProperty("--color-white", "hsl(0, 0%, 10%)");
      document.documentElement.style.setProperty("--color-dark", "hsl(0, 0%, 100%)");
      document.documentElement.style.setProperty("--color-primary", "rgba(230, 57, 30, 1)");
      document.documentElement.style.setProperty("--color-main-bg", "hsl(224, 1%, 25%)");
      localStorage.setItem('dashboard-theme', 'dark')
      return {
        ...state,
        theme: 'dark'
      }
    }
    case 'LIGHT':{
      document.documentElement.style.setProperty("--color-white", "hsl(0, 0%, 100%)");
      document.documentElement.style.setProperty("--color-dark", "hsl(0, 0%, 10%)");
      document.documentElement.style.setProperty("--color-primary", "rgba(230, 57, 70, .3)");
      document.documentElement.style.setProperty("--color-main-bg", "hsl(224, 1%, 85%)");
      localStorage.setItem('dashboard-theme', 'light')
      return {
        ...state,
        theme: 'light'
      }
    }
  }
}