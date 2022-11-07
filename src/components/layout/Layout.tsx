import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { FC, ReactNode } from 'react';


type PropTypes = {
  children: ReactNode
}

const makeApp = makeStyles(() => ({
  root: {
    paddingRight:
      0,
    paddingLeft:
      0,
  },
  content: {
    paddingTop:
      0,
  },
}));

const Layout: FC<PropTypes> = ({ children }): JSX.Element => {
  const appStyle = makeApp()

  return (
    <div className={`App ${appStyle.root}`}>
      <CssBaseline />
      <div className={appStyle.content}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
