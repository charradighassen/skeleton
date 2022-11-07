import {
  createTheme, ThemeOptions, ThemeProvider
} from "@material-ui/core/styles";
import { FC, ReactNode } from 'react';

type PropTypes = {
  children: ReactNode
}



const theme = createTheme({
  palette: {
    primary: {
      main: "#00897b",
    },
  }
} as ThemeOptions);

const HilabTheme: FC<PropTypes> = ({ children }): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default HilabTheme;
