export const INITIAL_STATE = { theme: !localStorage.getItem('dashboard-theme') ? 'light' : localStorage.getItem('dashboard-theme') }
export const ThemeReducer = (state, action) => {
  switch(action.type) {
    case 'DARK':{
      document.documentElement.style.setProperty("--color-white", "hsl(0, 0%, 10%)");
      document.documentElement.style.setProperty("--color-dark", "hsl(0, 0%, 100%)");
      localStorage.setItem('dashboard-theme', 'dark')
      return {
        ...state,
        theme: 'dark'
      }
    }
    case 'LIGHT':{
      document.documentElement.style.setProperty("--color-white", "hsl(0, 0%, 100%)");
      document.documentElement.style.setProperty("--color-dark", "hsl(0, 0%, 10%)");
      localStorage.setItem('dashboard-theme', 'light')
      return {
        ...state,
        theme: 'light'
      }
    }
  }
}