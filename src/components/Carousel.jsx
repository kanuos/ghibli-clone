import React, {useState,useEffect} from 'react';
import './carousel.css'

import totoro from '../assets/totoro_hero.jpg'
import spirited from '../assets/spirited_hero.jpg'
import princess from '../assets/princess_hero.jpg'


const Carousel = () => {    

    const [image, setImage] = useState(totoro)
    const [title, setTitle] = useState('MY NEIGHBOR TOTORO')
    
    useEffect(()=>{
        let index = 0;
        const carusel_data = [
            {
                img : totoro,
                title: 'MY NEIGHBOR TOTORO'
            }, 
            {
                img : spirited,
                title: 'SPIRITED AWAY'
            }, 
            {
                img : princess,
                title: 'PRINCESS MONONOKE'
            } 
        ];
        setInterval(()=>{
            if(index < 2){
                index++;
            }
            else{
                index = 0;
            }
            setImage(carusel_data[index].img)
            setTitle(carusel_data[index].title)
        }, 10000);
    }, [])


    return (
        <section className="carousel">
            <img src={image} alt={title} className="carousel_img"/>
            <div className="carousel-text">
                <h1 className="carousel-heading">{title}</h1>
            </div>
        </section>
    )
}

export default Carousel
