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
export declare type DilutionCreateFormInputValues = {
    name?: string;
    amount?: number;
    scale?: string;
};
export declare type DilutionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    scale?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DilutionCreateFormOverridesProps = {
    DilutionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    scale?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type DilutionCreateFormProps = React.PropsWithChildren<{
    overrides?: DilutionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DilutionCreateFormInputValues) => DilutionCreateFormInputValues;
    onSuccess?: (fields: DilutionCreateFormInputValues) => void;
    onError?: (fields: DilutionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DilutionCreateFormInputValues) => DilutionCreateFormInputValues;
    onValidate?: DilutionCreateFormValidationValues;
} & React.CSSProperties>;
export default function DilutionCreateForm(props: DilutionCreateFormProps): React.ReactElement;
