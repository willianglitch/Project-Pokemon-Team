
import { NavBar } from "./components/NavBar/Nav"
import { Box } from "@mui/material"
import { PokemonCard } from "./components/Card/Card"
import { Title } from "./components/Title/Title"


export function App() {

  return (
    <div>
      <NavBar />
      <Box sx={{maxWidth:'1000px', margin:'auto', textAlign:'center', textDecoration:'underline', color:'#55545A'}}>
        <Title />
      </Box>

      <Box>
        <PokemonCard />
      </Box>
    </div>
  )
}

export default App
