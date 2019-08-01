import React, {Component, Fragment} from 'react'
import './App.css'
import 'antd/dist/antd.min.css'
import {Button, Input, List} from 'antd'
import store from './store/store'
import {
    getDataList,
    delDataAction,
    changeInputValAction,
    addDataAction,
    choiceAction,
    choiceAllAction,
    choiceNoAction
} from './store/actionCreators'
import propTypes from 'prop-types'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.delData = this.delData.bind(this);
        this.addData = this.addData.bind(this);
        this.choice = this.choice.bind(this);
        this.choiceAll = this.choiceAll.bind(this);
        this.choiceNo = this.choiceNo.bind(this);

        store.subscribe(() => { //手动订阅
            this.setState(store.getState())
        })
    }

    delData = (index) => {// 删除
        store.dispatch(delDataAction(index));
    }
    addData = () => {// 添加
        store.dispatch(addDataAction());
    }

    changeInputVal = (res) => { //写入
        store.dispatch(changeInputValAction(res.target.value))
    }

    choice = (index) => { // 单选
        store.dispatch(choiceAction(index));
    }

    choiceAll = () => {//全选
        store.dispatch(choiceAllAction())
    }

    choiceNo = () => {//全不选
        store.dispatch(choiceNoAction())
    }

    componentWillMount() {
        store.dispatch(getDataList());// 获取列表数据

        for (let i of this.state.choiceList) {
            i.choiceState = false;
        }


        
    }

    render() {
        const {...rest} = this.state;
        return (
            <AppTest inpVal={rest.inputValue}
                     changeInputVal={this.changeInputVal}
                     addData={this.addData}
                     delData={this.delData}
                     choice={this.choice}
                     choiceNo={this.choiceNo}
                     choiceAll={this.choiceAll}
                     list={rest.list}
                     choiceList={rest.choiceList}
                     middlearr={rest.middlearr}/>
        )
    }
}

const AppTest = (props) => {
    return (
        <Fragment>
            <Input placeholder={'Write something'} value={props.inpVal} onChange={props.changeInputVal}
                   style={{width: '500px', marginRight: '10px'}}/>
            <Button type={'primary'} onClick={props.addData}>添加</Button><br/>
            <List bordered dataSource={props.list} renderItem={(item, index) => (
                <List.Item>
                    {item}
                    <Button onClick={() => props.delData(index)}>X</Button>
                </List.Item>
            )} style={{width: '500px', margin: '10px 0 0 10px'}}/>

            <div style={{marginTop: '200px', border: '1px solid #e0e0e0', width: '500px'}}>
                <ul>
                    {
                        props.choiceList.map((item, index) => {
                            return <li key={index} onClick={() => props.choice(index)}>
                                <img
                                    src={item.choiceState ? require('./images/choice_cur.png') : require('./images/choice.png')}
                                    style={{width: '24px', height: '24px'}}/>{item.hobby}
                            </li>
                        })
                    }
                </ul>

                {
                    props.middlearr.length == props.choiceList.length ? (
                        <div onClick={props.choiceNo}>
                            <img src={require('./images/choice_cur.png')} style={{width: '24px', height: '24px'}}/>全不选
                        </div>
                    ) : (
                        <div onClick={props.choiceAll}>
                            <img src={require('./images/choice.png')} style={{width: '24px', height: '24px'}}/>全选
                        </div>
                    )
                }
            </div>
        </Fragment>
    )
}

AppTest.propTypes = {
    inpVal: propTypes.string,
    addData: propTypes.func,
    delData: propTypes.func
}