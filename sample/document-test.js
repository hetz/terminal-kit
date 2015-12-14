#!/usr/bin/env node
/*
	The Cedric's Swiss Knife (CSK) - CSK terminal toolbox test suite
	
	Copyright (c) 2009 - 2015 Cédric Ronvel 
	
	The MIT License (MIT)
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

/* jshint unused:false */



//console.error( "\n\n\n\n\n\n\n\n" ) ;
termkit = require( '../lib/termkit.js' ) ;
term = termkit.terminal ;



term.clear() ;

var document = term.createDocument() ;

var button1 = termkit.Button.create( {
	parent: document ,
	content: '> bob' ,
	value: 'bob' ,
	x: 10 ,
	y: 10 ,
} ) ;

var button2 = termkit.Button.create( {
	parent: document ,
	content: '> bill' ,
	value: 'bill' ,
	x: 13 ,
	y: 12 ,
} ) ;

var button3 = termkit.Button.create( {
	parent: document ,
	content: '> jack' ,
	value: 'jack' ,
	x: 9 ,
	y: 14 ,
} ) ;

var textInput1 = termkit.TextInput.create( {
	parent: document ,
	label: 'First name: ' ,
	x: 5 ,
	y: 16 ,
	width: 30 ,
} ) ;

var textInput2 = termkit.TextInput.create( {
	parent: document ,
	label: 'Last name: ' ,
	x: 15 ,
	y: 18 ,
	width: 30 ,
} ) ;

button1.on( 'submit' , onSubmit ) ;
button2.on( 'submit' , onSubmit ) ;
button3.on( 'submit' , onSubmit ) ;
textInput1.on( 'submit' , onSubmit ) ;
textInput2.on( 'submit' , onSubmit ) ;

function onSubmit( value )
{
	//console.error( 'Submitted: ' , value ) ;
	term.saveCursor() ;
	term.moveTo.styleReset.eraseLine( 1 , 22 , 'Submitted: %s\n' , value ) ;
	term.restoreCursor() ;
}


document.focusNext() ;


term.grabInput() ;
//form.draw() ;

term.on( 'key' , function( key ) {
	switch( key )
	{
		case 'CTRL_C' :
			term.grabInput( false ) ;
			term.hideCursor( false ) ;
			term.styleReset() ;
			term.clear() ;
			process.exit() ;
			break ;
	}
} ) ;


//term.moveTo( 1 , term.height ) ;


