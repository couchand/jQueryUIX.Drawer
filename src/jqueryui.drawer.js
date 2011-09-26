/*
 * Drawer
 *
 * a jQuery plugin, intended for inclusion in jQUery UI
 *
 * initial development fall 2011, Andrew Couch
 * 
 */
(function($){
	$.widget( 'ui.drawer', {
/*
		options: {
			position: 'top left'
		},
*/
		_create: function(){

var	self		= this,
	$contents	= self.element,
	$container	= $contents	.wrap(	'<div class="ui-drawer-container"></div>'	).parent(),
	$drawer		= $container	.wrap(	'<div class="ui-widget ui-drawer"></div>'	).parent(),
	$handle		= $('<div class="ui-widget-header ui-drawer-handle"></div>'		).appendTo( $container	),
	$handleIcon	= $('<div class="ui-icon"></div>'					).appendTo( $handle	);
//	$moveIcon	= $handle	.append('<div class="ui-drawer-move ui-icon ui-icon-arrowthick-2-ne-sw"></div>'	).children().last();

$contents	.addClass( 'ui-widget-content ui-drawer-content ui-corner-br' );
$handle		.addClass( 'ui-corner-tr ui-corner-br' );
$handleIcon	.addClass( 'ui-icon ui-icon-gear' )
		.click(function(){

			if( $drawer.data('ui.drawer.expanded') ){
				$drawer.animate({ left: -1 * $container.width() }, 500);
				$drawer.data('ui.drawer.expanded', false);
			}
			else {
				$drawer.animate({ left: -1 }, 500);
				$drawer.data('ui.drawer.expanded', true);
			}

		});
/*
$drawer.draggable({
	handle:		'.ui-drawer-move',
	snap:		'body',
	snapMode:	'inner',
	start: function(){

		//$moveIcon.removeClass('ui-state-default').addClass('ui-state-active');

		//$drawer		.wrap(	'<div class="ui-cover ui-tl-cover"></div>' );
		$('body')	.append('<div class="ui-cover ui-tr-cover"></div>' ).find('.ui-tr-cover').droppable({
			accept:		'.ui-drawer',
			hoverClass:	'ui-cover-active',
			drop:		function(){
						alert('hgeere');
					}
		});
		$('body')	.append('<div class="ui-cover ui-bl-cover"></div>' ).find('.ui-bl-cover').droppable({
			accept:		'.ui-drawer',
			hoverClass:	'ui-cover-active',
			drop:		function(){
						alert('hgeere');
					}
		});
		$('body')	.append('<div class="ui-cover ui-br-cover"></div>' ).find('.ui-br-cover').droppable({
			accept:		'.ui-drawer',
			hoverClass:	'ui-cover-active',
			drop:		function(){
						alert('hgeere');
					}
		});

	}
});
*/
$drawer.css('left', -1 * $container.width());

		},

		_setOption: function( key, value ){
/*switch( key ) {
	case "position":
		break;
}*/
this._super( "_setOption", key, value );

		}

	});
})(jQuery);
