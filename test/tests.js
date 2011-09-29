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

/*
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
*/

test('Plugin hook created', 2, function(){

	var hook = $('<p></p>').drawer;
	ok( hook,			'The plugin hook exists' );
	ok( $.isFunction( hook ),	'The hook is a function' );

});

module('basic div', {
	setup: function(){

		var markup = $('<divi id="test_div">Lorem ipsum.</div>').appendTo('#qunit-fixture');

	}
});

test('has classes', 2, function(){

	var $element = $('#test_div');

	// Start Test

	$element.drawer();

	//Stop Test

	ok( $element.hasClass('uix-drawer-content'), 'The drawer content class should be assigned.' );
	ok( $element.hasClass('ui-widget-content'), 'The widget content class should be assigned.' );

});

test('has main ancestor classes', 2, function(){

	var $element = $('#test_div'), $ancestor;

	// Start Test

	$element.drawer();
	$ancestor = $element.closest('.uix-drawer');

	//Stop Test

	equal( 1, $ancestor.size(), 'The drawer class should be assigned.' );
	ok( $ancestor.hasClass('ui-widget'), 'The widget class should be assigned.' );

});

test('has handle', 2, function(){

	var $element = $('#test_div'), $handle;

	// Start Test

	$element.drawer();
	$handle = $element.closest('.uix-drawer').find('.uix-drawer-handle');

	//Stop Test

	equal( 1, $handle.size(), 'The drawer should have a handle.' );
	ok( $handle.hasClass('ui-widget-header'), 'The widget header class should be assigned.' );

});

module('interact', { setup: function(){
		$('<div id="test_div"></div>').appendTo('#qunit-fixture');

		$('#qunit-fixture').append('<input id="test_input_field" />');

		$('#test_input_field').drawer();
	}
});

test('click opens', 2, function(){

	var	$element	= $('#test_div'),
		$drawer		= $element.closest('.uix_drawer'),
		$handle		= $drawer.find('.uix-drawer-handle');

	// Start Test

	$handle.click();

	// Stop Test

	ok( -1 == $drawer.css('left'), 'The drawer should be on the screen.' );

});

 });

