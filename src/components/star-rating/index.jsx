import { FaStar } from 'react-icons/fa';
import './style.css';
import { useState } from 'react';

export default function StarRating({ noOfStars = 5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <div className="star-rating">
            <div className="title-generator">SYSTEME DE NOTATION AVEC LES ETOILES</div>
            {[...Array(noOfStars)].map((_, index) => {
                const currentIndex = index + 1;

                return (
                    <FaStar
                        key={index}
                        className={currentIndex <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(currentIndex)}
                        onMouseEnter={() => handleMouseEnter(currentIndex)}
                        onMouseLeave={handleMouseLeave}
                        size={40}
                    />
                );
            })}
        </div>
    );
}