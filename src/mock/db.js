const Mock = require('mockjs')

const Random = Mock.Random;

function classItem() {
    const classItem = Mock.mock({
        "item|1-5": [
            "综合推荐",
            "生鲜",
            "水果",
            "米面粮油",
            "特色产品"
        ]
    })
    console.log(classItem)
    return classItem.item[classItem.item.length - 1]
}

module.exports = () => {

    console.log(classItem.item)

    const data = Mock.mock({
        "test|1-100": [
            {
                "id|+1": 1,
                "title": '@csentence',
                "classItem": classItem(),
                "inventory|0-10000": 10000,
                images: Random.image('200x100', '#4A7BF7', 'Mock'),
                "price|10-80": 80,
                "marketPrice|15-100": 100
            }
        ]
    })
    return data
}