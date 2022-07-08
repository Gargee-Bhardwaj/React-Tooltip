import './App.css';

import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      <Tooltip position="top" content="This is also a tooltip!" animationDuration={600}>
        <p>Below are the boxes diplaying various positions of a tooltip(as their names suggest). Hover over them and find out their respective tooltip position.</p>
      </Tooltip>
      <Tooltip position="top" content="Tooltip">
        <button>top</button>
      </Tooltip>
      <Tooltip position="bottom" content="Tooltip">
        <button>bottom</button>
      </Tooltip>
      <Tooltip position="left" content="Tooltip">
        <button>left</button>
      </Tooltip>
      <Tooltip position="right" content="Tooltip">
        <button>right</button>
      </Tooltip>
      <Tooltip position="top-left" content="Tooltip">
        <button>top left</button>
      </Tooltip>
      <Tooltip position="top-right" content="Tooltip">
        <button>top right</button>
      </Tooltip>
      <Tooltip position="bottom-left" content="Tooltip">
        <button>bottom left</button>
      </Tooltip>
      <Tooltip position="bottom-right" content="Tooltip">
        <button>bottom right</button>
      </Tooltip>
      <Tooltip position="left-top" content="Tooltip">
        <button>left top</button>
      </Tooltip>
      <Tooltip position="left-bottom" content="Tooltip">
        <button>left bottom</button>
      </Tooltip>
      <Tooltip position="right-top" content="Tooltip">
        <button>right top</button>
      </Tooltip>
      <Tooltip position="right-bottom" content="Tooltip">
        <button>right bottom</button>
      </Tooltip>
    </div>
  );
}

export default App;
