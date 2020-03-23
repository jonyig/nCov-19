import fetch from "isomorphic-unfetch";

const fetchData = () => {
    return fetch("https://corona.lmao.ninja/all/").then(response => response.json()).then(data => {
        return data;
    })
};

const WorldCase = async function () {

  return ;
};

export default WorldCase;