const db = require("../db/dbConfig");

async function getSongsFromAlbum(id) {
  const songs = await db.any("SELECT * FROM songs WHERE id= $1", id);
  return songs;
}

module.exports = { getSongsFromAlbum };
