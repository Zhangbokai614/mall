import Request from '../../utils/request';

export const goodsInfo = (id, data) => {
  return Request({
    url: '/goods_info?id=' + id,
    method: 'GET',
    ...data,
  });
};

export const afterSales = (data) => {
  return Request({
    url: '/after_sales',
    method: 'GET',
    ...data,
  });
};

export const activity = (data) => {
  return Request({
    url: '/activity',
    method: 'GET',
    ...data,
  });
};

export const goodscar = (id, value) => {
    return Request({
        type: 'customize',
        url: 'http://192.168.0.36:8080/api/zbk',
        method: 'POST',
        data: {
            id: id,
            value: value,
        }
    });
}

export const address = ( data) => {
    return Request({
        url: '/order',
        method: 'GET',
        ...data
    });
}
