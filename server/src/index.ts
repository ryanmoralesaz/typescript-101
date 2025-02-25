import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
app.use(express.json());

// Example route
app.get('/', async (req, res) => {
  res.send('Hello from Express + SQLite + TypeScript!');
});

// SQLite setup
let db: any;
(async () => {
  db = await open({
    filename: 'database.db',
    driver: sqlite3.Database
  });
  await db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
})();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
