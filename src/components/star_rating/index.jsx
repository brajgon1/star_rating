import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);

    function handleClick(getCurrentIndex) {
        // Handle click event
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        // Handle mouse enter event
        setHovered(getCurrentIndex)
    }

    function handleMouseLeave() {
        // Handle mouse leave event
        setHovered(rating)
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                index += 1

                    return (
                        <FaStar
                            key={index}
                            className={index <= (hovered || rating) ? 'active' : 'inactive'}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            size={40}
                        />
                    );
                })
            }
        </div>
    );
}
