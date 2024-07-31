const global = (path) => {
    return {
        title: 'Hong Kong',
        menuOptions: getMenuWithActivePath(path)
    }
}

const getMenuWithActivePath = (path) => {
    return [
        {
            imagen: "img/Hong Kong Logo 612x612.jpg",
           
        
             url: 'index.html',
            page: 'index',
        },
        {
            icono: "ri-store-line",
            label: 'Entradas',
            url: 'entradas.html',
            page: 'entradas',
        },
        {
            icono: "ri-store-line",
            label: 'Sopas',
            url: 'sopas.html',
            page: 'sopas',
        },
        {
            icono: "ri-store-line",
            label: 'Cerdo',
            url: 'cerdo.html',
            page: 'cerdo',
        },
        {
            icono: "ri-store-line",
            label: 'Arroz',
            url: 'arroz.html',
            page: 'arroz',
        },
        {
            icono: "ri-store-line",
            label: 'Mariscos',
            url: 'mariscos.html',
            page: 'mariscos',
        },
        {
            icono: "ri-store-line",
            label: 'Bebidas',
            url: 'bebidas.html',
            page: 'bebidas',
        },
        {
            icono: "ri-book-open-line",
            label: 'Blog',
            url: 'blog.html',
            page: 'blog',
        },
        {
            icono: "ri-award-fill",
            label: 'Nosotros',
            url: 'nosotros.html',
            page: 'nosotros',
        },
        {
            icono: "ri-award-fill",
            label: 'Contactanos',
            url: 'formularios.html',
            page: 'contactanos',
        },
    ]
}

export default global;