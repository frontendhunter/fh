export type FieldValidatorType = (value: string) => string | undefined

export const required:FieldValidatorType = (value) => {
    if (value) return undefined;
    if (!value) return 'Field is required';

}
export const maxLengthCreator = (maxLength:number):FieldValidatorType => (value) => {
    if (value && value.length > maxLength) return `Overflow Field max length: ${maxLength}`;
    return undefined
}