const gwritePurchase = require('./give/gwrite-purchase');

async function process() {
    await gwritePurchase.process();
}

module.exports = {
    process,
};
