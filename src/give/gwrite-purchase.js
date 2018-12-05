const dedent = require('dedent-js');
const FileSys = require('../lib/filesys');

const FILE_PATH = './src/test/class-give-donors-query.php';

function getTextToAdd() {
    const text = dedent`
        private function get_where_min_purchase() {
            $where = '';
    
            if ( ! empty( $this->args['min_purchase'] ) ) {
                $min_purchase = $this->args['min_purchase'];
    
                $where .= " AND {$this->table_name}.purchase_value >= '{$min_purchase}' ";
            }
    
            return $where;
        }`;
    return text;
}

async function addPurchaseFunc() {
    const giveDonorFile = new FileSys(FILE_PATH);
    await giveDonorFile.init();
    // get line and add data
    const dataArr = giveDonorFile.arrData;
    // add func
    const index = dataArr.findIndex(a => a.includes('private function get_where_date()'));
    const indexBegin = dataArr.indexOf('\t}', index);
    giveDonorFile.addAtIndex(indexBegin + 2, getTextToAdd(), '\t');
    // add query
    const indexQuery = dataArr.findIndex(a => a.includes('$where[] = $this->get_where_date();'));
    giveDonorFile.addAtIndex(indexQuery + 1, '\t\t$where[] = $this->get_where_min_purchase();');
    // write
    await giveDonorFile.save();
}

async function process() {
    await addPurchaseFunc();
}

module.exports = {
    process,
};
