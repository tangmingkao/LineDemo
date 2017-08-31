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
//					nameLocation: 'end',
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
					data: [{
						value: 1000,
						textStyle: {

						}
					}, {
						value: 2000,
						textStyle: {

						}
					}, {
						value: 3000,
						textStyle: {

						}
					}, {
						value: 4000,
						textStyle: {

						}
					}, {
						value: 5000,
						textStyle: {

						}
					}, {
						value: 6000,
						textStyle: {

						}
					}]
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
					data: [1089, 1921, 2567, 300, 4920, 5990]
				}]
			};

			/*
			 * Created  on 17/8/28.
			 * 配置项兼容处理
			 * options , 数据类型Object.
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
			 * 
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
			 *
			 * 23. yAxisPosition,数据类型: string,用例: yAxisPosition: 'left'.默认是'left'.可选: 'left','right'.含义: Y坐标显示在左边还是右边.
			 * 24. yAxisName,数据类型: string,用例: yAxisName: '(元)'.默认不显示.设置了yAxisName值就显示.
			 * 25. yAxisNameLocation,数据类型: string,用例: yAxisNameLocation: 'end'.可选:'start','middle','end'.含义: 坐标名称的位置.默认尾部.
			 * 26. axisTickShowY,数据类型: Boolean,用例:axisTickShowY: true,默认显示.
			 * 
			 * 
			 * 
			 * 
			 * 
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
			if(options && options.hasOwnProperty('color') && options.color instanceof Array) {
				if(options.color.length > 0) {
					for(var j = 0; j < options.color.length; j++) {
						settings.color[j] = options.color[j];
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
			if(options && options.hasOwnProperty('symbolData') && options.symbolData instanceof Array) {
				if(options.symbolData.length > 0) {
					//如果有,就情况默认的数据.
					settings.legend.data = [];					
					for(var l = 0; l < options.symbolData.length; l++) {
						settings.legend.data[l] = {
							name: options.symbolData[l],
							icon: tempIcon,
							textStyle: {
								color: '#ccc'
							}
						}

					}
				}
			}
			//把图标形状和字体颜色放在数据下面再处理,先处理数据,再改图形和字体颜色.
			var tempIcon = (options && options.hasOwnProperty('symbolIcon') && typeof options.symbolIcon == 'string') ? options.symbolIcon : 'circle';
			var tempSymbolTextColor = (options && options.hasOwnProperty('symbolTextColor') && typeof options.symbolTextColor == 'string') ? options.symbolTextColor : '#ccc';
			for(var m = 0; m < settings.legend.data.length; m ++){
				settings.legend.data[m].icon = tempIcon;
				settings.legend.data[m].textStyle.color = tempSymbolTextColor;
			}
			if(options && options.hasOwnProperty('symbolItemWidth') && typeof options.symbolItemWidth == 'number'){
                settings.legend.itemWidth = options.symbolItemWidth ;
             }
			if(options && options.hasOwnProperty('symbolItemHeight') && typeof options.symbolItemHeight == 'number'){
                settings.legend.itemHeight = options.symbolItemHeight ;
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
					for(var n = 0; n < tempArr1.length; n++){
						settings.grid[tempArr1[n]] = '';
					}	
				}
				arr.forEach(function(element) {
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
				$.extend(settings.xAxis, {nameLocation: options.xAxisNameLocation});
			}		
			if(options && options.hasOwnProperty('yAxisNameLocation') && typeof options.yAxisNameLocation == 'string') {
				$.extend(settings.yAxis, {nameLocation: options.yAxisNameLocation});
			}			
			if(options && options.hasOwnProperty('xAxisName') && typeof options.xAxisName == 'string') {
				$.extend(settings.xAxis, {name: options.xAxisName});
			}
			if(options && options.hasOwnProperty('yAxisName') && typeof options.yAxisName == 'string') {
				$.extend(settings.yAxis, {name: options.yAxisName});
			}
		
			if(options && options.hasOwnProperty('axisTickShow') && typeof options.axisTickShow == 'boolean') {
				settings.xAxis.axisTick.show = options.axisTickShow;
			}
			if(options && options.hasOwnProperty('axisLineShow') && typeof options.axisLineShow == 'boolean') {
				settings.xAxis.axisLine.show = options.axisLineShow;
			}
			if(options && options.hasOwnProperty('xSplitLineShow') && typeof options.xSplitLineShow == 'boolean') {
				settings.xAxis.splitLine.show = options.xSplitLineShow;
			}
			//设置x轴刻度显示数据.例如1月,2月....6月.
			if(options && options.hasOwnProperty('xData') && options.xData instanceof Array) {
				if(options.xData.length > 0) {
					settings.xAxis.data = [];
					for(var o = 0; o < options.xData.length; o++) {
						settings.xAxis.data[o] = {
							value: options.xData[o],
							textStyle:{
								color: '#ccc'
							}
						}
					}
				}
			}
			//设置x轴数据颜色.放在数据下面再处理,是因为数据处理的时候将原来的数据清零啦.放在后面更合理.
		 	if(options && options.hasOwnProperty('xDataTextStyle') && options.xDataTextStyle instanceof Object){
		 		settings.xAxis.data.forEach(function(item){
		 			$.extend(item,{textStyle: options.xDataTextStyle});
		 		});
            }
		 	
              
			
			
			
			
			// 使用刚指定的配置项和数据显示图表。
			myCharts.setOption(settings);
		},
		extendOptions: function() {

		}
	};
	return lineFun;
});