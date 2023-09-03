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

export const NamelInput = ({value, onChange}) => {
    return (
        <FormControl isInvalid={false}>
            <FormLabel>Nome</FormLabel>
            <Input
                name='name'
                value={value}
                onChange={onChange}
                placeholder='nome'
            />
        </FormControl>
    )
}