import './App.css';
import Box2 from './components/Box2/Box2';
import Box3 from './components/Box3/Box3';
import Box4 from './components/Box4/Box4';
import Box5 from './components/Box5/Box5';
import Box6 from './components/Box6/Box6';
import Box1 from './components/FirstBox/Box1';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Box1/>
      <Box2/>
      <Box3/>
      <Box4/>
      <Box5/>
      <Box6/>
    </div>
  );
}

export default App;
