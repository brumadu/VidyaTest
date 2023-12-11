import {useCallback} from 'react';

export const useYupValidationResolver = (schema: any) =>
  useCallback(
    async (data: any) => {
      try {
        const values = await schema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (
              allErrors: any,
              currentError: {path: any; type: any; message: any},
            ) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {},
          ),
        };
      }
    },
    [schema],
  );
