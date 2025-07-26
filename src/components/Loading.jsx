import { Box, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <Box
      minHeight="60vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={60} />
    </Box>
  );
}

export default Loading;
