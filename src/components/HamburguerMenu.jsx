/* eslint-disable react/prop-types */
import classNames from 'classnames';

const HamburguerMenu = ({ opened }) => {
    return (
        <div
            className={classNames(
                "relative cursor-pointer inline-block w-10 h-4", 
                { "tham-active": opened } 
            )}
        >
            <div className="relative w-full h-full flex flex-col justify-between">
                {/* top */}
                <div
                    className={classNames(
                        "h-[2px] w-full transition-all duration-500 ease-in-out",
                        {
                            "rotate-45 absolute top-0 bg-white": opened, 
                            "bg-black": !opened, 
                        }
                    )}
                />
                {/* mid */}
                <div
                    className={classNames(
                        "h-[2px] w-full transition-all duration-500 ease-in-out",
                        {
                            "opacity-0": opened, 
                            "bg-black": !opened, 
                            "bg-white": opened, 
                        }
                    )}
                />
                {/* bot */}
                <div
                    className={classNames(
                        "h-[2px] w-full transition-all duration-500 ease-in-out",
                        {
                            "-rotate-45 absolute bottom-0 bg-white": opened, 
                            "bg-black": !opened, 
                        }
                    )}
                />
            </div>
        </div>
    );
};

export default HamburguerMenu;
