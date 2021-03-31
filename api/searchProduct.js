const searchProduct = () => {
    const url = `http://192.168.26.1/csdl/search.php?searchText=${global.searchText}`;
    return fetch(url)
        .then(res => res.json());
};

export default searchProduct;
