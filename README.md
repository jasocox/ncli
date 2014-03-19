# Using Node.js for cli scripts

This project is to demonstrate using Node.js for writing scripts for command line unitilies. I decided to start using Node.js for scripting, because bash is not sufficient for writing large complex scripts.

The information for this project came from this blog post: http://blog.liangzan.net/blog/2012/07/30/how-to-write-a-command-line-application-in-node-dot-js/

I'm not making a demo of everything mentioned in the blod. If I left something out, either I didn't like the library, or it was too similar to another one I already used. There is one notable exception: celery. The library actually looks fantastic. There are many useful interface elements that are included. But, it is not in npm. I'm not sure if that is because it is in progress, or just because they don't want to rename it (there is already something in npm called celery).

## Getting Started

The first step of making a Node.js script is to install Node.js!

Next, you will need to add this line to the top of any script:

`#!/usr/bin/env node`

Notice that it does not reference Node.js directly, but instead uses env to find it. This is important if you would like your script to be usable by others.

Next, make a file and make it executable. Here is how to do this:

`chmod u+x hello_world.js`

Finally, I like to make a soft link to the script in my ~/bin directory (make sure ~/bin is in you path!):

```
cd ~/bin
ln -s ~/Projects/Node.js/ngit/ngit.js ngit
```

This is important, because it lets you keep your actual code outside of your ~/bin directory, you don't have to add a bunch of projects to your path, and you don't have to move files around every time you make a change. Also, it prevents lost code if one time in a hurry, you edited the script in your ~/bin version directly. In this case, editing the version in ~/bin is the same as editing the version in your git repo. Well, except that I drop the .js on the link, and my editor cannot tell it is a JavaScript file.

## Demos

This project is organized into categories. There is a directory called options, prompting, and interface.

### Options

The options examples are for taking parameters from the command line. This is probably the most important part of making a useful cli script. Without using a proper option parser, a user would have to read your script to determine how to use it. Most option parsers can display a helpful usage document for free. This means that a user can use your script right out of the box and get back to what they were working on before.

### Prompting

The prompting examples are for how to prompt the user for more information. I am not happy with any prompter that I found. I get that doing everything asynchronously can be a very useful way to code, but I do not believe it makes sense with command line scripting. Cli scripts are almost always inherently procedural.

For a web app, you have many users at the same time. If you asked a user for information and everything halted, you will have a lot of other unhappy users. With a cli script, if you are prompting a user for more information, there is not really anything else to do, until you have the answer. Making a prompt use callbacks in a cli script is just silly. I think this means I need to write my own....

### Interface

The interface examples demo some really cool things that you can do using Node.js on the command line. I'm sure you could make tables with bash, but I could not imagine how much of a pain that would be. With Node.js this is incredibly easy. Also, it shows how to use colors. Celery really shines here, and I wish they would add it to npm.
