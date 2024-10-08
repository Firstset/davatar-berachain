"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAvatarEthersProvider = exports.AvatarProvider = void 0;
const providers_1 = require("@ethersproject/providers");
const react_1 = __importStar(require("react"));
const JsonRpcMulticallProvider_1 = require("./JsonRpcMulticallProvider");
const AvatarContext = react_1.default.createContext(null);
function AvatarProvider({ provider, batchLookups, children }) {
    const finalProvider = (0, react_1.useMemo)(() => {
        if (provider) {
            if (batchLookups) {
                return new JsonRpcMulticallProvider_1.JsonRpcMulticallProvider(provider);
            }
            return provider;
        }
        else {
            return (0, providers_1.getDefaultProvider)();
        }
    }, [batchLookups, provider]);
    return react_1.default.createElement(AvatarContext.Provider, { value: { provider: finalProvider } }, children);
}
exports.AvatarProvider = AvatarProvider;
function useAvatarEthersProvider(provider) {
    const avatarContext = (0, react_1.useContext)(AvatarContext);
    const defaultProvider = (0, react_1.useMemo)(() => {
        if (!avatarContext) {
            if (provider) {
                return provider;
            }
            return (0, providers_1.getDefaultProvider)();
        }
        return avatarContext.provider;
    }, [avatarContext, provider]);
    return defaultProvider;
}
exports.useAvatarEthersProvider = useAvatarEthersProvider;
//# sourceMappingURL=AvatarProvider.js.map