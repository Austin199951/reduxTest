import * as actionTypes from './actionTypes'
import axios from 'axios'

// App.js
// 删除功能
export const delDataAction = (index) => ({
    type: actionTypes.DEL_DATA,
    index
});

// 获取数据
export const getListAction = (data) => ({
    type: actionTypes.GET_LIST,
    data
});

// input写入
export const changeInputValAction = (res) => ({
    type: actionTypes.CHANGE_INPUT_VAL,
    res
});

// 添加
export const addDataAction = () => ({
    type: actionTypes.ADD_DATA
});

// 单选
export const choiceAction = (index) => ({
    type: actionTypes.CHOICE,
    index
});


//全选
export const choiceAllAction = () => ({
    type: actionTypes.CHOICE_ALL,
});

// 全不选
export const choiceNoAction = () => ({
    type: actionTypes.CHOICE_NO
});


// 获取动态数据
export const getDataList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=> {
            dispatch(getListAction(res.data.data));
        }, (err)=> {throw new err})
    }
}


// TodoList.js
export const changeInputAction = (value) => ({
    type:actionTypes.CHANGE_INPUT,
    value
})

export const addValAction = () => ({
    type:actionTypes.ADD_VAL
})