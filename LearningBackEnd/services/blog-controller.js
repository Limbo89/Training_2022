class BlogController {
    constructor () {
        this.blogs = [
            {
                title:"Блог номер 1",
                name:"абоба",
                description:"описание блога номер 1",
                date:"11.10.22",
            },
            {
                title:"Блог номер 2",
                name:"абоба",
                description:"описание блога номер 2",
                date:"11.10.22",
            },
            {
                title:"Блог номер 3",
                name:"абоба",
                description:"описание блога номер 3",
                date:"11.10.22",
            },
            {
                title:"Блог номер 4",
                name:"абоба",
                description:"описание блога номер 4",
                date:"11.10.22",
            },

        ];
    }
    async allBlogs(req, res) {
        res.render("index.njk", {blogs:this.blogs});
    }

    async getBlog(req, res) {
        res.render("blog.njk", {blog: this.blogs[req.params.id -1] });
        console.log(this.blogs[req.params.id]);
    }
}

module.exports = BlogController;