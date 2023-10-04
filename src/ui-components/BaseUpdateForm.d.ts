/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BaseUpdateFormInputValues = {
    name?: string;
    amount?: number;
    scale?: string;
};
export declare type BaseUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    scale?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BaseUpdateFormOverridesProps = {
    BaseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    scale?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type BaseUpdateFormProps = React.PropsWithChildren<{
    overrides?: BaseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    base?: any;
    onSubmit?: (fields: BaseUpdateFormInputValues) => BaseUpdateFormInputValues;
    onSuccess?: (fields: BaseUpdateFormInputValues) => void;
    onError?: (fields: BaseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BaseUpdateFormInputValues) => BaseUpdateFormInputValues;
    onValidate?: BaseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BaseUpdateForm(props: BaseUpdateFormProps): React.ReactElement;
