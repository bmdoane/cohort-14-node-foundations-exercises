# Synchronous File IO

## Introduction

TODO: Node.js core standard library
TODO: fs module
TODO: sync methods
TODO: Buffer objects

## Topics Covered

-   Command-line applications
-   Command-line flags
-   Third-party modules

## Requirements

Create a JavaScript file to act as a Node.js program named `07.js`. This program
should accept a single argument which should be a file path. Executing the
program will print the contents of that file onto the terminal though the stdout
stream. Executing the program without an argument should simply return without
printing anything. This functionality to be similar to the `cat` command.

Optional: create a second file named `07.json` for your program to read.

Example:

```json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
```

Expected:

```bash
$ ./07.js 07.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}

```

Note: Make sure with `pwd` before executing that you are in the directory that
file is in.

## Bonus

-   ES6 Object Destructuring
-   Avoid `.toString`. Return a String primitive rather than a Buffer object
    from `readFileSync`

## Additional Reading

[Buffers][]
[Node.js Buffer objects][]