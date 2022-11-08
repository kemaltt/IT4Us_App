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
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
