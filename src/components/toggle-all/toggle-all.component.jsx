import React from 'react';

import './toggle-all.styles.scss';

const ToggleAll = ({ allSelected, onToggleAll }) => (
    <div className='toggle-all-container'>
        <input
            id="toggle-all"
            type="checkbox"
            className="toggle-all"
            checked={ allSelected }
            onChange={ onToggleAll }
        />
        <label htmlFor="toggle-all" />
    </div>
);

export default ToggleAll;