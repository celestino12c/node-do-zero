import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos, video, videos2;` .then(() => {
//   console.log("Tabela apagada")
// })

sql `
  CREATE TABLE videos (
    id            TEXT PRIMARY KEY NOT NULL,
    title         TEXT,
    description   TEXT,
    duration        INTEGER
  );

`.then(() => {
  console.log("Tabela criada!")
})