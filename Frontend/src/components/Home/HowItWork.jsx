import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'
import { MdFindInPage } from 'react-icons/md'

const HowItWork = () => {
  return (
    <div className='howitworks'>
      <div className='container'>
        <h3>How JobSeeker Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus/>
            <p>Create Account</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium reiciendis necessitatibus beatae! Unde, quos architecto autem sint molestias optio nihil quisquam perferendis at, deleniti hic doloremque! Numquam obcaecati a assumenda.</p>
          </div>
          <div className="card">
            <MdFindInPage/>
            <p>Find a Job/Post a Job</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium reiciendis necessitatibus beatae! Unde, quos architecto autem sint molestias optio nihil quisquam perferendis at, deleniti hic doloremque! Numquam obcaecati a assumenda.</p>
          </div>
          <div className="card">
            <IoMdSend/>
            <p>Send Application</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium reiciendis necessitatibus beatae! Unde, quos architecto autem sint molestias optio nihil quisquam perferendis at, deleniti hic doloremque! Numquam obcaecati a assumenda.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWork