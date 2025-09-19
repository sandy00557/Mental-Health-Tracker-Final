// import React from "react";
// import { useSelector } from "react-redux";
// import { Pie, Line } from "react-chartjs-2";
// import "chart.js/auto"; // necessary for Chart.js 3.x+

// const DataSection = () => {
//   const points = useSelector((state) => Number(state.user.points));
//   const productsBought = useSelector((state) => state.user.productsBought);
//   const quizDay = useSelector((state) => state.user.quizDay);

//   // Pie chart data
//   const pieData = {
//     labels: ["Points", "Products Bought", "Quiz Days"],
//     datasets: [
//       {
//         data: [points, productsBought, quizDay],
//         backgroundColor: ["#00FFFF", "#FF00FF", "#00CFFF"],
//         hoverOffset: 20,
//       },
//     ],
//   };

//   // Line chart data with categories on X axis
//   const lineData = {
//     labels: ["Points", "Products Bought", "Quiz Days"],
//     datasets: [
//       {
//         label: "User Stats",
//         data: [points, productsBought, quizDay],
//         borderColor: "#00FFFF",
//         backgroundColor: "rgba(0,255,255,0.2)",
//         fill: true,
//         tension: 0.4,
//         pointBackgroundColor: "#FF00FF",
//       },
//     ],
//   };

//   const chartOptions = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div style={styles.dashboardContainer}>
//       <h2 style={styles.header}>DASHBOARD</h2>
//       <div style={styles.chartsContainer}>
//         <div style={styles.pieContainer}>
//           <Pie data={pieData} options={{ maintainAspectRatio: false }} />
//         </div>
//         <div style={styles.lineContainer}>
//           <Line data={lineData} options={chartOptions} />
//         </div>
//       </div>
//       <div style={styles.statsContainer}>
//         <div style={{ ...styles.statBox, borderColor: "#00FFFF" }}>
//           <p style={styles.statLabel}>POINTS</p>
//           <p style={styles.statValue}>{points.toLocaleString()}</p>
//         </div>
//         <div style={{ ...styles.statBox, borderColor: "#FF00FF" }}>
//           <p style={styles.statLabel}>PRODUCTS BOUGHT</p>
//           <p style={styles.statValue}>{productsBought}</p>
//         </div>
//         <div style={{ ...styles.statBox, borderColor: "#00CFFF" }}>
//           <p style={styles.statLabel}>QUIZ DAYS</p>
//           <p style={styles.statValue}>{quizDay}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   dashboardContainer: {
//     backgroundColor: "#000",
//     borderRadius: 12,
//     padding: 20,
//     color: "#fff",
//     fontFamily: "'Roboto', sans-serif",
//     maxWidth: 600,
//     margin: "auto",
//     boxShadow: "0 0 15px #00FFF7",
//   },
//   header: {
//     color: "#FF00FF",
//     fontWeight: "bold",
//     fontSize: 28,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   chartsContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   pieContainer: {
//     width: 180,
//     height: 180,
//     boxShadow: "0 0 15px #00F3FF",
//     borderRadius: 90,
//   },
//   lineContainer: {
//     width: 350,
//     height: 180,
//   },
//   statsContainer: {
//     display: "flex",
//     justifyContent: "space-around",
//   },
//   statBox: {
//     textAlign: "center",
//     borderWidth: 2,
//     borderStyle: "solid",
//     borderRadius: 8,
//     padding: 15,
//     width: 140,
//     boxShadow: "0 0 12px",
//   },
//   statLabel: {
//     fontSize: 14,
//     color: "#aaa",
//     letterSpacing: 1,
//   },
//   statValue: {
//     fontSize: 32,
//     fontWeight: "bold",
//     color: "#fff",
//   },
// };

// export default DataSection;

import React from "react";
import { useSelector } from "react-redux";
import { Pie, Line } from "react-chartjs-2";
import "chart.js/auto"; // necessary for Chart.js 3.x+
import "../assets/animations/EmojisSection.css";
import "../assets/animations/DataSection.css";

const DataSection = () => {
  const points = useSelector((state) => Number(state.user.points));
  const productsBought = useSelector((state) => state.user.productsBought);
  const quizDay = useSelector((state) => state.user.quizDay);

  // Pie chart data
  const pieData = {
    labels: ["Points", "Products", "Quiz"],
    datasets: [
      {
        data: [points, productsBought, quizDay],
        backgroundColor: ["#00FFFF", "#ff6ec7", "#00ff88"],
        hoverOffset: 30,
      },
    ],
  };

  // Line chart data with categories on X axis
  const lineData = {
    labels: ["Points", "Products Bought", "Quiz Days"],
    datasets: [
      {
        label: "User Stats",
        data: [points, productsBought, quizDay],
        borderColor: "#00FFFF",
        backgroundColor: "rgba(0,255,255,0.2)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#FF00FF",
        boxShadow: "0 0 15px #00FFF7",
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="data-section-container">
      <div
        style={{
          display: "flex",
          padding: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          alignContent: "flex-start",
          alignItems: "center",
          top: "40px",
        }}
      >
        <div style={{ fontSize: "2rem", height: "60px" }}>📊📈</div>
        <div className="data-section-title">Data Graph Section</div>
      </div>
      <div style={styles.chartsContainer}>
        <div style={styles.pieContainer}>
          <Pie data={pieData} options={{ maintainAspectRatio: true }} />
        </div>
        <div style={styles.lineContainer}>
          <Line data={lineData} options={chartOptions} />
        </div>
      </div>
      <div style={styles.statsContainer}>
        <div style={{ ...styles.statBox, borderColor: "#00FFFF" }}>
          <p style={styles.statLabel}>POINTS</p>
          <p style={styles.statValue}>{points.toLocaleString()}</p>
        </div>
        <div
          style={{
            textAlign: "center",
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 8,
            padding: 15,
            width: 140,
            boxShadow: "0 0 8px #ff6ec7",
            borderColor: "#ff6ec7",
          }}
        >
          <p style={styles.statLabel}>PRODUCTS BOUGHT</p>
          <p style={styles.statValue}>{productsBought}</p>
        </div>
        <div
          style={{
            textAlign: "center",
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 8,
            padding: 15,
            width: 140,
            boxShadow: "0 0 8px #00ff88",
            borderColor: "#00ff88",
            marginRight: "20px",
          }}
        >
          <p style={styles.statLabel}>QUIZ DAYS</p>
          <p style={styles.statValue}>{quizDay}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  //   dashboardContainer: {
  //     backgroundColor: "rgba(0, 0, 0, 0)", // semi-transparent black, adjust alpha for desired transparency
  //     borderRadius: 12,
  //     padding: 20,
  //     color: "#fff",
  //     fontFamily: "'Roboto', sans-serif",
  //     maxWidth: 600,
  //     margin: "auto",
  //     boxShadow: "0 0 15px #00FFF7",
  //   },

  header: {
    color: "#FF00FF",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
  },
  chartsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // ⬅️ center both charts
    gap: 95, // modern gap
    columnGap: 12, // fallback for older engines
    margin: "0 auto 20px", // keep row centered within card
  },
  pieContainer: {
    width: 170, // keep compact pie
    height: 170,
    boxShadow: "0 0 15px #00F3FF",
    borderRadius: 85,
  },
  lineContainer: {
    width: 370, // slightly wider line chart
    height: 180,
  },

  statsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  statBox: {
    textAlign: "center",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 8,
    padding: 15,
    width: 140,
    boxShadow: "0 0 8px #00FFF7",
  },
  statLabel: {
    fontSize: 14,
    color: "black",
    letterSpacing: 1,
  },
  statValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
};

export default DataSection;
