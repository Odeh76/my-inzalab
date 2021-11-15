import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { WhatIsInzaLab } from '../../components/Buttons/ArticleLinks/ArticleLinksStyles'
import { Authentic, Advertising, MainHeader } from '../../components/Headers/MainHeadersStyles'



function About() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()

    const url = 'https://inzalabcontent.com/wp-json/wp/v2/posts?_embed&order=asc'
    useEffect(() => {
        if(!url) return;
        fetch(url)
        .then(data => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, [url]);
    console.log(data)


    return (
        <>
      {data.map((post) => {

const date = new Date((post.date)).toUTCString().split(' ').slice(0, 4).join(' ');
 return (
     <>
        <MainHeader key={post.id} dangerouslySetInnerHTML={{__html: post.title.rendered}} />
        <Typography key={post.content} dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        <Typography key={post.excerpt} dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
        <li dangerouslySetInnerHTML={{__html: date}}></li>
        <li>Post Author:</li>
        <li dangerouslySetInnerHTML={{__html: post._embedded.author[0].name}}></li>
      
        <br />
     </>
 )
})}
        </>
    )
}

export const Typography = styled.div`
    font-family: var(--lato);
`

export default About
