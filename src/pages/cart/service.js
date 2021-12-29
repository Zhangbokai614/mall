import Request from '../../utils/request';

export const goodsInfo = (id, data) => {
  return Request({
    url: '/goods_info?id=' + id,
    method: 'GET',
    ...data,
  });
};

export const cart = (data) => {
  return Request({
    url: '/shopping_card',
    method: 'GET',
    ...data,
  });
};
