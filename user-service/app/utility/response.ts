const formatResponse = (statusCode: number, message: string, data: unknown) => {
  if (data) {
    return {
      statusCode,
      headers: { "Access-Control-allow-Origin": "*" },
      body: JSON.stringify({
        message,
        data,
      }),
    };
  } else {
    return {
      statusCode,
      headers: { "Access-Control-allow-Origin": "*" },
      body: JSON.stringify({
        message,
      }),
    };
  }
};

export const SucessResponse = (data: object) => {
  return formatResponse(200, "Success", data);
};

export const ErrorResponse = (code: 1000, error: unknown) => {
  if (Array.isArray(error)) {
    const errorObject = error[0].constaints;
    const errorMessage =
      errorObject[Object.keys(errorObject)[0]] || "Error Occured";

    return formatResponse(code, errorMessage, errorMessage);
  } else {
    return formatResponse(code, `${error}`, error);
  }
};
