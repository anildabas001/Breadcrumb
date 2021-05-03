import React from 'react';

const Directory = ({dirName, dirData, clickHandler}) => { 
    const dirKeys= Object.keys(dirData);
    
    const style={
        cursor: 'pointer',
        color: 'blue'
    };

    return (
        <div>
            <h3 style={{textTransform: 'capitalize'}}>"{dirName}" directory Content</h3>
            {dirKeys.map(key =>{
                if (dirData[key].type === 'dir') {
                    return <p style={style} onClick={(evnt) => clickHandler(evnt, key)} key={key}>{key}/</p>
                }
                else {
                    return <p style={style} onClick={(evnt) => clickHandler(evnt, key)} key={key}>{key}</p>
                }
            })}
        </div>
    );
}

export default Directory;