import React from "react";
import cx from "classnames";
import {connect} from "react-redux";
// 38) action de filtrage
import {setFilter} from "../redux/actions";
// 39) listes des filtres possible
import {VISIBILITY_FILTERS} from "../constants";

const VisibilityFilters = ({activeFilter, setFilter}) => {
  return (
    <div className="visibility-filters">
      {/* 40) listes des différents button filtre */}
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

// 41) Récupération de la donnée state pour quel filtre a été cliquer
const mapStateToProps = state => {
  return {activeFilter: state.visibilityFilter};
};

// 42) Récupération des actions et du store
export default connect(mapStateToProps, {setFilter})(VisibilityFilters);
