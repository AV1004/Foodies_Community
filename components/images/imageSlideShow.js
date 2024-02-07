"use client"

// NextJs Defaultly use React Server Components so if try to render below component it will throw error as The states like useState And useEffect and function like SetInterval or SetTimeout does not work on server side as per developer's will it should work on client side client shows slideshow at every 5 sec of his browser not server side so to make this component work you have to use "use Client" as shown above 

import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import classes from './imageSlideShow.module.css';

const images = [
    { image: burgerImg, alt: 'A delicious, juicy burger' },
    { image: curryImg, alt: 'A delicious, spicy curry' },
    { image: dumplingsImg, alt: 'Steamed dumplings' },
    { image: macncheeseImg, alt: 'Mac and cheese' },
    { image: pizzaImg, alt: 'A delicious pizza' },
    { image: schnitzelImg, alt: 'A delicious schnitzel' },
    { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.slideshow}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.image}
                    className={index === currentImageIndex ? classes.active : ''}
                    alt={image.alt}
                />
            ))}
        </div>
    );
}