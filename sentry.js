import React, {Component} from 'react';
import * as Sentry from '@sentry/browser';
Sentry.init({ dsn: 'https://9c3b8d28c3ef490fad9d975d5291b5d4@sentry.io/1418053' });

function mattia() {
    Sentry.captureException(new Error('ciao mattia'));
}
mattia();
class ExampleBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ error });
      debugger;
      Sentry.withScope(scope => {
        console.log('SCOPE >>>>>>.,', scope);
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo[key]);
        });
        Sentry.captureException(error);
        return error;
      });
    }

    render() {
        if (this.state.error) {
            //render fallback UI
            return (
              <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
            );
        } else {
            //when there's not an error, render children untouched
            return <div>cia</div>;
        }
    }
}
export default ExampleBoundary;
