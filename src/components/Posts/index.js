import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';



const postsUrl = 'https://www.inzalabcontent.com/wp-json/wp/v2/posts?_embed&order=desc'

function Posts() {
    
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const data = await axios.get(postsUrl);
            console.log(data.data);
            setPosts(data.data);
        } catch (e) {
           console.log(e) 
        }
    };

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <>
        {posts.map(post => {
            // const date = new Date((post.date)).toUTCString().split(' ').slice(0, 4).join(' ');
            return (
                <>
                    <Typography key={post.id} dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                    <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="inzalab content" />
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
