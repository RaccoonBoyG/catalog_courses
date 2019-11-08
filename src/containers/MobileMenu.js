import React from "react";
import { NavLink } from "react-router-dom";

import { MEDIA_LS_URL } from "../services/openurfu";

import MyCoursesMobile from "./MyCoursesMobile";
import RenderProfileYes from "../containers/RenderProfileYes";

const MobileMenu = props => {
  return (
    <div className="mobile-menu">
      <ul className="menu">
        <li className="menu-item">
          <NavLink exact to="/" className="nav-link">
            Каталог
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/orgs" className="nav-link">
            Организации
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/npr" className="nav-link">
            Обучение НПР
          </NavLink>
        </li>
        {/* <li className="menu-item">
          <NavLink to="/programs" className="nav-link">
            Программы
          </NavLink>
        </li> */}
        <li className="menu-item">
          <NavLink to="/about" className="nav-link">
            О нас
          </NavLink>
        </li>
        {props.isAuth ? null : (
          <li className="menu-item">
            <a href={`${MEDIA_LS_URL}/register`} className="nav-link" id="href">
              Регистрация
            </a>
          </li>
        )}
        {props.isAuth ? null : (
          <li className="menu-item">
            <a href={`${MEDIA_LS_URL}/login`} className="nav-link" id="href">
              Вход
            </a>
          </li>
        )}
        {props.isAuth ? <MyCoursesMobile /> : null}
        {props.isAuth ? (
          <li className="menu-item">
            <RenderProfileYes />
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default MobileMenu;
