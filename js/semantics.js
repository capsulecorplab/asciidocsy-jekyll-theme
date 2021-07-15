$( document ).ready(function() {
  /**
  * controls the
  * term-popover effect
  **/
  if ($('.term').length) { // nothing happens if there are no terms on the page
    const termsDict = [{"term":"Array","slug":"array","desc":"A serialized (enumerable) data onbject type that hosts lists of scalar or enumerable objects. Sometimes capitalized along with other data object types.","cats":["data-types"]},{"term":"AsciiDoc","slug":"asciidoc","desc":"A programmatic markup language for structuring _and_ formatting all kinds of technical writing for conversion to various rich-text and other formats.","xref":null,"also":["markup","markdown"],"refs":[{"text":null,"href":null}]},{"term":"flat files","slug":"flat-files","desc":"Files containing only ASCII or UTF-8 text.","also":["binary-files"]},{"term":"inline semantics","slug":"inline-semantics","desc":"Stylized text or inserted icons meant to tag specific content with a purpose or kind.","xref":"docs/style/asciidoc/semantics"},{"term":"lightweight markup","slug":"markup-lightweight","desc":"Tag-free plaintext syntax formats like AsciiDoc, Markdown, reStructuredText, lwDITA, and most Wiki markups; often an abstraction of an XML-tagged format (DocBook, HTML, DITA).","cats":["markup"]},{"term":"Markdown","slug":"markdown","desc":"A lightweight markup that shorthands a limited number of non-semantic HTML elements, which many find to be adequate for technical documentation."},{"term":"markup","slug":"markup","desc":"Plaintext syntax intended to designate text with formatting, semantic, or functional intent, to be parsed into rich-text or other more-complex output.\n","also":["lightweight"]},{"term":"data object","slug":"data-object","desc":"An instance of any data type.\nA string is a data object of the String data type.\n"},{"term":"data type","slug":"data-type","desc":"A classification of data objects based on form.\n"},{"term":"open block (AsciiDoc)","slug":"open-block-asciidoc","desc":"A non-semantic container element that can be assigned block options and contain other block elements (except other open blocks).","refs":[{"href":"https://docs.asciidoctor.org/asciidoc/latest/blocks/open-blocks/"}]},{"term":"scalar","slug":"scalar","desc":"A simple, non-enumerable data type such as String, Number, or Boolean."},{"term":"inclusion","slug":"inclusion","desc":"The process of embedding code from another file into the current file for processing.\nKnown as \"`transclusion`\" in some languages, invoked in AsciiDoc using the `include::[]` macro and in Liquid using the `{% include %}` tag.\n"},{"term":"versioning","slug":"versioning","desc":"Versioning is the division of a subject according to how it is\n"}]
    const icon      = 'fa fa-info-circle'
    var termsList   = []
    /**
    Scan content for terms and insert data- attrs for
     popovers
    **/
    const asciidoctor = Asciidoctor();
    $('.term').each(function() {
      var classes = $(this).attr('class').split(' ');
      if (classes.length > 1) {
        var theTerm = termsDict.find(t => t.slug == classes[1]);
      } else {
        var theTerm = termsDict.find(t => t.slug == $(this).html().toLowerCase().replace(' ','-'));
      };
      if (typeof theTerm !== 'undefined') {
        if (!termsList.find(t => t.slug == theTerm.slug)) {
          termsList.push(theTerm);
        };
  
    
        $(this).append('<i class="icon ' + icon + ' fa-rotate-15">');
  
        $(this).attr('data-toggle', 'popover');
        $(this).attr('data-title', theTerm['term']);
        $(this).attr('data-content', asciidoctor.convert(theTerm['desc'], {doctype: 'inline'}));
  
        $(this).hover(
          function() {
            $(this).children('i').addClass('fa-spin')
          },
          function() {
            $(this).children('i').removeClass('fa-spin')
          });
  
      } else {
        $(this).attr('data-error', 'No term entry found');
      };
    });
    var termsListHTML = '<div class="h5 nav-title terms-nav">Terms in this topic:</div><ul class="page-terms-list nav-list">'
    termsList.forEach(function(item){
      termsListHTML += '<li class="list-item nav-item"><a href="/glossary/#' + item.slug + '">' + item.term + '</li>'
      });
    termsListHTML += '</ul>';
    $('#terms-listing').prepend(termsListHTML);
  };
});
