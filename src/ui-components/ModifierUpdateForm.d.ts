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
export declare type ModifierUpdateFormInputValues = {
    name?: string;
    amount?: number;
    scale?: string;
};
export declare type ModifierUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    scale?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ModifierUpdateFormOverridesProps = {
    ModifierUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    scale?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ModifierUpdateFormProps = React.PropsWithChildren<{
    overrides?: ModifierUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    modifier?: any;
    onSubmit?: (fields: ModifierUpdateFormInputValues) => ModifierUpdateFormInputValues;
    onSuccess?: (fields: ModifierUpdateFormInputValues) => void;
    onError?: (fields: ModifierUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ModifierUpdateFormInputValues) => ModifierUpdateFormInputValues;
    onValidate?: ModifierUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ModifierUpdateForm(props: ModifierUpdateFormProps): React.ReactElement;
