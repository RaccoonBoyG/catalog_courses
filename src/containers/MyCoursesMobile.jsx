import React from "react";
import { MEDIA_LS_URL } from "../services/openurfu";

const MyCoursesMobile = () => {
  return (
    <li className="menu-item">
      <a href={`${MEDIA_LS_URL}/dashboard`} className="nav-link">
        Мои курсы
      </a>
    </li>
  );
};

export default MyCoursesMobile;
