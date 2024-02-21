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
      onClick={handleClick}
      key={key}
      display={'flex'}
      width={'80vw'}
      justifyContent={'center'}
      marginBottom={2}
      alignItems={'center'}
      sx={{ cursor: 'pointer' }}
    >
      <Typography
        variant="body2"
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', overflow: 'scroll', padding: 2 }}
      >
        {suggestion}
      </Typography>
    </Box>
  )
}

export default Suggestion
