import * as React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout";

import Rankings from "./Rankings";
import ImportAthlete from './ImportAthlete'
import ImportChampionship from './ImportChampionship'

import NotFound from "./NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Rankings />} />
          <Route path="/import-championship" element={<ImportChampionship />} />
          <Route path="/import-athlete" element={<ImportAthlete />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
