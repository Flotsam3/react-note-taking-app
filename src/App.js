import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import data from './data';
import Overview from './Components/Overview';
import Details from './Components/Details';
import Edit from './Components/Edit';

function App() {
  const [dataBase, setDataBase] = useState(data);
  const [detailedInfo, setDetailedInfo] = useState({});
  const [selectedTitle, setSelectedTitle] = useState('');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [editData, setEditData] = useState(false);
  const [addOrEdit, setAddOrEdit] = useState('');
  const ref = useRef();
  let searchResult = '';

  const handleDataSearch = (event)=>{
    const searchContent = event.target.textContent;
    setSelectedTitle(event.target);
    searchResult = dataBase.find((array)=>array.title === searchContent);
    setDetailedInfo(searchResult);
    event.target.className += " selected";
    setClearDisplay(false);
    console.log(dataBase);  
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

  const handleEdit = ()=>{
    setEditData(true);
    setAddOrEdit('edit');
  }

  const handleAdd = ()=>{
    setEditData(true);
    setAddOrEdit('add');
  }

  const handleSaveEdit = ()=>{
    const updateTitle = document.querySelector('#edit-title');
    const updateBody = document.querySelector('#edit-body');
    const updateTime = document.querySelector('#edit-time');
    const updateId = document.querySelector('#edit-id');

    setDetailedInfo(detailedInfo.title = updateTitle.textContent);
    setDetailedInfo(detailedInfo.body = updateBody.textContent);
    setDetailedInfo(detailedInfo.time = updateTime.textContent);
    setDetailedInfo(detailedInfo.time = updateId.textContent);
    setEditData(false);
  }

  const handleSaveAdd = ()=>{
    const updateTitle = document.querySelector('#edit-title');
    const updateBody = document.querySelector('#edit-body');
    const updateTime = document.querySelector('#edit-time');
    const updateId = document.querySelector('#edit-id');
    const updateData = {id: updateId.textContent, title: updateTitle.textContent, body: updateBody.textContent, time: updateTime.textContent}
    setDataBase([...dataBase, updateData]);
    setEditData(false);
  }

  const exitEdit = ()=>{
    setEditData(false)
  }
  
  return (
    <div className="notes">
      <ul className="overview" onClick={handleDataSearch}>
        <Overview data={dataBase}/>
      </ul>
      {(editData === true ? (
        <Edit editDetails={detailedInfo} quitEdit={exitEdit} onSaveEdit={handleSaveEdit} addEdit={addOrEdit} onSaveAdd={handleSaveAdd} />
      ):(
        <Details showdetails={detailedInfo} onRemove={handleRemoveElement} updateDisplay={clearDisplay} onEdit={handleEdit} onAdd={handleAdd}/>
      ))}
    </div>
  );
}

export default App;
