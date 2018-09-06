import React from 'react'
import doggo from '../assets/images/aussie.jpg'

function NewTicketForm() {
  var img = {
    maxHeight: '300px',
  }
  return (
    <div>
      <img style={img} src={doggo} alt="doggo"/>
      <form>
        <input type="text" id="names" placeholder='Pair Names'/>
        <input type="text" id="location" placeholder='Location'/>
        <textarea name="" id="issue" placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  )
}

export default NewTicketForm

