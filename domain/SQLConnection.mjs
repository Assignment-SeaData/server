import mysql from 'mysql2/promise'
// import jsonData from '../config/requests.json'
import { addOne, deleteOne, getAll, getOneById, updateOne } from '../config/requests.js'

export default class SQLConnection {

    #connection;

    constructor(host, user, password, database) {
        mysql.createConnection({ host, user, password, database }).then(res => {
            this.#connection = res;
        })
    }

    async getAll() {
        const sql = getAll;
        const [res] = await this.#connection.execute(sql);
        const newRes = res.map(r => {
            return {
                id: r.id,
                country: r.country,
                city: r.city,
                email: r.email,
                fullName: r.full_name,
                phoneNumber: r.phone_number,
                jobTitle: r.job_title,
                experience: r.years_of_experience
            }
        })
        return newRes;
    }

    async deleteOne(id) {
        const sql = deleteOne;
        const [res] = await this.#connection.execute(sql, [id])
        return +res.affectedRows > 0;
    }

    async updateOne(userData, id) {
        const sql = updateOne;
        const [res] = await this.#connection.execute(sql, [userData.fullName, userData.country, userData.city, userData.email, userData.phoneNumber, userData.jobTitle, userData.experience, id]);
        return +res.affectedRows > 0;
    }

    async addOne(userData) {
        const sql = addOne
        const [res] = await this.#connection.execute(sql, [userData.fullName, userData.country, userData.city, userData.email, userData.phoneNumber, userData.jobTitle, userData.experience]);
        return res.insertId;
    }

}
