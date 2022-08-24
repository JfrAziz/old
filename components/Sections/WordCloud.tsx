import { WordCloudCanvas } from "@components/WordCloud"
import { Container, createStyles, Group, MediaQuery, Stack, Text } from "@mantine/core"
import { PropsWithChildren } from "react"
import { Square, Triangle } from "tabler-icons-react"

const useStyles = createStyles(theme => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.dark[9],
  },
  wrapper: {
    flex: 1,
  },
  title: {
    fontWeight: 900,
    letterSpacing: 0.5,
    fontSize: 72,
    textTransform: "uppercase",

    [theme.fn.smallerThan(theme.breakpoints.xl)]: {
      fontSize: 64,
    },

    [theme.fn.smallerThan(theme.breakpoints.md)]: {
      fontSize: 48,
    },

    [theme.fn.smallerThan(theme.breakpoints.sm)]: {
      fontSize: 36,
      paddingTop: 20
    }
  }
}))

const Wrapper = (props: PropsWithChildren) => {
  const { classes, theme } = useStyles()

  return (
    <>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Group className={classes.wrapper} align="stretch" grow>{props.children}</Group>
      </MediaQuery>

      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Stack className={classes.wrapper} justify="stretch">{props.children}</Stack>
      </MediaQuery>

      <Group position="center" spacing={20} pb={20}>
        <Triangle />
        <Square fill={theme.colors.dark[0]} />
      </Group>
    </>
  )
}

export const WordCloud = () => {
  const { classes, theme } = useStyles()

  return (
    <Container size="xl" className={classes.container}>
      <Wrapper>
        <Stack justify="center">
          <div>
            <Text className={classes.title} >I am not expert, but I've worked with this tools</Text>
            <Text size="sm" italic>just like any developers, stackoverflow is my favorite :v</Text>
          </div>
        </Stack>
        <div style={{ flex: 1 }}>
          <WordCloudCanvas />
        </div>
      </Wrapper>
    </Container>
  )
}