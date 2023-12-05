"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphaBdd_1 = require("./alphaBdd");
var keyTocontent_1 = require("./keyTocontent");
function decrypt(key, content) {
    var strCoded = (0, keyTocontent_1.default)(key, content);
    var regex = /[^a-zA-Z]+/;
    var arrayDecrypted = [];
    var i;
    for (i = 0; i < strCoded.length; i += 1) {
        var isLetter = strCoded[i].search(regex);
        if (isLetter === -1) {
            var numContent = alphaBdd_1.default.alphaNumb(content[i]);
            var numbStrCoded = alphaBdd_1.default.alphaNumb(strCoded[i]);
            var sub = numContent - numbStrCoded;
            var numCrypted = void 0;
            if (sub >= 0) {
                numCrypted = (sub) % 26;
            }
            else {
                numCrypted = (sub % 26 + 26) % 26;
            }
            var alphaCrypted = alphaBdd_1.default.numbAlpha(numCrypted);
            arrayDecrypted.push(alphaCrypted);
        }
        else {
            arrayDecrypted.push(strCoded[i]);
        }
    }
    var contentDecrypted = arrayDecrypted.join('');
    console.log(contentDecrypted);
}
exports.default = decrypt;
