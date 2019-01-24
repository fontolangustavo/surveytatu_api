'use strict'

const User = use('App/Models/User');
const moment = use('moment');

class UserController {
    async login({ request, auth }) {
        const { email } = request.post();
        
        let user = await User.findOrCreate(
            { email: email, username: email },
        )

        user.last_login = moment().format('YYYY-MM-DD hh:mm:ss');;
        await user.save();

        const token = await auth.generate(user);
        return token;
    }
}

module.exports = UserController
