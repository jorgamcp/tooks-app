

/**
 * Function extractUsernameFromTook
 * @param {string} tookContent the content of the took with the username(s) and koots (#)
 * @returns An array that containts the quotes usernames using @ 
 * @example 'Hey @lolweapon how are you i\'m following @ilutv and @rukirintv " -> ["lolweapon","ilutv","rukirintv"]  '
 */


export const extractUsernameFromTook = (tookContent) => {
    console.log(tookContent);


    tookContent.split(" ").filter((str) => {
        return str.toLowerCase().indexOf('@'.toLowerCase()) >= 0;
    })
}

