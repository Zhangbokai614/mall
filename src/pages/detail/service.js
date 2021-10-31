import Request from '../../utils/request'

export const goodsInfo = (id, data) => {
    return Request({
        url: '/goods_info?id=' + id,
        method: 'GET',
        ...data
    });
}