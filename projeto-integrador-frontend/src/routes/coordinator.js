export const goToLoginPage = (navigator) =>{
    navigator('/login')
}

export const goToSignupPage = (navigator) =>{
    navigator('/signup')
}

export const goToFeedPage = (navigator) =>{
    navigator('/posts')
}

export const goToPostPage = (navigator, id) =>{
    navigator(`/posts/${id}`)
}

export const goToAddPostPage = (navigator) =>{
    navigator('/add-post')
}