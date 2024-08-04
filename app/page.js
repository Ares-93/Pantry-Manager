import { Box, Stack, Typography } from "@mui/material";

const items = [
  "tomato",
  "garlic",
  "potato ",
  "brocolli",
  "carrot",
  "tamarind",
  "onion",
  "ginger",
  "chilli",
  "cucumber",
];

export default function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack width="800px" height="400px" spacing={2} overflow={"scroll"}>
        <Box
          position="sticky"
          top={0}
          bgcolor="black"
          p={2}
          textAlign="center"
          zIndex={1}
        >
          <Typography
            variant="h4"
            color="orange"
            textAlign="center"
            fontWeight="bold"
          >
            Pantry Items
          </Typography>
        </Box>
        {items.map((item, index) => (
          <Box key={index} bgcolor="black" p={2} textAlign="center">
            <Typography
              variant="h6"
              color={"crimson"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              {
                //Capitalizing the first letter of the item
                item.charAt(0).toUpperCase() + item.slice(1)
              }
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
