import Request from '../../utils/request';

export const goodsCardInfo = (data) => {
  return Request({
    url: '/goods_card',
    method: 'GET',
    ...data
  });
}

export const focus = (data) => {
  return Request({
    url: '/focus',
    method: 'GET',
    ...data
  });
}

export const homeImages = (data) => {
  return Request({
    url: '/home_images',
    method: 'GET',
    ...data
  });
}