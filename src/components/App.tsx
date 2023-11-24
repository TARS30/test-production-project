import { Link } from "react-router-dom";
import { useTheme } from "../theme/useTheme";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeContext";
import { Suspense, useContext, useState } from "react";
import { MainPageLazy } from "../pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "../pages/AboutPage/AboutPage.lazy";

import "../styles/index.scss";
import { classNames } from "../helpers/classNames/classNames";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/about">about</Link>
      <br />
      <Link to="/">main</Link>
      <div>
        <button onClick={toggleTheme}>Switch theme</button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}
