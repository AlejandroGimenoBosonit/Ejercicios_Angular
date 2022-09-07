import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { DataCollection } from '../../interfaces/interface';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styles: [
    `
      .line-chart-container {
        width: 50%;
        top: 50%;
        left: 50%;
      }
    `,
  ],
})
export class LinearChartComponent implements OnInit {
  lineStylesData!: DataCollection;
  basicOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
      y: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
    },
  };

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.getDataSets().subscribe((datasets) => {
      console.log(datasets);
      datasets.datasets.forEach((element) => {
        element.borderColor = this.getRandomColor();
      });
      this.lineStylesData = datasets;
    });
  }
  getRandomColor(): string {
    return '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
  }
}
