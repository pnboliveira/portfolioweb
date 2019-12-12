$(document).ready(function () {
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
    set_twitch_stream_status();
    
    function set_twitch_stream_status() {
          $.ajax({
              type: 'GET',
              url: 'https://api.twitch.tv/helix/streams',
              dataType: 'json',
              headers: {
                  'Client-ID': ' '
              },
              data: {
                  'user_id': '2158121'
              },
              error: set_twitch_offline,
              success: function (response) {
                  if (!response || !response['data'] || response['data'].length == 0) {
                      set_twitch_offline();
                      return;
                  }
                  if (isMobile.any()) {
                      set_twitch_stream_status_mobile(response['data'][0]['game_id']);
                  } else {
                      set_twitch_stream_status_cont(response['data'][0]['game_id']);
                  }

              }
          });
      }
      
      

      function set_twitch_stream_status_cont(game_id) {
          $.ajax({
              type: 'GET',
              url: 'https://api.twitch.tv/helix/games',
              dataType: 'json',
              headers: {
                  'Client-ID': ' '
              },
              data: {
                  'id': game_id
              },
              error: set_twitch_offline,
              success: function (response) {
                  if (!response || !response['data'] || response['data'].length == 0) {
                      set_twitch_offline();
                      return;
                  }

                  jQuery('.stream').append('<div class="container"><div class="row"><div class="col s12 m12 l12"><h3><b>Live Stream (playing ',response['data'][0]['name'] ,')</b></h3><hr /></div></div><div><div class="row center"><div class="col m8 l8 hide-on-small-only"><div class="video-container"><iframe src="https://player.twitch.tv/?channel=dwang" frameborder="0" height="378" width="100%"></iframe></div></div><div class="col m4 l4 hide-on-small-only"><iframe frameborder="0" scrolling="no" id="dwang" src="https://www.twitch.tv/embed/dwang/chat" height="490" width="100%"></iframe></div></div></div></div>')
              }
          })
      }

      function set_twitch_stream_status_mobile(game_id) {
          $.ajax({
              type: 'GET',
              url: 'https://api.twitch.tv/helix/games',
              dataType: 'json',
              headers: {
                  'Client-ID': ' '
              },
              data: {
                  'id': game_id
              },
              error: set_twitch_offline,
              success: function (response) {
                  if (!response || !response['data'] || response['data'].length == 0) {
                      set_twitch_offline();
                      return;
                  }

                  jQuery('.stream').append('<div class="container"><div class="row"><div class="col s12 m12 l12"><h3><b>Live Stream (playing ',response['data'][0]['name'] ,')</b></h3><hr /></div></div><div class="section scrollspy"><div class="row center"><div class="col s12"><div class="video-container"><iframe src="https://player.twitch.tv/?channel=dwang" frameborder="0" height="378" width="100%"></iframe></div></div><div class="col s12">&nbsp;</div><div class="col s12"><h4>Join in the conversation over at <a href="https://www.twitch.tv/dwang" target="_blank">my Twitch page!</a></h4></div></div></div></div>')
              }
          })
      }
    
    function set_twitch_offline() {
          return;
      }

    $('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
    $('.materialboxed').materialbox();
    $('.modal-trigger').leanModal();
    $(".fancybox").fancybox({
        maxWidth: 720,
        maxHeight: 480,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });

    //save known languages
    var known = {
        en: true,
        pt: true
    };

    // Browser language check, and make it default to English for more exposure
    var lang = (navigator.language || navigator.userLanguage || 'en').substr(0, 2);
    if (!known[lang])
        lang = 'en';

    // Search <div>s with an 'article' class & lang attribute that's equal to the variable 'lang' and make them visible
    $('div.article[lang=' + lang + ']').show();

    // Search <div>s with an 'article' class & lang attribute that are not equal to the variable 'lang' and hide them
    $('div.article[lang!=' + lang + ']').hide();

    var $articles = $('.article');

    $(".langButton").click(function () {
        var language = $(this).attr("data-language");
        $articles.hide(); // hides them out
        $("." + language).show(); // Shows the ones attribuited to the browser language.
    });


    var scroll_start = 0;
    var startchange = $('#banner');
    var offset = startchange.offset();
    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
            $('.navbar-color').css('background-color', 'rgba(66, 179, 228,1.0)');
        } else {
            $('.navbar-color').css('background-color', 'transparent');
        }
    });




    var animationDelay = 2500,
        //loading bar effect
        barAnimationDelay = 3800,
        barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
        //letters effect
        lettersDelay = 50,
        //type effect
        typeLettersDelay = 150,
        selectionDuration = 500,
        typeAnimationDelay = selectionDuration + 800,
        //clip effect 
        revealDuration = 600,
        revealAnimationDelay = 1500;

    initHeadline();


    function initHeadline() {
        singleLetters($('.cd-headline.letters').find('b'));
        animateHeadline($('.cd-headline'));
    }

    function singleLetters($words) {
        $words.each(function () {
            var word = $(this),
                letters = word.text().split(''),
                selected = word.hasClass('is-visible');
            for (i in letters) {
                if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
            }
            var newLetters = letters.join('');
            word.html(newLetters).css('opacity', 1);
        });
    }

    function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function () {
            var headline = $(this);

            if (headline.hasClass('loading-bar')) {
                duration = barAnimationDelay;
                setTimeout(function () {
                    headline.find('.cd-words-wrapper').addClass('is-loading')
                }, barWaiting);
            } else if (headline.hasClass('clip')) {
                var spanWrapper = headline.find('.cd-words-wrapper'),
                    newWidth = spanWrapper.width() + 10
                spanWrapper.css('width', newWidth);
            } else if (!headline.hasClass('type')) {
                //assign to .cd-words-wrapper the width of its longest word
                var words = headline.find('.cd-words-wrapper b'),
                    width = 0;
                words.each(function () {
                    var wordWidth = $(this).width();
                    if (wordWidth > width) width = wordWidth;
                });
                headline.find('.cd-words-wrapper').css('width', width);
            };

            //trigger animation
            setTimeout(function () {
                hideWord(headline.find('.is-visible').eq(0))
            }, duration);
        });
    }

    function hideWord($word) {
        var nextWord = takeNext($word);

        if ($word.parents('.cd-headline').hasClass('type')) {
            var parentSpan = $word.parent('.cd-words-wrapper');
            parentSpan.addClass('selected').removeClass('waiting');
            setTimeout(function () {
                parentSpan.removeClass('selected');
                $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
            }, selectionDuration);
            setTimeout(function () {
                showWord(nextWord, typeLettersDelay)
            }, typeAnimationDelay);

        } else if ($word.parents('.cd-headline').hasClass('letters')) {
            var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
            hideLetter($word.find('b').eq(0), $word, bool, lettersDelay);
            showLetter(nextWord.find('b').eq(0), nextWord, bool, lettersDelay);

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({
                width: '2px'
            }, revealDuration, function () {
                switchWord($word, nextWord);
                showWord(nextWord);
            });

        } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
            $word.parents('.cd-words-wrapper').removeClass('is-loading');
            switchWord($word, nextWord);
            setTimeout(function () {
                hideWord(nextWord)
            }, barAnimationDelay);
            setTimeout(function () {
                $word.parents('.cd-words-wrapper').addClass('is-loading')
            }, barWaiting);

        } else {
            switchWord($word, nextWord);
            setTimeout(function () {
                hideWord(nextWord)
            }, animationDelay);
        }
    }

    function showWord($word, $duration) {
        if ($word.parents('.cd-headline').hasClass('type')) {
            showLetter($word.find('i').eq(0), $word, false, $duration);
            $word.addClass('is-visible').removeClass('is-hidden');

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({
                'width': $word.width() + 10
            }, revealDuration, function () {
                setTimeout(function () {
                    hideWord($word)
                }, revealAnimationDelay);
            });
        }
    }

    function hideLetter($letter, $word, $bool, $duration) {
        $letter.removeClass('in').addClass('out');

        if (!$letter.is(':last-child')) {
            setTimeout(function () {
                hideLetter($letter.next(), $word, $bool, $duration);
            }, $duration);
        } else if ($bool) {
            setTimeout(function () {
                hideWord(takeNext($word))
            }, animationDelay);
        }

        if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
            var nextWord = takeNext($word);
            switchWord($word, nextWord);
        }
    }

    function showLetter($letter, $word, $bool, $duration) {
        $letter.addClass('in').removeClass('out');

        if (!$letter.is(':last-child')) {
            setTimeout(function () {
                showLetter($letter.next(), $word, $bool, $duration);
            }, $duration);
        } else {
            if ($word.parents('.cd-headline').hasClass('type')) {
                setTimeout(function () {
                    $word.parents('.cd-words-wrapper').addClass('waiting');
                }, 200);
            }
            if (!$bool) {
                setTimeout(function () {
                    hideWord($word)
                }, animationDelay)
            }
        }
    }

    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }
});
