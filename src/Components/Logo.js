import React from 'react';
import {Tooltip, IconButton, Avatar} from '@material-ui/core';
import { myData } from '../data';

function Logo() {
    return (
        <div >
        <Tooltip title="Twitter" aria-label="twitter">
            <IconButton>
                <a href={myData.twitter_link} target="__blank">
                    <Avatar alt="twitter" src="https://p.kindpng.com/picc/s/391-3910359_transparent-white-png-social-media-icons-twitter-icon.png" />
                </a>
            </IconButton>
        </Tooltip>
        <Tooltip title="Github" aria-label="github">
            <IconButton>
                <a href={myData.github_link} target="__blank">
                    <Avatar alt="github" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
                </a>
            </IconButton>
        </Tooltip> 
        
        <Tooltip title="Linkedin" aria-label="linkedin">
            <IconButton>
                <a href={myData.linkedin_link} target="__blank">
                    <Avatar alt="Linkedin" src="https://pngimage.net/wp-content/uploads/2018/06/logo-linkedin-png-blanc-3.png" />
                </a>
            </IconButton>
        </Tooltip>

        <Tooltip title="HackerEarth" aria-label="hacherearth">
            <IconButton>
                <a href={myData.hackerearth_link} target="__blank">
                    <Avatar alt="hacherearch" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/HackerEarth_logo.png/480px-HackerEarth_logo.png" />
                </a>
            </IconButton>
        </Tooltip>

        <Tooltip title="Codeforces" aria-label="codeforces">
            <IconButton>
                <a href={myData.codeforces_link} target="__blank">
                    <Avatar alt="Codeforces" src="https://news.itmo.ru/images/news/big/917925.jpg" />
                </a>
            </IconButton>
        </Tooltip>
        </div>
    )
}

export default Logo;
