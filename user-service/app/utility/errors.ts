import { ValidationError, validate } from "class-validator";

export const AppValidatorError = async (
  input: any  // Any is not good Idea
): Promise<ValidationError[] | false> => {
  const error = await validate(input, {
    ValidationError: { target: true },
  });

  if (error.length) {
    return error;
  }
  return false;
};
