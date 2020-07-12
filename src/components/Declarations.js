import React from 'react';

export default React.createContext({
    books: {},
    count: 0,
    filters: [],
    index: 1,
    indexMax: 1,
    searchFilters: () => {},
    textInput: '',
    updateBooks: () => {},
    updateIndex: () => {},
    waiting: true,
});
