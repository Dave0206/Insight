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
    const res = await pool.query('SELECT * FROM notification_db.notifications ORDER BY created_at DESC LIMIT 10');
    console.log("LAST 10 NOTIFICATIONS:", res.rows);
  } catch (err) {
    console.error("ERROR:", err.message);
  } finally {
    await pool.end();
  }
}

check();
