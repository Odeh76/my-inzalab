import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { GenZOrBrand, LearnMore, ArticleLinks, ResetDefaultButtonStyles } from '../Buttons'



function Posts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const url = 'https://www.inzalabcontent.com/wp-json/wp/v2/posts?_embed&order=desc'


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
        {data.map(post => {
            const date = new Date((post.date)).toUTCString().split(' ').slice(0, 4).join(' ');
            return (
                <>
                    <Typography key={post.id} dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                    <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="inzalab image" />
                </>
            )
        })}
        </>
    )
}

export const Typography = styled.div`
    font-family: var(--lato);
`

export default Posts
