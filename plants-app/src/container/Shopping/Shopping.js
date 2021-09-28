import React, { useState } from 'react';

import plant1 from '../../assets/plant1.jpeg';
import plant2 from '../../assets/plant2.jpeg';
import plant3 from '../../assets/plant3.jpeg';
import plant4 from '../../assets/plant4.jpeg';
import vid1 from '../../assets/vid1.mp4';
import vid2 from '../../assets/vid2.mp4';
import blog1 from '../../assets/blog1.jpeg';
import blog2 from '../../assets/blog2.jpeg';
import img2 from '../../assets/webpImage/img2.webp';
import img3 from '../../assets/webpImage/img3.webp';
import img4 from '../../assets/webpImage/img4.webp';
import img5 from '../../assets/webpImage/img5.webp';
import img6 from '../../assets/webpImage/img6.webp';

import classes from './Shopping.module.css';

const Shopping = () => {

    const imageArray = [img2, img3, img4, img5, img6]

    const [currentImage, setCurrentImage] = useState(img2)

    const [moveRignt, moveLeft] = ['<', '>']

    // scrolls the image right
    const handleImageMoveRignt = (event) => {
        // prevents the default behaviour of "onClick" of reloading the page.
        event.preventDefault()

        // "indexOf" gives the index of the given element of a array
        const currentImageIndex = imageArray.indexOf(currentImage)
        if (currentImageIndex !== 0) {
            setCurrentImage(imageArray[currentImageIndex - 1])
        }
    }
    
    // scrolls the image left
    const handleImageMoveLeft = (event) => {
        // prevents the default behaviour of "onClick" of reloading the page.
        event.preventDefault()

        // "indexOf" gives the index of the given element of a array
        const currentImageIndex = imageArray.indexOf(currentImage)
        if (currentImageIndex !== (imageArray.length - 1)) {
            setCurrentImage(imageArray[currentImageIndex + 1])
        }
    }

    return (
        <div className={classes.shoping_page}>
            <header>
                <h1>LEAF NOW</h1>
                <p>Plants || Seeds || <a href="/logout">Logout</a></p>
            </header>
            <section className={classes.slider}>
                <div>
                    <button onClick={(event) => handleImageMoveRignt(event)}>
                        <p>
                            {moveRignt}
                        </p>
                    </button>
                </div>
                <div>
                    <img src={currentImage} alt=""/>
                </div>
                <div>
                    <button onClick={(event) => handleImageMoveLeft(event)}>
                        <p>
                            {moveLeft}
                        </p>
                    </button>
                </div>
            </section>
            <section className={classes.sell_plant}>
                <h3>Sell your plants here</h3>
                <div>
                    <div>
                        <img src={plant1} alt="plant" />
                        <p>$499</p>
                    </div>
                    <div>
                        <img src={plant2} alt="plant" />
                        <p>$799</p>
                    </div>
                    <div>
                        <img src={plant3} alt="plant" />
                        <p>$399</p>
                    </div>
                    <div>
                        <img src={plant4} alt="plant" />
                        <p>$69</p>
                    </div>
                </div>
            </section>
            <section className={classes.video}>
                <div>
                    <video 
                        src={vid1} 
                        type="video/mp4" 
                        autoplay 
                        controls 
                        width="350" 
                        height="300"
                    />
                </div>
                <div>
                    <video 
                        src={vid2} 
                        type="video/mp4" 
                        autoplay 
                        controls 
                        width="350" 
                        height="300"
                    />
                </div>
            </section>
            <section className={classes.blog}>
                <h3>Blog</h3>
                <div>
                    <div>
                        <img src={blog1} alt="blogImage" />
                        <p>
                            When the air becomes cool and crisp, our thoughts gravitate to the falling leaves in our backyard. Summer's heat-loving plants, with their drought-tolerant roots and blossoms that flourish in dense humidity, are long gone. We're bidding them farewell—at least until next summer. Fall is the season for plants that survive in less sunlight and cooler temperatures while still adding drama to the landscape with blooms and leaves. It's time to get your hands dirty and work on your green thumbs.
                        </p>
                    </div>
                    <div>
                        <img src={blog2} alt="blogImage" />
                        <p>
                            Gifting is an essential component of any strategy for cultivating deep and lasting business relationships. Gifting initiatives can help you create or sustain key relationships with clients, workers, prospects, and partners. A little, relatively inexpensive gesture can go a long way toward building long-term loyalty to your business.
                        </p>
                    </div>
                </div>
            </section>
            <footer className={classes.footer}>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">Youtube</a>
            </footer>
        </div>
    )
}

export default Shopping;