import { useState } from 'react';
import data from './data';

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    return (
        <div className="w-[70%] h-fit bg-cyan-200 p-4">
            <button 
                className={enableMultiSelection ? 'text-white mx-auto block mt-4 bg-red-500 p-2' : 'text-white mx-auto block mt-4 bg-cyan-500 p-2'}
                onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            >
                {enableMultiSelection ? 'Disable Multi Selection' : ('Enable Multi Selection')}
            </button>
            <div className="">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="p-2" key={dataItem.id}>
                            <div
                                onClick={
                                    enableMultiSelection
                                        ? () =>
                                              handleMultiSelection(dataItem.id)
                                        : () =>
                                              handleSingleSelection(dataItem.id)
                                }
                                className="text-2xl italic flex items-center cursor-pointer gap-4"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                      <div>{dataItem.answer}</div>
                                  )
                                : selected === dataItem.id && (
                                      <div>{dataItem.answer}</div>
                                  )}
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
};

export default Accordion;
