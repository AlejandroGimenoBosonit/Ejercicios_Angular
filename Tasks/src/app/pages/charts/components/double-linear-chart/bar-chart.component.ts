import { Component, OnInit } from '@angular/core';
import { DataCollection } from '../../interfaces/interface';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styles: [
  ]
})
export class BarChartComponent implements OnInit {
  barStylesData!: DataCollection;
  basicOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#ebedef'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#ebedef'
            },
            grid: {
                color: 'rgba(255,255,255,0.2)'
            }
        },
        y: {
            ticks: {
                color: '#ebedef'
            },
            grid: {
                color: 'rgba(255,255,255,0.2)'
            }
        }
    }
};

  
  constructor( private chartService: ChartService ) { }

  ngOnInit(): void {
    this.chartService.getDataSets().subscribe( datasets => {
      datasets.datasets
              .forEach(element=> {
                delete element.borderColor;
                delete element.fill;
                delete element.tension;
                element.backgroundColor = this.getRandomColor();
              });
      this.barStylesData = datasets
    });
  }

  getRandomColor(): string {
    return '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
