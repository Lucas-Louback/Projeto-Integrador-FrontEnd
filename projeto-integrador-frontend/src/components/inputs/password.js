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

import { useState } from 'react';

export const PasswordlInput = ({ value, onChange }) => {
    const [showPassword, SetShowPassword] = useState(false);
    const onClickShowPassword = () => {
        SetShowPassword(!showPassword)
    }


    return (

        <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
                <Input
                    name='password'
                    value={value}
                    onChange={onChange}
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Senha com no mínimo 6 caracteres'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={onClickShowPassword}>
                        {showPassword ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    )
}