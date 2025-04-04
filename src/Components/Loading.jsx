import React from "react";

export default function Loading() {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Asking the AI Chef...</p>
      </div>
    );
  }