// reducer 返回一个新的状态
import { GET_DEMO1,GET_BOOL } from '../actions/types';
const initialState = {
    item:'',
    show:false
}
export default function (state=initialState,action) {
    switch(action.type) {
        case GET_DEMO1:
        return {
            ...state,
            item: action.payLoad
        }
        case GET_BOOL:
        return {
            ...state,
            show: action.payLoad1,
            item: action.payLoad
        }
        default: 
            return state;
    }
}