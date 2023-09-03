import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Button,
    InputRightElement,
    InputGroup
} from '@chakra-ui/react';

export const EmailInput = ({value, onChange}) => {
    return (
        <FormControl isInvalid={false}>
            <FormLabel>E-mail</FormLabel>
            <Input
                name='email'
                type='email'
                value={value}
                onChange={onChange}
                placeholder='email'
            />

            {/* {!isError ? (
                            <FormHelperText>
                                Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )} */}
        </FormControl>
    )
}