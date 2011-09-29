/*
 * tests.js
 *
 *   Unit tests for Count Form-u-la jQuery plugin
 *
 *   Andrew Couch
 *   Fall 2011
 *
 *   Requires:
 *   - Q-Unit
 *   -   Modified by my patch to correct order of expected/actual in equality assertions
 *   - Fixtures
 *   -   Set up in index.html (should these be created dynamically? yes.) @TODO
 *
 */

function globalSetup(){
/*
	var f = $('<form></form>');

	f.append('<input type="text" class="i number in" id="a"/>');
	f.append('<input type="text" class="i number in" id="b"/>');
	f.append('<input type="text" class="i number in" id="c"/>');
	f.append('<input type="text" class="number out" id="r"/>');

	f.appendTo('#qunit-fixture');
*/
}

  $(function(){

//*
module('Update QUnit');

test('order of expected/actual -- expected to fail!!', 1, function(){
	equal( 5, 6, 'Expected: 5 Actual: 6 is the expected message above.' );
});

test('require the number of expected assertions -- expected to fail!!', 1, function(){
	ok( false, 'there should be an uncaught exception just after this test' );
});
test('require the number of expected assertions -- not expected to even show up on the page!!', function(){
	ok( false, 'there should be an uncaught exception before this assertion' );
});
//*/

test('Plugin hook created', 2, function(){
	var hook = $('<p></p>').drawer;
	ok( hook,			'The plugin hook exists' );
	ok( $.isFunction( hook ),	'The hook is a function' );
});

 });

