import axios from 'axios';
export const getPosts = async () => {
  try {
    // setIsLoading(true);
    const headers = {
      'content-type': 'application/json',
    };
    const requestBody = {
      query: `query GetPosts {
        posts {
          edges {
            node {
              author {
                node {
                  name
                }
              }
              id
              slug
              title
              link
              postId
              date
              tags {
                edges {
                  node {
                    id
                  }
                }
              }
              content
            }
          }
        }
      }`
    };
    const options = {
      method: 'POST',
      url: 'https://cms.flagone.io/index.php?graphql',
      headers,
      data: requestBody
    };
    const response = await axios(options);
    console.log('RESPONSE FROM AXIOS REQUEST', response.data.data.posts.edges);
    // setUserDetails(response?.data?.data?.nextUser ?? {});
    return response.data.data.posts
  }
  catch (err) {
    console.log('ERROR DURING AXIOS REQUEST', process.env.WORDPRESS_API_UR, err);
  }
  finally {
    console.log('FINALLY DURING AXIOS REQUEST');
    // setIsLoading(false);
  }
};

export const getPopularPosts = async () => {
  try {
    // setIsLoading(true);
    const headers = {
      'content-type': 'application/json',
    };
    const requestBody = {
      query: `query GetPosts {
        posts {
          edges {
            node {
              author {
                node {
                  name
                }
              }
              title
              link
              postId
              date
              tags {
                edges {
                  node {
                    id
                  }
                }
              }
              content
            }
          }
        }
      }`
    };
    const options = {
      method: 'POST',
      url: 'https://cms.flagone.io/index.php?graphql',
      headers,
      data: requestBody
    };
    const response = await axios(options);
    console.log('RESPONSE FROM AXIOS REQUEST', response.data.data.posts.edges);
    // setUserDetails(response?.data?.data?.nextUser ?? {});
    return response.data.data.posts
  }
  catch (err) {
    console.log('ERROR DURING AXIOS REQUEST', process.env.WORDPRESS_API_UR, err);
  }
  finally {
    console.log('FINALLY DURING AXIOS REQUEST');
    // setIsLoading(false);
  }
};

export const getRecentPosts = async () => {
  try {
    // setIsLoading(true);
    const headers = {
      'content-type': 'application/json',
    };
    const requestBody = {
      query: `query GetRecentPosts {
        posts(first: 2) {
          nodes {
            title
            date
          }
        }
      }`
    };
    const options = {
      method: 'POST',
      url: 'https://cms.flagone.io/index.php?graphql',
      headers,
      data: requestBody
    };
    const response = await axios(options);
    console.log('RESPONSE FROM AXIOS REQUEST', response.data.data.posts);
    // setUserDetails(response?.data?.data?.nextUser ?? {});
    return response.data.data.posts
  }
  catch (err) {
    console.log('ERROR DURING AXIOS REQUEST', process.env.WORDPRESS_API_UR, err);
  }
  finally {
    console.log('FINALLY DURING AXIOS REQUEST');
    // setIsLoading(false);
  }
}

export const getPost = async (slug) => {
  try {
    // setIsLoading(true);
    const headers = {
      'content-type': 'application/json',
    };
    const requestBody = {
      query: `query GePost {
        post(id: "${slug}", idType: SLUG) {
          id
          content
          date
          title
          commentCount
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
          tags {
            edges {
              node {
                name
              }
            }
          }
          author {
            node {
              name
            }
          }
          terms(after: "1", first: 1) {
            edges {
              node {
                id
                slug
                link
              }
            }
          }
        }
      }`
    };
    const options = {
      method: 'POST',
      url: 'https://cms.flagone.io/index.php?graphql',
      headers,
      data: requestBody
    };
    const response = await axios(options);
    console.log('RESPONSE FROM AXIOS REQUEST', response.data);
    // setUserDetails(response?.data?.data?.nextUser ?? {});
    return response.data.data.post
  }
  catch (err) {
    console.log('ERROR DURING AXIOS REQUEST', process.env.WORDPRESS_API_UR, err);
  }
  finally {
    console.log('FINALLY DURING AXIOS REQUEST');
    // setIsLoading(false);
  }
};