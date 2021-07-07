import React from 'react';

import Item from '../item/item.component';

const List = ({ itemsList }) => (
    itemsList.map(
        (item) => (
            <Item item={ item } />
        )
    )
);

export default List;