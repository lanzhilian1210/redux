import { GET_DEMO1 } from './types';


// 分发操作
// export function getDemo1() {
//     console.log('demo1数据');
//     return function(dispatch) {
//         dispatch({
//             type: GET_DEMO1,
//             payLoad:'GET_DEMO1字段'
//         })
//     }
// }

export const getDemo1 = () => dispatch =>{
    console.log('分发操作数据');
    dispatch({
        type: GET_DEMO1,
        payLoad:'GET_DEMO1字段'
    })
}