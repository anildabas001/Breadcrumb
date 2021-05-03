import React from 'react';

const Breadcrumb = ({breadcrumbData, clickHandler}) => {
    const style ={
        border: '1px solid #eee',
        display: "flex",
        listStyle: 'none',
        padding: '5px',
        justifyContent: 'center',
        color: 'blue',
        textTransform: 'capitalize'
    };

    return(
        <div>
            <ul style={style}>                
                {breadcrumbData.map((data, i) => {
                    if (i === breadcrumbData.length - 1) {
                        return <li onClick={(evnt) => clickHandler(evnt, i)} style={{cursor: 'pointer'}} key={data}>{data}</li>;
                    }
                    else {
                        return <li style ={{cursor: 'pointer'}} onClick={(evnt) => clickHandler(evnt, i)} key={data}>{data}<span style={{padding: '0px 5px'}}>/</span> </li>
                    }
                })}
            </ul>
        </div>
    );
}

export default Breadcrumb;