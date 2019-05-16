# CSS

CSS is not a programming language. It is not a markup langauge either. It is a style sheet language. It is used to apply designs and styles to select elements in an html document. 

To include a stylesheet in your html document you can include it in three ways. 

1. External : With a &lt;Link> tag 

    &lt;Link href= "styles/style.css" rel="stylesheet">

    This style sheet would be located in the project directory or even on a whole different system. 
2. Internal : Predefined in a &lt;style> tag. 

        <style>

        body{
            backgound-color: linen;
        }

        h1{
            color:maroon;
            margin-left:40px;
        }
        </style>
3. Inline : Should only be used for developing and testing components. Inline should almost never be in production code. 

        <h1 style="color:blue;"> This is a heading  </h1>

## CSS Order

The order of which style is applied to an element is:

1. Inline style
2. External and Internal style sheets.
3. Browser default

The Inline style will always take precendence over External and Internal styles. While External and Internal styles always take precedence over Browser defaults. 

A hint to remember this order : Inline is closer to the code. External and Internal are closer than the browser because they line near the codes directory(sometimes). Browser default lives with the browser and the original code is never located near the browser. The orignal code is coming from a server 100's of miles away. 

## Apply Colors 

Colors can be applied to elements by using a number of styling attributes.

* background-color : Changes the background color of an elements. Does not affect the text.

* color : Affects the color of the text in an element.

* border : The border attribute can have a color associated with it.

### Color Representation
Color can be represented in a number of ways here are the basic ones:

* RGB : RGB focuses on the primary colors (Red,Green,Blue). The range of each section in RGB is 0-255.

            rgb(0,255,0) # color green
            rgb(0,0,255) # color blue
            rgb(255,0,0) # color red
* RGBA: Similar to RGB but with an added parameter, Alpha. The Alpha value controls the transparency of the color. It ranges from 0 - 1. 

* HSL : HSL stands for Hue Saturation Lightness. Hue is a degree on the color wheel from 0 to 360. 0-red, 120-green, 240-blue. Saturation is the intensity of the color. It ranges from 0% - 100%. Lightness is how much light you want to give the color. It ranges from 0% to 100%.

            HSL(0,100%,50%) # red

* HSLA: HSLA is similar to HSL but with the addition Alpha parameter. 

## CSS Selectors 

Selectors are a way of targeting an element in the HTML document. 

Here are some selectors:

Simple Selectors : Match one of more elements based on element type, Class or id. 

            p { # all p elements.
                color : red; 
            }

Class selectors: 

            .first { # select all elements of class first.
                font-weight: bold; 
            }

Id selectors :

            #polite { # select all elements with id polite.
                font-family: cursive;
            }

Universal Selector:

            *{ selects all elements on a page.
                padding: 5px; 
            }
Attribute Selectors: Match one of more elements based on their attributes/attribute.

            [attribute]{ #select all elements with this attribute
                color :green
            }

pseudo-classes :

            a:hover{ # select all a elements where the mouse is hovering them. 

                color : red;                

            }

            a:focus{ # all `a` elements that are currently in focus 
                color :red;
            }

Combinators : example, select only paragraphs that are direct descendants of divs.

            table td, table th{ # select all td's in a table and all th in a table. The comma allows for multiple combinations. 
                color : red; 
            }
            
            table tbody td:last-child{ # all td's that are the last child in a tbody that is in a table. 
                color : red; 
            }
            
        
