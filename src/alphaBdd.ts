const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function alphaNumb(letter: string) {
    let i: number;

    for (i = 0; i < alpha.length; i +=1) {
        if (alpha[i] == letter) {
            return  i;
        }
    }
}

function numbAlpha(number: number) {
        return alpha[number];

}

export default { numbAlpha, alphaNumb};