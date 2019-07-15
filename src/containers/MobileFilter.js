import React from 'react';

const MobileFilter = ({
  _handleTextChange,
  submitSearch,
  resetInput,
  term
}) => {
  return (
    <div className="mobile-menu menu-open">
      <ul className="menu">
        <li className="menu-item">
          <p>
            <input
              type="text"
              className="form-control search-slt"
              placeholder="Найти"
              onChange={e => _handleTextChange(e)}
              value={term}
            />
          </p>
        </li>
        <li className="button-filter_li menu-item d-flex flex-column">
          <button className="button-filter btn btn-danger" onClick={resetInput}>
            Сбросить
          </button>
          <button
            className="button-filter btn btn-primary"
            onClick={submitSearch}
          >
            Показать
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileFilter;
