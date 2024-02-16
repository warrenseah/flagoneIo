import axios from 'axios';
export const getCategories = async () => {
  try {
    // setIsLoading(true);
    const headers = {
      'content-type': 'application/json',
    };
    const requestBody = {
      query: `query GetCategories {
        categories {
          nodes {
            name
            count
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
    return response.data.data.categories
  }
  catch (err) {
    console.log('ERROR DURING AXIOS REQUEST', process.env.WORDPRESS_API_UR, err);
  }
  finally {
    console.log('FINALLY DURING AXIOS REQUEST');
  }
};

export const getCategory = async () => {
  try {
    // setIsLoading(true);
    const headers = {
      'content-type': 'application/json',
    };
    const requestBody = {
      query: `query GePost {
        post(id: "cG9zdDox") {
          id
          content
          date
          title
          commentCount
          featuredImage {
            node {
              id
              link
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
    return response.data.data.post
  }
  catch (err) {
    console.log('ERROR DURING AXIOS REQUEST', process.env.WORDPRESS_API_UR, err);
  }
  finally {
    console.log('FINALLY DURING AXIOS REQUEST');
  }
};