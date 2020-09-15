const mysql = require('./connection');

const orm = {
    selectAll: async () => {
        const connection = await mysql.connect();
        const [data] = await connection.query(`SELECT * FROM burgers;`);
        return data;
    },
    insertOne: async (newBurger) => {
        const connection = await mysql.connect();
        const [data] = await connection.query(`INSERT INTO burgers SET ?`, newBurger);
        return data;
    },
    updateOne: async (id, newBurger) => {
        const connection = await mysql.connect();
        const [data] = await connection.query(`UPDATE burgers SET ? WHERE (id = ?)`, [newBurger, id]);
        return data;
    },
    deleteOne: async (id) => {
        const connection = await mysql.connect();
        const [data] = await connection.query(`DELETE FROM burgers WHERE id = ?`, id);
        return data;
    }
};

module.exports = orm;