import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import boardringImg from '../assets/boardring.png'
import codingImg from '../assets/coding.png'


const HomePage = () => {
  const habits = [
    {
      id: 1,
      name: 'Basketball',
      image: boardringImg,
      points: 150,
      over: '30 Minutes',
    },
    {
        id: 2,
        name: 'Coding',
        image: codingImg,
        points: 12,
        over: 'Day',
    }
  ]

  return (
    <Box padding={4} height="100vh" overflow="hidden">
      {/* Mobile layout: 2 columns per row, 5 placeholder boxes for now */}
      <Box
        mt={12}
        height="100vh"
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"    
        gridTemplateRows="repeat(5, 1fr)"
        gap={4}
      >
        {habits.map((habit) => (
          <Box
            key={habit.id}
            background="gray.100"
            borderRadius="md"
            p={4}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              as="img"
              src={habit.image}
              alt={`${habit.name} hoop`}
              w="130px"
              h="110px"
              objectFit="contain"
              alignSelf="center"
              marginBottom={2}
            />
            <Text className="bebas-neue" letterSpacing={1} fontSize="24px">{habit.points}/{habit.over}</Text>
          </Box>    
        ))}
      </Box>
    </Box>
  )
}

export default HomePage