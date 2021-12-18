import Taro from '@tarojs/taro';
import { baseUrl } from '../config/index';

export default async (options = { type: 'wx', method: 'GET', data: {} }) => {

    let url = baseUrl + options.url

    if (options.type == 'customize') {
        url = options.url
    }

    return await Taro.request({

        url: url,

        data: {
            ...options.data,
        },

        header: {
            'Content-Type': 'application/json',
        },

        method: options.method.toUpperCase(),
    })
}
