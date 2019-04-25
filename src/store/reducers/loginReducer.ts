import * as types from '../constants/loginTypes';
export interface ILoginState {
  status: string,
  isSuccess: boolean,
  user: null | IUser
}
export interface IUser {
  name: string
  age: number
}
export interface IUserAction {
  type: string
  user: IUser
}
const initialState: ILoginState = {
  status: '点击登录',
  isSuccess: false,
  user: null,
}

export default function loginIn(state = initialState, action: IUserAction): ILoginState {
  switch (action.type) {
    case types.LOGIN_IN_DOING:
      return {
        ...state,
        status: '正在登陆',
        isSuccess: false,
        user: null,
      }
      break;
    case types.LOGIN_IN_DONE:
      return {
        ...state,
        status: '登陆成功',
        isSuccess: true,
        user: action.user,
      }
      break;
    case types.LOGIN_IN_ERROR:
      return {
        ...state,
        status: '登录出错',
        isSuccess: true,
        user: null,
      }
      break;
    default:
      console.log(state);
      return state;
  }
}
