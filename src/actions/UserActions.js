import Context from './../Context';
import UserConstants from './../constants/UserConstants';
class UserActions {
    constructor(context) {
        this.context = context;
    }

    login(options, callback) {
        this.context.getDispatcher().dispatch({
            actionType: UserConstants.USER_LOGIN,
            options: options,
            callback: callback
        });
    }
    register(options, callback) {
        this.context.getDispatcher().dispatch({
            actionType: UserConstants.USER_REGISTER,
            options: options,
            callback: callback
        });
    }
    set(data) {
        this.context.getDispatcher().dispatch({
            actionType: UserConstants.USER_SET,
            data: data
        });
    }

    logout(callback) {
        this.context.getDispatcher().dispatch({
            actionType: UserConstants.USER_LOGOUT,
            callback: callback
        });
    }
}

export default new UserActions(Context.getInstance())
