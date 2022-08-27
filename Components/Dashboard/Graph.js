import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import React from "react";
import Chart from 'chart.js/auto';
import styles from '../../styles/Graph.module.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  
  
  
  

  export default function Graph() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
      );
     const options = {
        responsive: true,
        plugins: {
          
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      
    const data = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        datasets: [
            {
                label: "Sales/ month",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                pointHitRadius: 0,
                data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
            },
        ],
    };
    
    //doughnut chart data set
    
    const data1 = {
        labels: ["Organic", "Social Media", "Websites"],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };
  return (
    <div className={styles.container}>
      <div className={styles.graph}>
					
					<Line data={data} option={options} className={styles.lines} />
				</div>
    </div>
  )
}

  
 
  
 