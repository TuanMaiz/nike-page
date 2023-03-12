import React, {createContext, useContext, useReducer} from 'react';

export const DataLayerContext = createContext(); // tạo context để dùng useContext


//tạo một khung provider để bắn thông tin cho các consumer
export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
