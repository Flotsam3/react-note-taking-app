import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import data from './data';
import Overview from './Components/Overview';
import Details from './Components/Details';

function App() {
  const [detailedInfo, setDetailedInfo] = useState({});
  const [selectedTitle, setSelectedTitle] = useState('');
  const [clearDisplay, setClearDisplay] = useState(false);
  const ref = useRef();
  let searchResult = '';

  const handleDataSearch = (event)=>{
    const searchContent = event.target.textContent;
    setSelectedTitle(event.target);
    searchResult = data.find((array)=>array.title === searchContent);
    setDetailedInfo(searchResult);
    event.target.className += " selected";
  }

  const usePreviousValue = value => {
    useEffect(() => {
      ref.current = value;
      handleRemoveHighlight();
    });
    return ref.current;
  };

  const previousElement = usePreviousValue(selectedTitle);

  const handleRemoveHighlight = ()=>{
    if (previousElement){
      previousElement.classList.remove('selected');
    }
  }

  const handleRemoveElement = ()=>{
    if (ref.current){
      ref.current.remove();
      setClearDisplay(true);
    }
  }
  
  return (
    <div className="notes">
      <ul className="overview" onClick={handleDataSearch}>
        <Overview data={data}/>
      </ul>
      <Details showdetails={detailedInfo} onRemove={handleRemoveElement} updateDisplay={clearDisplay}/>
    </div>
  );
}

export default App;
