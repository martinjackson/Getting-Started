

VG and the preserveAspectRatio Property | Unmatched Style
http://unmatchedstyle.com/news/svg-and-the-preserveaspectratio-property.php

How To Prevent Your SVG Graphics From Deforming
http://vanseodesign.com/web-design/svg-preserveaspectratio/

Understanding SVG Coordinate Systems and Transformations (Part 1) — The viewport, viewBox, and preserveAspectRatio
https://sarasoueidan.com/blog/svg-coordinate-systems/

5 Gotchas You're Gonna Face Getting Inline SVG Into Production | CSS-Tricks
https://css-tricks.com/gotchas-on-getting-svg-into-production/

React Component for Icons using Inline SVG
https://dmfrancisco.github.io/react-icons/


/*
http://stackoverflow.com/questions/9566792/scale-svg-to-container-without-mask-crop


1. You absolutely must have a `viewBox` attribute on your SVG element that describes
the bounding box of the contents you want to be always visible. (The file that
you link to does not; you'll want to add one.)

2. To cause your SVG to fill an HTML element, put the CSS attribute `position:relative`
(or `position:absolute` or `position:fixed` if appropriate) on your wrapper, and
then

3. Set the CSS attribute `position:absolute` on your <svg> element to cause it
to sit inside and fill your div. (If necessary, also apply
`left:0; top:0; width:100%; height:100%`.)

Once you have a `viewBox` and your SVG sized correctly the default value of the
[preserveAspectRatio](http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute)
attribute will do what you want. In particular, the default of `xMidYMid` meet
means that:

- The aspect ratio described by your viewBox will be preserved when rendering.
  By comparison, a value of `none` would allow non-uniform scaling.

- The viewBox will always `meet` either top/bottom or left/right, with
  'letterboxing' keeping the other dimension inside.
   By comparison, a value of `slice` ensures that your viewBox fully fills the
   *rendering*, with either the top/bottom or left/right falling outside the SVG.

- The viewBox will be kept vertically and horizontally centered within the SVG
  viewport. By comparison, a value of xMinYMax would keep it in the bottom-left
  corner, with padding only to the right or top.

You can see this live here: http://jsfiddle.net/Jq3gy/2/

Try specifying explicit values for `preserveAspectRatio` on the `<svg>` element
and press "Update" to see how they affect the rendering.

Edit: I've created a simplified version of the
[US Map with a viewBox](http://phrogz.net/SVG/USMap.svg)
(almost half the bytes) and used that in an updated demo to suit your exact
needs: http://jsfiddle.net/Jq3gy/5/

[phrogz](http://stackoverflow.com/users/405017/phrogz)

*/

/*
<svg preserveAspectRatio="none"
none - Do not force uniform scaling.
xMinYMin - Force uniform scaling.
all combinations of Min,Mid,Max -- smallest, midpoint, or maximum of X and Y

xMin left justify
xMid center
xMax right justify

preserveAspectRatio=”xMinYMid slice”  gives you a view with top and bottom cropped off
*/
