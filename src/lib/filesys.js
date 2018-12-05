const fsp = require('fs').promises;

class FileSys {
    constructor(filePath) {
        this.path = filePath;
        this.arrData = [];
    }

    async init() {
        return this.initFileContentArray();
    }

    async readAync() {
        try {
            const fileData = await fsp.readFile(this.path);
            return fileData.toString();
        } catch (err) {
            throw err;
        }
    }

    async writeAsync(data) {
        try {
            await fsp.writeFile(this.path, data);
        } catch (err) {
            throw err;
        }
    }

    async initFileContentArray() {
        const data = await this.readAync();
        this.arrData = data.split('\n');
    }

    async saveFileContentArray() {
        await this.writeAsync(this.arrData.join('\n'));
    }

    async save() {
        await this.saveFileContentArray();
        console.log(`${this.path} successfully updated`);
    }

    addAtIndex(index, ...data) {
        this.arrData.splice(index, 0, ...data);
    }
}

module.exports = FileSys;
