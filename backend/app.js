const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/path/*', (req, res, next) => { 
    //equivalent to loading data at every request 
    let root = {
        type: "dir",
        children: {
                home: {
                    type: "dir",
                    children: {
                        myname: {
                        type: "dir",
                        children: {
                            "filea.txt": {
                                type: "file",
                            },
                            "fileb.txt": {
                                type: "file",
                            },
                            "projects": {
                                type: "dir",
                                children: {
                                    mysupersecretproject: {
                                        type: "dir",
                                        children: {
                                            mysupersecretfile: {
                                                type: "file",
                                            },
                                        },
                                    }
                                },
                            },
                        }
                    },  
                },  
            }   
        },  
    };  
    
    let data ={root}
    
    const pathArray = req.params['0'].split('/');
    let pathData = data['root'].children;

    pathArray.forEach((pathElement, i) => { 
        if (pathElement === '') {
            pathData = data['root'];
        }
        else if (pathData.type === 'dir') {
            pathData = pathData.children[pathElement];
        }
        else {
            pathData = pathData[pathElement];
        }
    });

    if (pathData.type === 'dir') {
        Object.keys(pathData.children).forEach(childElement => {
            if (pathData.children[childElement] && pathData.children[childElement].type === 'dir') {    
                pathData.children[childElement].children = { ...pathData.children[childElement].children };
                delete pathData.children[childElement].children;
            }
        });
    }

    res.json({data: pathData});
});

app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
});


app.listen(5000, () => {
    console.log('server running at port number 5000');
});
