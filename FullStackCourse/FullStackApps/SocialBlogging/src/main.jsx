import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store'
import { Provider } from 'react-redux'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Home, AddPost, AllPosts, EditPost, Login, Signup, Post } from './pages'
import { Protected } from './components/index.js'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {path:'/',element:(<Home />)},
      {path:'/addpost',element:(<Protected authentication={true}><AddPost /></Protected>)},
      {path:'/allposts',element:(<Protected authentication><AllPosts /></Protected>)},
      {path:'/editpost/:id',element:(<Protected authentication><EditPost /></Protected>)},
      {path:'/login',element:(<Protected authentication={false}><Login /></Protected>)},
      {path:'/signup',element:(<Protected authentication={false}><Signup /></Protected>)},
      {path:'/post/:slug',element:(<Post />)}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
