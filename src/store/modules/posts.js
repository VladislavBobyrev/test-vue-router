export default {
  state: {
    posts: []
  },
  getters: {
    allPosts(state)
    {
      return state.posts
    }
  },
  mutations: {
    updatePost(state, posts)
    {
      state.posts = posts
    }

    
  },
  actions: {
    fetchPosts(ctx)
    {
      const res =   fetch("https://jsonplaceholder.typicode.com/posts?_limit3")
      const posts = res.json()
      ctx.commit('updatePost', posts)
    }
  },
}