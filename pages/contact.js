import React from 'react'
import Hero from '../components/Hero'
import Contacts from '../components/Contacts'
function Contact() {
  return (
    <div>
        <Hero heading='Contact' message='Submit the form below for more work and quotes.'/>
        <Contacts/>
    </div>
  )
}

export default Contact