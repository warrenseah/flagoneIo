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

export const getPaginatedPosts = async (variables) => {
  try {
    // setIsLoading(true);
    const headers = {
      'content-type': 'application/json',
    };
    const requestBody = {
      query: `query GetPaginatedPosts(
        $first: Int
        $last: Int
        $after: String
        $before: String
      ) {
        posts(first: $first, last: $last, after: $after, before: $before) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            cursor
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
                nodes {
                  name
                }
              }
              content
              categories {
                nodes {
                  name
                }
              }
              featuredImage {
                node {
                  id
                  sourceUrl
                }
              }
            }
          }
        }
    }`,
    variables
    };
    const options = {
      method: 'POST',
      url: 'https://cms.flagone.io/index.php?graphql',
      headers,
      data: requestBody
    };
    const response = await axios(options);
    console.log('RESPONSE FROM AXIOS REQUEST Pagination', response.data.data);
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

export const getPopularPosts = async () => {
  try {
    const headers = {
      'content-type': 'application/json',
    };
    const requestBody = {
      query: `query GetPopularPosts {
        popularPosts(first: 5) {
          nodes {
            id
            title
            date
            viewCount
            slug
            featuredImage {
              node {
                id
                sourceUrl
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
    console.log('RESPONSE FROM AXIOS REQUEST GetPopularPosts', response.data.data.popularPosts);
    // setUserDetails(response?.data?.data?.nextUser ?? {});
    return response.data.data.popularPosts
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
            slug
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
          previousPost {
            title
            slug
          }
          nextPost {
            title
            slug
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