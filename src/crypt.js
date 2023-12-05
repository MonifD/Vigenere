"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphaBdd_1 = require("./alphaBdd");
var keyTocontent_1 = require("./keyTocontent");
function encrypt(key, content) {
    //console.log(content.length);
    var strCode = (0, keyTocontent_1.default)(key, content);
    var regex = /[^a-zA-Z]+/;
    var arrayEncrypted = [];
    var i;
    for (i = 0; i < strCode.length; i += 1) {
        var isLetter = strCode[i].search(regex);
        if (isLetter === -1) {
            var numContent = alphaBdd_1.default.alphaNumb(content[i]);
            var numbStrCode = alphaBdd_1.default.alphaNumb(strCode[i]);
            var add = numContent + numbStrCode;
            var numCrypted = add % 26;
            var alphaCrypted = alphaBdd_1.default.numbAlpha(numCrypted);
            arrayEncrypted.push(alphaCrypted);
        }
        else {
            arrayEncrypted.push(strCode[i]);
        }
    }
    var contentEncrypted = arrayEncrypted.join('');
    console.log(contentEncrypted);
}
exports.default = encrypt;
