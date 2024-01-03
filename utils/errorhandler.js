
export function handleError(message, error) {
    console.log('An error occured', error);
    throw new Error(message)
}