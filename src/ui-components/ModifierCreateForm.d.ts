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
export declare type ModifierCreateFormInputValues = {
    name?: string;
    amount?: number;
    scale?: string;
};
export declare type ModifierCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    scale?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ModifierCreateFormOverridesProps = {
    ModifierCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    scale?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ModifierCreateFormProps = React.PropsWithChildren<{
    overrides?: ModifierCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ModifierCreateFormInputValues) => ModifierCreateFormInputValues;
    onSuccess?: (fields: ModifierCreateFormInputValues) => void;
    onError?: (fields: ModifierCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ModifierCreateFormInputValues) => ModifierCreateFormInputValues;
    onValidate?: ModifierCreateFormValidationValues;
} & React.CSSProperties>;
export default function ModifierCreateForm(props: ModifierCreateFormProps): React.ReactElement;
