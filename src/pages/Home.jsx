import { useState } from 'react'

export default function Home () {
  const [url, setUrl] = useState('')
  const [urlShorter, setUrlShorter] = useState('')

  const handleShorten = () => {
    fetch('https://devy-redirect-production.up.railway.app/api/punter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.url) {
          setUrlShorter(`https://devy-punter.netlify.app/${data.url}`)
        }
      })
  }

  return (
    <div className='body'>
      <h2>Devy Shorter</h2>
      <input type='text' placeholder='Enter a URL' onChange={e => setUrl(e.target.value)} />
      <button onClick={handleShorten}>Shorten</button>
      <p><a href={urlShorter} target='_blank' rel="noreferrer">{urlShorter}</a></p>
    </div>
  )
}
