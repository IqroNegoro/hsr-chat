export const getAvatar = (url : string) => `https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${url}`;

export const getCharacters = async () => await useFetch("https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/index_new/en/characters.json", {
    default: () => [],
    transform: (res : string) => {
        const result : Character[] = [];
        const characters = JSON.parse(res);

        for (const character in characters) {
            result.push({
                id: characters[character].id,
                name: characters[character].name,
                icon: getAvatar(characters[character].icon),
                tag: characters[character].tag
            });
        }
        return result;
    },
    key: "get-characters"
})