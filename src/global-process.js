const writeAlphabetical = require('./newspaper/process');

async function process() {
    await writeAlphabetical();
}

module.exports = {
    process,
};
