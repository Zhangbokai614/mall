const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = () => {
    let data = Mock.mock({
        focus: [
            {
                'id|+1': 1,
                title: '@csentence',
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                'price|10-80': 80,
                'inventory|0-10000': 10000,
                activity_name: '限时促销',
            },
        ],
        'goods_card|1-8': [
            {
                'id|+1': 1,
                title: '@csentence',
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                'price|10-80': 80,
                'inventory|0-10000': 10000,
                activity_name: '爆款秒杀',
            },
            {
                'id|+1': 200,
                title: '@csentence',
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                'price|10-80': 80,
                'inventory|0-10000': 10000,
                activity_name: '精品热卖',
            },
            {
                'id|+1': 300,
                title: '@csentence',
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624966034-assets/web-upload/62065657-0c31-43f8-87be-32fe1bcedc6e.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                'price|10-80': 80,
                'inventory|0-10000': 10000,
                activity_name: '限时促销',
            },
            {
                'id|+1': 400,
                title: '@csentence',
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624970549-assets/web-upload/1feeadb1-9f70-4df2-89e8-90afb12cfa15.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                'price|10-80': 80,
                'inventory|0-10000': 10000,
                activity_name: 'null',
            },
            {
                'id|+1': 500,
                title: '@csentence',
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624977744-assets/web-upload/680da5d6-7802-42be-8d12-29f3e28c9882.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                'price|10-80': 80,
                'inventory|0-10000': 10000,
                activity_name: '爆款秒杀',
            },
            {
                'id|+1': 600,
                title: Random.csentence(),
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624973974-assets/web-upload/922f160e-4682-46a5-a11f-49cc55a263a0.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                'price|10-80': 80,
                'inventory|0-10000': 10000,
                activity_name: '限时促销',
            },
            {
                'id|+1': 600,
                title: Random.csentence(3, 5),
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624973974-assets/web-upload/922f160e-4682-46a5-a11f-49cc55a263a0.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                'price|10-80': 80,
                'inventory|0-10000': 10000,
                activity_name: '精品推荐',
            },
        ],
        'goods_info|1-8': [
            {
                'id|+1': 1,
                title: '@csentence',
                'inventory|0-10000': 10000,
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                detailImages: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg',
                ],
                'price|10-80': 80,
                'weight|1-4': 2,
                specs: '6 斤装',
                activity_code: '1000001',
            },
            {
                'id|+1': 200,
                title: '@csentence',
                'inventory|0-10000': 10000,
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                detailImages: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg',
                ],
                'price|10-80': 80,
                specs: '4 斤装',
                activity_code: '1000002',
            },
            {
                'id|+1': 300,
                title: '@csentence',
                'inventory|0-10000': 10000,
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                detailImages: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg',
                ],
                'price|10-80': 80,
                specs: '2 斤装',
                activity_code: '1000003',
            },
            {
                'id|+1': 400,
                title: '@csentence',
                'inventory|0-10000': 10000,
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                detailImages: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg',
                ],
                'price|10-80': 80,
                specs: '7 斤装',
                activity_code: 'null',
            },
            {
                'id|+1': 500,
                title: '@csentence',
                'inventory|0-10000': 10000,
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                detailImages: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg',
                ],
                'price|10-80': 80,
                'weight|1-4': 2,
                specs: '10 斤装',
                activity_code: '1000004',
            },
            {
                'id|+1': 600,
                title: Random.csentence(3, 5),
                'inventory|0-10000': 10000,
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg',
                ],
                detailImages: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg',
                ],
                'price|10-80': 80,
                'weight|1-4': 2,
                specs: '10 斤装',
                activity_code: 'null',
            }
        ],
        "features": [
            {
                title: '保定市扶贫基地',
                time: '2021-12-14',
                images: [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg',
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg',
                ],
            }
        ],
        "order": [
            {
                order_code: '00000000001',
                order_state: '01',
                payment_time: Mock.mock('@datetime()'),
                payment_type: '微信支付',
                order_time: Mock.mock('@datetime()'),
                goods_id: 1,
                specs: '1 斤装',
                "number|1-10": 3,
                "cost": 42,
                "image": 'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624977744-assets/web-upload/680da5d6-7802-42be-8d12-29f3e28c9882.jpeg',
                "title": '@csentence',
                "postage": 0,
                "commodityPrice": 45,
                "orderLumpSum": 45,
                "limitDiscounts": -3,
                name: '吴某',
                mobile: '55555555555',
                address: '河北省保定市莲池区未来石',
                activity_code: '1000000',
            },
            {
                order_code: '00000000002',
                order_state: '02',
                payment_time: Mock.mock('@datetime()'),
                payment_type: '微信支付',
                order_time: Mock.mock('@datetime()'),
                goods_id: 200,
                specs: '3 斤装',
                "number|1-10": 3,
                "cost": 51,
                "image": 'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg',
                "title": '@csentence',
                "postage": 3,
                "commodityPrice": 55,
                "orderLumpSum": 58,
                "limitDiscounts": -7,
                name: '赵某',
                mobile: '44444444444',
                address: '河北省保定市莲池区未来石',
                activity_code: '1000003',
            },
            {
                order_code: '00000000003',
                order_state: '03',
                payment_time: Mock.mock('@datetime()'),
                payment_type: '微信支付',
                order_time: Mock.mock('@datetime()'),
                goods_id: 300,
                specs: '5 斤装',
                "number|1-10": 3,
                "cost": 12,
                "image": 'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                "title": '@csentence',
                "postage": 3,
                "commodityPrice": 15,
                "orderLumpSum": 18,
                "limitDiscounts": -6,
                name: '刘某',
                mobile: '33333333333',
                address: '河北省保定市莲池区未来石',
                activity_code: '1000002',
            },
            {
                order_code: '00000000004',
                order_state: '04',
                payment_time: Mock.mock('@datetime()'),
                payment_type: '微信支付',
                order_time: Mock.mock('@datetime()'),
                goods_id: 400,
                specs: '1 斤装',
                "number|1-10": 3,
                "cost": 27,
                "image": 'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg',
                "title": '@csentence',
                "postage": 0,
                "commodityPrice": 30,
                "orderLumpSum": 30,
                "limitDiscounts": -3,
                name: '张某',
                mobile: '22222222222',
                address: '河北省保定市莲池区未来石',
                activity_code: '1000001',
            },
            {
                order_code: '00000000005',
                order_state: '06',
                payment_time: Mock.mock('@datetime()'),
                payment_type: '微信支付',
                order_time: Mock.mock('@datetime()'),
                goods_id: 500,
                specs: '10 斤装',
                "number|1-10": 3,
                "cost": 39,
                "image": 'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624966034-assets/web-upload/62065657-0c31-43f8-87be-32fe1bcedc6e.jpeg',
                "title": '@csentence',
                "postage": 4,
                "commodityPrice": 35,
                "orderLumpSum": 39,
                "limitDiscounts": 0,
                name: '王某',
                mobile: '11111111111',
                address: '河北省保定市莲池区未来石',
                activity_code: '1000000',
            },
        ],
        waybill: [
            {
                order_code: '00000000001',
                "openid": "OPENID",
                "delivery_name": "顺丰",
                order_state: '01',
                "waybill_id": "12345678901234567890",
                "path_item_num": 3,
                "path_item_list": [
                    {
                        "action_time": 1639308005000,
                        "action_type": 100001,
                        "action_msg": "快递员已成功取件"
                    },
                    {
                        "action_time": 1639383005000,
                        "action_type": 200001,
                        "action_msg": "快件已到达xxx集散中心，准备发往xxx"
                    },
                    {
                        "action_time": 1639454885000,
                        "action_type": 300001,
                        "action_msg": "快递员已出发，联系电话xxxxxx"
                    }
                ]
            },
            {
                order_code: '00000000002',
                "openid": "OPENID",
                "delivery_name": "顺丰快递",
                "order_state": '02',
                "waybill_id": "12345678901234567890",
                "path_item_num": 3,
                "path_item_list": [
                    {
                        "action_time": 1639308005000,
                        "action_type": 100001,
                        "action_msg": "快递员已成功取件"
                    },
                    {
                        "action_time": 1639383005000,
                        "action_type": 200001,
                        "action_msg": "快件已到达xxx集散中心，准备发往xxx"
                    },
                    {
                        "action_time": 1639454885000,
                        "action_type": 300001,
                        "action_msg": "快递员已出发，联系电话xxxxxx"
                    }
                ]
            },
            {
                order_code: '00000000003',
                "openid": "OPENID",
                "delivery_name": "顺丰快递",
                "order_state": '03',
                "waybill_id": "12345678901234567890",
                "path_item_num": 3,
                "path_item_list": [
                    {
                        "action_time": 1639308005000,
                        "action_type": 100001,
                        "action_msg": "快递员已成功取件"
                    },
                    {
                        "action_time": 1639383005000,
                        "action_type": 200001,
                        "action_msg": "快件已到达xxx集散中心，准备发往xxx"
                    },
                    {
                        "action_time": 1639454885000,
                        "action_type": 300001,
                        "action_msg": "快递员已出发，联系电话xxxxxx"
                    }
                ]
            },
            {
                order_code: '00000000004',
                "openid": "OPENID",
                "delivery_name": "顺丰快递",
                "order_state": '04',
                "waybill_id": "12345678901234567890",
                "path_item_num": 3,
                "path_item_list": [
                    {
                        "action_time": 1639308005000,
                        "action_type": 100001,
                        "action_msg": "快递员已成功取件"
                    },
                    {
                        "action_time": 1639383005000,
                        "action_type": 200001,
                        "action_msg": "快件已到达xxx集散中心，准备发往xxx"
                    },
                    {
                        "action_time": 1639454885000,
                        "action_type": 300001,
                        "action_msg": "快递员已出发，联系电话xxxxxx"
                    }
                ]
            },
            {
                order_code: '00000000005',
                "openid": "OPENID",
                "delivery_name": "顺丰快递",
                "order_state": '06',
                "waybill_id": "12345678901234567890",
                "path_item_num": 3,
                "path_item_list": [
                    {
                        "action_time": 1639308005000,
                        "action_type": 100001,
                        "action_msg": "快递员已成功取件"
                    },
                    {
                        "action_time": 1639383005000,
                        "action_type": 200001,
                        "action_msg": "快件已到达xxx集散中心，准备发往xxx"
                    },
                    {
                        "action_time": 1639454885000,
                        "action_type": 300001,
                        "action_msg": "快递员已出发，联系电话xxxxxx"
                    }
                ]
            }
        ],
        "banner": ['https://cdn.nlark.com/yuque/0/2021/png/660331/1634622259552-assets/web-upload/268743d4-25d3-4753-8442-e1759a3e22e0.png'],
        "after_sales": {
            "detail": '折扣价：为折扣期间的价格如果没有特殊说明，折扣是在原价基础上计算出的优惠比例或者优惠金额；如果有疑问您可以在购买前询问客服。',
            "free": '：包邮不包含偏远地区及海外地区。',
        },
        'shopping_card|10-20': [
            {
                select: false,
                'number|50-80': 66,
                'maximum_inventory|300-600': 400,
                'price|20-100': 70,
                'id|+37': 258963,
                link: Random.image('640x640', Mock.mock('@color'), Random.string('upper', 5)),
                title: Mock.mock('@csentence'),
                specs: Mock.mock('@csentence(5)'),
            },
        ],
        activity: [
            {
                activity_code: '1000000',
                activity_name: '限时折扣',
                start_time: '2021-12-12 01:25:30',
                end_time: '2021-12-30 01:00:00',
                discount: 0.8,
                over: false
            },
            {
                activity_code: '1000001',
                activity_name: '限时促销',
                start_time: '2021-12-12 01:25:30',
                end_time: '2022-01-10 01:00:00',
                discount: 0.7,
                over: false
            },
            {
                activity_code: '1000002',
                activity_name: '爆款热卖',
                start_time: '2021-12-10 01:25:30',
                end_time: '2021-12-20 01:00:00',
                discount: 0.6,
                over: false
            },
            {
                activity_code: '1000003',
                activity_name: '限时折扣',
                start_time: '2021-12-01 01:25:30',
                end_time: '2021-12-13 01:00:00',
                discount: 0.9,
                over: true
            },
        ]
    });

    return data;
};
