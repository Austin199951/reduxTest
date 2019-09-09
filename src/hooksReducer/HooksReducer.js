import React,{useContext, Fragment} from 'react';

import {Color, ColorContext} from './Color'

export default function(){
    return(
        <Fragment>
            <Color>
                <Context/>
            </Color>
        </Fragment>
    )
}

function Context(){
    let {color, age, dispatch} = useContext(ColorContext)

    return(
        <Fragment>
            <h2 style={{color:color}}>字体颜色为{color}{age}</h2>
            <button onClick={()=>{dispatch({type:'UPDATA_COLOR', color:'red'})}}>红色</button>
            <button onClick={()=>{dispatch({type:'UPDATA_COLOR', color:'green'})}}>绿色</button>
        </Fragment>
    )
}