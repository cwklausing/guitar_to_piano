#Guitar To Piano Converter
##Scope of Work

###Objective: Create a virtual guitar-to-piano converter. Users will be able to click on the frets on the neck of a guitar and see the corresponding keys highlighted a 2-octave section of piano.

##Major Components
###Appearance: See Wire-Frame

###Virtual Guitar
* Takes up top 1/3 of screen
* 6 strings
* Each string is assigned starting based value on chromatic scale (0-11) starting at C = 0. The Guitar tuning would, accordingly, be E = 4, A = 9, D = 2, G = 7, B = 11, E = 4.
* On page load, the guitar's strings should all be null. Only activated after they're clicked by the user.
* Each fret is assigned an incrementing value (fret 1 = 1, 2=2, 3=3, etc.)
* When the fret is clicked, string-value += activeFret value, and a colored dot appears on the active fret.
* If a new fret is clicked on the same string, remove previous 'active-fret' class, and give new fret the 'active' class.
* The 6-note combination of keys is stored in a "translate" array. Null keys are stored as 'null' in the array.
* Off-click: If an active fret is clicked, the entire string reverts to 'null' and the colored dot is removed.

###Virtual Piano
* Each piano key will also be given a chromatic number (0-11)
* The piano will display the corresponding notes in the "translate" array.
* Every time the user clicks a fret on the guitar, the corresponding piano's key changes classes to appear darker, giving the impression of being pressed down.

##Stretch Goals
###Chord Library
* Compile database of chords (probably SQL since there will always be 6 values).
* Every time a fret is clicked, query the database to see if the translate array matches any chords in database.
* If the array matches a chord in the database, display the chord name (for instance, "D7" or "Adim") below the guitar. Else if no match, don't display anything.