import Switcher from "./components/layout/Switcher";
import Theme from "./components/layout/Theme";
import './config/i18n';
import { AppContext } from './contexts/AppContext';

function App() {
  return (
    <AppContext>
      <Theme>
        <Switcher />
      </Theme>
    </AppContext>
  )
}

export default App
