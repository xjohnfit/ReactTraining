import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ starsNum = 10 }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (index) => {
        setRating(index);
    }

    const handleMouseOver = (index) => {
        setHover(index);
    }

    const handleMouseLeave = () => {
        setHover(rating);
    }

    return (
        <div className="w-[70%] h-[30vh] bg-cyan-200 p-4 flex justify-center items-center gap-2">
            {[...Array(starsNum)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        size={50}
                        key={index}
                        className={index <= (hover || rating) ? 'text-yellow-500' : 'text-black'}
                        onClick={() => handleClick(index)}
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
