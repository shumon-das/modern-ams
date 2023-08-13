<template>
  <div class="card">
    <h3>Basic Chart</h3>
    <Chart type="bar" :data="basicChartData" :options="basicChartOptions" class="h-30rem" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "BasicChart",
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
    };
  },
})
</script>