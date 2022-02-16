import { TOrder, TOrders } from '../services/types';
import { TApiOrders, TApiOrderStatus } from '../services/types/api';

export const order9932: TOrder = {
    id: '6207d6936d7cd8001b2d5a91',
    number: 9932,
    name: 'Традиционный-галактический краторный бургер',
    status: TApiOrderStatus.Done,
    createdAt: new Date('2022-02-12T15:47:31.913Z'),
    updatedAt: new Date('2022-02-12T15:47:32.195Z'),
    ingredients: [
        '60d3b41abdacab0026a733c6',
        '60d3b41abdacab0026a733ce',
        '60d3b41abdacab0026a733c6',
    ],
};

export const order9934: TOrder = {
    id: '6207e1e66d7cd8001b2d5af7',
    number: 9934,
    name: 'Spicy флюоресцентный бургер',
    status: TApiOrderStatus.Pending,
    createdAt: new Date('2022-02-12T16:35:50.383Z'),
    updatedAt: new Date('2022-02-12T16:35:50.614Z'),
    ingredients: [
        '60d3b41abdacab0026a733c7',
        '60d3b41abdacab0026a733cc',
        '60d3b41abdacab0026a733c7',
    ],
};

export const order9935: TOrder = {
    id: '6207e2306d7cd8001b2d5af9',
    number: 9935,
    name: 'Краторный люминесцентный бургер',
    status: TApiOrderStatus.Created,
    createdAt: new Date('2022-02-12T16:37:04.209Z'),
    updatedAt: new Date('2022-02-12T16:37:04.448Z'),
    ingredients: [
        '60d3b41abdacab0026a733c6',
        '60d3b41abdacab0026a733c8',
        '60d3b41abdacab0026a733c6',
    ],
};

export const orders: TOrders = [
    order9935,
    order9934,
    order9932,
];

export const apiOrders: TApiOrders = {
    orders: [
        {
            _id: '6207e2306d7cd8001b2d5af9',
            number: 9935,
            name: 'Краторный люминесцентный бургер',
            status: TApiOrderStatus.Created,
            createdAt: '2022-02-12T16:37:04.209Z',
            updatedAt: '2022-02-12T16:37:04.448Z',
            ingredients: [
                '60d3b41abdacab0026a733c6',
                '60d3b41abdacab0026a733c8',
                '60d3b41abdacab0026a733c6',
            ],
        },
        {
            _id: '6207e1e66d7cd8001b2d5af7',
            number: 9934,
            name: 'Spicy флюоресцентный бургер',
            status: TApiOrderStatus.Pending,
            createdAt: '2022-02-12T16:35:50.383Z',
            updatedAt: '2022-02-12T16:35:50.614Z',
            ingredients: [
                '60d3b41abdacab0026a733c7',
                '60d3b41abdacab0026a733cc',
                '60d3b41abdacab0026a733c7',
            ],
        },
        {
            _id: '6207d6936d7cd8001b2d5a91',
            number: 9932,
            name: 'Традиционный-галактический краторный бургер',
            status: TApiOrderStatus.Done,
            createdAt: '2022-02-12T15:47:31.913Z',
            updatedAt: '2022-02-12T15:47:32.195Z',
            ingredients: [
                '60d3b41abdacab0026a733c6',
                '60d3b41abdacab0026a733ce',
                '60d3b41abdacab0026a733c6',
            ],
        },
    ],
    total: 9848,
    totalToday: 17,
};

export const userApiOrders: TApiOrders = {
    orders: [
        {
            _id: '6207d6936d7cd8001b2d5a91',
            number: 9932,
            name: 'Традиционный-галактический краторный бургер',
            status: TApiOrderStatus.Done,
            createdAt: '2022-02-12T15:47:31.913Z',
            updatedAt: '2022-02-12T15:47:32.195Z',
            ingredients: [
                '60d3b41abdacab0026a733c6',
                '60d3b41abdacab0026a733ce',
                '60d3b41abdacab0026a733c6',
            ],
        },
        {
            _id: '6207e1e66d7cd8001b2d5af7',
            number: 9934,
            name: 'Spicy флюоресцентный бургер',
            status: TApiOrderStatus.Pending,
            createdAt: '2022-02-12T16:35:50.383Z',
            updatedAt: '2022-02-12T16:35:50.614Z',
            ingredients: [
                '60d3b41abdacab0026a733c7',
                '60d3b41abdacab0026a733cc',
                '60d3b41abdacab0026a733c7',
            ],
        },
        {
            _id: '6207e2306d7cd8001b2d5af9',
            number: 9935,
            name: 'Краторный люминесцентный бургер',
            status: TApiOrderStatus.Created,
            createdAt: '2022-02-12T16:37:04.209Z',
            updatedAt: '2022-02-12T16:37:04.448Z',
            ingredients: [
                '60d3b41abdacab0026a733c6',
                '60d3b41abdacab0026a733c8',
                '60d3b41abdacab0026a733c6',
            ],
        },
    ],
    total: 9848,
    totalToday: 17,
};
