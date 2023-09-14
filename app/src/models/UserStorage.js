"use strict";

class UserStorage {
    static #users = {
        id: ["joyw", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["조연우", "나개발", "김팀장"],
    };

    static getUsers(...fields) {
        return this.#users;
        // const users = this.#users;
        // const newUsers = fields.reduce((newUsers, field) => {
        //     console.log(newUsers, field);
        // }, {});
        // return;
    }
}

module.exports = UserStorage;