import React, { useState, useRef, useLayoutEffect } from 'react'
import StyledDialog from './style'
import aria from './aria'

const Dialog = ({ activator, children }) => {

  const [focusAfterClosed, setFocusAfterClosed] = useState(null) // element

  const dialogNodeRef = useRef()

  const handleOpen = event => {
    setFocusAfterClosed(event.target)
  }

  const handleClose = event => {
    aria.closeDialog(event.target)
    setFocusAfterClosed(null)
  }

  useLayoutEffect(() => {
    if (focusAfterClosed) {
      const dialogNode = dialogNodeRef.current
      aria.openDialog(dialogNode, focusAfterClosed)
    }
  }, [focusAfterClosed])

  const dialogContent = (
    <>
      <div className="dialog-header">
        <button onClick={handleClose}>Close</button>
      </div>
      <div className="dialog-body">
        {children}
      </div>
    </>
  )

  return (
    <StyledDialog>
      {activator(handleOpen)}
      <div role="dialog" ref={dialogNodeRef}>
        {focusAfterClosed && dialogContent}
      </div>
    </StyledDialog>
  )
}

export default Dialog