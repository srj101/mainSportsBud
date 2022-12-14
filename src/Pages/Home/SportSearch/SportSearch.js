import React from 'react';
import { FcSearch } from "react-icons/fc";
import './SportSearch.css'

const SportSearch = () => {
    const [active, setActive] = React.useState(true);

    const placeholderToggle = () => {
        setActive(false);
    };

    const placeholder = () => {
        setActive(true);
    };
    return (
        <div className='w-full px-8 lg:px-0'>
            <div className='w-full lg:w-1/2 mt-24 mb-10 lg:mb-12 z-49 relative mx-auto'>
                <form action=''>
                    <FcSearch className='absolute search'> </FcSearch>
                    <input
                        type='text'
                        placeholder='Search your sport'
                        onFocus={placeholderToggle}
                        onBlur={placeholder}
                        className={`in input input-bordered border-2 border-stone-600 w-full  placeholder:p-[-1px] input-outline shadow-md ${active ? "placeholder:block" : "placeholder:invisible"
                            } `}
                    />
                </form>
            </div>
        </div>
    );
};

export default SportSearch;