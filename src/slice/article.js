import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  articles: [],
  loading: false,
}

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.loading = true
      state.articles = []
    },
    getArticlesSuccess: (state, action) => {
      state.loading = false
      state.articles = action.payload
    },
  },
})

export const {getArticlesStart, getArticlesSuccess} = articleSlice.actions
export default articleSlice.reducer