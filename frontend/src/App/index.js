import React ,{ PureComponent, pureComponent} from 'react';
// import {Provider} from "react-redux";
// import {store} from "../R"

import AppRoutes from '../Routes/index';

class App extends PureComponent {
    render() {
        return (
            <AppRoutes />
        );
    }
}
export default App;