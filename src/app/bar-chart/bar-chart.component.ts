import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  mainStyleUlr = 'style.css';
  customStyleUrl = 'custom.css';
  materialStyleUrl = 'material.css';
  barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      fontSize: 100,
    },
    legend: {
      position: 'chartArea',
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 20,
        bottom: 0
      }
    }
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(x) {
    if (x == 'ar') {
      document.getElementById('body_data').setAttribute('dir', `rtl`);
      document.getElementById('mainStyle').setAttribute('href', `assets/ar/${this.mainStyleUlr}`);
      document.getElementById('customStyle').setAttribute('href', `assets/ar/${this.customStyleUrl}`);
      document.getElementById('materialStyle').setAttribute('href', `assets/ar/${this.materialStyleUrl}`);
    } else if (x == 'en') {
      document.getElementById('body_data').setAttribute('dir', `ltr`);
      document.getElementById('mainStyle').setAttribute('href', `assets/en/${this.mainStyleUlr}`);
      document.getElementById('customStyle').setAttribute('href', `assets/en/${this.customStyleUrl}`);
      document.getElementById('materialStyle').setAttribute('href', `assets/en/${this.materialStyleUrl}`);
    }
  }

}
