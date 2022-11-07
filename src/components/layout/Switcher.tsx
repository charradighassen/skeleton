import loadable from '@loadable/component';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from '../../config/routes';
import guard from '../../helpers/guard';
import Layout from "./Layout";

const Switcher: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => {
            const isAllowed = guard(route)
            const componentRoute = !isAllowed ? "NotAllowed" : route.component;
            const Component = loadable(() => import(`../../pages/${componentRoute}.tsx`))

            return (
              <Route key={route.name} path={route.path} element={<Component />} />
            );
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Switcher;
