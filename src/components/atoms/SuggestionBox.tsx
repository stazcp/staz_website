import { Box, Typography } from '@mui/material'
import { useWindowSize } from 'hooks'
import useChat from 'hooks/use-chat'
import { isMobile } from 'utils'

interface SuggestionProps {
  suggestion: string
}

const Suggestion = ({ suggestion }: SuggestionProps) => {
  const { sendMessage } = useChat()
  const { width } = useWindowSize()

  const handleClick = () => {
    sendMessage(suggestion)
  }

  return (
    <Box
      component="div"
      display={'flex'}
      justifyContent={'center'}
      marginBottom={2}
      marginLeft={2}
      marginRight={2}
      alignItems={'center'}
      sx={{ cursor: 'pointer' }}
      height={isMobile(width) ? 120 : 50}
      padding={2}
      width={isMobile(width) ? '60vw' : '70vw'}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div style={{ maxHeight: '100%', overflow: 'auto' }}>
        <Typography variant="body2" onClick={handleClick}>
          {suggestion}
        </Typography>
      </div>
    </Box>
  )
}

export default Suggestion
