<template>
  <div id="app">
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />
    <button @click="updateData">Click to change data</button>  
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "App",
  components: {
    GChart
  },
  data () {
    return {
      chartDataHeader: ['Year', 'Sales', 'Expenses', 'Profit'],
      chartDataRows: [
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350],
                ['2017', 1030, 540, 350]

      ],
      updatedChartData: [],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      }
    }
  },
  computed: {
    chartData () {
      return [ this.chartDataHeader, ...this.updatedChartData ]
    }
  },
  methods: {
    updateData () {
      this.updatedChartData = this.chartDataRows
        .map(row => {
          return row.map((item, index) => {
            if (index !== 0) {
              const max = item + 1000
              const min = 0
              return Math.floor(Math.random() * (max - min)) + min
            }
            return item
          })
        })
    }
  },
  created () {
    this.updateData()
  }
};
</script>