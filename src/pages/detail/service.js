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
    url: 'http://192.168.0.34:8080/api/shibor',
    method: 'POST',
    data: {
      id: id,
      value: value,
    },
  });
};
