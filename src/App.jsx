import { useCallback, useState } from 'react';
import './App.css'

// eslint-disable-next-line react/prop-types
const ChekboxList = ({checkedList, handleOptionChange}) => {
  if(checkedList && checkedList.length > 0){
    return checkedList.map((value, index) => 
      <div key={index}>
        <input
          type='checkbox' 
          value={value}
          checked={value}
          onChange={handleOptionChange(index)}
        />
        Option {index}
      </div>
    )
  }
  return <></>
}

function App() {
  const [checked, setChecked] = useState([true, true, true, true]);
  const [selectAllSelected, setSelectAllSelected] = useState(false);

  const handleOptionChange = useCallback((index) => (newValueEvent) => {
    const newValue = newValueEvent.target.checked;
    const newChecked = [...checked];
    newChecked[index] = newValue;
    setChecked(newChecked);
  }, [checked]);

  const handleSelectAllChange = useCallback((selectAllEvent)=>{
    const selectAllValue = selectAllEvent.target.checked;
    setSelectAllSelected(selectAllValue);
    setChecked([selectAllValue, selectAllValue, selectAllValue, selectAllValue])
  }, []);

  


  return (
    <>
      <input type='checkbox' value={selectAllSelected} checked={selectAllSelected} onChange={handleSelectAllChange}/> Select All 
      <ChekboxList checkedList={checked} handleOptionChange={handleOptionChange}/>

    </>
  )
}

export default App
