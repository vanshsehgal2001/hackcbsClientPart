import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => {
      return (
        <div
          style={{
            zIndex: 1000,
            marginTop: "100px",
            marginBottom: "0px",
          }}
          key={alert.id}
          className={`alert alert-${alert.type}`}
          role="alert"
        >
          {alert.msg}
        </div>
      );
    })
  );
};

export default Alert;
