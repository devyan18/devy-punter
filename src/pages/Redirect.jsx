import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Redirect () {
  const { id } = useParams()

  const [error, setError] = useState(false)

  const handleRedirect = async (id) => {
    try {
      const response = await fetch(`https://devy-redirect-production.up.railway.app/api/punter/${id}`)
      const data = await response.json()
      if (data.url) {
        window.location.replace(data.url)
        console.log('cambiamo')
      } else {
        setError(true)
      }
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    if (id) {
      handleRedirect(id)
    }
  }, [])

  if (error) {
    return (
      <div className='body'>
        <h2>Devy Shorter</h2>
        <p>Something went wrong!</p>
        <Link to='/'>Go back</Link>
      </div>
    )
  }

  return (
    <div className='redirecting-text'>
      <h2>Redirecting...</h2>
    </div>
  )
}
