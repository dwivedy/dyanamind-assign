import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from '../monthly-revenue/chart'
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-monthly-revenue',
  templateUrl: './monthly-revenue.component.html',
  styleUrls: ['./monthly-revenue.component.css']
})
export class MonthlyRevenueComponent implements OnInit {

  highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartForm.controls['january'].valueChanges.subscribe(value => {
      this.options.series[0].data[0].y = value
      Highcharts.chart('container', this.options);
    });
    this.chartForm.controls['januaryColor'].valueChanges.subscribe(value => {
      this.options.series[0].data[0].color = value;
      Highcharts.chart('container', this.options);
    });
    this.chartForm.controls['february'].valueChanges.subscribe(value => {
      this.options.series[0].data[1].y = value
      Highcharts.chart('container', this.options);
    });
    this.chartForm.controls['februaryColor'].valueChanges.subscribe(value => {
      this.options.series[0].data[1].color = value;
      Highcharts.chart('container', this.options);
    });
    this.chartForm.controls['march'].valueChanges.subscribe(value => {
      this.options.series[0].data[2].y = value
      Highcharts.chart('container', this.options);
    });
    this.chartForm.controls['marchColor'].valueChanges.subscribe(value => {
      this.options.series[0].data[2].color = value;
      Highcharts.chart('container', this.options);
    });
    this.chartForm.controls['graphType'].valueChanges.subscribe(value => {
      console.log(value);
      this.options.chart.type = value;
      console.log(this.options)
      Highcharts.chart('container', this.options);
    });

    Highcharts.chart('container', this.options);
  }





  chartForm = new FormGroup(
    {
      january: new FormControl('3000'),
      januaryColor: new FormControl('green'),
      february: new FormControl('5000'),
      februaryColor: new FormControl('blue'),
      march: new FormControl('2000'),
      marchColor: new FormControl('yellow'),
      graphType: new FormControl('bar')

    }
  );

  onChartFormSubmit() {

  }


  // public options: any = {
  //   chart: {
  //     type: this.chartForm.value.graphType,
  // },

  //   xAxis: {
  //     categories: ['January', 'February', 'March'],
  //     labels: {
  //         rotation: 90
  //     }, 
  // },

  // series: [{
  //     data: [2000,3000,5000]
  // }]

  // };

  public options: any = {
    chart: {
      // renderTo: 'container',
      type: 'bar',
      // margin: [50, 50, 100, 80],
      borderColor: 'grey',
      borderWidth: 1,

    },
    title: {
      text: 'Market Qtr Report',

    },
    xAxis: {
      categories: ['January', 'February', 'March'],
      title: {
        text: 'Color'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Select monthly revenue'
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Monthly Revenue',
      data: [
        { y: 3000, color: 'Green', name: 'January' },
        { y: 5000, color: 'Blue', name: 'February' },
        { y: 2000, color: 'Yellow', name: 'March' },
      ]
    }]
  }
}
