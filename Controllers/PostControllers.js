let posts = []

export const getAllPosts = (req,res)=>{
    res.render('index', {posts});
};

export const getNewPostForm = (req, res)=>{
    res.render('new');
};

export const createPost = (req, res)=>{
    const {title, content} = req.body;
    posts.push({title, content});
    res.redirect('/');
};

export const getEditPostForm = (req, res) => {
    const post = posts[req.params.id]; 
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.render('edit', { post, id: req.params.id }); 
  };
  

export const updatePost = (req, res)=>{
    const {title, content} = req.body;
    posts[req.params.id] = {title, content};
    res.redirect('/');
};

export const deletePost = (req, res) =>{
    posts.splice(req.params.id, 1);
    res.redirect('/');
};