skel.init({
	reset: 'full',
	breakpoints: {
		'global': {
			range: '*',
			href: 'css/style.css',
			lockViewport: true,
			viewport: 'minimal-ui'
		},
		'wide': {
			range: '-1680',
			href: 'css/style-wide.css'
		},
		'normal': {
			range: '-1280',
			href: 'css/style-normal.css'
		},
		'mobile': {
			range: '-640',
			href: 'css/style-mobile.css'
		},
		'mobilep': {
			range: '-360',
			href: 'css/style-mobilep.css'
		}
	}
});

// JavaScript Events
window.onload = () => {
	document.body.className = '';
}

// Hindre scrolling på touchskjermer
window.ontouchmove = () => {
	return false;
}

window.onorientationchange = () => {
	document.body.scrollTop = 0;
}