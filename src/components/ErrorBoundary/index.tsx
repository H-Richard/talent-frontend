import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorState {
  error: Error | null
  info: ErrorInfo | null
}

type State = ErrorState;

type Props = { children: ReactNode };

class ErrorBoundary extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch = (error: Error, info: ErrorInfo) => {
    this.setState({
      error,
      info,
    });
  };

  render() {
    const { info, error } = this.state;
    const { children } = this.props;
    return (
      info ? (
        <div>
          <h2>Something went seriouosly wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {info!.componentStack}
          </details>
        </div>
      ) : (children)
    );
  }
}

export default ErrorBoundary;
