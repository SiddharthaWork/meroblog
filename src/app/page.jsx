"use client"
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Link from 'next/link';
import styles from './Page.module.css';
import Image from 'next/image';

export default function Page() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/posts");
                let data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const limitBodyText = (text) => {
        const words = text.split(' ');
        if (words.length > 5) {
            return words.slice(0, 30).join(' ') + '...';
        }
        return text;
    };

    return (
        <div style={{ height: '100vh', backgroundColor: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            
            <Image style={{ position: 'relative', width: '100%', height: '500px' }}
                src="/image/bp.jpg"
                width={1503}
                height={500}
            />

                <h1 className={styles.heading} style={{ textAlign: 'center' }}>
    Welcome to Mero Blog
</h1>
       
<div className={`${styles.mainContent} main-content`}>
    <h2 style={{ textAlign: 'center',color: '#007bff' }} className={styles.subHeading}>Blog Posts:</h2>
    <ul className={styles.postList}>
        {posts.map(post => (
            <li key={post.id} className={styles.postItem}>
                <div style={{ textDecoration: 'none', color: 'inherit' }}>
                <Link style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold', transition: 'color 0.3s ease' }} href={{ pathname: `/blog/${post.id}`, query: { id: post.id, title: post.title, body: post.body } }} passHref>
                        <div className={styles.imageContainer}>
                            <Image src={`/image/ap.jpg`} width={650} height={350} />
                        </div>
                        <p className={styles.title}>Title: {post.title}</p>
                        <p className={styles.body}>Body: {limitBodyText(post.body)}</p>
                    </Link>
                </div>
            </li>
        ))}
    </ul>
</div>
<Footer />
</div>


    );
}
