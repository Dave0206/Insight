const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '102042400109',
  host: 'localhost',
  port: 5432,
  database: 'insight_db',
});

async function check() {
  try {
    const posts = await pool.query('SELECT * FROM post_db.posts LIMIT 5');
    console.log("POSTS:", posts.rows);
    
    const comments = await pool.query('SELECT * FROM comment_db.comments LIMIT 5');
    console.log("COMMENTS:", comments.rows);
  } catch (err) {
    console.error("ERROR:", err.message);
  } finally {
    await pool.end();
  }
}

check();
