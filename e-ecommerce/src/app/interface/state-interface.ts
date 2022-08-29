import store from "../containers/redux/store"

export type IRootState = ReturnType<typeof store.getState>