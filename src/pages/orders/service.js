import Request from '../../utils/request';

export const orderInfo = (data) => {
  return Request({
    url: '/order',
    method: 'GET',
    ...data
  });
}

export const goodsInfo = (goodsId, data) => {
  return Request({
    url: '/goods_card?id=' + goodsId,
    method: 'GET',
    ...data
  });
}