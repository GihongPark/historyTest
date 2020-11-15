import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/history" component={HistorySample} />
    </div>
  );
};

export default App;
