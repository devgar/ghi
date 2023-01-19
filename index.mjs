#!/usr/bin/env

import * as dotenv from 'dotenv'
dotenv.config()

import { ofetch } from 'ofetch'

const btoa = (arg) => Buffer.from(arg).toString('base64')

const atob = (arg) => Buffer.from(arg, 'base64').toString('ascii')

const user = process.env.USER
const token = process.env.AUTH_TOKEN
const organization = process.env.ORGANIZATION
const project = process.env.PROJECT
const repo = process.env.REPO

const owner = user

const baseURL = 'https://api.github.com'

const userReposURL = `${baseURL}/users/${user}/repos`
const orgReposURL = `${baseURL}/orgs/${organization}/repos}`
const repoURL  = `${baseURL}/repos/${owner}/${repo}`

const projectsURL = `https://dev.azure.com/${organization}/_apis/projects?api-version=7.0`
const endpointsURL = `https://dev.azure.com/${organization}/${project}/_apis/serviceendpoint/endpoints?api-version=7.0`
const endpoint = `https://dev.azure.com/${organization}/${project}/_apis/git/repositories/{repositoryId}/pullrequests/{pullRequestId}?api-version=7.0`

const Accept = 'application/vnd.github+json'
const Authorization = "Basic " + btoa(`${user}:${token}`)

const data = await ofetch(userReposURL, { headers: { Accept, Authorization }})

console.log(data)

// console.log('xh -a', `${user}:${token} "${projectsURL}"`, )