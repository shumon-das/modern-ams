<template>
  <div class="card">
    <h3>Doughnut Chart</h3>
    <Chart type="doughnut" :data="doughnutChartData" :options="doughnutChartOptions" :plugins="plugins" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default defineComponent({
  name: "DoughnutChart",
  data() {
    return {
      plugins: [ChartDataLabels],
      doughnutChartData: {},
      doughnutChartOptions: {
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            color: "white",
            labels: {
              title: {
                font: {
                  weight: "bold",
                  // size: 48,
                },
              },
            },
          },
        },
      },
    };
  },
  mounted() {
    this.doughnutChartData = this.setDoughnutChartData();
  },
  methods: {
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
  },
})
</script>
