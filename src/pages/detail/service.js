import Request from '../../utils/request'

export const goodsInfo = (data) => {
    console.log('xxx')
    return Request({
        url: '/goodsInfo',
        method: 'GET',
        ...data
    });
}