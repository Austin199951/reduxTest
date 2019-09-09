import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HooksReducer from './hooksReducer/HooksReducer'
import { Provider } from 'react-redux'
import store from './store/store'

// 组件想要获取store状态，就用react-redux里Provider提供器包裹组件
const App = (// 使用jsx语法
    <Provider store={store}>
        <HooksReducer />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));