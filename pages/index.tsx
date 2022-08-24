import type { NextPage } from 'next'
import { Hero } from '@components/Sections/Hero'
import { WordCloud } from '@components/Sections/WordCloud'
import { createStyles } from '@mantine/core'

const useStyles = createStyles(theme => ({
  root: {
    backgroundColor: theme.colors.dark[9],
  }
}))

const Home: NextPage = () => {
  const { classes } = useStyles()
  return (
    <main className={classes.root}>
      <Hero />
      <WordCloud />
    </main>
  )
}

export default Home
