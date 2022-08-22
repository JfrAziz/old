import { WordCloudCanvas } from "@components/WordCloud"
import { createStyles } from "@mantine/core"

const useStyles = createStyles(theme => ({
  container: {
    height: "100vh",
    backgroundColor: theme.colors.dark[9],
  }
}))

export const SSSS = () => {
  const { classes, theme } = useStyles()

  return (
    <div className={classes.container}>
      <WordCloudCanvas />
    </div>
  )
}