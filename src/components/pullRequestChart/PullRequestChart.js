import React from "react";
import { Doughnut } from "react-chartjs-2";
import MotionWrapper from "../animations/MotionWrapper";
import PullRequestsData from "../../shared/opensource/pull_requests.json";
import { openSource } from "../../portfolio";
import "./PullRequestChart.css";

const PullRequestChart = (props) => {
  const { theme } = props; // Destructure theme for cleaner code

  // Check if pull request chart should be displayed
  if (!openSource.pr_chart) {
    return null; // Return null if no data or chart is not enabled
  }

  // Prepare chart data
  const data = {
    labels: ["Open", "Merged", "Closed"],
    datasets: [
      {
        data: [
          PullRequestsData.open,
          PullRequestsData.merged,
          PullRequestsData.closed,
        ],
        backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
        hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
      },
    ],
  };

  return (
    <div className="pr-chart">
      <MotionWrapper>
        <h2 className="pr-chart-header" style={{ color: theme.secondaryText }}>
          Pull Request Distribution
        </h2>
      </MotionWrapper>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          animation: {
            duration: 4000,
          },
        }}
      />
    </div>
  );
};

export default PullRequestChart;
