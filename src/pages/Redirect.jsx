import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Redirect () {
  const { id } = useParams()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetch(`https://devy-redirect-production.up.railway.app/api/punter/${id}`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          if (data.url) {
            window.location.replace(data.url)
          }
        })
    }
  }, [])

  if (loading) {
    return <div>Redirecting...</div>
  }
}
