


const CardHero = () => {
    return (
        <div className="mx-auto w-full max-w-xs relative flex flex-col items-center justify-center text-center overflow-visible">
            <h3 className="text-3xl font-medium">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">Welcome</span>
            </h3>
            <div className="w-full relative flex flex-col items-center justify-center">
                <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent h-[2px] w-full blur-sm" />
                <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent h-px w-full" />
                <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] w-1/2 blur-sm" />
                <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-1/2" />
                <div
                    style={{}}
                    className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"
                />
            </div>
            <p className="mt-4 text-sm">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">Hope you enjoy your stay</span>
            </p>

            <span className="absolute -z-[1] backdrop-blur-sm inset-0 w-full h-full flex before:content-[''] before:h-3/4 before:w-full before:bg-gradient-to-r before:from-black before:to-yellow-500 before:blur-[90px] after:content-[''] after:h-1/2 after:w-full after:bg-gradient-to-br after:from-yellow-50 after:to-white after:blur-[90px]" />
        </div>
    )
}

export default CardHero;
