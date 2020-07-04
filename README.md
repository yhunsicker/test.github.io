## Personal portfolio for Yu-Li Hunsicker

# HOW TO MAINTAIN

Changes must be made on the `dev` branch. Never checkout to master, or deal with it at all.

When cloning this repo, you should arrive at the `dev` branch automatically. If that is not the case,
be sure to `git checkout dev` before making any changes.

******

## Starting the repo locally in browser to view changes live
From `dev`, you can rum `npm start` from the root to run a local version of the app.
It will open automatically. Use `ctrl + c` in the terminal to abort this process.

******

# Sending updated info to permanently update github files
After making changes, you can update dev on github to record your changes with these commands:
(note: This only updates github to have your newest local files - it does not deploy them.)

```
git add .
git commit -m "A message about your updates in quotes."
git push
```


******

## Redeploying the new changes

The command to actually rebuild and redeploy this site should be run from the root of the repo on branch `dev`:

`npm run deploy`.

This actually creates changes on `master` branch and pushes the changed files on it to github,
where github will take the processed file information and deploy the site automatically after the command finishes.
It takes GitHub up to 20 minutes to update the deployed site.

******

## Don't use master
You should never need to mess with master. In a worse case scenario, you can delete the local and remote versions
of master by using.

```
// delete branch locally
git branch -d master

// delete branch remotely
git push origin --delete master
```

to "reset" them. Then `npm run deploy` from `dev` should re-create them as needed.

******

## Last step to ensure 404 errors (wrong url path additions) go to home page

As a final step, navigate to the repository (https://github.com/yhunsicker/yhunsicker.github.io),
and switch to the `master` branch (on github's site - again, do not mess with master on your terminal/locally).
Open `index.html` by clicking it, then copy (cmd + c) the extremely long output line there. Return to the previous page,
and click "Add file" -> "Create New File". Name the new file 404.html, then paste the copied contents of index.html
into the body of the file. Scroll down and select Commit directly to the master branch, the click Commit New File.
This creates a 404 file which essentially tells the deployed site that if it receives a faulty url (e.g. one ending
with a path that does not exist), it should instead redirect to the home (index) page. Failing to do this step each time
you deploy will mean that 404 errors will not know where to go.

Unfortunately because of using `npm run deploy` from the `gh-pages` package, the build step where you would hope to account
for the 404 page beforehand and the step where the master branch is created and pushed happen all at once, so as far as I can tell,
you have to manually do this step each time.

## Resources:

https://medium.com/swlh/deploying-react-apps-to-github-pages-on-master-branch-creating-a-user-site-bc96c2a37dc8

This article is extremely helpful as it points out that gh-pages for a User Page (e.g. not ending in github.io/<app-name>)
needs a flag to use master branch (non User pages use `gh-pages` branch name), and also suggested that you use a "dev" branch to work on your code, since master will be over-written when you run npm run deploy.
