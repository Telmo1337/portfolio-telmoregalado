import telmo from '../../../assets/main.png';


import CardHero from '../../cards/CardHero';

const Hero = () => {
    return (
        <>
            <div className='flex justify-start items-center'>
                <CardHero />
            </div>
            <div className="relative flex items-center justify-center p-4 sm:p-8">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden ">
            <img
              src={telmo}
              alt="Telmo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/50 to-transparent" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Telmo Regalado
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-2">
            Front-end developer
          </p>
          <p className="text-gray-400 mb-6 max-w-md mx-auto lg:mx-0">
            A brief introduction about yourself and your expertise. Highlight your key skills and what makes you unique in your field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button>dsds</button>
            <button>dsgfdsgdds</button>
          </div>
        </div>
      </div>
    </div>
            
        </>
    )
}

export default Hero
