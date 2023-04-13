// export function ProductES6() {
//     this.id = '';
//     this.name = '';
//     this.price = 0;
// }

// export const DOMAIN_API = 'http://api.com';

function ProductES6() {
    this.id = '';
    this.name = '';
    this.price = 0;
}

const DOMAIN_API = 'http://api.com';

export {ProductES6, DOMAIN_API};

//exportDefault: trong 1 file chỉ thực hiện được 1 lệnh duy nhất

export default ProductES6;