export const required = value => {
    if (value) return undefined;
    if (!value) return 'Field is required';

}
export const maxLengthCreator =(maxLength) => (value) => {
    if (value && value.length > maxLength) return `Overflow Field max length: ${maxLength}`;
    return undefined
}