import * as actionTypes from './actionTypes'
const newState = {
    list:[],
    inputValue:'',
    choiceList:[{hobby:'打球'},{hobby:'梼杌'},{hobby:'建设'},{hobby:'画画'}],
    middlearr:[],
    inputVal:'你好，小猪',
    todolist:['忙小猪']
}

export default (state = newState, action) => {
    switch (action.type) {
        case actionTypes.DEL_DATA: //删除
            return {
                ...state,
                ...state.list.splice(action.index, 1)
            }

        case actionTypes.GET_LIST:// 获取数据
            return {
                ...state,
                list: action.data.list
            }

        case actionTypes.CHANGE_INPUT_VAL://写入
            return {
                ...state,
                inputValue:action.res
            }

        case actionTypes.ADD_DATA://添加
            return {
                ...state,
                list: [...state.list, state.inputValue]
            }
        case actionTypes.CHOICE: //单选
            let arr = [];
            state.choiceList[action.index].choiceState =! state.choiceList[action.index].choiceState;
            for(let i of state.choiceList){
                if(i.choiceState){
                    arr.push(i);
                }
            }
            state.middlearr = arr;
            break;

        case actionTypes.CHOICE_ALL://全选
            let arr1 = [];
            for(let i of state.choiceList){
                if(!i.choiceState) {
                    i.choiceState = true;
                }
                arr1.push(i);
            }
            state.middlearr = arr1;
            break;

        case actionTypes.CHOICE_NO://全不选
            for(let i of state.choiceList){
                i.choiceState = false;
            }
            state.middlearr = [];
            break;

            //TodoList
        case actionTypes.CHANGE_INPUT: //写入
            return {
                ...state,
                inputVal: action.value
            }
            break;
        case actionTypes.ADD_VAL: //添加
            return {
                ...state,
                todolist:[...state.todolist, state.inputVal]
            }
            break;
    }
    return state;
}