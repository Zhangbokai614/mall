import Request from '../../utils/request'

export const goodsInfo = (data) => {
    return Request({
        url: '/goodsInfo',
        method: 'GET',
        ...data
    });
}