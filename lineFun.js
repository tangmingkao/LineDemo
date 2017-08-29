/**
 * Created by Administrator on 2017/8/29.
 */

/**
 * Created by ex-tangmingkao001 on 17/8/22.
 */

define([
    "Zepto",
    "echarts"
], function($,echarts) {
    "use strict";
    //
    var lineFun = {
        linefun: function(elem,options) {
            var targetElem;
            //做一个兼容,看下是否是原生dom对象还是zepto对象.echarts创建是针对原生dom的,如果是zepto对象需要转换.
            if(elem instanceof HTMLElement){
                targetElem = elem;
            } else {
                targetElem = elem[0];
            }

            //默认配置
            var settings = {
                title: {
                    show: true,
                    text: '折线图',
                    link: 'line',
                    target: 'blank',
                    textStyle: {
                        color: '#333',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: 18

                    }
                },
                //全局调色盘
                color: ['#e53f4b', '#e58a1f', '#983ac3', '#d31c85', '#5848a7', '#26a576', '#0066ff', '#00ccdd', '#e17413','#20a6ab'],
                //图例组件。图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
                legend: {
                    show: true,
                    type: 'plain',
                    bottom: '3%',
                    left: '5%',
                    orient: 'horizontal',
                    formatter: '{name}',
                    data: [
                        {
                            name: '无抵押',
                            icon: 'circle',
                            textStyle: {
                                color: 'black'
                            }
                        },
                        {
                            name: '有抵押',
                            icon: 'circle',
                            textStyle: {
                                color: 'black'
                            }
                        },
                        {
                            name: 'O2O',
                            icon: 'circle',
                            textStyle: {
                                color: 'black'
                            }
                        }
                    ]
                },
                grid: {
                    show: false,
                    zlevel: 0,
                    z: 2,
                    left: '10%',
                    top: 60,
                    right: '10%',
                    bottom: 60,
                    width: 'auto',
                    height: 'auto',
                    containLabel: false,
                    backgroundColor: 'transparent',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    shadowBlur: "",
                    shadowColor: "",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    tooltip: {}
                },
                xAxis:{
                    show: true,
                    gridIndex: 0,
                    position: 'bottom',
                    type: 'category',
                    name:  '时间',
                    axisLine: {
                        show: true,
                        onZero: true
                    },
                    axisLable: {

                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#ccc'],
                            type: 'solid'
                        }
                    },
                    data: [
                        {
                            value: '1月',
                            textStyle: {

                            }
                        },
                        {
                            value: '2月',
                            textStyle: {

                            }
                        },
                        {
                            value: '3月',
                            textStyle: {

                            }
                        },
                        {
                            value: '4月',
                            textStyle: {

                            }
                        },{
                            value: '5月',
                            textStyle: {

                            }
                        },{
                            value: '6月',
                            textStyle: {

                            }
                        }
                    ]
                },
                yAxis: {
                    show: true,
                    gridIndex: 0,
                    position: 'top',
                    type: 'value',
                    name:  '业绩',
                    axisLine: {
                        show: true,
                        onZero: true
                    },
                    axisLable: {

                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#ccc'],
                            type: 'solid'
                        }
                    },
                    data: [
                        {
                            value: 1000,
                            textStyle: {

                            }
                        },
                        {
                            value: 2000,
                            textStyle: {

                            }
                        },
                        {
                            value: 3000,
                            textStyle: {

                            }
                        },
                        {
                            value: 4000,
                            textStyle: {

                            }
                        },{
                            value: 5000,
                            textStyle: {

                            }
                        },{
                            value: 6000,
                            textStyle: {

                            }
                        }
                    ]
                },
                tooltip: {
                    show: true,
                    trigger: 'item'
                },
                series: [
                    {
                        //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                        name: '无抵押',
                        type: 'line',
                        symbol: 'emptyCircle',
                        symbolSize: 8,
                        hoverAnimation: true,
                        legendHoverLink: true,
                        label: {
                            normal: {

                            }

                        },
                        itemStyle: {

                        },
                        //系列中的数据内容数组。
                        data: [1000,1200,1598,2908,4000,5000]
                    },
                    {
                        //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                        name: '有抵押',
                        type: 'line',
                        symbol: 'emptyCircle',
                        symbolSize: 8,
                        hoverAnimation: true,
                        legendHoverLink: true,
                        label: {
                        normal: {

                        }

                    },
                        itemStyle: {

                        },
                        //系列中的数据内容数组。
                        //系列中的数据内容数组。
                        data: [1300,3200,3800,4000,4400,5200]
                    },
                    {
                        //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                        name: 'O2O',
                        type: 'line',
                        symbol: 'emptyCircle',
                        symbolSize: 8,
                        hoverAnimation: true,
                        legendHoverLink: true,
                        label: {
                        normal: {

                        }

                    },
                        itemStyle: {

                        },
                        //系列中的数据内容数组。
                        //系列中的数据内容数组。
                        data: [1089,1921,2567,300,4920,5990]
                    }
                ]
            };

            var myCharts = echarts.init(targetElem);
            // 使用刚指定的配置项和数据显示图表。
            myCharts.setOption(settings);
        },
        extendOptions: function(){

        }
    };
    return lineFun;
});