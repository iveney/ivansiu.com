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
		}
	}
});

MathJax.Hub.Queue(function() {
	var all = MathJax.Hub.getAllJax(), i;
	for(i=0; i < all.length; i += 1) {
		all[i].SourceElement().parentNode.className += ' has-jax';
	}
});

MathJax.Ajax.loadComplete("http://blog.ivansiu.com/javascripts/MathJaxLocal.js");
