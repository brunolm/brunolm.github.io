import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#08F',
    },
    secondary: {
      main: '#08F',
    },
    error: {
      main: red[500],
    },
  },
})
