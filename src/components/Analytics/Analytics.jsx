import React from "react";
import "./Analytics.css";
import { cardsData } from "../../Data/Data";
import Chart from "react-apexcharts";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Analytics = () => {
  // Chart data for Sales Overview
  const salesData = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-02-01T00:00:00.000Z",
          "2024-02-02T00:00:00.000Z",
          "2024-02-03T00:00:00.000Z",
          "2024-02-04T00:00:00.000Z",
          "2024-02-05T00:00:00.000Z",
          "2024-02-06T00:00:00.000Z",
          "2024-02-07T00:00:00.000Z",
        ],
      },
    },
  };

  return (
    <div className="Analytics">
      <h1>Analytics</h1>

      {/* Stats Cards */}
      <div className="AnalyticsCards">
        {cardsData.map((card, id) => {
          return (
            <div
              className="AnalyticsCard"
              key={id}
              style={{
                background: card.color.backGround,
                boxShadow: card.color.boxShadow,
              }}
            >
              <div className="CardContent">
                <div className="CardChart">
                  <CircularProgressbar
                    value={card.barValue}
                    text={`${card.barValue}%`}
                  />
                  <span>{card.title}</span>
                </div>
                <div className="CardDetails">
                  <card.png />
                  <span>${card.value}</span>
                  <span>Last 24 hours</span>
                </div>
              </div>
              <div className="ChartContainer">
                <Chart
                  options={salesData.options}
                  series={card.series}
                  type="area"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Sales Overview */}
      <div className="SalesOverview">
        <h2>Sales Overview</h2>
        <div className="SalesChart">
          <Chart
            options={salesData.options}
            series={[
              {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
              },
            ]}
            type="area"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
