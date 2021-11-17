import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { MainHeader } from '../../components/Headers/MainHeaders/Styles'



function About() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()

    const aboutUrl = 'https://inzalabcontent.com/wp-json/wp/v2/posts?_embed&include[]=63'
    useEffect(() => {
        if(!aboutUrl) return;
        fetch(aboutUrl)
        .then(data => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, [aboutUrl]);
    console.log(data)


    return (
        <>
      {data.map((post) => {

const date = new Date((post.date)).toUTCString().split(' ').slice(0, 4).join(' ');
 return (
     <>
        <MainHeader key={post.id} dangerouslySetInnerHTML={{__html: post.title.rendered}} />
        <Typography key={post.content.rendered} dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        <Typography key={post.excerpt.rendered} dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
        <li key={post.date} dangerouslySetInnerHTML={{__html: date}}></li>
        <li>Post Author:</li>
        <li key={post._embedded.author[0].name} dangerouslySetInnerHTML={{__html: post._embedded.author[0].name}}></li>
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
