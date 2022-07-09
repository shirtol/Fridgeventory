export default class FridgeventoryError extends Error {
    constructor(statusCode, errorMessage) {
        super(JSON.stringify({ statusCode, errorMessage }));
    }
}
