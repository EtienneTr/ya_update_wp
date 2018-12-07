const writeAlphaOrder = require('./nwrite-alphabetical-order');
const writeAlphaQuery = require('./nwrite-booster');

async function process() {
    await writeAlphaOrder.process();
    await writeAlphaQuery.process();
}

module.exports = process;
