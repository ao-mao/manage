<template>
    <div class="home">
        <el-row>
            <el-col :span="8" style="padding-right:10px">
                <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/user.jpeg" alt="">

                        <div class="user-info">
                            <p class="name">Admin</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登录时间：<span>2022-1-11</span></p>
                        <p>上次登录地点：<span>广州</span></p>
                    </div>
                </el-card>
                <el-card style="margin-top:20px;height: 53vh;">
                    <el-table :data="tableData" style="width: 100%">
                        <!-- <el-table-column prop="name" label="品牌">
                    </el-table-column>
                    <el-table-column prop="todayBuy" label="今天购买">
                    </el-table-column>
                    <el-table-column prop="monthBuy" label="本月购买">
                    </el-table-column>
                    <el-table-column prop="totalBuy" label="总共购买">
                    </el-table-column> -->
                        <!-- :key="key"不加会发出警告 -->
                        <el-table-column v-for="(val, key) in tableLabel" :prop="key" :label="val" :key="key" />
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="16" style="padding-left:10px">
                <div class="num">
                    <el-card class="num-card" v-for="item in contData" :key="item.name"
                        :body-style="{ display: 'flex', padding: '0' }">
                        <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                        <div class="detail">
                            <p class="price">￥{{ item.value }}</p>
                            <p class="desc">{{ item.name }}</p>
                        </div>
                    </el-card>
                </div>
                <el-card style="height:35vh">
                    <!-- 折线图     -->
                    <!-- ref="echarts1" 可以根据this.$ref获取该dom -->
                    <div ref="echarts1" style="height: 35vh;"></div>
                </el-card>
                <div class="graph">
                    <el-card>
                        <div ref="echarts2" style="height: 26vh;">

                        </div>
                    </el-card>
                    <el-card>
                        <div ref="echarts3" style="height: 26vh;">

                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// 导入数据
import { getData } from "../api";
// 导入echarts库
import * as echarts from 'echarts'
export default {
    data() {
        return {
            tableData: [],
            tableLabel: {
                name: '品牌',
                todayBuy: '今天购买',
                monthBuy: '本月购买',
                totalBuy: '总共购买'
            },
            contData: [
                {
                    name: '今日支付订单',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: '今日收藏订单',
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980"
                },
                {
                    name: '今日未支付订单',
                    value: 1234,
                    icon: "goods",
                    color: "#5ab1ef"
                },
                {
                    name: '本月支付订单',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: '本月收藏订单',
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980"
                },
                {
                    name: '本月未支付订单',
                    value: 1234,
                    icon: "goods",
                    color: "#5ab1ef"
                }
            ]
        };
    },
    mounted() {
        getData().then(({ data }) => {
            const { tableData, userDate, orderData,videoData } = data.data
            console.log(data,'getData');
            this.tableData = tableData

            //   获取dom相关的内容，根据vue的生命周期，应该在mounted里进行
            // 初始化echarts图例
            const echarts1 = echarts.init(this.$refs.echarts1)
            // 指定图表的配置项和数据
            var echarts1Option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            }
            // 处理x轴数据
            const xAxis = Object.keys(orderData.data[0])
            echarts1Option.xAxis = {
                data: orderData.date
            }
            echarts1Option.yAxis = {}
            echarts1Option.legend = {
                data: xAxis
            }
            echarts1Option.series = []
            xAxis.forEach(key => {
                echarts1Option.series.push({
                    name: key,
                    data: orderData.data.map(item => item[key]),
                    type: 'line'
                })
            })
            echarts1.setOption(echarts1Option)


            //柱状图
            // 初始化echarts图例
            const echarts2 = echarts.init(this.$refs.echarts2)
            // 指定图表的配置项和数据
            var echarts1Option = {}
            //   制作数据
            const echarts2Option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: userDate.map(item => item.date)
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '新增用户',
                        data: userDate.map(item => item.new),
                        type: 'bar',
                        showBackground: false,

                    }, {
                        name: '活跃用户',
                        data: userDate.map(item => item.active),
                        type: 'bar',
                    }
                ]
            };
            echarts2.setOption(echarts2Option)


            // 饼状图
            const echarts3 = echarts.init(this.$refs.echarts3)
            const echarts3Option = {
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        type: 'pie',
                        radius: '80%',//显示面积
                        data:videoData,

                    }
                ]
            };
            echarts3.setOption(echarts3Option)
        })
        console.log('this.tableData',this.tableData);
    }
}
</script>

<style lang="less" scoped>
.home {
    margin: 20px;
}

.box-card {
    padding: 20px;

    .user {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;

        img {
            margin-right: 40px;
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }

        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: #999999;
        }
    }
}


.login-info {
    p {
        font-size: 14px;
        line-height: 28px;
        color: #999999;

        span {
            margin-left: 60px;
        }
    }

}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .num-card {

        width: 32%;
        margin-bottom: 20px;

        i {
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
            color: #fff;
        }

        .detail {
            margin-left: 25px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .price {
                font-size: 30px;
                margin-bottom: 10px;
                line-height: 30px;
                height: 30px;
            }

            .desc {
                font-size: 14px;
                color: #999;
                align-items: center;
            }
        }
    }
}

.graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .el-card {
        width: 49%;
        height: 30vh;
    }
}
</style>