export default class UserService {

    #db;

    constructor(connection) {
        this.#db = connection
    }

    async getUsers() {
        return await this.#db.getAll();
    }

    async deleteUser(id) {
        return await this.#db.deleteOne(id);
    }

    async updateUser(id, userData) {
        return await this.#db.updateOne(userData.firstname, userData.lastname, id);
    }

    async addUser(userData) {
        return await this.#db.addOne(userData.firstname, userData.lastname, email)
    }
}