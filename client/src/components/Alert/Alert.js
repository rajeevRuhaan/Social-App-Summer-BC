import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    <Fragment>
      {alerts.length > 0 ? (
        <Fragment>
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`alert alert-${alert.alertType}`}
              role='alert'
              style={{
                color: `$color-${alert.alertType}`,
                border: `1px solid $color-${alert.alertType}`,
                backgroundColor: `$background-color-${alert.alertType}`,
              }}
            >
              {alert.msg}
            </div>
          ))}
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default Alert;
