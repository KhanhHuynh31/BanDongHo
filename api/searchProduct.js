const searchProduct = (key) => {
    const url = `http://192.168.0.14/csdl/search.php?searchText=${global.searchText}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchProduct;