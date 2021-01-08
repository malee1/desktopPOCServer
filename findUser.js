const users = require('./data/users');

const findUser = (fileId) => {
    let obj = users.find((user) => {
        if(user.fileId === fileId) {
            return user
        }
    });
    if(!obj) {
        //need to define proper validation error handling - if time
        return null
    }
    return obj;
};

module.exports = findUser;