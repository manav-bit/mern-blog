import mongoose from 'mongoose';

const postSchema=new mongoose.Schema(
    {
userId:{type:String, 
    required:true,
    },

    content:{type:String,
    required:true,},

    title:{type:String,
    required:true,
    unique:true,
    },
    image:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.joshwcomeau.com%2Femail%2F007%2F&psig=AOvVaw16VjwWoVr98dVbVSZNZ807&ust=1707752556350000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCT35bQo4QDFQAAAAAdAAAAABAK",
    },
    category:{
        type:String,
      
        default:'uncategorized'
    },
slug:{
    type:String,
    required:true,
    unique:true,
}




    },{timestamps:true}
    );

  const Post=mongoose.model('Post',postSchema);
  export default Post;