const FileSys = require('../lib/filesys');

const FILE_PATH = './src/test/td_category_template.php';

function getTextToAdd() {
    const text = '\t\t\tarray(\'id\' => \'alphabetical_order\' , \'value\' => esc_url(add_query_arg(\'filter_by\', \'alphabetical_order\', $this->current_category_link)), \'caption\' => __td(\'Alphabétique\', TD_THEME_NAME)),';
    return text;
}

async function addAlphabeticalOrder() {
    const updFile = new FileSys(FILE_PATH);
    await updFile.init();
    // get line and add data
    const dataArr = updFile.arrData;
    // add func
    const index = dataArr.findIndex(a => a.includes('$td_category_big_grid_drop_down_filter_options = array('));
    if (index <= 0) {
        throw new Error('[newspaper] Can\'t find line to insert Alphabetical Order');
    }
    updFile.addAtIndex(index + 2, getTextToAdd());
    // write
    await updFile.save();
}

async function process() {
    await addAlphabeticalOrder();
}

module.exports = {
    process,
};
