import React,{useEffect, useState} from 'react'
import axios from 'axios';
import ShowProject from './ShowProject';
import { Grid } from '@material-ui/core';
import { myData } from '../../data';
function Projects() {
    const [ repos, setRepos ] = useState([]);

    useEffect( async () => {
        const { data } = await axios.get(myData.github_api);
        // console.log(data);
        const newData = data.map( repo => {
                const obj = { 
                    id: repo.id,
                    name: repo.name,
                    repo_url: repo.html_url,
                    description: repo.description,
                    stars: repo.stargazers_count,
                    forks:repo.forks_count
                }
            return obj;
        })

        
        // console.log(newData);
        setRepos(newData);
        
        
    }, [])
    console.log(repos);
    return (
        <div style={{marginTop:"70px"}} id="project">
            <h1>Projects</h1>
        <Grid container>
            
            <ShowProject repos={repos}/>
        </Grid>
        </div>
        
    )
}

export default Projects;
