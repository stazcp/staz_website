import { Box } from '@mui/material'
import { ReactNode } from 'react'

const SocialBar = (): ReactNode => {
  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
      <a
        href="https://www.linkedin.com/in/your-linkedin-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="src/assets/LinkedIn-Logos/LI-In-Bug.png" alt="LinkedIn" width={24} height={24} />
      </a>
      <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
        <img src="src/assets/github-mark.png" alt="LinkedIn" width={24} height={24} />
      </a>
      {/* <a href="mailto:your-email@example.com">Contact</a> */}
    </Box>
  )
}

export default SocialBar
