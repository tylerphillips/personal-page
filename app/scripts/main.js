$(function () {
  $('.slide-list').wrap('<div class="slideshow"></div>');
  $('.slideshow').append('<img alt="" src="" /><div class="img-cap"></div>');
  $('.slide-list > li:first-child').addClass('active');
  $('.slideshow > img').each(function() {
    var $firstImg = $(this).siblings('.slide-list').find('li:first-child').children('img'),
        $firstImgSrc = $firstImg.attr('src'),
        $firstImgAlt = $firstImg.attr('alt');
    $(this).attr('src',$firstImgSrc);
    $(this).siblings('.img-cap').text($firstImgAlt);
  });
  $('.slide-list > li').click(function () {
    var $this = $(this),
        $lgImg = $this.parents('.slideshow').children('img'),
        $lgCap = $this.parents('.slideshow').children('.img-cap'),
        $whichImg = $this.children('img').attr('src'),
        $whichAlt = $this.children('img').attr('alt');
    $lgImg.attr('src', $whichImg);
    $lgImg.attr('alt', $whichAlt);
    $lgCap.text($whichAlt);
    $this.siblings('li').removeAttr('class');
    $this.addClass('active');
  });
});