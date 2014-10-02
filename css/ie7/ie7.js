/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ihma-Icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-comercio': '&#xe601;',
		'icon-objetivos': '&#xe602;',
		'icon-proyectos': '&#xe605;',
		'icon-home': '&#xe600;',
		'icon-facebook': '&#xe606;',
		'icon-twitter': '&#xe607;',
		'icon-feed': '&#xe608;',
		'icon-html5': '&#xe609;',
		'icon-css3': '&#xe60a;',
		'icon-key': '&#xe60b;',
		'icon-settings': '&#xe604;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
