<template>
  <div class="card">
    <h3>Stacked Bar</h3>
    <Chart type="bar" :data="stackedBarData" :options="stackedBarOptions" :plugins="plugins" class="h-30rem" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default defineComponent({
  name: "StackedBarChart",
  data() {
    return {
      stackedBarData: {},
      stackedBarOptions: {},
      plugins: [ChartDataLabels],
    };
  },
  mounted() {
    this.stackedBarData = this.setStackedBarData();
    this.stackedBarOptions = this.setStackedBarOptions();
  },
  methods: {
    setStackedBarData() {
      // const documentStyle = getComputedStyle(document.documentElement);

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
          datalabels: {
            color: "black",
            align: "top",
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
  },
})
</script>
