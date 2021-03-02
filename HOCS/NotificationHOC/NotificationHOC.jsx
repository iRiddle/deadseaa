import React from "react";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";

import "react-notifications/lib/notifications.css";

const withNotification = (WrappedComponent) => {
    return class extends React.Component {
        createNotification = (type, message, extraMessage) => {
            switch (type) {
                case "info":
                    return NotificationManager.info("Info message");
                case "ok":
                    return NotificationManager.success(message);
                case "warning":
                    NotificationManager.warning(
                        "Warning message",
                        "Close after 3000ms",
                        4000
                    );
                    break;
                case "error":
                    NotificationManager.error(message, `${extraMessage}`, 4000);
                    break;
            }
        };

        render() {
            return (
                <>
                    <WrappedComponent
                        {...this.props}
                        {...this.state}
                        createNotification={this.createNotification}
                    />
                    <NotificationContainer />
                </>
            );
        }
    };
};

export default withNotification;
