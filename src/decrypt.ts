import alpha from "./alphaBdd";
import keyTocontent from "./keyTocontent";

function decrypt(key: string, content: string) {
    let strCoded = keyTocontent(key, content);
    const regex = /[^a-zA-Z]+/;

    let arrayDecrypted: string[] = [];

    let i: number;
    for (i = 0; i < strCoded.length; i += 1) {
        let isLetter = strCoded[i].search(regex);

        if (isLetter === -1) {
            let numContent: any = alpha.alphaNumb(content[i]);
            let numbStrCoded: any = alpha.alphaNumb(strCoded[i]);
            let sub = numContent - numbStrCoded;
            let numCrypted: any;
            if (sub>=0) {
                numCrypted = (sub) % 26;
            } else {
                numCrypted = (sub % 26 + 26) % 26;
            }
             
            let alphaCrypted = alpha.numbAlpha(numCrypted);
            arrayDecrypted.push(alphaCrypted);
        } else {
            arrayDecrypted.push(strCoded[i]);
        }
    }
    let contentDecrypted = arrayDecrypted.join('');
    console.log(contentDecrypted);
}

export default decrypt;
