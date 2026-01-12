import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0518] text-white p-6 text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#bfa8ff]">Something went wrong.</h1>
            <p className="text-gray-400 mb-8 max-w-md">The application encountered an unexpected error. Please try refreshing the page.</p>
            <div className="bg-white/5 p-4 rounded-lg overflow-auto max-w-2xl w-full text-left mb-8 border border-white/10">
                <code className="text-red-400 text-sm font-mono break-all">{this.state.error && this.state.error.toString()}</code>
            </div>
            <button 
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-[#bfa8ff] text-[#0f0518] font-bold rounded-lg hover:bg-white transition-colors"
            >
                Refresh Page
            </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
