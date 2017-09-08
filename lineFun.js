/**
 * Created by ex-tangmingkao001 on 17/8/22.
 */

define([
    "zepto",
    "echarts"
], function($, echarts) {
    "use strict";
    var lineFun = {
        linefun: function(elem, options) {
            var targetElem;
            //做一个兼容,看下是否是原生dom对象还是zepto对象.echarts创建是针对原生dom的,如果是zepto对象需要转换.
            if(elem instanceof HTMLElement) {
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
                    padding: [10, 0, 0, 55],
                    textStyle: {
                        color: '#333',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: 12

                    }
                },
                //全局调色盘
                color: ['#e53f4b', '#e58a1f', '#983ac3', '#d31c85', '#5848a7', '#26a576', '#0066ff', '#00ccdd', '#e17413', '#20a6ab'],
                //图例组件。图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
                legend: {
                    show: true,
                    type: 'plain',
                    bottom: '2%',
                    left: '30%',
                    right: '6%',
                    orient: 'horizontal',
                    formatter: '{name}',
                    itemWidth: 10,
                    itemHeight: 10,
                    data: [{
                        name: '用例一',
                        icon: 'circle',
                        textStyle: {
                            color: '#ccc'
                        }
                    }, {
                        name: '用例二',
                        icon: 'circle',
                        textStyle: {
                            color: '#ccc'
                        }
                    }, {
                        name: '用例三',
                        icon: 'circle',
                        textStyle: {
                            color: '#ccc'
                        }
                    }]
                },
                grid: {
                    show: false,
                    containLabel: false,
                    top: 44,
                    left: '22%',
                    right: '12%',
                    bottom: 60,
                    borderWidth: 0
                },
                xAxis: {
                    show: true,
                    gridIndex: 0,
                    boundaryGap: false,
                    position: 'bottom',
                    type: 'category',
                    axisLine: {
                        show: false,
                        onZero: true,
                        lineStyle: {
                            shadowColor: '#333',
                            shadowOffsetX: -150,
                            opacity: 1
                        }
                    },
                    axisTick: {
                        show: false,
                        interval: 5,
                        length: 10,
                        lineStyle: {
                            color: '#ccc'
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
                            type: 'solid'
                        }
                    },
                    data: [{
                        value: '1月',
                        textStyle: {

                        }
                    }, {
                        value: '2月',
                        textStyle: {

                        }
                    }, {
                        value: '3月',
                        textStyle: {

                        }
                    }, {
                        value: '4月',
                        textStyle: {

                        }
                    }, {
                        value: '5月',
                        textStyle: {

                        }
                    }, {
                        value: '6月',
                        textStyle: {

                        }
                    }]
                },
                yAxis: {
                    show: true,
                    gridIndex: 0,
                    position: 'left',
                    offset: 0,
                    type: 'value',
                    //name:  '(元)',
                    scale: true,
                    nameGap: 10,
                    splitNumber: 5,
                    min: 0,
                    max: 6000,
                    //					nameLocation: 'end',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: true,
                        length: 20,
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    axisLabel: {
                        show: true,
                        margin: 25,
                        textStyle: {
                            color: '#ccc'
                        }
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
                    data: []
                },
                tooltip: {
                    show: true,
                    trigger: 'axis'
                },
                series: [{
                    //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                    name: '用例一',
                    type: 'line',
                    symbol: 'emptyCircle',
                    symbolSize: 8,
                    hoverAnimation: true,
                    legendHoverLink: true,
                    clipOverflow: false,
                    areaStyle: {
                        //						normal: {
                        //							shadowBlur: 0,
                        //							shadowColor: '#e53f4b',
                        //							opacity: 0.1
                        //						}
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#e53f4b'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),
                            opacity: 0.5
                        }
                    },
                    label: {
                        normal: {

                        }

                    },
                    itemStyle: {

                    },
                    //系列中的数据内容数组。
                    data: [1000, 1200, 1598, 2908, 4000, 5000]
                }, {
                    //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                    name: '用例二',
                    type: 'line',
                    symbol: 'emptyCircle',
                    symbolSize: 8,
                    hoverAnimation: true,
                    legendHoverLink: true,
                    areaStyle: {
                        //						normal: {
                        //							shadowBlur: 0,
                        //							shadowColor: '#e58a1f',
                        //							opacity: 0.1
                        //						}
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#e58a1f'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),
                            opacity: 0.5
                        }
                    },
                    itemStyle: {

                    },
                    //系列中的数据内容数组。
                    data: [1300, 3200, 3800, 4000, 4400, 5200]
                }, {
                    //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                    name: '用例三',
                    type: 'line',
                    symbol: 'emptyCircle',
                    symbolSize: 8,
                    hoverAnimation: true,
                    legendHoverLink: true,
                    areaStyle: {
                        //						normal: {
                        //							shadowBlur: 0,
                        //							shadowColor: '#983ac3',
                        //							opacity: 0.1
                        //						}
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#983ac3'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),
                            opacity: 0.5
                        }
                    },

                    itemStyle: {

                    },
                    //系列中的数据内容数组。
                    data: [1089, 1921, 2567, 300, 4920, 5990]
                }]
            };

            /*
             * Created  on 17/8/28.
             * 配置项兼容处理
             * options , 数据类型Object.
             * (基本配置和图例配置:)
             * 1. titleName, 数据类型，string. 用例：titleName : '价格'。
             * 2. titlePosition. 数据类型：[] ,用例：titlePosition : [10,10,10,10],分别是上下左右的间距。
             *    数组中每个元素是number类型。其实相对于容器的距离。相当设置padding值
             * 3. color,数据类型：[],用例： color: ['#e53f4b', '#e58a1f', '#983ac3','#e17413','#20a6ab'],
             * 4. symbolShow,数据类型: Boolean，用例：symbolShow : true,用来表示图例是否展示。默认显示.
             * 5. symbolPosition,数据类型: Object,用例: symbolPosition:{top: '3%',right: '3%'}.用来确认图例组件的位置.(ps: 这里的right设置好像有点问题.无作用)
             * 6. symbolOrient,数据类型: string,用例: symbolOrient : 'horizontal'.可选:'horizontal'和'vertical'(横向和纵向),含义:图例列表的布局朝向。
             * 7. symbolData,数据类型: [],用例: symbolData: ['有抵押','无抵押','O2O'].数组每项数据类型都是string.含义:图例每项的名称.
             * 8. symbolIcon,数据类型: string,用例: symbolIcon: 'circle'.含义: 图例的形状.可选:'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'.
             * 9. symbolTextColor,数据类型: string,用例: symbolTextColor : '#ccc'.含义: 图例文字颜色.支持16进制颜色值和rgb.
             * 10. gridShow,数据类型: Boolean,用例: gridShow: true.含义: 是否显示grid网格.
             * 11. gridPosition,数据类型: Object,用例: gridPosition: {top: '3%',right: '3%'}.用来处理网格位置.(ps: 这两个参数在本次需求中作用不大.)
             * (X轴配置:)
             * 12. xAxisBoundaryGap,数据类型: Boolean,用例: xAxisBoundaryGap: true,默认是false.x轴坐标刻度显示的位置.设置为true时显示在两个刻度中间位置.
             * 13. xAxisPosition,数据类型: string,用例: xAxisPosition: 'top'.默认是'bottom'.可选: 'top','bottom'.含义: x坐标显示在上面还是下面.
             * 14. xAxisNameLocation,数据类型: string,用例: xAxisNameLocation: 'end'.默认是'end'.可选:'start','middle','end'.含义: 坐标名称的位置.
             * 15. xAxisName,数据类型: string,用例:xAxisName: '月份'.默认不显示.设置了xAxisName值就显示.
             * 16. symbolItemWidth,数据类型: Number,用例:symbolItemWidth: 10.默认10.
             * 17. symbolItemHeight,数据类型: Number,用例:symbolItemHeight: 10.默认10.(ps:如果是圆形,这两个参数要一起配置.)
             * 18. axisTickShow,数据类型: Boolean,用例:axisTickShow: true,默认不显示.含义: 刻度是否显示.
             * 19. axisLineShow,数据类型: Boolean,用例: axisLineShow: true,默认不显示.含义: 轴线是否显示.
             * 20. xSplitLineShow,数据类型: Boolean,用例:xSplitLineShow: true,默认显示.含义: 分隔线是否显示.
             * 21. xData,数据类型: [],用例: xData: ['周一','周二','周三','周四'].含义: x轴的每个刻度名称.
             * 22. xDataTextStyle,数据类型: Object,用例:xDataTextStyle:{color: '#ccc'},含义:xData数据的颜色显示.
             * (Y轴配置:)
             * 23. yAxisPosition,数据类型: string,用例: yAxisPosition: 'left'.默认是'left'.可选: 'left','right'.含义: Y坐标显示在左边还是右边.
             * 24. yAxisName,数据类型: string,用例: yAxisName: '(元)'.默认不显示.设置了yAxisName值就显示.
             * 25. yAxisNameLocation,数据类型: string,用例: yAxisNameLocation: 'end'.可选:'start','middle','end'.含义: 坐标名称的位置.默认尾部.
             * 26. yAxisTickShow,数据类型: Boolean,用例:yAxisTickShow: true,默认显示.含义刻度是否显示.(ps: 这个设置是为了两边突出部分.)
             * 27. yAxisLineMargin,数据类型: Number,用例:yAxisLineMargin: 25.含义y轴标度和Y轴的距离.
             * 28. ySplitLineShow,数据类型: Boolean,用例:ySplitLineShow: true,默认显示.含义Y轴分割线.(即横线).
             * 29. ySplitLineLength,数据类型: Number,用例:ySplitLineLength: 45,含义:右边多出半边长度.(ps:这里其实阴影实现的.echarts本身没有这样的配置)
             * 30. halfLineShow,数据类型: Boolean,用例:halfLineShow: true,默认显示.含义:两边半边是否显示.(ps:这里主要兼容有些地方如果不要多余部分)
             * 31. yDataTextStyle,数据类型: Object,用例:yDataTextStyle:{color: '#ccc'},含义:yData数据的颜色显示.
             * 32. yData: (ps: 这里并不需要设置y轴的数据,因为是value类型,会自动根据数据分隔,默认分隔成5段.但是下面有几个需要注意的.)
             * 33. ySpitNumber,数据类型: Number,用例:ySpitNumber: 5,默认是5段.含义y轴最大值和最小值的分隔.(ps:这个值不是绝对的.这个分割段数只是个预估值，
             * 	最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。例如:你设置8,min:1000,max:6000,但最终也只是分成5份)
             * 34. yMin,yMax.数据类型: number,用例:yMin: 1000,yMax: 6000.刻度的最小值和最大值.和上面的分割段数配合使用.
             * 35. dataOptions,数据类型：Object，用例：dataOptions：{data1：[1000,2000,3000,4000,5000],data2:[1200,1800,2200,3300,4400,5030]....data5:[...]..}
             *     保证dataOptions属性个数和需要的图例个数一致。即如果图例有3个，这里的属性各数也需要三个。为了下面的配置好处理，注意用data1...data6的命名规范。
             * 36. areaStyleShadowShow,数据类型: Object,用例: areaStyleShadowShow: true,默认为true,含义:是否显示折线阴影效果.
             */
            if(options && options.hasOwnProperty('titleName') && typeof options.titleName == 'string') {
                settings.title.text = options.titleName;
            }
            //这里是为了兼容我的业绩y轴上显示‘（元）’和y轴数据对其。其实y轴有显示名称的属性。但是无法设置和数据对其
            if(options && options.hasOwnProperty('titlePosition') && options.titlePosition instanceof Array) {
                if(options.titlePosition.length > 1) {
                    for(var i = 0; i < options.titlePosition.length; i++) {
                        settings.title.padding[i] = options.pieRadius[i];
                    }
                }
            }

            if(options && options.hasOwnProperty('symbolShow') && typeof options.symbolShow == 'boolean') {
                settings.legend.show = options.symbolShow;
            }
            if(options && options.hasOwnProperty('symbolPosition') && options.symbolPosition instanceof Object) {
                var arr = Object.keys(options.symbolPosition);
                if(arr.length > 0) {
                    //进行设置前先将设置默认的取消掉,不然设置可能会没有作用.
                    //var tempObj = _.pick(settings.legend,['left','bottom','right','top']);
                    var tempArr = Object.keys(settings.legend);
                    for(var k = 0; k < tempArr.length; k++) {
                        if(['left', 'bottom', 'right', 'top'].indexOf(tempArr[k]) > -1) {
                            settings.legend[tempArr[k]] = '';
                        }
                    }
                }
                arr.forEach(function(element) {
                    if(!element) {
                        return false;
                    }
                    if(element == 'top') {
                        $.extend(settings.legend, {
                            top: options.symbolPosition.top
                        });
                    }
                    if(element == 'left') {
                        $.extend(settings.legend, {
                            left: options.symbolPosition.left
                        });
                    }
                    if(element == 'bottom') {
                        $.extend(settings.legend, {
                            bottom: options.symbolPosition.bottom
                        });
                    }
                    if(element == 'right') {
                        $.extend(settings.legend, {
                            right: options.symbolPosition.right
                        });
                    }
                });
            }
            if(options && options.hasOwnProperty('symbolOrient') && typeof options.symbolOrient == 'string') {
                settings.legend.orient = options.symbolOrient;
            }

            if(options && options.hasOwnProperty('symbolItemWidth') && typeof options.symbolItemWidth == 'number') {
                settings.legend.itemWidth = options.symbolItemWidth;
            }
            if(options && options.hasOwnProperty('symbolItemHeight') && typeof options.symbolItemHeight == 'number') {
                settings.legend.itemHeight = options.symbolItemHeight;
            }
            //这两个参数慎用,容易让人产生误会.
            if(options && options.hasOwnProperty('gridShow') && typeof options.gridShow == 'boolean') {
                settings.grid.show = options.gridShow;
            }
            if(options && options.hasOwnProperty('gridPosition') && options.gridPosition instanceof Object) {
                var arr1 = Object.keys(options.gridPosition);
                var tempArr1 = ['left', 'bottom', 'right', 'top'];
                if(arr1.length > 0) {
                    //进行设置前先将设置默认的取消掉,不然设置可能会没有作用.
                    for(var n = 0; n < tempArr1.length; n++) {
                        settings.grid[tempArr1[n]] = '';
                    }
                }
                arr1.forEach(function(element) {
                    if(!element) {
                        return false;
                    }
                    if(element == 'top') {
                        settings.grid.top = options.gridPosition.top;
                    }
                    if(element == 'left') {
                        settings.grid.left = options.gridPosition.left;
                    }
                    if(element == 'bottom') {
                        settings.grid.bottom = options.gridPosition.bottom;
                    }
                    if(element == 'right') {
                        settings.grid.right = options.gridPosition.right;
                    }
                });
            }
            if(options && options.hasOwnProperty('xAxisBoundaryGap') && typeof options.xAxisBoundaryGap == 'boolean') {
                settings.xAxis.boundaryGap = options.xAxisBoundaryGap;
            }
            if(options && options.hasOwnProperty('xAxisPosition') && typeof options.xAxisPosition == 'string') {
                settings.xAxis.position = options.xAxisPosition;
            }
            if(options && options.hasOwnProperty('yAxisPosition') && typeof options.yAxisPosition == 'string') {
                settings.yAxis.position = options.yAxisPosition;
            }
            if(options && options.hasOwnProperty('xAxisNameLocation') && typeof options.xAxisNameLocation == 'string') {
                $.extend(settings.xAxis, {
                    nameLocation: options.xAxisNameLocation
                });
            }
            if(options && options.hasOwnProperty('yAxisNameLocation') && typeof options.yAxisNameLocation == 'string') {
                $.extend(settings.yAxis, {
                    nameLocation: options.yAxisNameLocation
                });
            }
            if(options && options.hasOwnProperty('xAxisName') && typeof options.xAxisName == 'string') {
                $.extend(settings.xAxis, {
                    name: options.xAxisName
                });
            }
            if(options && options.hasOwnProperty('yAxisName') && typeof options.yAxisName == 'string') {
                $.extend(settings.yAxis, {
                    name: options.yAxisName
                });
            }
            if(options && options.hasOwnProperty('axisTickShow') && typeof options.axisTickShow == 'boolean') {
                settings.xAxis.axisTick.show = options.axisTickShow;
            }
            //这里显示是为了兼容两边多出半边的.用刻度线代替那半边,另外一边多出的半边是用分割线的阴影实现的.
            //若以后对半边线的长短有要求,则可以增加一个配置参数.写法类似.settings.yAxis.axisTick.length = options.yAxisTickLength;
            if(options && options.hasOwnProperty('yAxisTickShow') && typeof options.yAxisTickShow == 'boolean') {
                settings.yAxis.axisTick.show = options.yAxisTickShow;
            }
            //刻度文字和轴线距离.
            if(options && options.hasOwnProperty('yAxisLineMargin') && typeof options.yAxisLineMargin == 'number') {
                settings.yAxis.axisLabel.margin = options.yAxisLineMargin;
            }

            if(options && options.hasOwnProperty('axisLineShow') && typeof options.axisLineShow == 'boolean') {
                settings.xAxis.axisLine.show = options.axisLineShow;
            }
            if(options && options.hasOwnProperty('xSplitLineShow') && typeof options.xSplitLineShow == 'boolean') {
                settings.xAxis.splitLine.show = options.xSplitLineShow;
            }
            if(options && options.hasOwnProperty('ySplitLineShow') && typeof options.ySplitLineShow == 'boolean') {
                settings.yAxis.splitLine.show = options.ySplitLineShow;
            }
            //右边超出半边长度(ps:其实是用分割线阴影实现的.默认45)
            if(options && options.hasOwnProperty('ySplitLineLength') && typeof options.ySplitLineLength == 'number') {
                settings.yAxis.splitLine.lineStyle.shadowOffsetX = options.ySplitLineLength;
            }
            //这里处理,即要处理左边刻度实现的部分,又要处理有点阴影实现的部分.
            if(options && options.hasOwnProperty('halfLineShow') && typeof options.halfLineShow == 'boolean') {
                if(options.halfLineShow === false) {
                    settings.yAxis.axisTick.show = false;
                    settings.yAxis.splitLine.lineStyle.shadowOffsetX = 0;
                }
            }
            //设置x轴刻度显示数据.例如1月,2月....6月.
            if(options && options.hasOwnProperty('xData') && options.xData instanceof Array) {
                if(options.xData.length > 0) {
                    settings.xAxis.data = [];
                    for(var o = 0; o < options.xData.length; o++) {
                        settings.xAxis.data[o] = {
                            value: options.xData[o],
                            textStyle: {
                                color: '#ccc'
                            }
                        }
                    }
                }
            }
            //设置x轴数据颜色.放在数据下面再处理,是因为数据处理的时候将原来的数据清零啦.放在后面更合理.
            if(options && options.hasOwnProperty('xDataTextStyle') && options.xDataTextStyle instanceof Object) {
                settings.xAxis.data.forEach(function(item) {
                    $.extend(item, {
                        textStyle: options.xDataTextStyle
                    });
                });
            }
            /*
             * ps: 下面这三个值配合使用,使y轴刻度更加易读和更加美观.一般如果没有设置这三个参数,y轴会根据
             * 实际数据最小值和最大值,默认段数5进行划分.
             */
            if(options && options.hasOwnProperty('ySpitNumber') && typeof options.ySpitNumber == 'number') {
                settings.yAxis.splitNumber = options.ySpitNumber;
            }
            if(options && options.hasOwnProperty('yMin') && typeof options.yMin == 'number') {
                settings.yAxis.min = options.yMin;
            }
            if(options && options.hasOwnProperty('yMax') && typeof options.yMax == 'number') {
                settings.yAxis.max = options.yMax;
            }

            //数据颜色处理部分,注意处理顺序.
            if(options && options.hasOwnProperty('symbolData') && options.symbolData instanceof Array) {
                if(options.symbolData.length > 0) {
                    //如果有,就情况默认的数据.
                    settings.legend.data = [];
                    settings.series = [];
                    for(var l = 0; l < options.symbolData.length; l++) {
                        settings.legend.data[l] = {
                            name: options.symbolData[l],
                            icon: 'circle',
                            textStyle: {
                                color: '#ccc'
                            }
                        };
                        //保证settings.series[l].name的值和图例options.symbolData[l]的值一致。
                        //settings.series[l].name = options.symbolData[l]; //这种处理不恰当,当配置大于上面默认配置个数3时会出错.
                        //settings.series[l] = obj2;注意不能用这种赋值,会影响原来obj2的值.
                        settings.series[l] = {};
//						$.extend(settings.series[l], obj2);
//						settings.series[l].name = options.symbolData[l];
                    }
                }
            }
            //把图标形状和字体颜色放在数据下面再处理,先处理数据,再改图形和字体颜色.
            var tempIcon = (options && options.hasOwnProperty('symbolIcon') && typeof options.symbolIcon == 'string') ? options.symbolIcon : 'circle';
            var tempSymbolTextColor = (options && options.hasOwnProperty('symbolTextColor') && typeof options.symbolTextColor == 'string') ? options.symbolTextColor : '#ccc';
            for(var m = 0; m < settings.legend.data.length; m++) {
                settings.legend.data[m].icon = tempIcon;
                settings.legend.data[m].textStyle.color = tempSymbolTextColor;
            }
            //var gradientColor = [];
            if(options && options.hasOwnProperty('color') && options.color instanceof Array) {
                if(options.color.length > 0) {
                    //由于颜色循环使用的问题，所以为了不产生错误，最好设置颜色的个数>=图例的个数.
                    //这里还有个问题，因为事先并不知道 settings.series[j]的个数。所以放在这里处理也是不恰当的。应该
                    //放在 settings.series[j]数据处理之后。
                    settings.color = [];
                    for(var j = 0; j < options.color.length; j++) {
                        settings.color[j] = options.color[j];
                    }
                }
                //否则就用缺省的配置，正好个数一致。
            }
            //这里取这个长度,因为settings.legend.data.length长度和颜色值长度一致.
            for(var t = 0; t < settings.legend.data.length; t++) {
                $.extend(settings.series[t], {

                    //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                    name: settings.legend.data[t].name,
                    type: 'line',
                    symbol: 'emptyCircle',
                    symbolSize: 8,
                    hoverAnimation: true,
                    legendHoverLink: true,
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: settings.color[t]
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),
                            opacity: 0.5
                        }
                    },
                    itemStyle: {

                    },
                    //系列中的数据内容数组。
                    data: [1300, 3200, 3800, 4000, 4400, 5200]

                });

            }
            if(options && options.hasOwnProperty('dataOptions') && options.dataOptions instanceof Object) {
                var arr4 = Object.keys(options.dataOptions);
                var tempNum = 0;
                for(var v = 0; v < settings.legend.data.length; v++) {
                    tempNum = arr4[v];
                    settings.series[v].data = options.dataOptions[tempNum];
                }
            }
            //是否显示折线阴影部分.(ps:这是简单的处理,将opacity值设为0.)
            if(options && options.hasOwnProperty('areaStyleShadowShow') && typeof options.areaStyleShadowShow == 'boolean') {
                if(options.areaStyleShadowShow === false) {
                    for(var z = 0; z < settings.series.length; z++){
                        settings.series[z].areaStyle.normal.opacity = 0;
                        //也可以这样处理.
                        //$.extend(settings.series[z],{areaStyle: {}} );
                    }
                }
            }

            // 使用刚指定的配置项和数据显示图表。
            myCharts.setOption(settings);
        },
        extendOptions: function(max) {

            //对max进行数据处理,因为折线图如果设置了max,会自动根据max配置y轴的刻度.
            //如果没有处理好,会导致刻度显示错误.这里默认会让他显示6个刻度.如果获取的max
            //大于当前max位数*6的时候,则取多一位的12...正好可以被6整除,最靠近的max的值.
            var finalMax;
            var tempMax = max.toString();
            var tempArr1 = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000];
            if (tempArr1[tempMax.length - 1] * 6 > max) {
                finalMax = tempArr1[tempMax.length - 1] * 6;
            } else {
                finalMax = tempArr1[tempMax.length] * 2 - tempArr1[tempMax.length - 1] * 8;
            }
            return finalMax;
        }
    };
    return lineFun;
});