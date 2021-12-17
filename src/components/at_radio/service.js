import Request from '../../utils/request'

export const goodscar = (id, value) => {
    return Request({
        type: 'customize',
        url: 'http://192.168.0.36:8080/api/shibor',
        method: 'GET',
        data: {
            id: id,
            value: value,
        }
    });
}