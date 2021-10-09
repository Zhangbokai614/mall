const Mock = require('mockjs')
const Random = Mock.Random

module.exports = () => {
    const data = Mock.mock({
            "test|1-100": [
                {
                "id|+1": 1,
                "title": '@csentence',
                "inventory|0-10000": 10000,
                images: Random.image('200x100', '#4A7BF7', 'Mock'),
                "price|10-80": 80,
                "marketPrice|15-100": 100
                }
            ]
        })
    return data
}