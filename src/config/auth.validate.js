import UserService from '../services/user.service';

const validate = async(request, username, password) => {
    const user = await new UserService().findByUsername(username);

    if (!user) {
        return { credentials: null, isValid: false };
    }

    const isValid = await new UserService().validPassword(password, user.password);
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
}

export default validate;