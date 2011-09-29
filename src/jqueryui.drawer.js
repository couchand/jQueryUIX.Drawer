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

		options: {
			/*position: 'wnw'*/
			side:		'left',
			origin:		'top',
			offset:		'5%',
			zIndex:		9999,
			maxPull:	'20%',
			startOpen:	false,
			icon:		'gear'
		},

		_create: function(){

var	self		= this,
	$contents	= self.element.addClass('uix-drawer-content').css('position', 'relative')
				.addClass('ui-widget-content').css('padding', '15px');
	$container	= $contents.wrapAll('<div class="uix-drawer-container"></div>').closest('.uix-drawer-container');
	$drawer		= $container.wrapAll('<div class="ui-widget uix-drawer"></div>').closest('.uix-drawer');
	$handle		= $('<div class="ui-widget-header uix-drawer-handle"></div>'		).appendTo( $container	),
	$handleIcon	= $('<div class="ui-icon"></div>').appendTo( $handle ).addClass('ui-icon-' + self.options.icon);

self._push(0);

$drawer		.addClass('ui-widget-content ui-drawer-content')
		.css('position','fixed').css('z-index', self.options.zIndex)
		.css(self.options.side, -1).css(self.options.origin, self.options.offset)
		.css('max-' +	(
					('left' === self.options.side || 'right' === self.options.side) ? 'width' : 'height'
				), self.options.maxPull)
		.addClass('ui-corner-' +
				(( 'top' === self.options.origin ||  'top' === self.options.side) ? 'b' : 't') +
				(('left' === self.options.origin || 'left' === self.options.side) ? 'r' : 'l')
		);

$container	.addClass('ui-helper-reset').css('position', 'relative');
$contents	.addClass('ui-helper-reset');

$handle		.addClass(('left' === self.options.side	|| 'top' === self.options.side) ? 'ui-corner-br' : '')
		.addClass(('left' === self.options.side || 'bottom' === self.options.side) ? 'ui-corner-tr' : '')
		.addClass(('right' === self.options.side || 'top' === self.options.side) ? 'ui-corner-bl' : '')
		.addClass(('right' === self.options.side || 'bottom' === self.options.side) ? 'ui-corner-tl' : '')
		.css('position', 'absolute')
		.css(self.options.origin,0)
		.css(
			(  'left' === self.options.side ? 'right' :
			( 'right' === self.options.side ? 'left'  :
			(   'top' === self.options.side ? 'bottom':
			('bottom' === self.options.side ? 'top' : 'left'))))
			, '-18px'
		)
		.click(function(){

			if( $drawer.data('ui.drawer.expanded') ){
				self._push();
			}
			else {
				self._pull();
			}

		});

/*
if( 0 < $contents.children().first().filter('h1, h2, h3').size() )
{
	var head_text;
	if( $contents.has('h1') ){
		head_text = $contents.find('h1').text();
	}
	else if( $contents.has('h2') ){
		head_text = $contents.find('h2').text();
	}
	else if( $contents.has('h3') ){
		head_text = $contents.find('h3').text();
	}
alert(head_text);
	$handle.css(self.options.side, '-1px').text(head_text);
}
*/
$drawer.data('ui.drawer.expanded', self.options.startOpen);

self._push(0);
if( self.options.startOpen ){
	self.pull();
}

/*
$drawer.draggable({
	handle:		'.ui-drawer-move',
	snap:		'body',
	snapMode:	'inner',
	start: function(){

		//$moveIcon.removeClass('ui-state-default').addClass('ui-state-active');


$handleIcon	.addClass('ui-icon ui-icon-gear')
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

		},

		_push: function( time ){
			this.element.animate(((  'left' === this.options.side) ? {  left: -2 - 1 * this.element.width()  } :
					(( 'right' === this.options.side) ? { right: -2 - 1 * this.element.width()  } :
					((   'top' === this.options.side) ? {   top: -2 - 1 * this.element.height() } :
					(('bottom' === this.options.side) ? {bottom: -2 - 1 * this.element.height() } : {}))))
					, time);
			this.element.data('ui.drawer.expanded', false);
		},

		_pull: function( time ){
			this.element.animate(((  'left' === this.options.side) ? {  left: -1 } :
					(( 'right' === this.options.side) ? { right: -1 } :
					((   'top' === this.options.side) ? {   top: -1 } :
					(('bottom' === this.options.side) ? {bottom: -1 } : {}))))
					, time);
			this.element.data('ui.drawer.expanded', true);
		},

		push: function(){
			this._push(500);
		},

		pull: function(){
			this._pull(500);
		},

		_setOption: function( key, value ){

			switch( key ) {
				case "position":
					break;
			}

			this._super( "_setOption", key, value );

		}

	});
})(jQuery);
