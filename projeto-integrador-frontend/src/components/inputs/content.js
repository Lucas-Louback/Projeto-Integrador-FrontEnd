import {
    FormControl,
    FormLabel,
    Textarea,
} from '@chakra-ui/react';

export const ContentTextArea = ({value, onChange}) => {
    return (
        <FormControl isInvalid={false}>
            <FormLabel>Post</FormLabel>
            <Textarea
                name='content'
                value={value}
                onChange={onChange}
                placeholder='Escreva o que está pensando'
            />

        </FormControl>
    )
}