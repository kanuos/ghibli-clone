import React from 'react'
import {products} from '../Productdata';
import Navbar from './Navbar';
import Pagination from './Pagination';
import Footer from './Footer';

const styleClasses = {
    'search-container':{
        minHeight:'70vh',
        width:'100%',
        padding:'2rem',
        overflowX: 'hidden'

    },
    breadcrumb:{
        fontSize:'1.25rem',
        color:'var(--black)',
        backgroundColor:'var(--muted)',
        fontWeight:'bold',
        padding:'.25rem .5rem',
        borderRadius:'.5rem',
        margin:'2rem 0',
        display:'inline-block'
    },
    'search-title':{
        fontSize:'2.5rem',
        textAlign:'center',
        margin:'1rem',
        textTransform:'uppercase',
        fontWeight:'bolder'
    }
}



const SearchView = props => {

    React.useEffect(()=>{
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    },[]);
    const data = products.filter(item =>{
        return item.movie.toLowerCase().includes(props.match.params.id.toLowerCase())
    });
    
    return (
        <React.Fragment>
            <Navbar />
            {data.length>0 ? <main style={styleClasses['search-container']}>
                <h1 style={styleClasses['search-title']}>Search Results</h1>
                <span style={styleClasses.breadcrumb}>Products&nbsp;{data.length}</span>
                <Pagination list={data}/>
            </main> : <h1>No Items found</h1>}
            <Footer />
        </React.Fragment>
    )
}

export default SearchView
