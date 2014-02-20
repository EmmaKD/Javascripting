/**
 * @author Emm
 */
			var myGuitar;
			//.this is my string
			//A friend recently gave me a guitar to practice.
			//There is one Guitar.
			var numbermyGuitar = 1;

			//Telling the story of My Acoustic Guitar.

			/* The purpose of this program is to select all the different string instruments (types = myGuitars)
			* from a list and put them in their own list. The remaining guitars should
			* also be put in their own list.
			*/
			//These below are my objects

			var selectedGuitars = [{
				"type" : "acousticGuitar"
			}, {
				"type" : "electricGuitar"
			}, {
				"type" : "semiacousticGuitar"
			}, {
				"type" : "bassGuitar"
			}, {
				"type" : "ukelele"
			}];
			var otherGuitars = [{
				"type" : "acousticGuitar"
			}, {
				"type" : "molo"
			}, {
				"type" : "leadGuitar"
			}, {
				"type" : "bassGuitar"
			}, {
				"type" : "ukelele"
			}];

			//think of a function as a recipe with the arguments (inside the round parenthesis)
			//as ingredients
			function listGuitars() {
				//Create my guitar list object
				var myguitarsList = [{
					"type" : "acousticGuitar"
				}, {
					"type" : "electricGuitar"
				}, {
					"type" : "semiacousticGuitar"
				}, {
					"type" : "bassGuitar"
				}, {
					"type" : "ukelele"
				}];

				console.log(myguitarsList);

				//Lists we can add our guitars to as we test to see if they are acoustic guitars
				var selectedGuitars = [];
				var otherGuitars = [];

				console.log(selectedGuitars);
				console.log(otherGuitars);

				//Create a loop that steps through the "myguitarsList" one item at a time and then test each
				//item to see if its type is "acousticGuitar"

				//For every guitar in the list, look for its "type" property and if
				//that property has the value "acousticGuitar" add it to the "selectedGuitars" list
				//otherwise add it to the otherGuitars list

				//to make the for loop we needs a counter that starts with 0 and goes until the end of the list
				//start counter at 0 and stop it while it is still less than total length of the list
				//everytime the loop goes through add 1 to the counter

				//lists have a built-in function for measuring their own length

				for (var i = 0; i < myguitarsList.length; i++) {
					
					

					//this should print "hi there" 5 times
					console.log(i);
					var currentGuitar = myguitarsList[i];
					console.log(currentGuitar.type);

					//our conditional if "type" is "acousticGuitar" add this object to selectedGuitars
					//otherwise add to otherGuitars
					//the double equals is equivalent to "is the same as"
					if (currentGuitar.type == "acousticGuitar") {
						console.log("found acousticGuitar");
						selectedGuitars.push(currentGuitar);
					} else {
						console.log("not acousticGuitar");
						otherGuitars.push(currentGuitar);
					}//this is end of conditional (if/else)

				}//this is end of for loop

				console.log(selectedGuitars);
				console.log(otherGuitars);

				console.log("first list");
				//actually execute the "" function
				(selectedGuitars);

				console.log("second list");
				//run that recipe/function again with a *different* list of Guitars
				(otherGuitars);

			}//this is enad of  function

			listGuitars();

