import React,{ Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { changeInputAction, addValAction } from './store/actionCreators'


class TodoList extends Component{
    constructor(props){
        super(props);
    }
    render() {
        const { ...rest } = this.props;
        return(
            <Fragment>
                <input type="text" value={rest.inputVal} onChange={rest.changeInput}/><br/>
                <button onClick={rest.addVal}>提交</button>
                <ul>
                    {rest.todolist.map((item, index) => {
                        return  <li key={index}>
                                    {item}
                                </li>
                    })}
                </ul>
            </Fragment>
        )
    }
}

const stateToProps = (state) => {
    return {
        inputVal: state.inputVal,
        todolist: state.todolist
    }
}

const dispatchToProps = (dispatch) => {
    return{
        //写入
        changeInput(e){
            dispatch(changeInputAction(e.target.value));
        },
        //提交添加
        addVal(){
            dispatch(addValAction());
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);