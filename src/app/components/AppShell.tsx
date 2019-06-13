import * as React from 'react';
import { Vitrine } from './vitrine/Vitrine';
import { ConnectedShell } from './connected/ConnectedShell';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

interface IAppShellProps {
    history: any;
}

export class AppShell extends React.Component<IAppShellProps, any> {

   render() {
        return <div>
            <Router history={this.props.history}>
                <Link to="/dashboard">About</Link>
                <Switch>
                    <Route exact path="/" component={Vitrine} />
                    <Route exact path="/dashboard" component={ConnectedShell} />
                </Switch>
            </Router>;
        </div>
   }
}