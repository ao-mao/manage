import Mock from 'mockjs'

let List = []
export default {
    getStatisticalData :() =>{
        // Mock.Random.float 产生的随机数100 到8000之间，保留小数最小0位，最大0位
        for(let i = 0; i<7 ; i++){
            List.push(
                Mock.mock({
                    苹果:Mock.Random.float(100,8000,0,0),
                    vivo:Mock.Random.float(100,8000,0,0),
                    oppo:Mock.Random.float(100,8000,0,0),
                    小米:Mock.Random.float(100,8000,0,0),
                    华为:Mock.Random.float(100,8000,0,0),
                    三星:Mock.Random.float(100,8000,0,0),
                })
            )
        }
        return{
            code:20000,
            data:{
                //饼图
                videoData:[
                    {
                        name:'小米',
                        value:2999
                    },
                    {
                        name:'苹果',
                        value:5999
                    },
                    {
                        name:'vivo',
                        value:1500
                    },
                    {
                        name:'oppo',
                        value:1999
                    },
                    {
                        name:'华为',
                        value:4999
                    },
                    {
                        name:'三星',
                        value:5500
                    }
                ],
                userDate:[
                    {
                        date:'周一',
                        new:5,
                        active:200
                    },
                    {
                        date:'周二',
                        new:12,
                        active:550
                    },
                    {
                        date:'周三',
                        new:8,
                        active:400
                    },
                    {
                        date:'周四',
                        new:9,
                        active:450
                    },
                    {
                        date:'周五',
                        new:14,
                        active:700
                    },
                    {
                        date:'周六',
                        new:12,
                        active:600
                    },
                    {
                        date:'周日',
                        new:16,
                        active:800
                    },
                ],
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: '小米',
                        todayBuy: 130,
                        monthBuy: 1250,
                        totalBuy: 12000
                    },
                    {
                        name: '华为',
                        todayBuy: 300,
                        monthBuy: 1600,
                        totalBuy: 19000
                    },
                    {
                        name: 'vivo',
                        todayBuy: 200,
                        monthBuy: 300,
                        totalBuy: 600
                    },
                    {
                        name: '苹果',
                        todayBuy: 300,
                        monthBuy: 1500,
                        totalBuy: 17500
                    },
                    {
                        name: '三星',
                        todayBuy: 200,
                        monthBuy: 1250,
                        totalBuy: 15000
                    },

                ],
                orderData:
                {
                    data: [
                        {
                            苹果:2493,vivo:3031,oppo:3931,魅族:7329,三星:4859,小米:5999,华为:6999
                        },
                        {
                            苹果:1193,vivo:4031,oppo:3431,魅族:6329,三星:2859,小米:6999,华为:7999
                        },
                        {
                            苹果:1234,vivo:5461,oppo:3199,魅族:4512,三星:4399,小米:1999,华为:5989
                        },
                        {
                            苹果:3514,vivo:1353,oppo:4855,魅族:2850,三星:6559,小米:6545,华为:1564
                        },
                        {
                            苹果:4855,vivo:5645,oppo:8785,魅族:4153,三星:4548,小米:7841,华为:4895
                        },
                        {
                            苹果:3423,vivo:3123,oppo:4234,魅族:7643,三星:4267,小米:5323,华为:5437
                        },
                        {
                            苹果:9657,vivo:4231,oppo:3443,魅族:5467,三星:5467,小米:9866,华为:7898
                        }
                    ],
                    date:['20220112','20220113','20220114','20220115','20220116','20220117','20220118']
                }
            }

        }
    }
}