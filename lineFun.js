
/**
 * Created by ex-tangmingkao001 on 17/8/22.
 */

define([
    "zepto",
    "echarts"
], function($,echarts) {
    "use strict";
    var lineFun = {
        linefun: function(elem,options) {
            var targetElem;
            //做一个兼容,看下是否是原生dom对象还是zepto对象.echarts创建是针对原生dom的,如果是zepto对象需要转换.
            if(elem instanceof HTMLElement){
                targetElem = elem;
            } else {
                targetElem = elem[0];
            }
            //加载echarts图容器
            var myCharts = echarts.init(targetElem);

            //默认配置
            var settings = {
                title: {
                    show: true,
                    text: '(元)',
                    padding: [10,0,0,55],
                    textStyle: {
                        color: '#333',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: 12

                    }
                },
                //全局调色盘
                color: ['#e53f4b', '#e58a1f', '#983ac3', '#d31c85', '#5848a7', '#26a576', '#0066ff', '#00ccdd', '#e17413','#20a6ab'],
                //图例组件。图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
                legend: {
                    show: true,
                    type: 'plain',
                    bottom: '2%',
                    left: '30%',
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
                    show: true,
                    containLabel: false,
                    top: 44,
                    left: '22%',
                    right: '12%',
                    bottom: 60,
                    borderWidth: 0
                },
                xAxis:{
                    show: true,
                    gridIndex: 0,
                    boundaryGap: false,
                    position: 'bottom',
                    type: 'category',
                    name:  '月份',
//                  offset: -30,					
                    axisLine: {
                        show: false,
                        onZero: true,
                        lineStyle: {
                        		shadowColor : '#333',
                        		shadowOffsetX: -30,
                        		opacity: 1
                        }
                    },
                    axisTick: {
                    		show: false,
                    		interval: 5,
                    		length: 15,
                    		lineStyle: {
                    			color: '#ccc',
                    		}
                    },
                    axisLabel: {
						inside: false,
						align: 'left'
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#ccc'],
                            type: 'solid',
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
                    position: 'left',
                    offset: 0,
                    type: 'value',
//                  name:  '(元)',
					scale: true,
					nameGap: 10,
					nameLocation: 'end',
                    axisLine: {
                        show: false,
                    },                    
                    axisTick: {
                    		show: true,
                    		length: 20,
                    		lineStyle: {
                    			color: '#ccc',
                    		}
                    },                
                    axisLabel: {
                    		show: true,
						margin: 25
                    },
                    
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#ccc', //分割线颜色
                            shadowColor: '#ccc', //阴影颜色
                            shadowOffsetX: 45, //阴影水平方向上的偏移距离
                            opacity: 1 //图形透明度
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
                    trigger: 'axis'
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
	                		clipOverflow: false,
	                		areaStyle: {
	                			normal: {
	                    			shadowBlur: 0,
	                    			shadowColor: '#e53f4b',                        		
	                    			opacity: 0.1
	                			}
                    	   },		               
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
                        areaStyle: {
	                			normal: {
	                    			shadowBlur: 0,
	                    			shadowColor: '#e58a1f',                        		
	                    			opacity: 0.1
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
                        areaStyle: {
	                			normal: {
	                    			shadowBlur: 0,
	                    			shadowColor: '#983ac3',                        		
	                    			opacity: 0.1
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


            /*
             * Created  on 17/8/22.
             * 配置项兼容处理
             * options , 数据类型Object.
             * 1. titleName, 数据类型，string. 用例：titleName = '价格'。
             * 2. titlePosition. 数据类型：[] ,用例：titlePosition = [10,10,10,10],分别是上下左右的间距。
             * 数组中每个元素是number类型。其实相对于容器的距离。相当设置padding值
             * 3. color,数据类型： [],用例： color: ['#e53f4b', '#e58a1f', '#983ac3','#e17413','#20a6ab'],
             * 4. symbolShow,数据类型 Boolean，用例：symbolShow = true,用来表示图例是否展示。
             *
             *
             *
             */
            if(options && options.hasOwnProperty('titleName') && typeof options.titleName == 'string'){
                settings.title.text = options.titleName;
            }
            //这里是为了兼容我的业绩y轴上显示‘（元）’和y轴数据对其。其实y轴有显示名称的属性。但是无法设置和数据对其
            if(options && options.hasOwnProperty('titlePosition') && options.titlePosition instanceof Array){
                if(options.titlePosition.length > 1){
                    for (var i = 0 ; i < options.titlePosition.length; i++){
                        settings.title.padding[i] =   options.pieRadius[i];
                    }
                }
            }
            if(options && options.hasOwnProperty('color') && options.color instanceof Array){
                if(options.color.length > 1){
                    for (var j = 0 ; j < options.color.length; j++){
                       settings.color[j] = options.color[j];
                    }
                }
            }
            if(options && options.hasOwnProperty('symbolShow') && typeof options.symbolShow == 'boolean'){
                settings.legend.show = options.symbolShow;
            }

            // 使用刚指定的配置项和数据显示图表。
            myCharts.setOption(settings);
        },
        extendOptions: function(){

        }
    };
    return lineFun;
});