import React from 'react';

const Blog = ({ blog }) => {
  if (!blog) {
    // If blog is undefined, display a message or return null
    return <p>No blog data available</p>;
  }

  return (
    <div>
      <h1>This is a blog</h1>
      {blog.map(blogItem => (
        <div key={blogItem.id}>
          <a>
            <h3>{blogItem.title}</h3> {/* Use blogItem.title instead of blogItem.name */}
          </a>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
      props: { blog: data },
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      props: { blog: null }, // Return null instead of an empty array if there's an error
    };
  }
}
    
export default Blog;
