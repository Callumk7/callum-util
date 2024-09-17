
// Native error types
const nativeExceptions = [
    EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
].filter((except) => typeof except === 'function')

// Throw native errors. ref: https://bit.ly/2VsoCGE
function throwNative(error: Error) {
    for (const Exception of nativeExceptions) {
        if (error instanceof Exception) throw error
    }
}

export async function safeAwait<T>(promise: Promise<T>, finallyFunc: Function) {
    return promise.then(data => {
        if (data instanceof Error) {
            throwNative(data)
            return [data]
        }
        return [undefined, data]
    }).catch(error => {
        throwNative(error)
        return [error]
    }).finally(() => {
        if (finallyFunc && typeof finallyFunc === 'function') {
            finallyFunc()
        }
    })
}
