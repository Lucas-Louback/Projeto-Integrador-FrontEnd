import { FeedContainerStyled, PostCardStyled } from "./styled";
import { useEffect, useState } from "react";
import { ListPosts } from "../../constants";
import {
    FormControl,
    Button,
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { useForm } from '../../hooks';
import {
    CenteredPageContainer as AddPostContainer,
    FormContainer,
    ContentTextArea
} from '../../components/index';
import { AddPosts } from '../../constants';
import {
    goToFeedPage
} from '../../routes'
import { PostTitleStyled } from "../add-post/styled";
import { useProtectedPage } from "../../hooks";


export const FeedPage = () => {

    const navigate = useNavigate();
    
    useProtectedPage(navigate)

    

    const [posts, setPosts] = useState([]);

    //addPost
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
    //add post
    useEffect(() => {
        ListPosts()
            .then(data => {
                setPosts(data)
                console.log(data);
            })
            .catch((e) =>
                console.log(e)
            )

    }, []);



    return (

        <FeedContainerStyled >
            <FormContainer>
                <FormControl>

                </FormControl>
                <form onSubmit={onSubmit}>
                    <PostTitleStyled>Adicionar post</PostTitleStyled>
                    <ContentTextArea
                        value={form.content}
                        onChange={onChangeInputs} />
                    <FormControl>
                        <Button type='submit' variant="form-main">Postar</Button>
                    </FormControl>

                </form>
            </FormContainer>
            {posts.map((posts, i) => (<PostCardStyled key={i}>
                <h1>{`${posts.creator.name} disse: ${posts.content}`}</h1>
                <h3>{`Criado em ${posts.createdAt}`}</h3>
                <h3>{`Atualizado em ${posts.updatedAt}`}</h3>
                <h4>{`Likes: ${posts.likes}`}, {`Dislikes: ${posts.dislikes}`}</h4>
                <Button variant="form-main">likes</Button> <Button variant="form-main">dislikes</Button>
            </PostCardStyled>)
            )}
        </FeedContainerStyled>
    )
}