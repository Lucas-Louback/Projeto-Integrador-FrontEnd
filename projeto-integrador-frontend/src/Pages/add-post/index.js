import { useForm } from '../../hooks';
import {
    CenteredPageContainer as AddPostContainer,
    FormContainer,
    ContentTextArea
} from '../../components/index';
import {
    FormControl,
    Button
} from '@chakra-ui/react';
import { AddPosts } from '../../constants';
import {    
    goToFeedPage
} from '../../routes'
import { useNavigate } from 'react-router-dom';
import { PostTitleStyled } from './styled';


export const AddPostPage = () => {

    const navigate = useNavigate()

    const [form, onChangeInputs, clearInputs] = useForm({
        content: ""
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        try {
            await AddPosts({
                content: form.content
            });
            goToFeedPage(navigate);

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <AddPostContainer>
            <FormContainer>
                <FormControl>

                </FormControl>
                <form onSubmit={onSubmit}>
                    <PostTitleStyled>Adicionar post</PostTitleStyled>
                    <ContentTextArea 
                    value={form.content} 
                    onChange={onChangeInputs}/>
                    <FormControl>
                        <Button type='submit' variant="form-main">Postar</Button>
                    </FormControl>
                    
                </form>
            </FormContainer>
        </AddPostContainer>
    )

    };