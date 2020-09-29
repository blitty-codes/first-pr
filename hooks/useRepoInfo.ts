import { NextApiRequest, NextApiResponse } from 'next'

// get repos by topics https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-topics
// https://github.com/octokit/rest.js
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();
