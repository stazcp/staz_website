import { Box, Typography } from '@mui/material'
import useChat from 'hooks/use-chat'

interface SuggestionProps {
  suggestion: string
  key: number
}

const Suggestion = ({ key, suggestion }: SuggestionProps) => {
  const { sendMessage } = useChat()

  const handleClick = () => {
    sendMessage(suggestion)
  }

  return (
    <Box
      key={key}
      component="div"
      display={'flex'}
      justifyContent={'center'}
      marginBottom={2}
      marginLeft={2}
      marginRight={2}
      alignItems={'center'}
      sx={{ cursor: 'pointer' }}
      height={'100%'}
      padding={2}
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
