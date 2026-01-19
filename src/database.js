export class Database {
  #database = {};

  select(table) {
    const data = this.#database[table] ?? [];

    return data;
  }

  insert(table, data) {
    if (Array.isArray(his.#database[table])) {
      his.#database[table].push(data);
    } else {
      his.#database[table] = [data];
    }

    return data;
  }
}
