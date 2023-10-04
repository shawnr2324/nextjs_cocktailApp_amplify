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
export declare type BaseCreateFormInputValues = {
    name?: string;
    amount?: number;
    scale?: string;
};
export declare type BaseCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    scale?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BaseCreateFormOverridesProps = {
    BaseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    scale?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type BaseCreateFormProps = React.PropsWithChildren<{
    overrides?: BaseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BaseCreateFormInputValues) => BaseCreateFormInputValues;
    onSuccess?: (fields: BaseCreateFormInputValues) => void;
    onError?: (fields: BaseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BaseCreateFormInputValues) => BaseCreateFormInputValues;
    onValidate?: BaseCreateFormValidationValues;
} & React.CSSProperties>;
export default function BaseCreateForm(props: BaseCreateFormProps): React.ReactElement;
