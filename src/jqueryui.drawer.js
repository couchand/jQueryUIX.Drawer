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
		_create: function(){

var	self		= this,
	$contents	= self.element,
	$container	= $contents	.wrap(	'<div class="ui-drawer-container"></div>'	).parent(),
	$drawer		= $container	.wrap(	'<div class="ui-widget ui-drawer"></div>'	).parent(),
	$handle		= $('<div class="ui-widget-header ui-drawer-handle"></div>'		).appendTo( $container	),
	$handleIcon	= $('<div class="ui-icon"></div>'					).appendTo( $handle	);

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

$drawer.css('left', -1 * $container.width());

		},

		_setOption: function( key, value ){

			this._super( "_setOption", key, value );

		}

	});
})(jQuery);
