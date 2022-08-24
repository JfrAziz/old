import { config } from "@config"
import Logo from "@public/logo.png"
import { Square, Triangle } from "tabler-icons-react"
import { Anchor, BackgroundImage, createStyles, Group } from "@mantine/core"

const useStyles = createStyles(theme => ({
  container: {
    color: theme.colors.dark[0],
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    zIndex: 2,
    position: "relative",
  },
  image: {
    position: "absolute",
    opacity: 0.01,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,

    ["::before , ::after"]: {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }
  },
  text: {
    color: theme.colors.dark[0],
    textDecoration: "none !important"
  },
  title: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
    letterSpacing: 1
  },
  footer: {
    padding: theme.spacing.md
  },
}))

export const Hero = () => {
  const { classes, theme } = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Anchor href={config.site.githubLink} size={42} className={classes.text} target="_blank">{config.site.name}</Anchor>
      </div>
      <Group position="apart" align="center" className={classes.footer}>
        <Group>
          <Square fill={theme.colors.dark[0]} />
        </Group>
        <Group>
          <Anchor href={config.site.githubLink} className={classes.text} target="_blank">Github</Anchor>
          <Anchor href={config.site.twitterLink}  className={classes.text} target="_blank">Twitter</Anchor>
        </Group>
        <Group>
          <Triangle fill={theme.colors.dark[0]} />
        </Group>
      </Group>
      <BackgroundImage src={Logo.src} className={classes.image} />
    </div>
  )
}