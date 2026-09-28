import { Component } from "react";

/**
 * Top-level error boundary so a runtime exception in any component
 * shows a recoverable fallback instead of a blank white screen.
 */
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Unhandled UI error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink px-6 text-center text-cream">
          <h1 className="font-serif text-2xl">Something went wrong</h1>

          <p className="max-w-sm text-sm text-white/60">
            An unexpected error occurred while rendering the page.
          </p>

          <button
            type="button"
            onClick={this.handleReset}
            className="rounded-xl bg-gold px-5 py-3 text-xs font-semibold text-panel transition-colors duration-300 hover:bg-gold-bright"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
