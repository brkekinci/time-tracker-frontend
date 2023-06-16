import React from "react";

const ReportPage = () => {
  return (
    <div style={{ backgroundColor: "#B1D4E0", height: "100vh" }}>
      <iframe
        title="burak_time_tracking"
        width="100%"
        height="800"
        src="https://app.powerbi.com/reportEmbed?reportId=cf5dd29e-1a17-4190-9827-b1dfef17b02c&autoAuth=true&ctid=1a8d692e-e61a-4751-ae83-630eb84bd9a5"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default ReportPage;
