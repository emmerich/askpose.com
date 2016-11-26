var $options = $('.options')

function changeOptions() {
  $options.each(function() {
    var $el = $(this);
    var selected = Number($el.attr('data-selected'));
    var options = $el.attr('data-options').split(',');
    var next = selected + 1 >= options.length ? 0 : selected + 1;

    $el
      .css({
        'opacity': '0'
      })
      .text(options[next])
      .animate({
        'opacity': '1'
      })
      .attr('data-selected', next)
  })
}

setInterval(changeOptions, 3000)
