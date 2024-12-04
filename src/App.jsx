import React from 'react'

import Header from './component/Header'
import About from './component/About'
import Project from './component/project'
import Testimonials from './component/Testimonials'
import Contact from './component/Contact'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <About></About>
      <Project></Project>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>


    </div>
  )
}

export default App