import { Container, Grid } from '@mui/material'
import ProjectCard from '../components/ProjectCard'
import LearnMoreModal from '../components/LearnMoreModal'

export default function Projects() {
  const CARD_SIZE = 4

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={CARD_SIZE}>
          <ProjectCard
            img="/src/assets/cine-plus-thumb.png"
            title="Cine+"
            url="https://cine-plus.vercel.app/"
            github="https://github.com/stazcp/cine-plus"
            description="A movie search app using the TMDB API, one of my first React projects"
          />
        </Grid>
        <Grid item xs={CARD_SIZE}>
          <ProjectCard
            img="/src/assets/starwars.png"
            title="Starwars"
            url="https://starwars-hero.vercel.app/"
            github="https://github.com/stazcp/starwars-app"
            description="A Starwars character search app using the SWAPI API, made for an interview"
          />
        </Grid>
        <Grid item xs={CARD_SIZE}>
          <ProjectCard
            img="/src/assets/markup-editor.png"
            title="Markup Editor"
            url="https://markdown-reader-sable.vercel.app/"
            github="https://github.com/stazcp/markdown-reader"
            description="Created a Markup Editor using React and Typescript for a coding interview"
          />
        </Grid>
        <Grid item xs={CARD_SIZE}>
          <ProjectCard
            img="/src/assets/quickslider.png"
            title="Quickslider"
            url="https://quick-slider.vercel.app/"
            github="https://github.com/stazcp/Quick-Slider"
            description="A Slider request made for a medical company interview"
          />
        </Grid>
        <Grid item xs={CARD_SIZE}>
          <ProjectCard
            img="/src/assets/movie-finder.png"
            title="Movie Finder"
            url="https://mbfcz.csb.app/#"
            github="https://github.com/stazcp/movie_finder"
            description="A movie search app using the TMDB API using Vanilla.JS"
          />
        </Grid>
        <Grid item xs={CARD_SIZE}>
          <ProjectCard
            img="/src/assets/spotify-playlist-maker.png"
            title="Jamming"
            url="https://jamming-lake.vercel.app/"
            github="https://github.com/stazcp/jamming?tab=readme-ov-file"
            description="Created an app that uses the Spotify API to search for songs and create a playlist"
          />
        </Grid>
      </Grid>
      {/* <LearnMoreModal /> */}
    </Container>
  )
}
