import React, {useState, useEffect, useRef} from 'react';
import Breadcrumb from './Components/Breadcrumb';
import Directory from './Components/Directory';
import File from './Components/File';
import './App.css';

function App() {
  const [data, updateData] = useState(null);
  const [breadcrumbData, updateBreadcrumb] = useState(['home']);
  const BreadcrumbRef = useRef(null);

  useEffect(() => {
    if (BreadcrumbRef.current !== breadcrumbData) {
      fetch(`http://127.0.0.1:5000/path/${breadcrumbData.join('/')}`)
        .then(response => response.json())
        .then(data => { updateData({ ...data.data })} )
        .catch(err => console.log('error'));
    }

    BreadcrumbRef.current = breadcrumbData;
  }, [breadcrumbData, data]);

  const breadcrumbClickHandler = (event, index) => {
    const updatedArray = breadcrumbData.splice(index + 1)
    updateBreadcrumb([...breadcrumbData]);
  }

  const dirClickHandler = (event, clickedElement) => {
    breadcrumbData.push(clickedElement);
    updateBreadcrumb([...breadcrumbData]);
  }

  let element = data  && data.type === 'dir'? <Directory clickHandler={dirClickHandler} dirName={breadcrumbData[breadcrumbData.length - 1]} dirData ={data.children} />: null;

  if (data && data.type === 'file') {
    element = <File fileName={breadcrumbData[breadcrumbData.length - 1]} />
  }

  return (
    <div className="App">
      <Breadcrumb clickHandler={breadcrumbClickHandler} rootDir={breadcrumbData[breadcrumbData.length - 1]} breadcrumbData = {breadcrumbData} />
      {element}
    </div>
  );
}

export default App;
