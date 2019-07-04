// index variable to keep track of where we are in typing the strings
var i = 0;

// array of strings to store the content on the site
var txt = ['Hey! I\'m Sahir and I\'m a sophomore at the ',
               'University of Maryland.',
               'I\'m currently studying ',
               'Computer Science',
               'with a minor in ',
               'Statistics.',
               'I am also a part of the ',
               'University Honors',
               'Program in the Honors College.',
               'Outside of my classes, I am an active member of the ',
               'Kappa Theta Pi',
               'fraternity and the ',
               'Indian Student Association.',
               'Over the summer of 2019, I also worked as a Software Engineering Intern at the ',
               'Capital One Tech Incubator',
               'in College Park. Feel free to look at my ',
               'GitHub',
               'to see some cool projects that I\'ve worked on in my free time!',
               'If you want to learn more about me or what I\'ve done, you\'re welcome to check out my',
               'resume.',
               'You can also email me at ',
               'sahir.mody@gmail.com,',
               'call me at ',
               '732-850-1382,',
               'or message me on ',
               'LinkedIn.',
               'I look forward to hearing from you!'];

// The speed/duration of the effect in milliseconds
var speed = 40;

// denotes what section of the array we are currently typing out
var section = 0;

// HTML code for how the cursor should look
var cursorIcon = '<span style="background-color: white; color: transparent">|</span>';

// length in milliseconds that we should let the cursor blink for
var cursorLoadTime = 2100;

// returns if a specific section is a start of a new paragraph in the text
function startOfNewParagraph(section) {
  return section == 0 || section == 9 || section == 18;
}

// Animated printing of the text as if it is being typed by a cursor
function printText() {

  // When we reach the start of a new pargraph,  reset all of the cursor text
  if(startOfNewParagraph(section)) {
    document.getElementById('cursorBlink1').innerHTML = '';
    document.getElementById('cursorBlink2').innerHTML = '';
    document.getElementById('cursorBlink3').innerHTML = '';
  }

  // remove the cursor so that typing can continue normally
  if(i > 0){
    document.getElementById('section' + section).innerHTML = document.getElementById('section' + section).innerHTML.slice(0,-1*cursorIcon.length);
  }

  // if we still have more letters to type, we add the next letter and the cursor
  if (i < txt[section].length) {

    document.getElementById('section' + section).innerHTML += txt[section].charAt(i);
    document.getElementById('section' + section).innerHTML += cursorIcon;
    i++;
    setTimeout(printText, speed);

  } else {

    // Final Animation of the blinking cursor
    if(section == txt.length - 1) {
      document.getElementById('cursorBlink4').innerHTML = '|';
      setTimeout(function() {
        document.getElementById('cursorBlink4').innerHTML = '';
      },cursorLoadTime);
    }

    section++;
    i = 0;

    // At the start of the next section, we let the cursor blink for a bit and
    // then begin typing
    if(startOfNewParagraph(section)) {
      document.getElementById('cursorBlink' + (1 + (section/9))).innerHTML = '|';
      setTimeout(printText, cursorLoadTime);
    } else {
      setTimeout(printText, speed);
    }
  }
}

// Let the cursor blink for a little bit before typing begins
setTimeout(printText, 2*cursorLoadTime);
