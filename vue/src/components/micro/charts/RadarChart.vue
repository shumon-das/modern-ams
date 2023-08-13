<template>
<div class="card">
  <Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "RadarChart",
  data() {
    return {
      chartData: null as any,
      chartOptions: null as any,
    };
  },
  mounted() {
    this.chartData = this.setChartData();
    this.chartOptions = this.setChartOptions();
  },
  methods: {
    setChartData() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      return {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'My First dataset',
            borderColor: documentStyle.getPropertyValue('--bluegray-400'),
            pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
            pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
            pointHoverBackgroundColor: textColor,
            pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            borderColor: documentStyle.getPropertyValue('--pink-400'),
            pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
            pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
            pointHoverBackgroundColor: textColor,
            pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      };
    },

    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      return {
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          r: {
            grid: {
              color: surfaceBorder
            }
          }
        }
      };
    }
  },
})
</script>
