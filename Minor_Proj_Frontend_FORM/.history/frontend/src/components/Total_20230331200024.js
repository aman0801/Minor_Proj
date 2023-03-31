import React from 'react'
import 
const Total = () => {
    const [candidate1, setCandidate1] = useState('Narendra Modi')
    const [candidate2, setCandidate2] = useState('Arvinda Kejriwal')
  return (
    <div>
        <h1>View Vote</h1>
            <div className='candidates'>
                <div className='names'>
                <h2>{candidate1}</h2>
                <h2>{candidate2}</h2>
                </div>
                <div className='votes'>
                <h2>{candidate1Votes}</h2>
                <h2>{candidate2Votes}</h2>
                </div>
            </div>
    </div>
  )
}

export default Total