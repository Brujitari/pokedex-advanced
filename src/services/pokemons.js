const { catcher } = require("./utils");

const LENGTH = 1600;
const FROM = 500;

const getSample = client => async () => {
    const list = Array.from({ length: LENGTH }, (_, i) => i + FROM);
    return await Promise.all(
        list.map(id => catcher(client.get)(`/pokemon/${id}`))
    );
};

const pokemons = client => ({
    getSample: getSample(client),
});

export default pokemons;