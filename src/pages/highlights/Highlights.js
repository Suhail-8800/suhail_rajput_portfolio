import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Radar } from "react-chartjs-2";
import { Fade } from "react-reveal";
import TopButton from "../../components/topButton/TopButton";
import "./Highlights.css";

class Highlights extends Component {
  render() {
    const theme = this.props.theme;
    const radarData = {
      labels: [
        "Backend Systems",
        "Full Stack Development",
        "AI & Machine Learning",
        "Cloud & DevOps",
        "System Design",
      ],
      datasets: [
        {
          label: "Technical Focus",
          data: [85, 80, 75, 70, 78],
          backgroundColor: "rgba(25, 118, 210, 0.28)",
          borderColor: "rgba(21, 101, 192, 1)",
          pointBackgroundColor: "rgba(21, 101, 192, 1)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(21, 101, 192, 1)",
          borderWidth: 2,
        },
      ],
    };

    const radarOptions = {
      responsive: true,
      legend: { display: false },
      animation: {
        duration: 1800,
        easing: "easeOutQuart",
      },
      scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
          display: false,
        },
        pointLabels: {
          fontSize: window.innerWidth < 768 ? 10 : 14,
          fontColor: theme.text,
          fontStyle: "600",
        },
        gridLines: {
          color: "rgba(0,0,0,0.05)",
        },
        angleLines: {
          color: "rgba(0,0,0,0.05)",
        },
      },
    };

    return (
      <div className="opensource-main">
        <Header theme={theme} />

        <div className="engineering-container">
          {/* Hero Section */}
          <div className="engineering-hero">
            <h1 className="engineering-title" style={{ color: theme.text }}>
              Engineering Highlights
            </h1>

            <p
              className="engineering-subtitle"
              style={{ color: theme.secondaryText }}
            >
              Selected technical decisions and architecture improvements
              demonstrating backend systems, scalable software design, and AI
              engineering depth.
            </p>
          </div>

          {/* Technical Focus Overview */}
          <Fade bottom duration={1200} distance="30px">
            <div className="tech-focus-wrapper fade-in-scale">
              <h2 className="tech-focus-title" style={{ color: theme.text }}>
                Technical Focus Overview
              </h2>

              <div className="radar-container">
                <Radar data={radarData} options={radarOptions} />
              </div>
            </div>
          </Fade>

          {/* Engineering Cards Grid */}
          <div className="engineering-grid">
            {/* Card 1 */}
            <div className="engineering-card">
              <h3 style={{ color: theme.text }}>
                Optimized Webhook Processing Pipeline
              </h3>
              <a
                href="https://github.com/Suhail-8800/bajajFinserv.git"
                target="_blank"
                rel="noopener noreferrer"
                className="engineering-link"
              >
                Webhook SQL Problem Solver
              </a>
              <p style={{ color: theme.secondaryText }}>
                Redesigned backend request validation and SQL execution flow to
                reduce redundant database queries and improve efficiency under
                repeated webhook triggers.
              </p>
              <p className="impact-text">
                <strong>Impact:</strong> Improved request efficiency and
                minimized database overhead during high-frequency API calls.
              </p>
            </div>

            {/* Card 2 */}
            <div className="engineering-card">
              <h3 style={{ color: theme.text }}>
                Lightweight System Monitoring Architecture
              </h3>
              <a
                href="https://github.com/Suhail-8800/System-Resource-Monitor.git"
                target="_blank"
                rel="noopener noreferrer"
                className="engineering-link"
              >
                System Resource Monitor (C)
              </a>
              <p style={{ color: theme.secondaryText }}>
                Implemented optimized system call sampling to track CPU, memory,
                and disk usage in real time within terminal environments.
              </p>
              <p className="impact-text">
                <strong>Impact:</strong> Maintained performance monitoring with
                minimal system overhead.
              </p>
            </div>

            {/* Card 3 */}
            <div className="engineering-card">
              <h3 style={{ color: theme.text }}>
                Real-Time AI Inference Optimization
              </h3>
              <a
                href="https://github.com/Suhail-8800/Real-Time-Sign-Language-Detector.git"
                target="_blank"
                rel="noopener noreferrer"
                className="engineering-link"
              >
                Sign Language Detection System
              </a>
              <p style={{ color: theme.secondaryText }}>
                Improved model inference flow using OpenCV and optimized frame
                processing to maintain real-time performance.
              </p>
              <p className="impact-text">
                <strong>Impact:</strong> Achieved stable real-time recognition
                with reduced frame latency.
              </p>
            </div>

            {/* Card 4 */}
            <div className="engineering-card">
              <h3 style={{ color: theme.text }}>
                Scalable Full-Stack Architecture Design
              </h3>
              <a
                href="https://boutique-travel-portal-suhaill.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="engineering-link"
              >
                Boutique Travel Planning Portal
              </a>
              <p style={{ color: theme.secondaryText }}>
                Designed modular backend services using Node.js and Express,
                structured MongoDB schema for dynamic itinerary management, and
                implemented REST APIs to support booking workflows.
              </p>
              <p className="impact-text">
                <strong>Impact:</strong> Enabled scalable itinerary creation and
                efficient data retrieval with optimized API response handling.
              </p>
            </div>
          </div>
        </div>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Highlights;
