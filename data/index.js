import global from './global';

const getPageContext = (page) => {

    /*let pageVariables = {};
    switch (page) {
        case '/arroz.html':
            pageVariables = arrozs;
            break;
    }*/
    return {
        /*...pageVariables,*/
        ...global(page),
    };
}

export default getPageContext;