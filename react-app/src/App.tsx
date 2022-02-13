import React, {lazy} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {
    CREATE_DELETE_UPDATE_TEST,
    FIVE_HUNDRED_THOUSAND,
    LAZY_LOADING_TEST,
    ONE_HUNDRED_THOUSAND,
    TEN_THOUSAND
} from "./utils/uiUrl";
import Suspense from "./Components/Suspense/Suspense";
import HomePage from './Pages/HomePage/HomePage';
import TenThousandElementsPage from "./Pages/HomePage/TenThousandElementsPage/TenThousandElementsPage";
import OneHundredThousandElementsPage
    from "./Pages/HomePage/OneHundredThousandElementsPage/OneHundredThousandElementsPage";
import FiveHundredThousandElementsPage
    from "./Pages/HomePage/FiveHundredThousandElementsPage/FiveHundredThousandElementsPage";

const CreateDeleteUpdateElementsTestPage = lazy(() => import('./Pages/CreateDeleteUpdateElementsTestPage/CreateDeleteUpdateElementsTestPage'));

const TenThousandElementsPageLazy = lazy(() => import( './Pages/LazyLoadingTestPage/TenThousandElementsPage/TenThousandElementsPage'));

const OneHundredThousandElementsPageLazy = lazy(() => import( './Pages/LazyLoadingTestPage/OneHundredThousandElementsPage/OneHundredThousandElementsPage'));

const FiveHundredThousandElementsPageLAzy = lazy(() => import( './Pages/LazyLoadingTestPage/FiveHundredThousandElementsPage/FiveHundredThousandElementsPage'));


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
              <Route index element={<HomePage/>} />
              <Route path={TEN_THOUSAND}
                     element={<TenThousandElementsPage />}>
              </Route>
              <Route path={ONE_HUNDRED_THOUSAND}
                     element={<OneHundredThousandElementsPage />}>
              </Route>
              <Route path={FIVE_HUNDRED_THOUSAND}
                     element={<FiveHundredThousandElementsPage />}>
              </Route>
          </Route>
          <Route
            path={CREATE_DELETE_UPDATE_TEST}
            element={
                <Suspense>
                    <CreateDeleteUpdateElementsTestPage />
                </Suspense>}>
          </Route>
            <Route
                path={LAZY_LOADING_TEST}>
                <Route path={TEN_THOUSAND}
                       element={
                           <Suspense>
                               <TenThousandElementsPageLazy />
                           </Suspense>
                       } />
                <Route path={ONE_HUNDRED_THOUSAND}
                       element={
                           <Suspense>
                               <OneHundredThousandElementsPageLazy />
                           </Suspense>
                       } />
                <Route path={FIVE_HUNDRED_THOUSAND}
                       element={
                           <Suspense>
                               <FiveHundredThousandElementsPageLAzy />
                           </Suspense>
                       } />
            </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
