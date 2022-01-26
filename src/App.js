import axios from "axios"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Col, Row } from "react-bootstrap"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import "./App.css"
import NavbarBottom from "./component/NavbarBotoom"
import NavbarTop from "./component/NavbarTop"
import Sidebar from "./component/Sidebar"
import EmailVerified from "./pages/EmailVerified"
import ForgotPassword from "./pages/ForgetPassword"
import Home from "./pages/Home"
import Login from "./pages/Login"
import MyProfile from "./pages/MyProfile"
import ResetPassword from "./pages/ResetPassword"
import Signup from "./pages/Signup"
import PlantsContext from "./utils/PlantsContext"
import LocateHome from "./pages/LocateHome"
import OnePost from "./pages/OnePost"
import UserProfile from "./pages/UserProfile"
import WeatherCard from "./component/WeatherCard"
import SearchPost from "./pages/SearchPost"
import firebase from "./utils/firebase"
function App() {
  //useState
  const [posts, setPosts] = useState([])
  const [categorys, setCategorys] = useState([])
  const [profile, setProfile] = useState(null)
  const [users, setUsers] = useState([])
  const [weather, setWeather] = useState(null)
  //navigate
  const navigate = useNavigate()

  //get users
  const getUser = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users")
    setUsers(response.data)
    console.log(response.data)
  }

  //get posts
  const getPost = async () => {
    const response = await axios.get("http://localhost:5000/api/posts")
    setPosts(response.data)
    console.log(response.data)
  }

  //getCategorys
  const getCategorys = async () => {
    const response = await axios.get("http://localhost:5000/api/categorys")
    setCategorys(response.data)
  }
  //get profile
  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenPlants,
      },
    })
    setProfile(response.data)
  }
  const getWeather = async () => {
    //location and weather
    navigator.geolocation.getCurrentPosition(async position => {
      const lon = position.coords.longitude
      console.log(lon)
      const lat = position.coords.latitude
      console.log(lat)
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cd62f1cbb84a5c5f4e46d04dfa9c9ccc&units=metric&lang=en`
      )
      setWeather(response.data)

      console.log(response.data)
    })
  }
  //use effict
  useEffect(() => {
    getPost()
    if (localStorage.tokenPlants) {
      getProfile()
    }
    getCategorys()
    getWeather()
    getUser()
  }, [])
  ////////////////////////////////////////////////////////////////////////////////
  //register
  //signup
  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const image = form.elements.avatar.files[0]
      const imageRef = firebase.storage().ref("image").child(`${image.lastModified}-${image.name}`)
      await imageRef.put(image)
      const imageUrl = await imageRef.getDownloadURL()

      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: imageUrl,
        userName: form.elements.userName.value,
        nickName: form.elements.nickName.value,
        location: form.elements.location.value,
      }
      await axios.post("http://localhost:5000/api/auth/signup", userBody)
      console.log("signup success")
      navigate("/login")
      getUser()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  //login
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)
      const token = response.data
      localStorage.tokenPlants = token
      getProfile()
      console.log("login success")
      navigate("/")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenPlants")
    console.log("logout success")
  }
  //password reset

  //to send email
  const forgotPassword = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const userBody = {
        email: form.elements.email.value,
      }

      await axios.post("http://localhost:5000/api/auth/forgot-password", userBody)
      console.log("check your email")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  //change password
  const resetPassword = async (e, token) => {
    e.preventDefault()
    try {
      const form = e.target
      const password = form.elements.password.value
      const passwordConfirmation = form.elements.passwordConfirmation.value

      if (password !== passwordConfirmation) return toast.error("password is not matching")

      const userBody = {
        password,
      }
      await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, userBody)
      toast.success("password reset")
      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ////////////////////////////////////////////////////////////////////////
  //like
  const likePost = async postId => {
    try {
      const response = await axios.get(`http://localhost:5000/api/posts/${postId}/likes`, {
        headers: {
          Authorization: localStorage.tokenPlants,
        },
      })
      getPost()
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //follow
  const follow = async ProfileId => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/profile/${ProfileId}/add-follow`, {
        headers: {
          Authorization: localStorage.tokenPlants,
        },
      })
      getPost()
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addPost = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const image = form.elements.image.files[0]
      const imageRef = firebase.storage().ref("image").child(`${image.lastModified}-${image.name}`)
      await imageRef.put(image)
      const imageUrl = await imageRef.getDownloadURL()
      const locations = []
      if (form.elements.location.forEach) {
        form.elements.location.forEach(location => {
          if (location.checked) {
            locations.push(location.value)
          }
        })
      } else {
        if (form.elements.location.checked) {
          locations.push(form.elements.location.value)
        }
      }
      const postBody = {
        type: form.elements.type.value,
        category: form.elements.category.value,
        image: imageUrl,
        title: form.elements.title.value,
        description: form.elements.description.value,
        CareWay: form.elements.careWay.value,
        location: locations,
      }
      await axios.post("http://localhost:5000/api/posts", postBody, {
        headers: {
          Authorization: localStorage.tokenPlants,
        },
      })
      getPost()
      getProfile()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  //adit profile
  const editProfile = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const image = form.elements.avatar.files[0]
      const imageRef = firebase.storage().ref("image").child(`${image.lastModified}-${image.name}`)
      await imageRef.put(image)
      const imageUrl = await imageRef.getDownloadURL()

      const userBody = {
        password: form.elements.password.value,
        avatar: imageUrl,
        userName: form.elements.userName.value,
        nickName: form.elements.nickName.value,
        bio: form.elements.bio.value,
        location: form.elements.location.value,
      }

      await axios.put("http://localhost:5000/api/auth/profile", userBody, {
        headers: {
          Authorization: localStorage.tokenPlants,
        },
      })
      getPost()
      getProfile()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  //edit post
  const editPOst = async (e, postId) => {
    e.preventDefault()
    try {
      const form = e.target
      const image = form.elements.image.files[0]
      const imageRef = firebase.storage().ref("image").child(`${image.lastModified}-${image.name}`)
      await imageRef.put(image)
      const imageUrl = await imageRef.getDownloadURL()

      const locations = []
      if (form.elements.location.forEach) {
        form.elements.location.forEach(location => {
          if (location.checked) {
            locations.push(location.value)
          }
        })
      } else {
        if (form.elements.location.checked) {
          locations.push(form.elements.location.value)
        }
      }
      const postBody = {
        type: form.elements.type.value,
        category: form.elements.category.value,
        image: imageUrl,
        title: form.elements.title.value,
        description: form.elements.description.value,
        CareWay: form.elements.careWay.value,
        location: locations,
      }
      await axios.put(`http://localhost:5000/api/posts/${postId}`, postBody, {
        headers: {
          Authorization: localStorage.tokenPlants,
        },
      })
      getPost()
      getProfile()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  // add comment
  const addComment = async (e, postId) => {
    e.preventDefault()
    try {
      const form = e.target

      const commentBody = {
        comment: form.elements.comment.value,
      }
      await axios.post(`http://localhost:5000/api/posts/${postId}/comments`, commentBody, {
        headers: {
          Authorization: localStorage.tokenPlants,
        },
      })
      getPost()
      getProfile()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  //add replay
  const addReplay = async (e, commentId, postId) => {
    e.preventDefault()
    try {
      const form = e.target
      const replayBody = {
        replay: form.elements.replay.value,
      }

      await axios.post(`http://localhost:5000/api/posts/${postId}/comments/${commentId}/replies`, replayBody, {
        headers: {
          Authorization: localStorage.tokenPlants,
        },
      })
      getPost()
      getProfile()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  //delete
  //delete post
  const deletePost = async postId => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
        headers: {
          Authorization: localStorage.tokenPlants,
        },
      })
      toast.success("post deleted")
      getPost()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  //delete comment
  const deleteComment = async (commentId, postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}/comments/${commentId}`, {
        headers: {
          Authorization: localStorage.tokenPlants,
        },
      })
      toast.success("comment deleted")
      getPost()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  //delete replay
  const deleteReplay = async (replayId, commentId, postId) => {
    console.log(replayId)
    console.log(commentId)
    console.log(postId)
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}/comments/${commentId}/replies/${replayId}`, {
        headers: {
          Authorization: localStorage.tokenPlants,
        },
      })
      toast.success("replay deleted")
      getPost()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  const search = e => {
    e.preventDefault()
    const form = e.target
    const searchText = form.elements.search.value

    const profileFound = users.find(user => user.userName === searchText)
    console.log(profileFound)
    if (profileFound) return navigate(`/profile/${profileFound._id}`)

    navigate(`/posts/${searchText}`)
  }

  //use context
  const store = {
    posts,
    categorys,
    signup,
    login,
    logout,
    forgotPassword,
    resetPassword,
    addPost,
    profile,
    addComment,
    addReplay,
    likePost,
    editProfile,
    follow,
    editPOst,
    users,
    weather,
    search,
    deletePost,
    deleteComment,
    deleteReplay,
  }
  return (
    <PlantsContext.Provider value={store}>
      {/* <NavbarBottom /> */}
      <ToastContainer />
      <NavbarTop />
      <Sidebar />
      <WeatherCard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locate-home" element={<LocateHome />} />
        <Route path="/posts/:searchText" element={<SearchPost />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:profileId" element={<UserProfile />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/post/:postId" element={<OnePost />} />
        <Route path="/email_verified/:token" element={<EmailVerified />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </PlantsContext.Provider>
  )
}

export default App
