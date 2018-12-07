const dedent = require('dedent-js');
const FileSys = require('../lib/filesys');

const FILE_PATH = 'td_wp_booster_functions.php';

function getTextToAdd() {
    const text = dedent`
        case 'alphabetical_order':
            $query->set('orderby', 'title');
            $query->set('order', 'ASC');
            break;
        `;
    return text;
}

// TODO find line to add text
async function addPurchaseFunc() {
    const updFile = new FileSys(FILE_PATH);
    await updFile.init();
    // get line and add data
    const dataArr = updFile.arrData;
    // add func
    const index = dataArr.findIndex(a => a.includes(''));
    const indexBegin = dataArr.indexOf('', index);
    updFile.addAtIndex(indexBegin + 1, getTextToAdd());
    // write
    await updFile.save();
}

async function process() {
    await addPurchaseFunc();
}

module.exports = {
    process,
};
