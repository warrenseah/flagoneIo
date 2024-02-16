import axios from "axios";

export const createComment = async (payload) => {
  try {
    const headers = {
      "content-type": "application/json",
    };
    const defaultParams = {
      authorUrl: "https://cms.flagone.io",
      approved: "approved",
    };
    const requestBody = {
      query: `mutation CreateComment ($createCommentInput: CreateCommentInput!) {
          createComment(
            input: $createCommentInput
          ) {
            success
          }
        }`,
      variables: {createCommentInput: { ...defaultParams, ...payload }},
    };
    const options = {
      method: "POST",
      url: "https://cms.flagone.io/index.php?graphql",
      headers,
      data: requestBody,
    };
    const response = await axios(options);
    return response.data.data.createComment;
  } catch (err) {
    console.log(
      "ERROR DURING AXIOS REQUEST FOR CREATE COMMENT",
      process.env.WORDPRESS_API_UR,
      err
    );
  } finally {
    console.log("FINALLY DURING AXIOS REQUEST FOR CREATE COMMENT");
  }
};
