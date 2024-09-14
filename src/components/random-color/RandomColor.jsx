import { useState, useEffect } from 'react';

const RandomColor = () => {
    const [color, setColor] = useState('#a5f3fc');

    const handleGenerateRGBColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        setColor(`rgb(${r}, ${g}, ${b})`);
        console.log(color);
    };

    const handleGenerateHEXColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        setColor(hexColor);
        console.log(color);
    };

    useEffect(() => {
      if (color === '#a5f3fc') handleGenerateHEXColor();
      else handleGenerateRGBColor();
    }, []);

    return (
        <div
            className={`w-[70%] h-fit bg-cyan-200 px-4 py-20 flex justify-center gap-5 flex-col items-center`}
            style={{background: color}}
        >
            <button
                className="px-4 py-2 border border-black text-gray-600 font-bold rounded-lg bg-white"
                onClick={() => handleGenerateRGBColor()}
            >
                Generate RGB Color
            </button>
            <button
                className="px-4 py-2 border border-black text-gray-600 font-bold rounded-lg bg-white"
                onClick={() => handleGenerateHEXColor()}
            >
                Generate HEX Color
            </button>
            <div className="">
                <h1 className='text-7xl'>COLOR: {color}</h1>
            </div>
        </div>
    );
};

export default RandomColor;
