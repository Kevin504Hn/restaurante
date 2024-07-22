const global3 = (path) => {
    return {
        menuOptions3: getMenuWithActivePath(path)
    }
}

const getMenuWithActivePath = (path) => {
    return [
        {
            hero: "img/frentedeledificio - copia.jpg",
            nuestromenu: "Nuestro Menu",
            imagenf: "img/wantanfritadepollo.jpg",
            titulof: "Entradas",
            titulob: "Entradas",
            descripcion: "Aromas tentadores, colores vibrantes y sabores inolvidables. Puedes convertir cualquier día en una celebración culinaria",
            link: "entradas.html",
            ordenaqui: "Ordena Aqui",
        },
        {
            imagenf: "img/sopadecaracol.jpg",
            titulof: "Sopas",
            titulob: "Sopas",
            descripcion: "Desde la clásica Sopa de Caracol hasta exóticas mezclas de sabores, tenemos algo para todos los gustos.",
            link: "sopas.html",
            ordenaqui: "Ordena Aqui",
        },
        {
            imagenf: "img/cerdoconvegetales.jpg",
            titulof: "Cerdo",
            titulob: "Cerdo",
            descripcion: "Hunde tu tenedor en una tierna Costilla de cerdo, sazonado a la perfección y acompañado de guarniciones exquisitas",
            link: "cerdo.html",
            ordenaqui: "Ordena Aqui",
        },
        {
            imagenf: "img/arrozconcamaron.jpg",
            titulof: "Arroz",
            titulob: "Arroz",
            descripcion: "Desde el primer aroma tentador hasta el último bocado satisfactorio, nuestro Arroz te cautivará con su sabor auténtico y su calidad excepcional",
            link: "arroz.html",
            ordenaqui: "Ordena Aqui",
        },
        {
            imagenf: "img/cevichemixto.jpg",
            titulof: "Mariscos",
            titulob: "Mariscos",
            descripcion: "Déjate seducir por la frescura del océano con nuestra variedad de mariscos, capturados y preparados con maestría para ofrecerte una experiencia gastronómica incomparable",
            link: "mariscos.html",
            ordenaqui: "Ordena Aqui",
        },
        {
            imagenf: "img/horchata.jpg",
            titulof: "Bebidas",
            titulob: "Bebidas",
            descripcion: "Refresca tu día con nuestras bebidas artesanales, cuidadosamente elaboradas para deleitar tu paladar y satisfacer tu sed",
            link: "bebidas.html",
            ordenaqui: "Ordena Aqui",
        },
    ]
}

export default global3;