import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../services/stock-data.service';

export interface PeriodicElement {
	symbol: string;
	open: number;
	dayHigh: number;
	dayLow: number;
	lastPrice: number;
	previousClose: number;
	change: number;
	pChange: number;

  }
  
  const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit {
 
  live_data:any;
  displayedColumns: string[] = ['symbol','open', 'dayHigh', 'dayLow','lastPrice','previousClose','change','pChange'];
  dataSource = ELEMENT_DATA;
  
  constructor(private _dataService:StockDataService) { }

  ngOnInit(): void {
	this._dataService.getLive()
	.subscribe(
	  data => {
		this.dataSource=data;
		console.log("success ",data);
	   
	  },
	  err => {
	   console.log("");
	  }
	)
  }

//   onSearch(){

//     this._dataService.getLive()
//       .subscribe(
//         data => {

//           console.log("success ",data);
//          // this._router.navigate(['login']);
//         },
//         err => {
//          // this.register_msg = err.error;
//         }
//       )
//   }

}


