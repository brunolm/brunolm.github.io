import { createStyles, makeStyles, Theme } from '@material-ui/core'

const colors = {
  gold: '#f1b600',
  silver: '#9a9c9f',
  bronze: '#caa789',
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    skill: {
      width: '100%',
      margin: theme.spacing(1),
      padding: theme.spacing(1, 2),
      backgroundColor: '#424242',
      borderRadius: '0.5rem',
      maxWidth: 'calc(100% / 3 - 1rem)',
      [theme.breakpoints.down(960)]: {
        maxWidth: 'calc(100% / 2 - 1rem)',
      },
      [theme.breakpoints.down(500)]: {
        maxWidth: 'calc(100% / 1 - 1rem)',
      },
    },
    skillTitle: {
      display: 'flex',
      '& h3': {
        flexGrow: 1,
        margin: '0.25rem 0',
      },
      '& span': {
        margin: '0.25rem 0',
      },
    },
    gold: {
      backgroundColor: colors.gold,
    },
    silver: {
      backgroundColor: colors.silver,
    },
    bronze: {
      backgroundColor: colors.bronze,
    },
  }),
)
