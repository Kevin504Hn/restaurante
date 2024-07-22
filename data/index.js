import global from './global';
import global2 from './global2';
import global3 from './global3';

import arrozs from './pages/arrozs';
import bebidas from './pages/bebidas';
import blogs from './pages/blogs';
import cerdos from './pages/cerdos';
import entradas from './pages/entradas';
import formularios from './pages/formularios';
import mariscos from './pages/mariscos';
import nosotros from './pages/nosotros';
import sopas from './pages/sopas';

const getPageContext = (page) => {

    let pageVariables = {};
    switch (page) {
        case '/arroz.html':
            pageVariables = arrozs;
            break;
        case '/bebidas.html':
            pageVariables = bebidas;
            break;
        case '/blog.html':
            pageVariables = blogs;
            break;
        case '/cerdo.html':
            pageVariables = cerdos;
            break;
        case '/entradas.html':
            pageVariables = entradas;
            break;
        case '/formularios.html':
            pageVariables = formularios;
            break;
        case '/mariscos.html':
            pageVariables = mariscos;
            break;
        case '/nosotros.html':
            pageVariables = nosotros;
            break;
        case '/sopas.html':
            pageVariables = sopas;
            break;
    }
    return {
        ...pageVariables,
        ...global(page),
        ...global2(page),
        ...global3(page),
    };
}

export default getPageContext;