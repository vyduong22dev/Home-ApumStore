import axiosService from '../../utils/AxiosService';

export default function createApiAuthMiddle({ dispatch, getState }) {
  return (next) => (action) => {
    const authToken = localStorage.getItem("AUTH_USER");
    axiosService.changeHeaders({
      Authorization: authToken,
      "token": '8d0cff40-85de-11ed-8183-12cf3da973bf',
      "shop_Id": '121252'
    });
    return next(action);
  };
}
