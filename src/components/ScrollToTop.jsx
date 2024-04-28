import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página para o topo quando a rota muda
  }, [pathname]); // Dispara o efeito quando o pathname da URL muda

  return null; // Renderiza nada (efeito colateral puro)
};

export default ScrollToTopOnRouteChange;
