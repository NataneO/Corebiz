import axios from 'axios';

const BASE_URL = 'https://corebiz-test.herokuapp.com/api/v1';
const withBaseUrl = (path) => `${BASE_URL}${path}`

export class ProductsService {

    static getProduct() {
        /* chama o axios, oferecendo como parametro o whitBaseUrl*/
        /* chama o withBaseUrl, oferecendo como parametro o tipo de filme */
        console.log(axios(withBaseUrl('/products')))
        return axios(withBaseUrl('/products'))
    }

}

