import Request from '../../utils/request'

export const goodsInfo = (id, data) => {
    return Request({
        url: '/goods_info?id=' + id,
        method: 'GET',
        ...data
    });
}

export const afterSales = ( data) => {
    return Request({
        url: '/after_sales_detail',
        method: 'GET',
        ...data
    });
}

export const afterSalesFree = ( data) => {
    return Request({
        url: '/after_sales_free',
        method: 'GET',
        ...data
    });
}

