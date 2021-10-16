import Taro from '@tarojs/taro';
import { baseUrl } from '../config/index';

export default (options = { method: 'GET', data: {} }) => {

    return Taro.request({
        url: baseUrl + options.url,

        data: {
            ...options.data,
        },

        header: {
            'Content-Type': 'application/json',
        },

        method: options.method.toUpperCase(),
    })
}
