import mysql from 'mysql2/promise'
import jsonData from '../config/requests.json'

export default class SQLConnection {

    #connection;

    constructor(host, user, password, database) {
        mysql.createConnection({ host, user, password, database }).then(res => {
            this.#connection = res;
        })
    }

    async getAll() {
        const sql = jsonData.getAll;
        const [res] = await this.#connection.execute(sql);
        return res;
    }

    async deleteOne(id) {
        const sql = jsonData.deleteOne;
        const [res] = await this.#connection.execute(sql, [id])
        return +res.affectedRows > 0;
    }

    async updateOne(fullName, country, city, email, phoneNumber, jobTitle, emailxperience, id) {
        const sql = jsonData.updateOne;
        const [res] = await this.#connection.execute(sql, [fullName, country, city, email, phoneNumber, jobTitle, emailxperience, id]);
        return +res.affectedRows > 0;
    }

    async addOne(fullName, country, city, email, phoneNumber, jobTitle, emailxperience) {
        const sql = jsonData.addOne
        const [res] = await this.#connection.execute(sql, [fullName, country, city, email, phoneNumber, jobTitle, emailxperience]);
        return res.insertId;
    }

}
