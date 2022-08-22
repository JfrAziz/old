import type { NextPage } from 'next'
import { WordCloudCanvas } from '@components/WordCloud'

const Home: NextPage = () => {
  return (
    <div style={{ 
      height: "100vh"
    }}>
      <WordCloudCanvas />
    </div>
  )
}

export default Home
