import React from "react";
import { Button } from "@chakra-ui/react";
import { EmailIcon, ArrowForwardIcon } from "@chakra-ui/icon";

export default {
  title: "Chakra/Buttons",
  component: Button
};

// export const Simple_Btn = () => 
//   <Stack direction="row" spacing={4} align="center">
//     <Button colorScheme="blue">Button</Button>

//     <Button colorScheme="teal" variant="solid">
//       Button
//     </Button>
//     <Button colorScheme="teal" variant="outline">
//       Button
//     </Button>
//     <Button colorScheme="teal" variant="ghost">
//       Button
//     </Button>
//     <Button colorScheme="teal" variant="link">
//       Button
//     </Button>
//   </Stack>

export const Primary = () => <Button colorScheme='blue' outlineColor='black'>Success </Button>

export const Success = () => <Button colorScheme='green'>Success </Button>
export const Success_Outlined = () => <Button bgColor='black' colorScheme='white' outlineColor='green'>Success </Button>

export const Danger = () => <Button colorScheme='red'>  Danger </Button>
// export const Icon = () => <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
//     Email
// </Button>







    {/* <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
      Email
    </Button>
    <Button
      rightIcon={<ArrowForwardIcon />}
      colorScheme="teal"
      variant="outline"
    >
      Call us
    </Button>
  </Stack> */}

{
  /* Button with icons on their left or right side */
}
//   <Stack direction="row" spacing={4}>
//     <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
//       Email
//     </Button>
//     <Button
//       rightIcon={<ArrowForwardIcon />}
//       colorScheme="teal"
//       variant="outline"
//     >
//       Call us
//     </Button>
//   </Stack>
