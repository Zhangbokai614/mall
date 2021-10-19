import Taro from '@tarojs/taro';
import { baseUrl } from '../config/index';

export default async (options = { method: 'GET', data: {} }) => {

    return await Taro.request({
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
