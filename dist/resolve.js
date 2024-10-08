"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGatewayUrl = void 0;
const getGatewayUrl = (uri, tokenId) => {
    const match = new RegExp(/([a-z]+)(?::\/\/|\/)(.*)/).exec(uri);
    if (!match || match.length < 3) {
        return uri;
    }
    const id = match[2];
    let url = uri;
    switch (match[1]) {
        case 'ar': {
            url = `https://arweave.net/${id}`;
            break;
        }
        case 'ipfs':
            if (id.includes('ipfs') || id.includes('ipns')) {
                url = `https://gateway.ipfs.io/${id}`;
            }
            else {
                url = `https://gateway.ipfs.io/ipfs/${id}`;
            }
            break;
        case 'ipns':
            if (id.includes('ipfs') || id.includes('ipns')) {
                url = `https://gateway.ipfs.io/${id}`;
            }
            else {
                url = `https://gateway.ipfs.io/ipns/${id}`;
            }
            break;
        case 'http':
        case 'https':
            break;
    }
    return tokenId ? url.replaceAll('{id}', tokenId) : url;
};
exports.getGatewayUrl = getGatewayUrl;
//# sourceMappingURL=resolve.js.map