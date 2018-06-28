import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class AppComponent {
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  myColors = [
    {
      backgroundColor: 'rgba(103, 58, 183, .1)',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
    // ...colors for additional data sets
  ];

  onChartClick(event) {
    console.log(event);
  }
}




// // Our labels along the x-axis
// var years = [1999, 2000, 2001, 2002, 2003, 2004];
// // For drawing the lines
// var currentWeight = [220, 215, 225, 210, 205, 200];
// // var weightGoal = [200, 200, 200, 200, 200];
//
//
// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: years,
//     datasets: [
//       {
//         data: currentWeight,
//         label: "Current Weight",
//         borderColor: "#2ED573",
//         backgroundColor: "#80F1AF"
//       }//If you want an extra chart include the rest - kepp the comma,
//       // {
//       //   data: weightGoal,
//       //   label: "Weight Goal",
//       //   borderColor: "#EB5757",
//       //   backgroundColor:"#F58787"
//       // }
//     ]
//   },
//   options: {
//       legend: {
//           labels: {
//               fontColor: "#a4b0be",
//               fontSize: 14
//           }
//   },
//   scales: {
//      yAxes: [{
//          ticks: {
//              fontColor: "#a4b0be",
//              fontSize: 12,
//          }
//      }],
//      xAxes: [{
//          ticks: {
//              fontColor: "#a4b0be",
//              fontSize: 12,
//          }
//      }]
//  }
// }
// });
