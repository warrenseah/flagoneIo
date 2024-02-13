import axios from "axios";

export const getPosts = async () => {
  try {
    // setIsLoading(true);
    const headers = {
      "content-type": "application/json",
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
      }`,
    };
    const options = {
      method: "POST",
      url: "https://cms.flagone.io/index.php?graphql",
      headers,
      data: requestBody,
    };
    const response = await axios(options);
    return response.data.data.posts;
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

export const getPaginatedPosts = async (variables) => {
  try {
    // setIsLoading(true);
    const headers = {
      "content-type": "application/json",
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
              excerpt(format: RENDERED)
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
      variables,
    };
    const options = {
      method: "POST",
      url: "https://cms.flagone.io/index.php?graphql",
      headers,
      data: requestBody,
    };
    const response = await axios(options);
    return response.data.data.posts;
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

export const getPopularPosts = async () => {
  try {
    const headers = {
      "content-type": "application/json",
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
      }`,
    };
    const options = {
      method: "POST",
      url: "https://cms.flagone.io/index.php?graphql",
      headers,
      data: requestBody,
    };
    const response = await axios(options);
    return response.data.data.popularPosts;
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

export const getRecentPosts = async () => {
  try {
    // setIsLoading(true);
    const headers = {
      "content-type": "application/json",
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
      }`,
    };
    const options = {
      method: "POST",
      url: "https://cms.flagone.io/index.php?graphql",
      headers,
      data: requestBody,
    };
    const response = await axios(options);
    return response.data.data.posts;
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

export const getPost = async (slug) => {
  try {
    // setIsLoading(true);
    const headers = {
      "content-type": "application/json",
    };
    const requestBody = {
      query: `query GetPost {
        post(id: "${slug}", idType: SLUG) {
          id
          content
          date
          title
          commentCount
          databaseId
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
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
          comments {
            nodes {
              content
              date
              parentId
              databaseId
              databaseId
              commentId
              commentedOn {
                node {
                  id
                  slug
                  databaseId
                }
              }
              author {
                node {
                  avatar {
                    url
                  }
                  name
                }
              }
              replies {
                nodes {
                  content
                  date
                  parentId
                  databaseId
                  commentId
                  commentedOn {
                    node {
                      id
                      slug
                      databaseId
                    }
                  }
                  author {
                    node {
                      name
                      avatar {
                        url
                      }
                    }
                  }
                  replies {
                    nodes {
                      date
                      content
                      parentId
                      databaseId
                      commentId
                      commentedOn {
                        node {
                          id
                          slug
                          databaseId
                        }
                      }
                      author {
                        node {
                          name
                          avatar {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
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
