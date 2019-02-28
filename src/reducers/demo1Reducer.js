// reducer 返回一个新的状态
import { GET_DEMO1 } from '../actions/types';
const initialState = {
    item:''
}
export default function (state=initialState,action) {
    console.log(action.type,'action.type')
    switch(action.type) {
        case GET_DEMO1:
        return {
            ...state,
            item: action.payLoad
        }
        default: 
            return state;
    }
}