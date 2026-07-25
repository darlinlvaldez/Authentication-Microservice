import db from '../databases/mysql.js';

const user = {};

// Crea un nuevo usuario
user.create = async ({ id, username, password, email }) => {
    await db.pool.query(
        `INSERT INTO users (id, username, password, email, enabled) VALUES (?, ?, ?, ?, 1)`,
        [id, username, password, email]
    );
    return await user.getOne(username)
};

// Busca usuario por nombre
user.getOne = async (username, email) => {
    const [result] = await db.pool.query(
        `SELECT * FROM users WHERE username = ? OR email = ?`,
        [username, email]
    );
    const user = result;
    return user || null;
};

export default user;