import React, { Component } from 'react'
import ErrorPage from './ErrorPage.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {

    this.setState({
      error: error,
      errorInfo: errorInfo
    })

  }

  render() {
    if (this.state.errorInfo) {
      return (
        <ErrorPage />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;