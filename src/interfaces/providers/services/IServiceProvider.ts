import IProvider from "../IProvider"

interface IServiceProvider<T> extends IProvider {
    getService(): T
}

export default IServiceProvider