const paths = {
    home: ()=>{
        return '/';
    },

    showTopic:(topicSlug:string)=>{
        return `/topic/${topicSlug}`;
    },

    postCreate:(topicSlug:string)=>{
        return `/topic/${topicSlug}/post/create`;
    },

    postShow:(topicSlug:string, postId:number)=>{
        return `/topic/${topicSlug}/post/${postId}`;
    }
}

export default paths;