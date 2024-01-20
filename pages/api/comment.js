export const createComment = async ({commentOn, content, author, authorEmail, authorUrl}) => {
    try {
      const headers = {
        "content-type": "application/json",
      };
      // commentOn = databaseId
      const requestBody = {
        mutation: `mutation CreateComment {
          createComment(
            input: {commentOn: "${commentOn}", content: "${content}", author: "${author}", authorEmail: "${authorEmail}", authorUrl: "${authorUrl}"}
          ) {
            success
            comment {
              id
              author {
                node {
                  name
                  avatar {
                    url
                  }
                }
              }
              content
              parentId
              date
            }
          }
        }`,
      };
      const options = {
        method: "POST",
        url: "https://cms.flagone.io/index.php?graphql",
        headers,
        data: requestBody,
      };
      const response = await axios(options);
      console.log("RESPONSE FROM AXIOS REQUEST", response.data);
      return response.data.data.post;
    } catch (err) {
      console.log(
        "ERROR DURING AXIOS REQUEST",
        process.env.WORDPRESS_API_UR,
        err
      );
    } finally {
      console.log("FINALLY DURING AXIOS REQUEST");
    }
  };