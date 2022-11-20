import React from 'react'

export default function Loading() {
  return (
    <div
      style={{
        height: '100vh',
        textAlign: 'center',
        margin: '10vh 0',
        fontSize: '2rem',
      }}
    >
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
