import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild("barCanvas") barCanvas: ElementRef;
  private barChart: Chart;
  labels: string [] = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  data: number [] = [12, 19, 3, 5, 2, 3];
  title: string = "Balance";

  constructor(private dataService: DataService) {}

  test(message: string) {
    console.log(message);
  }

  popover(event: any) {
    this.dataService.presentPopover(event);
  }

  ngOnInit() {
    this.chartJs();
  }

  chartJs() {
    const canvas = <HTMLCanvasElement> document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.title,
          data: this.data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    // fontColor: "#ffffff"
                }
            }]
        },
        animation: {
          duration: 750,
          easing: 'easeInQuad'
        }
    }
    });
  }

}