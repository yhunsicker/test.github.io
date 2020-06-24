## Personal portfolio for Yu-Li Hunsicker

https://medium.com/swlh/deploying-react-apps-to-github-pages-on-master-branch-creating-a-user-site-bc96c2a37dc8

This article is extremely helpful as it points out that gh-pages for a User Page (e.g. not ending in github.io/<app-name>)
needs a flag to use master branch, and also suggested that you use a "dev" branch to work on your code, since master will be
over-written when you run npm run deploy.

To make changes, I recommend changing on dev and `git push origin dev`, then deleting remote and local master branches via

```
// delete branch locally
git branch -d master

// delete branch remotely
git push origin --delete master
```

note you may need to change the default branch on github from master to something else briefly. (maybe it doesn't even have to
always be master)

then you can `git checkout -b master` off of dev, and run `npm run deploy` to have gh-pages create a new version at the master remote.
note that you may need to add a 404.html file with the contents of index.html via github's file add to tell it how to redirect on 404s.
