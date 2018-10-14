Title: Plotting Fractals Step by Step with Python
Date: 2018-10-14
Category: Programming
Tags: Python, Fractals, Turtle
Slug: plotting-fractals-step-by-step-with-python
Authors: Ezequiel Castaño
Lang: en
level: Beginner

Fractals are awesome, they are build with very complex patterns sometimes and you can zoom in forever! In this post we will see how easily it is to plot several kinds of fractals using a tool called L-Systems and Turtle for the step to step plotting.

<!-- PELICAN_END_SUMMARY -->

In this post I'm not going to dive into too many technical details but instead I'll present a little introduction, a lot of animated examples and at the end, the code to generate your own. If you want skip the theory and see the animations, jump directly to the [animated examples](#animated-examples), if you want to see the code instead, [jump directly to that section](#code). Additionally, there will be some resources for both code and math background if you want to explore [at the end](#additional-resources).

## What's a Fractal?

First lets give a "non-strict" definition of what a fractal is, it is basically a geometric figure which shows the same characteristics no matter how much you zoom in into it.

It isn't quite correct but for those who wanted to know the exact definition here it is:

> A fractal is an object or quantity that displays self-similarity, in a somewhat technical sense, on all scales. The object need not exhibit exactly the same structure at all scales, but the same "type" of structures must appear on all scales. A plot of the quantity on a log-log graph versus scale then gives a straight line, whose slope is said to be the fractal dimension. - [Math World](http://mathworld.wolfram.com/Fractal.html)

## How can we draw Fractals with Python?

Fractals are typically hard to draw, because there is a concept which is deeply tight in them, recursion. When we talk about graphics and plotting we usually talk about pixels or vectors, but there is always a limit, fractals by definition are infinitely recursive. So when we want to plot one we should stop at some point, that's why we talk about "iterations". At each iteration the fractal becomes more and more complex, but at some point it is impossible to distinguish between to successive iterations (this happens when changes occur at individual pixel levels), so it is quite reasonable to stop there, sometimes it is quite clear what the shape is and we can stop even earlier.

A two examples for this are the Quadratic Koch Island, which with 2 iterations has a clear structure and in the other hand the Dragon Curve which has a clear structure with 11 iterations. How many iterations are needed depends highly on the specific fractal we are working with.

Certainly there are lots of plotting libraries in Python, being Matplotlib the most popular but they are usually design to plot statistical data and well known plots. Matplotlib in particular has some low level constructs that allow us to build fractals but this time we will be focusing in a usually forget module in the standard library, the Turtle Module.

### Turtle Module

According to [Python docs](https://docs.python.org/3.6/library/turtle.html): "Turtle graphics is a popular way for introducing programming to kids. It was part of the original Logo programming language developed by Wally Feurzig and Seymour Papert in 1966."

The key here is that turtle recognizes basically 4 commands:

- Move Forwards
- Move Backwards
- Turn Left by angle
- Turn Right by angle

Additionally we have the option to:

- Disable writing
- Enable writing

This characteristics seems too simple for plotting such complex graphics as fractals but we will use another tool that uses just this little set of instructions, I'm talking about L-Systems

### L-Systems

An L-System is a way of writing representing recursive structures (such as fractals) in a string format, this is done by rewriting the string over and over. Again, the formal definition is the following:

> A Lindenmayer system, also known as an L-system, is a string rewriting system that can be used to generate fractals with dimension between 1 and 2. - [Math World](http://mathworld.wolfram.com/LindenmayerSystem.html)

Once we understand what an L-System is we can produce recursive structures, but before we are able to do that we need to understand what are the pieces we need. Every L-System has:

- An alphabet: The set of symbols the L-System is going to use.
- An axiom: The initial string for the generation.
- A set of production rules: These rules tells how each symbol should be replaced in the following iteration.

Note for computer science fans: If you ever dived into Computer Science this might sound familiar, it is actually since this is very similar to the definition of a Formal Grammar, the key difference is that in each iteration as opposed to grammars, as many rules as possible are applied. So L-Systems are a subset of Context-Free Grammars.

Since we are going to use Turtle to plot and L-Systems to represent what we want to plot we need to create a relationship between them.

Since the only commands we have in Turtle are the mentioned above we will assign each a symbol which will represent the alphabet

- F: Move Forwards
- B: Move Backwards
- +: Turn Right
- -: Turn Left

In order to make this work, each fractal should also provide an angle, which will be the angle the turtle will turn either right or left, for simplicity reasons only one angle should be provided and the L-System should be written taking that into consideration.

The axiom and the production rules will depend on the fractal only, but the fractal should be written in a way that can be represented by these only four symbols. This introduces a limitation, we will be able to produce only one-line fractals, so some such as the Cantor Set won't be able to be produced this way, this is only a simplification, since we can introduce two other commands to move forwards without writing and analogously for the backwards movement, but to keep things simple we will keep that simplification.

Now let's move to some examples!

## Animated Examples

The following examples were first built using [Wolfram Mathematica](http://www.wolfram.com/mathematica/), a programming language design by and for mathematicians and since it can be a little confusing without experience in the language (and because it is a privative commercial software and format). I decided to port it to Python with the help of the Turtle and the Colorsys modules.

Because the browser execute Python via [Skulpt](http://www.skulpt.org/) and Colorsys isn't supported yet, the animations will be Black & White but images with colors and the corresponding code to generate them will be provided. Each animation has a code associated which you can open and fork in [Repl.it](https://repl.it/)

Note: Skulpt uses YOUR BROWSER to render and to make the animation so if in any case your experience delays, lags or strange behaviour it may be a problem with the browser, replaying the animation or reloading the page should fix most issues.

### Hilbert Curve

    ::python
    axiom = "L"
    rules = {"L":"+RF-LFL-FR+", "R":"-LF+RFR+FL-"}
    iterations = 6
    angle = 90

<iframe class="b-lazy" height="549px" width="469px" data-src="https://repl.it/@ELC/Drawing-Hilbert-Curve-With-Python?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Hilbert Curve II

    ::python
    axiom = "X"
    rules = {"X":"XFYFX+F+YFXFY-F-XFYFX", "Y":"YFXFY-F-XFYFX+F+YFXFY"}
    iterations = 3
    angle = 90

<iframe class="b-lazy" height="549px" width="469px" data-src="https://repl.it/@ELC/Drawing-Hilbert-Curve-II-With-Python?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Peano Curve

    ::python
    axiom = "F"
    rules = {"F":"F+F-F-F-F+F+F+F-F"}
    iterations = 3
    angle = 90

<iframe class="b-lazy" height="649px" width="569px" data-src="https://repl.it/@ELC/Drawing-Peano-Curve-With-Python?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Quadratic Koch Island

    ::python
    axiom = "F+F+F+F"
    rules = {"F":"F-F+F+FFF-F-F+F"}
    iterations = 2
    angle = 90

<iframe class="b-lazy" height="604px" width="524px" data-src="https://repl.it/@ELC/Drawing-Quadratic-Koch-Island-With-Python?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Box Fractal

    ::python
    axiom = "F-F-F-F"
    rules = {"F":"F-F+F+F-F"}
    iterations = 3
    angle = 90

<iframe class="b-lazy" height="649px" width="569px" data-src="https://repl.it/@ELC/Drawing-Box-Fractal-With-Python?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Sierpiński Curve

    ::python
    axiom = "F+XF+F+XF"
    rules = {"X":"XF-F+F-XF+F+XF-F+F-X"}
    iterations = 3
    angle = 90

<iframe class="b-lazy" height="651px" width="539px" data-src="https://repl.it/@ELC/Drawing-Siepinski-Curve-With-Python-and-Turtle?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Koch Snowflake

    ::python
    axiom = "F--F--F"
    rules = {"F":"F+F--F+F"}
    iterations = 3
    angle = 60

<iframe class="b-lazy" height="599px" width="519px" data-src="https://repl.it/@ELC/Drawing-Knoch-Snowflake-With-Python?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Siepiński Sieve

    ::python
    axiom = "FXF--FF--FF"
    rules = {"F":"FF", "X":"--FXF++FXF++FXF--"}
    iterations = 5
    angle = 60

<iframe class="b-lazy" height="579px" width="571px" data-src="https://repl.it/@ELC/Drawing-Siepinski-Sieve-With-Python-and-Turtle?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Peano-Gosper Curve

    ::python
    axiom = "FX"
    rules = {"X":"X+YF++YF-FX--FXFX-YF+", "Y":"-FX+YFYF++YF+FX--FX-Y"}
    iterations = 3
    angle = 60

<iframe class="b-lazy" height="599px" width="519px" data-src="https://repl.it/@ELC/Drawing-Peano-Gosper-Curve-With-Python-and-Turtle?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Sierpiński Arrowhead

    ::python
    axiom = "YF"
    rules = {"X":"YF+XF+Y", "Y":"XF-YF-X"}
    iterations = 6
    angle = 60

<iframe class="b-lazy" height="581px" width="569px" data-src="https://repl.it/@ELC/Drawing-Siepinski-Arrowhead-With-Python-and-Turtle?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### 32-segment curve

    ::python
    axiom = "F+F+F+F"
    rules = {"F":"-F+F-F-F+F+FF-F+F+FF+F-F-FF+FF-FF+F+F-FF-F-F+FF-F-F+F+F-F+"}
    iterations = 2
    angle = 90

<iframe class="b-lazy" height="699px" width="619px" data-src="https://repl.it/@ELC/Drawing-32-Segment-Curve-With-Python?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Dragon Curve

    ::python
    axiom = "FX"
    rules = {"X":"X+YF+", "Y":"-FX-Y"}
    iterations = 11
    angle = 90

<iframe class="b-lazy" height="649px" width="469px" data-src="https://repl.it/@ELC/Drawing-Dragon-Curve-With-Python?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Code

Here there is a compacted version with just plot in black and white and with no export functionalities, this is the code run in the snippets in the animated examples. Below you can find the code with those functionalities included

    :::python
    import turtle

    def create_l_system(numIters, axiom, rules):
        start_string = axiom
        end_string = ""
        for _ in range(numIters):
            end_string = "".join(rules[i] if i in rules else i for i in start_string)
            start_string = end_string

        return end_string


    def draw_l_system(aTurtle, instructions, angle, distance):
        for cmd in instructions:
            if cmd == 'F':
                aTurtle.forward(distance)
            elif cmd == 'B':
                aTurtle.backward(distance)
            elif cmd == '+':
                aTurtle.right(angle)
            elif cmd == '-':
                aTurtle.left(angle)

    def main(iterations, axiom, rules, angle, length,
            y_offset=0, x_offset=0, offset_angle=0):
        inst = create_l_system(iterations, axiom, rules)

        t = turtle.Turtle()
        wn = turtle.Screen()

        t.up()
        t.backward(-x_offset)
        t.left(90)
        t.backward(-y_offset)
        t.left(offset_angle)
        t.down()
        t.speed(0)
        t.pensize(2)

        draw_l_system(t, inst, angle, length)

        t.hideturtle()

        wn.exitonclick()

This is the full code, it is a bit more complex that the one use in Repl.it since it has color and export (as .ps) functions. Each part of the code is explained below.

    :::python
    import turtle
    import colorsys

    def create_l_system(numIters, axiom, rules):
        start_string = axiom
        end_string = ""
        for _ in range(numIters):
            end_string = "".join(rules[i] if i in rules else i for i in start_string)
            start_string = end_string

        return end_string

    def draw_l_system(aTurtle, instructions, angle, distance, color):
        step = 1 / len([i for i in instructions if i in "FB"])
        i = 0
        for cmd in instructions:
            if cmd in "FB" and color:
                r, g, b = colorsys.hsv_to_rgb(i, 1.0, 1.0)
                i += step
                aTurtle.color(r, g, b)
            if cmd == 'F':
                aTurtle.forward(distance)
            elif cmd == 'B':
                aTurtle.backward(distance)
            elif cmd == '+':
                aTurtle.right(angle)
            elif cmd == '-':
                aTurtle.left(angle)

    def draw_background(wn, t):
        ts = t.getscreen()
        canvas = ts.getcanvas()
        height = ts.getcanvas()._canvas.winfo_height()
        width = ts.getcanvas()._canvas.winfo_width()

        turtleheading = t.heading()
        turtlespeed = t.speed()
        penposn = t.position()
        penstate = t.pen()

        t.penup()
        t.speed(0)  # fastest
        t.goto(-width/2-2, -height/2+3)
        t.fillcolor(turtle.Screen().bgcolor())
        t.begin_fill()
        t.setheading(0)
        t.forward(width)
        t.setheading(90)
        t.forward(height)
        t.setheading(180)
        t.forward(width)
        t.setheading(270)
        t.forward(height)
        t.end_fill()

        t.penup()
        t.setposition(*penposn)
        t.pen(penstate)
        t.setheading(turtleheading)
        t.speed(turtlespeed)


    def main(iterations, axiom, rules, angle, length,
            y_offset=0, x_offset=0, offset_angle=0,
            color=False, filename=None):
        inst = create_l_system(iterations, axiom, rules)

        t = turtle.Turtle()
        wn = turtle.Screen()


        if color:
            wn.bgcolor('black')

        if not filename is None:
            draw_background(wn, t)

        t.up()    
        t.backward(-x_offset)
        t.left(90)
        t.backward(-y_offset)
        t.left(offset_angle)
        t.down()
        t.speed(0)
        t.pensize(2)
        draw_l_system(t, inst, angle, length, color)
        t.hideturtle()

        if not filename is None:
            cv = wn.getcanvas()
            cv.postscript(file=f"{filename}.ps", colormode='color')

        wn.exitonclick()

## Code Explanation

First we need to import some modules, in this case the turtle module for the plotting and the colorsys for the colors.

    :::python
    import turtle
    import colorsys

Then we need to generate the L-System which will be the instruction set for the turtle. We define a function called `create_l_system` which receives the number of iterations, the axiom and the production rules. It starts with the axiom and uses an auxiliary variable called `end_string`. Rules here are assumed to be dictionaries, so the key will be unique and it represents the symbol and the value represents what should be replaced with. So we join all the replacements for each symbol and we end up with the string for the next iteration.

    ::python
    def create_l_system(numIters, axiom, rules):
        start_string = axiom
        end_string = ""
        for _ in range(numIters):
            end_string = "".join(rules[i] if i in rules else i for i in start_string)
            start_string = end_string

        return end_string

Then we define a draw_l_system which takes the turtle, the set of instructions (the output of the L-System), the angle for the turn right/left, the length of each individual line and whether it should use color or not. For this example I used HSV to represent colors, it was the easiest implementations since each values varies from 0 to 1 and to go along all colors we can fix S and V to 1 and change H from 0 to 1. For this I determine the size of the step, each step represents a F or a B command (because we only want to change the color when we actually plot something). Then a simple elif structure for each of the previously defined commands.

    ::python
    def draw_l_system(aTurtle, instructions, angle, distance, color):
        step = 1 / len([i for i in instructions if i in "FB"]) # HSV receives values from 0 to 1
        i = 0 # We start at 0
        for cmd in instructions:
            if cmd in "FB" and color:
                r, g, b = colorsys.hsv_to_rgb(i, 1.0, 1.0) # Convert from HSV to RGB
                i += step # This ensures that i goes from 0 to 1
                aTurtle.color(r, g, b)
            if cmd == 'F':
                aTurtle.forward(distance)
            elif cmd == 'B':
                aTurtle.backward(distance)
            elif cmd == '+':
                aTurtle.right(angle)
            elif cmd == '-':
                aTurtle.left(angle)


The following function is just for exporting purpose and it is only relevant when the background color isn't white. It basically draw a rectagle of the same size of the canvas and with the same color of the background color previously defined.

    ::python
    def draw_background(wn, t):
        ts = t.getscreen()
        canvas = ts.getcanvas()
        height = ts.getcanvas()._canvas.winfo_height()
        width = ts.getcanvas()._canvas.winfo_width()

        turtleheading = t.heading()
        turtlespeed = t.speed()
        penposn = t.position()
        penstate = t.pen()

        t.penup()
        t.speed(0)  # fastest
        t.goto(-width/2-2, -height/2+3)
        t.fillcolor(turtle.Screen().bgcolor())
        t.begin_fill()
        t.setheading(0)
        t.forward(width)
        t.setheading(90)
        t.forward(height)
        t.setheading(180)
        t.forward(width)
        t.setheading(270)
        t.forward(height)
        t.end_fill()

        t.penup()
        t.setposition(*penposn)
        t.pen(penstate)
        t.setheading(turtleheading)
        t.speed(turtlespeed)

And finally the `main` function, it receives all the parameters it need for the generation of the L-Systems and also `y_offset`, `x_offset`, `offset_angle`, `color`, `filename`. The first three represent the offset of the turtle, this is merely for positioning the plot as we want inside the canvas. `color` is a boolean which represents if we want to use color and `filename` is the name of the file where the fractal will be exported, if none provided, it won't generate any file.

The function first generates a set of instructions and stores it in `inst` then it initialices the turtle and the screen, it handles the color and the export code and it positions the turtle in the defined position, then it plots the instructions, export the file if needed and wait for a click to close.

    ::python
    def main(iterations, axiom, rules, angle, length,
            y_offset=0, x_offset=0, offset_angle=0,
            color=False, filename=None):
        inst = create_l_system(iterations, axiom, rules)

        t = turtle.Turtle()
        wn = turtle.Screen()


        if color:
            wn.bgcolor('black')

        if not filename is None:
            draw_background(wn, t)

        t.up()
        t.backward(-x_offset)
        t.left(90)
        t.backward(-y_offset)
        t.left(offset_angle)
        t.down()
        t.speed(0)
        t.pensize(2)
        draw_l_system(t, inst, angle, length, color)
        t.hideturtle()

        if not filename is None:
            cv = wn.getcanvas()
            cv.postscript(file=f"{filename}.ps", colormode='color')

        wn.exitonclick()

## Additional Resources

There are lots of resources in internet about fractals both from the programming and from the math perspective. I will show you two that I find really intereting: The 3Blue1Brown for math and the CodingTrain for code.

**Coding Train**

<div class="youtube-container">
    <iframe class="b-lazy" width="560px" height="315px" data-src="https://www.youtube.com/embed/f6ra024-ASY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**3Blue1Brown**

<div class="youtube-container">
    <iframe class="b-lazy" width="560px" height="315px" data-src="https://www.youtube.com/embed/gB9n2gHsHN4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Sources

This post was inspired by a [Math World post](http://mathworld.wolfram.com/LindenmayerSystem.html) and a university assignment.