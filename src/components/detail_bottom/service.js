import Request from '../../utils/request'
import Taro from '@tarojs/taro';
import { Get } from '../../global-data/index'

export const goodscar = (id, value) => {
    return Request({
        type: 'customize',
        url: 'http://192.168.0.36:8080/api/shibor',
        method: 'POST',
        data: {
            id: id,
            value: value,
        },
    }).then(res => {
        const {
            statusCode,
            data
        } = res;
        if (statusCode >= 200 && statusCode < 300) {
            if (data.status !== 'ok') {
                Taro.showToast({
                    title: Get('languages').detailPage.addSuccessed,
                    icon: 'success',
                    mask: true,
                });
            }
            return data;
        } else {
            Taro.showToast({
                title: 'shibai',
                icon: 'none',
                mask: true,
            });
        }
    });
}

export const getValue = (id, data) => {
    return Request({
        type: 'customize',
        url: 'http://192.168.0.36:8080/api/shibor?id=' + id,
        method: 'GET',
        ...data
    });
}