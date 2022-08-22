import type { NextPage } from 'next'
import { Hero } from '@components/Sections/Hero'
import { SSSS } from '@components/Sections/SSSS'
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
      <SSSS />
    </main>
  )
}

export default Home
