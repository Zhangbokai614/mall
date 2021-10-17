const Mock = require('mockjs')

const Random = Mock.Random

module.exports = () => {

    let data = Mock.mock({
        goodsInfo: {
            "综合推荐|2-6": [
                {
                    "id|+1": 1,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": Random.image('100x100', '#4A7BF7', 'Mock'),
                    "focus": false,
                    "price|10-80": 80,
                    "marketPrice|15-100": 100
                }
            ],
            "水果|2-6": [
                {
                    "id|+1": 200,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": Random.image('100x100', '#4A7BF7', 'Mock'),
                    "focus": false,
                    "price|10-80": 80,
                    "marketPrice|15-100": 100
                }
            ],
            "生鲜|2-6": [
                {
                    "id|+1": 300,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": Random.image('100x100', '#4A7BF7', 'Mock'),
                    "focus": false,
                    "price|10-80": 80,
                    "marketPrice|15-100": 100
                }
            ],
            "粮油|2-6": [
                {
                    "id|+1": 300,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": Random.image('100x100', '#4A7BF7', 'Mock'),
                    "focus": false,
                    "price|10-80": 80,
                    "marketPrice|15-100": 100
                }
            ],
            "海鲜|1-2": [
                {
                    "id|+1": 300,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": Random.image('200x100', '#4A7BF7', 'focus'),
                    "focus": true,
                    "price|10-80": 80,
                    "marketPrice|15-100": 100
                }
            ],
            "其他|2-6": [
                {
                    "id|+1": 300,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": Random.image('100x100', '#4A7BF7', 'Mock'),
                    "focus": false,
                    "price|10-80": 80,
                    "marketPrice|15-100": 100,
                    "sku":{
                        sku1:'20',
                        sku2:''
                    }
                }
            ],
        },
        "noticebar": ["因部分地区疫情，无法收寄快递影响物流，给您带来的不便敬请谅解，详细了解请联系客服。"],
        "homeImages": {
            "posters": Random.image('200x300', '#fdfdfd', 'posters'),
            "activity": Random.image('200x100', '#fdfdfd', 'posters')
        }
    })

    return data
}