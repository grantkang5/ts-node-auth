import React, { useEffect, useState } from 'react'

import './loaders.css'

const Loading = ({ delay }: { delay?: number }) => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setTimeout(() => setReady(true), delay)
  })

  if (ready) {
    return (
      <div className="loader-text">
        <span>Loading</span>
        <span className="loading" />
      </div>
    )
  }

  return null
}

export default Loading
