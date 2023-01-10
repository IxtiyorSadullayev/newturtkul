import React from 'react'

function Form() {
  return (
    <div>
        <form action="http://192.168.137.1:5000/adress" method={'post'}>
            <input type="text" name='title' id='title' placeholder='title' />
            <input type="text" name='subtitle' id='subtitle' placeholder='subtitle' />
            <input type="file" name='img' id='img' placeholder='img' />
            <input type="number" name='lat' id='lat' placeholder='lat' />
            <input type="number" name='long' id='long' placeholder='long' />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form