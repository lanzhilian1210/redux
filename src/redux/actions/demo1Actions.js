import { GET_DEMO1,GET_BOOL } from './types';


// 分发操作

export const getDemo1 = () => dispatch =>{
    console.log('GET_DEMO1分发操作数据');
    dispatch({
        type: GET_DEMO1,
        payLoad:'GET_DEMO1'
    })
}

export const changeState = () => dispatch =>{
    let show = true;
    dispatch({
        type: GET_BOOL,
        payLoad1:show,
        payLoad:'GET_DEMO1改变了'
    })
}