const db = require('../config/db.sql');

const postRepository = {
    findAll,
    findById
};

// GET all ads
async function findAll() {
    const [rows] = await db.execute('SELECT * FROM Post');
    return rows;
}

// GET by id
async function findById(id) {

    const [rows] = await db.execute(
        'SELECT * from Post WHERE id = ? ',
        [id]
    )
    return rows;
}

// finaliser version fléché
// version fléché
/* GET : all posts
export const findAll = async () => {
  const [rows] = await db.execute('SELECT * FROM Post');
  return rows;
}*/

/* GET by id
export const findById = async () => {

    const [rows] = await db.execute(
        'SELECT * from Post WHERE id = ? ',
        [id]
    )
    return rows;
}
*/

module.exports = postRepository;