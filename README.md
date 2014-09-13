Handles the logic of the game using a cartesian coordinate system.

Renders the game visually in a HTML5 canvas element.

To accomplish this, the game contains the following objects:

* MovingObject
  - Sets the attributes of the object
	- Draws the object in a HTML5 canvas element
	
* Asteroid
  - Inherits constructor and methods from moving object
	- Checks to see if another object is within it's own radius
	
* Ship
  - Inherits constructor and methods from moving object
	- Generates a random location to start at
	- Allows the user to create a bullet object

* Bullet
  - Inherits constructor and methods from moving object
	- Checks to see if another object is within it's own radius
	
* Game
  - Keeps hold of all the objects in the game
	- Changes the position of every object after a predefined period of time
	- Removes objects which may have collided with each other
	
* GameView
  - Captures the canvas element and passes it to the other objects so they can draw themselves in it
	- Binds the directional keys and space bar to actual events