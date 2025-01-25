import { useEffect, useState } from 'react';
import axios from 'axios';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [fade, setFade] = useState(true); 
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0); 

    
    useEffect(() => {
        axios.get('http://localhost:3333/quotes')
            .then(response => {
                setQuotes(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar citações:', error);
                setLoading(false);
            });
    }, []);

    // Lógica para alterar a citação periodicamente
    useEffect(() => {
        if (quotes.length > 0) {
            const interval = setInterval(() => {
                setFade(false); 
                setTimeout(() => {
                    setCurrentQuoteIndex((prevIndex) => 
                        (prevIndex + 1) % quotes.length 
                    );
                    setFade(true); 
                }, 500); 
            }, 3000); 

            return () => clearInterval(interval); 
        }
    }, [quotes]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {quotes.length > 0 ? (
                <div className={`flex flex-col text-center lg:text-lg text-xs font-light text-[#918D8D] max-w-[320px] md:max-w-[350px] transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <h2>{quotes[currentQuoteIndex].frase}</h2>
                    <h3 className="lg:text-lg text-xs font-medium">- {quotes[currentQuoteIndex].autor}</h3>
                </div>
            ) : (
                <p>...first deploy your nodefastify api...</p>
            )}
        </div>
    );
};

export default Quotes;
