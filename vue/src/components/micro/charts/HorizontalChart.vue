<template>
  <div class="card">
    <h3>Horizontal Chart</h3>
    <Chart type="bar" :data="horizontalBarData" :options="horizontalBarOptions" :plugins="plugins" class="h-30rem" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default defineComponent({
  name: "HorizontalChart",
  data() {
    return {
      horizontalBarData: {},
      horizontalBarOptions: {},
      plugins: [ChartDataLabels]
    };
  },
  mounted() {
    this.horizontalBarData = this.setHorizontalBarData();
    this.horizontalBarOptions = this.setHorizontalBarOptions();
  },
  methods: {
    setHorizontalBarData() {
      // const documentStyle = getComputedStyle(document.documentElement);

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
      // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      return {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              fontColor: textColor,
            }
          },
          datalabels: {
            color: "white",
            labels: {
              title: {
                font: {
                  size: 10,
                  weight: "bold",
                }
              },
              value: {
                color: 'green'
              }
            }
          },
        }
      };
    },
  },
})
</script>