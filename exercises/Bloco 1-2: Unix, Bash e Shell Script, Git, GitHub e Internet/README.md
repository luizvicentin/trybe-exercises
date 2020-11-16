## Recapping

Now you can forget that one day you versioned the files by adding the version name at the end! 😉

- Git is a distributed versioning system (DVCS);

- The biggest advantage of Git is that it is distributed, i.e. the repository stays on your machine and you don't have to worry about locking files just like other VCS's;

- We've seen that installing Git and configuring it is simple. Just download the installer and configure it using the git config command;

- To start a local repository, we saw that you have two options:

  - git init (to create a new Git repository);

  - git clone (to copy an existing Git repository to your machine and thus create branches and Pull Requests).

- GitHub is a source code hosting platform with version control using Git;

- We also saw that to upload your code to GitHub, you just need to check which of the options below:

  1. Create a repository from scratch locally, on your machine, where you will use the git init command;

  2. Work in an existing repository, where you will use the git clone command;

  ###### These two commands are exclusionary, that is, you either use one, or use the other, never both at the same time. After that, follow one of the two flows below

  

- Flow 1 - After git init;

  1. Create your first commit;

  2. Create the remote repository in your GitHub account;

  3. Add the URL of the remote repository;

  4. Execute the famous push.

- Flow 2 - After git clone;

  1. Create your branch within the cloned repository;

  2. Checkout your branch;

  3. Create your first commit;

  4. Execute the famous push.
