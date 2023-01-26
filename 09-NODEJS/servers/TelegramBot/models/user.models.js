const create = ({ telegram_id, is_bot = false, first_name = '', last_name = '', username = '', lenguage_code = '', is_premium = false }) => {
  return db.query('insert into users (telegram_id, is_bot, first_name, last_name , username , lenguage_code , is_premium) values (?,?,?,?,?,?,?)', [telegram_id, is_bot, first_name, last_name, username, lenguage_code, is_premium])
}

module.exports = {
  create
}