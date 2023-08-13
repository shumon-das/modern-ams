<template>
  <div class="card">
    <h3>Pie Chart</h3>
    <Chart type="pie" :data="pieChartData" :options="pieChartOptions" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "PieChart",
  data() {
    return {
      pieChartData: {},
      pieChartOptions: {},
    }
  },
  mounted() {
    this.pieChartData = this.setChartData();
  },
  methods: {
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
  }
})
</script>
