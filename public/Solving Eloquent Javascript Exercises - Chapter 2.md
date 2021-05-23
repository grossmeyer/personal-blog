---
title: 'Solving Eloquent JavaScript Exercises - Chapter 2'
date: '2020-09-25'
author: 
  name: Glenn Meyer
  picture: 'favicon.ico'
---

## Solving Eloquent JavaScript Exercises - Chapter 2

### Solving Chess Board

Chapter 2 contains three exercises, the first two of which are trivial and are not solved here. One of those is the well-known FizzBuzz problem and is easily Googleable. The third problem is more interesting. The instructions direct you to create a string such that is follows a checkerboard pattern as might be seen on a Chess Board. The pattern should look like this for an 8x8 grid:

    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #

If we know of other features in programming, we might first want to consider using an array, but the spirit of this exercise is to use only loops, numbers, and strings. The ideal solution would allow us to enter a value and create grids of arbitrary sizes.

Here are two solutions.

### Glenn's original solution

My first stab at this was to create a nested for-loop and build a string manually by checking for odd or even at every specific spot, then adding a new line character at the end of each line. I have not optimized this solution, this is simply what first came to mind:

    function createGrid(x, y) {
      let str = "";
      for (let j = 0; j < x; j++) {
        for (let i = 0; i < y; i++) {
          if (j % 2 === 0) {
            if (i % 2 === 0) {
              str = str + "#";
            }
            else {
              str = str + " ";
            }
            if (i + 1 === y) {
              str = str + "\n";
            }
          }
          else {
            if (i % 2 === 0) {
              str = str + " ";
            }
            else {
              str = str + "#";
            }
            if (i + 1 === y) {
              str = str + "\n";
            }
          }
        }
      }
      console.log(str);
    }

If you are wondering why the loop is j then i, it's because I screwed up the logic somewhere along the way and it was easier to switch the variables in the for loop. Like I said, this isn't optimized.

### Alternate solution from shadowfool

Although my solution works fine, I wasn't entirely thrilled with it so I thought I would review some other solutions. I found this one by shadowfool on GitHub ([link here](https://gist.github.com/shadowfool/6b6eb71e2a8628275958)).

Here is his original answer:

    var makeGrid = function(l, w){
      var odd = " #".repeat(w);
      var even = "# ".repeat(w);
    
      for(i = 1; i <= l; i++){
        if (i % 2 == 0 || i == 2){
          console.log(even);
        }
        else{
          console.log(odd);
        }
      }
    }

This solution is tidy and concise, but it has at least three mistakes, two of which are trivial to correct. What is wrong here? Well, as written, this actually will produce the opposite effect of the desired pattern, i.e. instead of beginning the first line with a "#", this will produce a space first instead. How come? Looking at even, it's defined as "# ", so it should be ok, we start counting at zero... Oh wait, no, the for loop is starting at 1. That's the easiest fix, just change i to start at 0. Alternatively, you could swap the var names of odd and even or swap the string assignments.

The "bigger" problem is that the output is doubly large than requested. Since the string format for odd and even include both the space and #, we need to halve our width value ( .repeat(w / 2)).

The last problem is that this solution doesn't actually store the entire form/grid as a string. That takes a couple extra steps to fix, but is still pretty simple. Instead of only logging odd or even, we can add it to a blank string, similar to my solution. Then we just need to log that string at the end. But we also need to add line breaks too. Just add that in with our odd and even variables. The final solution might look something like this (note: I've changed vars to lets and renamed the params):

    function makeGrid(x, y) {
      let even = "# ".repeat(x/2) + "\n";
      let odd = " #".repeat(x/2) + "\n";
      let str = "";
    
      for(i = 0; i < y; i++){
        if (i % 2 == 0 || i == 2){
          str += even;
        }
        else{
          str += odd;
        }
      }
      console.log(str);
    }
