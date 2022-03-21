// import { Alert } from "antd";
import React from "react";
import "./error-boundary.scss";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, goToHome: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error", error);
    console.log("errorInfo", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="page-error-boundary">
          {/* <Alert message="Something went wrong" type="error" /> */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
