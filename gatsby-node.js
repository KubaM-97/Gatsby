const path = require('path')
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve("src/templates/post.js");
    return graphql(`
    {
        allMarkdownRemark{
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }`).then((result) => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      /* --- Create blog pages --- */
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          console.log(1)
          console.log(result)
        createPage({
            path: node.frontmatter.path,
            component: blogTemplate,
        });
      });
    });
  };



// const path = require('path')

// exports.createPages = ({ boundActionCreators, graphql }) => {

//     const { createPage } = boundActionCreators;
//     const postTemplate = path.resolve('src/templates/post.js');

//     return graphql(`{
//         allMarkdownRemark{
//             edges {
//                 node {
//                     html
//                     id
//                     frontmatter {
//                         path
//                         title
//                     }
//                 }
//             }
//         }
//     }`)
//     .then( res => {
//         if(res.errors){
//             return Promise.reject(res.errors);
//         }
//         console.log(res)
//         res.data.allMarkdownRemark.edges.forEach(({node}) => {
//             createPage({
//                 path: node.frontmatter.path,
//                 component: postTemplate
//             })
//         })
//     })


// }
