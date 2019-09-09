import React,{Fragment, createContext, useState, useReducer} from 'react';

export const ColorContext = createContext({});

export const UPDATA_COLOR = 'UPDATA_COLOR';

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATA_COLOR:
            return action.color
        break;
        default:
            return state
    }
}

export const Color = props => {
    const [age] = useState(18);
    const [color, dispatch] = useReducer(reducer, 'navy')

    return(
        <Fragment>
            <ColorContext.Provider value={{color, age, dispatch}}>
                {props.children}
            </ColorContext.Provider>
        </Fragment>
    )
}