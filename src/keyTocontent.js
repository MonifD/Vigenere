"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keyTocontent(key, content) {
    var text;
    text = content.replace(/[^a-zA-Z0-9]/g, '');
    var arrayTransition = [];
    var i;
    var j = 0;
    var regex = /[^a-zA-Z]+/;
    for (i = 0; i < content.length; i += 1) {
        var isLetter = content[i].search(regex);
        if (isLetter === -1) {
            arrayTransition.push(key[j % key.length]);
            j += 1;
        }
        else {
            arrayTransition.push(content[i]);
        }
    }
    var strCode = arrayTransition.join('');
    return strCode;
}
exports.default = keyTocontent;
