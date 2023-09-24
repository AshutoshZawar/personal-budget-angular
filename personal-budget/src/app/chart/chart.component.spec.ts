import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import * as d3 from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.fetchData().subscribe((data: any[]) => {

      this.dataService.setData(data);

      this.createChart(data);
    });
  }

  createChart(data: any[]): void {
  }
}
