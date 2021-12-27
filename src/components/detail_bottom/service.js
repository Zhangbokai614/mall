import Request from '../../utils/request'

export const goodscar = (id, value) => {
    return Request({
        type: 'customize',
        url: 'http://192.168.0.36:8080/api/shibor',
        method: 'POST',
        data: {
            id: id,
            value: value,
        },
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