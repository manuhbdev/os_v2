class Indexed_DB {
  constructor(dbName, storeName) {
    this.dbName = dbName;
    this.storeName = storeName;
  }

  async openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => reject('Error opening IndexedDB');
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore(this.storeName, { keyPath: 'idb' });
      };
      request.onsuccess = (event) => resolve(event.target.result);
    });
  }

  async addData(data) {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readwrite');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.add(data);

      request.onerror = () => reject('Error adding data to IndexedDB');
      request.onsuccess = () => resolve('Data added successfully');
    });
  }

  async getData(key) {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readonly');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.get(key);

      request.onerror = () => reject('Error fetching data from IndexedDB');
      request.onsuccess = () => resolve(request.result);
    });
  }

  async updateData(key, newData) {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readwrite');
      const objectStore = transaction.objectStore(this.storeName);
      const putRequest = objectStore.put(newData);
      putRequest.onerror = () => reject('Error updating data in IndexedDB');
      putRequest.onsuccess = () => resolve('Data updated successfully');
    });
  }

  async deleteData(key) {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readwrite');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.delete(key);

      request.onerror = () => reject('Error deleting data from IndexedDB');
      request.onsuccess = () => resolve('Data deleted successfully');
    });
  }
}

export const idb = new Indexed_DB('os_db', 'state');
