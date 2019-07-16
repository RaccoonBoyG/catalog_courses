import React from "react";
import CourseCard from "../components/CourseCard";

const CourseListRender = props => {
  return props.item.map((e, key) => <CourseCard item={e} key={key} />);
};

export default CourseListRender;
