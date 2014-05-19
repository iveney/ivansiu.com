MathJax.Hub.Config({
	tex2jax: {
		inlineMath: [ ['$','$'], ["\\(","\\)"] ],
		displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
		skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
		processEscapes: true,
	},
	TeX: { 
		equationNumbers: { autoNumber: "AMS" },
		TagSide: "left",
		Macros: {
			reals: ['\\mathbb{R}'],
			norm: ['\\left\\lVert#1\\right\\rVert', 1],
			given: ['\\:#1\\vert\\:', 1],
			data: ['\\mathcal{D}'],
		}
	}
});

MathJax.Hub.Queue(function() {
	var all = MathJax.Hub.getAllJax(), i;
	for(i=0; i < all.length; i += 1) {
		all[i].SourceElement().parentNode.className += ' has-jax';
	}
});

MathJax.Ajax.loadComplete("/javascripts/MathJaxLocal.js");
