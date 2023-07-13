import React from 'react'

function Buttons({handleSubmit}) {
  return (
    <>
        <div class="command-buttons ">
            <button class="cancel">cancel</button>
            <button type='submit' onClick={handleSubmit} class="save">save</button>
        </div>

    </>
  )
}

export default Buttons