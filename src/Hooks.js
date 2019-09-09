import React,{ Fragment, useState, useEffect, createContext, useContext, useReducer } from 'react'

import { Router,Route, Link} from 'react-router-dom'
let createBrowserHistory = require('history').createBrowserHistory;
const customHistory = createBrowserHistory();

let countContext = createContext();

function Index (){
    useEffect(()=>{
        console.log('你来了，index');
        return()=>{
            console.log('你走了,index');
        }
    },[])
    return(
        <h2>首页</h2>
    )
}
function List (){
    useEffect(()=>{
        console.log('你来了，list');
    })
    return(
        <h2>列表</h2>
    )
}

function Text() {
    const [count, setCount] = useState(0);
    const [list] = useState(['忙小猪', '忙凯琳'])
    const [inputVal, setChange] = useState('');
    const [, addData] = useState('');

    useEffect(()=>{
        console.log(`useEffect${count}`)
    },[])

    return(
        <Fragment>
            <p>you click {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>on Click</button>
            <br/>
            <countContext.Provider value={count}>
                <Counter/>
            </countContext.Provider>
            <br/>
            <br/>

            <input type="text" placeholder={'请输入要添加的内容'} value={inputVal} onChange={(event)=> {setChange(event.target.value)}}/>
            <button onClick={()=>{addData(list.push(inputVal))}}>添加</button>
            <ul>
                {list.map((item, key)=>{
                    return  <li key={key}>
                        {item}
                            </li>
                })}
            </ul>

            <Router  history={customHistory}>
                <Link to={'/'}>首页</Link>
                <Link to={'/List'}>列表</Link>
                <Route path={'/'} exact component={Index}/>
                <Route path={'/List'} component={List}/>
            </Router>


        </Fragment>
    )
}

function Counter(){
    let count = useContext(countContext)
    return(
        <Fragment>
            <h2>{count}</h2>
        </Fragment>
    )
}

function Count(){
    const [count, dispatch] = useReducer((state, action)=>{
        switch (action.type) {
            case 'add':
                return state+1;
                break;
            case 'sub':
                return state-1;
                break;
            default:
                return state;
        }
    }, 0);
    return(
        <Fragment>
            <h2>现在的成绩是{count}</h2>
            <button onClick={()=>{dispatch({type:'add'})}}>加</button>
            <button onClick={()=>{dispatch({type:'sub'})}}>减</button>
        </Fragment>
    )
}