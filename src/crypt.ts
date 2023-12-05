import alpha from "./alphaBdd";
import keyTocontent from "./keyTocontent";

function encrypt(key: string, content: string) {
    //console.log(content.length);
    let strCode = keyTocontent(key, content);
    const regex = /[^a-zA-Z]+/;

    let arrayEncrypted: string[] = [];

    let i: number;
    for (i = 0; i < strCode.length; i += 1) {
        let isLetter = strCode[i].search(regex);

        if (isLetter === -1) {
            let numContent: any = alpha.alphaNumb(content[i]);
            let numbStrCode: any = alpha.alphaNumb(strCode[i]);
            let add = numContent + numbStrCode;
            let numCrypted: any = add % 26;
            let alphaCrypted = alpha.numbAlpha(numCrypted);
            arrayEncrypted.push(alphaCrypted);
        } else {
            arrayEncrypted.push(strCode[i]);
        }
    }
    let contentEncrypted = arrayEncrypted.join('');
    console.log(contentEncrypted);
}

export default encrypt;
