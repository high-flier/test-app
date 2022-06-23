import { Badge, Box, Button, Container, Flex, HStack, Text } from "@chakra-ui/react";

const Header = () => {
    return (
        <>
            <Flex 
                bg={'blue.600'}
                flexDir={"column"}
                gap={'5px'}
                >
                <Box border={'2px solid blue'}>
                    <Text>Hello I am learning ReactJs</Text>
                </Box>
                <Box border={'2px solid blue'}>
                    <Text>This is another component</Text>
                </Box>
            </Flex>
            <Button
                bg={"pink.800"}
                color='white'
            >Click Me</Button>
            <HStack>
                <Badge>ReactJs</Badge>
                <Badge>NextJs</Badge>
                <Badge>RemixJs</Badge>
            </HStack>
           
        </>
    )
}

export default Header;