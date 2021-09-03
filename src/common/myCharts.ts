/**
 * 各种画 echarts 图表的方法都封装在这里
 */

// import echarts from 'echarts'
// 引入 ECharts 主模块
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
require("echarts/lib/chart/bar");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          // 柱状图
          bar: function (id, title, xAxis, yAxis, dataList) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            const optionData = {
              // 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。
              // 在 ECharts 2.x 里单个 echarts 实例中最多只能存在一个 grid 组件，在 ECharts 3 中可以存在任意个 grid 组件
              grid: {
                width: 280,
                left: "center",
              },
              title: {
                text: title,
                left: "center",
                textStyle: {
                  fontSize: "17px",
                  fontFamily: "Microsoft YaHei",
                  fontWeight: 400,
                  color: "#333333",
                },
              },
              tooltip: {
                formatter(params) {
                  return params.name + "<br/>值：" + params.value;
                },
                triggerOn: "click",
                extraCssText: "text-align: left;",
              },
              xAxis: xAxis,
              yAxis: yAxis,
              series: [
                {
                  data: dataList,
                  type: "bar",
                  itemStyle: {
                    color: "#2E6CFB",
                    barBorderRadius: [5, 5, 0, 0],
                  },
                  // 柱标签
                  label: {
                    show: true,
                    position: "top",
                  },
                  // 柱背景
                  // showBackground: true,
                  // backgroundStyle: {
                  //   color: 'rgba(220, 220, 220, 0.8)'
                  // },
                },
              ],
            };

            this.chart.setOption(optionData);
          },
          // 折线图
          line: function (id, title, xAxis, yAxis, dataList) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            const optionData = {
              // 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。
              // 在 ECharts 2.x 里单个 echarts 实例中最多只能存在一个 grid 组件，在 ECharts 3 中可以存在任意个 grid 组件
              grid: {
                width: 280,
                left: "center",
              },
              title: {
                text: title,
                left: "center",
                textStyle: {
                  fontSize: "17px",
                  fontFamily: "Microsoft YaHei",
                  fontWeight: 400,
                  color: "#333333",
                },
              },
              tooltip: {
                formatter(params) {
                  return params.name + "<br/>值：" + params.value;
                },
                triggerOn: "click",
                extraCssText: "text-align: left;",
              },
              xAxis: xAxis,
              yAxis: yAxis,
              series: [
                {
                  data: dataList,
                  type: "line",
                  itemStyle: {
                    color: "#2E6CFB",
                    // barBorderRadius: [5, 5, 0, 0]
                  },
                  // 柱标签
                  label: {
                    show: true,
                    position: "top",
                  },
                },
              ],
            };

            this.chart.setOption(optionData);
          },
        };
      },
    },
  });
};

export default {
  install,
};
