export enum Message {
  RegisterRenderer = "@@REDUX_ELECTRON_STORE/register-renderer",
  BrowserDispatch = "@@REDUX_ELECTRON_STORE/browser-dispatch",
  RendererDispatch = "@@REDUX_ELECTRON_STORE/renderer-dispatch"
}

export enum Global {
  InitialState = "__REDUX_ELECTRON_STORE__InitialState"
}