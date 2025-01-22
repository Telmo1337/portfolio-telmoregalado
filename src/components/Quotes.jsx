import { useEffect, useState } from 'react';
import axios from 'axios';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]); // Armazena todas as citações
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [fade, setFade] = useState(true); // Controla o efeito de fade
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0); // Armazena o índice atual

    // Fetch das citações ao montar o componente
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
                setFade(false); // Inicia o fade-out
                setTimeout(() => {
                    setCurrentQuoteIndex((prevIndex) => 
                        (prevIndex + 1) % quotes.length // Avança para a próxima citação
                    );
                    setFade(true); // Ativa o fade-in
                }, 500); // Espera o fade-out antes de trocar a citação
            }, 3000); // Muda de citação a cada 3 segundos

            return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
        }
    }, [quotes]);

    if (loading) {
        return <p>Carregando citações...</p>;
    }

    return (
        <div>
            {quotes.length > 0 ? (
                <div className={`lg:text-lg text-xs font-light text-[#918D8D] max-w-[280px] md:max-w-[310px] transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <h2>{quotes[currentQuoteIndex].frase}</h2>
                    <h3 className="lg:text-lg text-xs font-medium">- {quotes[currentQuoteIndex].autor}</h3>
                </div>
            ) : (
                <p>Nenhuma citação disponível.</p>
            )}
        </div>
    );
};

export default Quotes;
