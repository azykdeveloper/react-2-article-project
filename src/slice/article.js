import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  articles: [],
  article: null,
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

    getArticleStart: (state) => {
      state.loading = true
      state.article = null
    },
    getArticleSuccess: (state, action) => {
      state.loading = false
      state.article = action.payload
    }
  },
})

export const {getArticlesStart, getArticlesSuccess, getArticleStart, getArticleSuccess} = articleSlice.actions
export default articleSlice.reducer