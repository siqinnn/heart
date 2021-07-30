<template>
  <div class="we">
    <div style="width:500px;height:500px" id="main" ref="qwqw"></div>
    <div style="width:500px;height:500px" ref="chart" id="main11"></div>
    <div style="width:500px;height:500px" id="main333"></div>
    <div style="width:500px;height:500px" id="main99"></div>
  </div>
</template>
<script>
const echarts = require("echarts");
export default {
  components: {},

  data() {
    return {};
  },
  created() {},
  mounted() {
    // this.aaa();
    // this.initCharts()
    this.eeeeeee();
    this.qqqq();
    this.iii();
    this.opop();
  },
  methods: {
    opop() {
      // require('echarts-gl');

      var ROOT_PATH =
        "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";
      var myChart = echarts.init(document.getElementById("main99"));
      var option = {
        backgroundColor: "#000",
        globe: {
          baseTexture: ROOT_PATH + "/data-gl/asset/earth.jpg",

          shading: "lambert",

          environment: ROOT_PATH + "/data-gl/asset/starfield.jpg",

          atmosphere: {
            show: true,
          },

          light: {
            ambient: {
              intensity: 0.1,
            },
            main: {
              intensity: 1.5,
            },
          },
        },
        series: [],
      };

      option && myChart.setOption(option);
    },
    iii() {
      var echarts = require("echarts");

      var chartDom = document.getElementById("main333");
      var myChart = echarts.init(chartDom);
      var option = {
        title: {
          text: "基础雷达图",
        },

        radar: {
          // shape: 'circle',
          indicator: [
            { name: "销售（Sales）", max: 10000 },
            { name: "管理（Administration）", max: 16000 },
            { name: "信息技术（Information Technology）", max: 30000 },
            { name: "客服（Customer Support）", max: 38000 },
            { name: "研发（Development）", max: 52000 },
            { name: "市场（Marketing）", max: 55000 },
          ],
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "预算分配（Allocated Budget）",
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: "实际开销（Actual Spending）",
              },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    qqqq() {
      // var chartDom = document.getElementById('main11');
      var myChart = echarts.init(document.getElementById("main11"));

      var option = {
        title: {
          text: "单位：万",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70],
            type: "bar",
            barWidth: 20,
            itemStyle: {
              normal: {
                color: "#8F4558",
                barBorderRadius: [10, 10, 0, 0],
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    eeeeeee() {
      let myChart = echarts.init(this.$refs.qwqw);
      // var myChart = echarts.init(document.getElementById("main"));
      console.log("-----------------------------------");
      console.log(document.getElementById("main"));
      let option = {
        title: {
          text: "Graph 简单示例",
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            roam: true,
            label: {
              show: true,
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20,
            },
            data: [
              {
                name: "节点1",
                x: 300,
                y: 300,
              },
              {
                name: "节点2",
                x: 800,
                y: 300,
              },
              {
                name: "节点3",
                x: 550,
                y: 100,
              },
              {
                name: "节点4",
                x: 550,
                y: 500,
              },
            ],
            // links: [],
            links: [
              {
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                label: {
                  show: true,
                },
                lineStyle: {
                  width: 5,
                  curveness: 0.2,
                },
              },
              {
                source: "节点2",
                target: "节点1",
                label: {
                  show: true,
                },
                lineStyle: {
                  curveness: 0.2,
                },
              },
              {
                source: "节点1",
                target: "节点3",
              },
              {
                source: "节点2",
                target: "节点3",
              },
              {
                source: "节点2",
                target: "节点4",
              },
              {
                source: "节点1",
                target: "节点4",
              },
            ],
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0,
            },
          },
        ],
      };

      myChart.setOption(option);
    },
  },
};
</script>
<style>
.we {
  width: 97%;
  height: 900px;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
}
</style>
