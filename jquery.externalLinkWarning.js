;(function($) {
    
    $.fn.externalLinkWarning = function() {
        $('a').on('click', function(e) {
            // create temporary anchor
            var tmpLink = document.createElement('a');
            tmpLink.href = this.href;
            
            // check if anchor host matches top window host
            var externalLink = (tmpLink.hostname !== top.location.hostname);
            
            // if this is an external link, show confirmation dialog
            if (externalLink) {
                return confirm('This link will take you to an external website. Proceed with caution.');
            }
            
            // if we're here just return true to allow propagation as normal
            return true;
        });
    };
    
})(jQuery);
