function keyTocontent(key, content) {
    let text: string;
    text = content.replace(/[^a-zA-Z0-9]/g,'');
    let arrayTransition: any = [];

    let i: number;
    let j: number = 0;
    const regex = /[^a-zA-Z]+/;

    for (i = 0; i < content.length; i += 1) {
        let isLetter = content[i].search(regex);
        if (isLetter === -1) {
            arrayTransition.push(key[j%key.length]);
            j += 1;
        } else {
            arrayTransition.push(content[i]);
        }
    }
    let strCode = arrayTransition.join('');
    return strCode;
}

export default keyTocontent;