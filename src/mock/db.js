const Mock = require('mockjs')

const Random = Mock.Random

module.exports = () => {

    let data = Mock.mock({
        'goodsinfo|50-100': [
            {
                "id|+1": 1,
                "title": '@csentence',
                "classItem": 'temp',
                "inventory|0-10000": 10000,
                images: Random.image('200x100', '#4A7BF7', 'Mock'),
                "price|10-80": 80,
                "marketPrice|15-100": 100
            }
        ],
        'noticebar': ['因部分地区疫情，无法收寄快递影响物流，给您带来的不便敬请谅解，详细了解请联系客服。'],
        'images': [Random.image('200x400', '#4A7BF7', 'Mock')]
    })

    return data
}