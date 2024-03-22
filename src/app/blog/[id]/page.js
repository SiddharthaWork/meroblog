import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Image from 'next/image';

const Page = ({ searchParams }) => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Navbar />
            <a href="javascript:history.back()" style={{ position: 'absolute', top: '110px', left: '26px', fontSize: '1rem', padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', border: 'none', cursor: 'pointer' }}>Back</a>
            <br/>
            <Image src={`/image/ap.jpg`} width={650} height={350} />
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Title : {searchParams.title}</h1>
            <p style={{ fontSize: '1.2rem', margin: '20px auto', maxWidth: '800px' }}>{searchParams.body}</p>
            <Footer />
        </div>
    );
};

export default Page;
