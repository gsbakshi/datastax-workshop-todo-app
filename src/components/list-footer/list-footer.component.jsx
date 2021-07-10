import React, { useEffect } from 'react';

import './list-footer.styles.scss';

const FILTER_TITLES = {
    SHOW_ALL: "All",
    SHOW_ACTIVE: "Active",
    SHOW_COMPLETED: "Completed",
};

const FILTERS_LIST = [
    "SHOW_ALL",
    "SHOW_ACTIVE",
    "SHOW_COMPLETED",
];

const ListFooter = ({ activeCount, filter : selectedFilter, onShowFiltered, }) => {

    // Logger to track active items change in console
    useEffect(
        () => {
            console.log("PROP Change: Active items is %d", activeCount);
        }, [activeCount]
    );

    return (
        <div className='list-footer-container'>
            {
                <span className='todo-count'>
                    <strong>{ activeCount || 'No' }</strong>
                    &nbsp;
                    { activeCount === 1 ? 'item' : 'items' } left
                </span>
            }
            <div className='filters-container'>
                {
                    FILTERS_LIST.map(
                        (filter) => (
                            <div className='filter-container' key={ filter }>
                                <button
                                    className={ `${ filter === selectedFilter ? 'selected' : '' } filter` }
                                    onClick={ () => onShowFiltered(filter) }
                                >
                                    { FILTER_TITLES[filter] }
                                </button>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default ListFooter;