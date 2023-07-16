<template>
  <div class="grid">
    <div class="col-4">
      <div class="card">
        <h3>Basic Chart</h3>
        <Chart type="bar" :data="basicChartData" :options="basicChartOptions" class="h-30rem" />
      </div>
    </div>

    <div class="col-4">
      <div class="card">
        <h3>Vertical Bar</h3>
        <Chart type="bar" :data="verticalChartData" :options:="verticalChartOptions" class="h-30rem" />
      </div>
    </div>

    <div class="col-4">
      <div class="card">
        <h3>Pie Chart</h3>
        <Chart type="bar" :data="horizontalBarData" :options="horizontalBarOptions" class="h-30rem" />
      </div>
    </div>
  </div>

  <div class="grid">
    <div class="col-4">
      <div class="card">
        <h3>Stacked Bar</h3>
        <Chart type="bar" :data="stackedBarData" :options="stackedBarOptions" class="h-30rem" />
      </div>
    </div>
  </div>

  <div class="grid">
    <div class="col-1"></div>
    <div class="col-3">
      <div class="card">
        <h3>Doughnut Chart</h3>
        <Chart type="doughnut" :data="doughnutChartData" :options="doughnutChartOptions" />
      </div>
    </div>

    <div class="col-2"></div>

    <div class="col-3">
      <div class="card">
        <h3>Pie Chart</h3>
        <Chart type="pie" :data="pieChartData" :options="pieChartOptions" />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AmsCharts",
  data() {
    return {
      basicChartData: {
        labels: ["A", "B", "C", "D"],
        datasets: [{
          label: "Asset",
          data: [10, 20, 30, 41],
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1,
        }],
      },
      basicChartOptions: {
        scales: {
          y: {
              beginAtZero: true,
          }
        },
      },

      verticalChartData: {},
      verticalChartOptions: {},

      horizontalBarData: {},
      horizontalBarOptions: {},

      stackedBarData: {},
      stackedBarOptions: {},

      pieChartData: {},
      pieChartOptions: {},

      doughnutChartData: {},
      doughnutChartOptions: {},
    }
  },
  mounted() {
    this.verticalChartData = this.setVerticalChartData();
    this.horizontalBarData = this.setHorizontalBarData();
    this.horizontalBarOptions = this.setHorizontalBarOptions();
    this.pieChartData = this.setChartData();
    this.stackedBarData = this.setStackedBarData();
    this.stackedBarOptions = this.setStackedBarOptions();
    this.doughnutChartData = this.setDoughnutChartData();
  },
  methods: {
    setHorizontalBarData() {
      const documentStyle = getComputedStyle(document.documentElement);

      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
           {
             label: 'asset one',
             data: [10, 25, 20, 55, 35, 45, 65],
           },
          {
            label: 'asset two',
            data: [5, 15, 20, 45, 35, 65, 75],
          },
          {
            label: 'asset three',
            data: [7, 12, 15, 25, 35, 55, 60],
          }
        ],
      };
    },

    setHorizontalBarOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      return {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              fontColor: textColor,
            }
          }
        }
      };

    },

    setVerticalChartData() {
      const documentStyle = getComputedStyle(document.documentElement);

      return {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        datasets: [
          {
            label: ["Asset"],
            data: [10, 20, 0, 0, 50],
            // backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            // borderColor: documentStyle.getPropertyValue('--blue-500'),
          },
          {
            label: ["Risk"],
            data: [10, 20, 60, 90, 30],
          },
        ],
      }
    },

    setChartData() {
      const documentStyle = getComputedStyle(document.body);

      return {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [
          {
            data: [540, 325, 702, 300],
            backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--red-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
          }
        ]
      };
    },

    setStackedBarData() {
      const documentStyle = getComputedStyle(document.documentElement);

      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            // type: 'bar',
            label: 'asset one',
            data: [4, 6, 9, 34, 65, 45, 70],
          },
          {
            // type: 'bar',
            label: 'asset two',
            data: [4, 6, 9, 34, 65, 45, 70],
          },
          {
            // type: 'bar',
            label: 'asset three',
            data: [4, 6, 9, 34, 65, 45, 70],
          },
        ],
      };
    },

    setStackedBarOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          legend: {
            labels: {
              color: textColor,
            }
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            }
          },
          y: {
            stacked: true,
          },
        }
      };
    },

    setDoughnutChartData() {
      const documentStyle = getComputedStyle(document.body);

      return {
        labels: ["A", "B", "C", "D"],
        datasets: [{
          label: "asset",
          data: [10, 20, 30, 40],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--red-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--red-400')]
        }],
      };
    },
  }
});
</script>

<style scoped>

</style>