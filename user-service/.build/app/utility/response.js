"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = exports.SucessResponse = void 0;
const formatResponse = (statusCode, message, data) => {
    if (data) {
        return {
            statusCode,
            headers: { "Access-Control-allow-Origin": "*" },
            body: JSON.stringify({
                message,
                data,
            }),
        };
    }
    else {
        return {
            statusCode,
            headers: { "Access-Control-allow-Origin": "*" },
            body: JSON.stringify({
                message,
            }),
        };
    }
};
const SucessResponse = (data) => {
    return formatResponse(200, "Success", data);
};
exports.SucessResponse = SucessResponse;
const ErrorResponse = (code, error) => {
    if (Array.isArray(error)) {
        const errorObject = error[0].constaints;
        const errorMessage = errorObject[Object.keys(errorObject)[0]] || "Error Occured";
        return formatResponse(code, errorMessage, errorMessage);
    }
    else {
        return formatResponse(code, `${error}`, error);
    }
};
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=response.js.map