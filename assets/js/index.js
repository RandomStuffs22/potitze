/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        $('article.post section p:first-child img:nth-of-type(1)').each(function() {
          var img = $(this);
          img.addClass('featured');
          img.parents('.post').prepend(img);
        });
    });

}(jQuery));
