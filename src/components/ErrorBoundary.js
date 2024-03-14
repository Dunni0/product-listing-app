import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { errorInfo: false, error: null };
    }

   componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
   }

   render() {
    if (this.state.error) {
        return (
          <div>
          <h1 className="error_text">Something Unexpected happened.</h1>
          <div>
          <small className="error_text">An Error Has Occurred </small>
          <details className="error_text">
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
        </div>
        )
    }
    return this.props.children;
   }
  }

  export default ErrorBoundary;