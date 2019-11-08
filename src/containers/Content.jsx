import React from "react";

export const ObjectContent = props => {
  return props.data_content.map((item, key) => {
    return (
      <div
        className="text-custom-dark2 m-3 p-5 shadow-sm bg-white"
        key={key}
        dangerouslySetInnerHTML={{ __html: item.content }}
      ></div>
    );
  });
};

export const ArrayContent = props => {
  return props.data_content.map(item => {
    item.content.map((i, key) => {
      return (
        <div
          className="text-custom-dark2 m-3 p-5 shadow-sm bg-white"
          key={key}
          dangerouslySetInnerHTML={{ __html: i.content }}
        ></div>
      );
    });
  });
};
