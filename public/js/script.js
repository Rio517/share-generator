/* Author: Mario Olivio Flores @ Rising TIde Interactive 
lots of borrowed js from Jim Pugh

*/

function displayExample(val){
  var samples = { web_link: '<a href="#">Example website link</a>',
                  email_link: '<a href="#">Example email link</a>',
                  button: '<img src="http://sphotos.ak.fbcdn.net/hphotos-ak-ash2/hs329.ash2/60892_444262393552_19292868552_5172535_910697_n.jpg" />',
                  icon_link: '<img src="http://sphotos.ak.fbcdn.net/hphotos-ak-snc4/hs606.snc4/58624_444262413552_19292868552_5172537_7739429_n.jpg" />',
                  icon: '<img src="http://sphotos.ak.fbcdn.net/hphotos-ak-ash2/hs329.ash2/60927_444262408552_19292868552_5172536_687291_n.jpg" />'}
  $('#sample_link').html(samples[val]);
}

$(document).ready(function(){
  displayExample('web_link');
  $('#fb_type').change(function(){
    displayExample($(this).val());
  });
});

  function shareFB() {
    var title = $('#fb_title').val();
    title = title.replace(/"/g,'\\"');
    var desc = $('#fb_description').val();
    desc = desc.replace(/"/g,'\\"');
    var img = $('#fb_img').val();
    var url = $('#fb_url').val();
    var type = $('#fb_type').val();
    var site_name = $('#fb_site_name').val();
    var content_type = $('#fb_content_type').val();
    var site_name = $('#fb_site_name').val();  
    var meta = '<meta property="og:title" content="' + title + '" />\n'
        if(content_type != ''){ meta += '<meta property="og:site_name" content="'+site_name+'">\n' };
        meta += '<meta property="og:description" content="' + desc + '" />\n'
        if(img != ''){meta += '<meta property="og:image" content="' + img + '" />\n'};
        meta += '<meta property="og:site_name" content="'+site_name+'">';
        if(content_type != ''){ meta += '<meta property="og:type" content="'+content_type+'">\n' };
    var encoded_url = encodeURIComponent(url);
    
    switch (type){
      case 'web_link':
        var link = '<' + 'script>\nfunction fbs_click()\n{u="' + url + '";t="' + title + '";window.open(\'http://www.facebook.com/sharer.php?u=\'+encodeURIComponent(u)+\'&t=\'+encodeURIComponent(t),\'sharer\',\'toolbar=0,status=0,width=626,height=436\');return false;}\n</' + 'script>';
        link += '\n<a class="fb_link" onclick="return fbs_click()" href="#">INSERT LINK CONTENTS HERE</a>';
        break;
      case 'email_link':
        var link = 'http://www.facebook.com/sharer.php?u='+encoded_url+'&t='+encodeURIComponent(title);
        break;
      default:
        var link = '<a name="fb_share" type="'+type+'" share_url="'+encoded_url+'">Link Text</a>';
        link += '\n\n<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>';
    }
    
    $('#fb_metatags').val(meta);
    $('#fb_link').val(link);
  }
  
  function shareTW() {
    var tweet = $('#tw_tweet').val(), arr =[], intent = $('#twType').val();
    tweet = tweet.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[.=A-Za-z0-9-_:%&\?\/]*[=A-Za-z0-9-_:%&\?\/]/g, function(url) {
      arr.push(url); return "";
    });
    tweet = escape(tweet);
    tweet = tweet.replace(/%20/g,'+');
    var link = '<a class="twitter_link" href="http://twitter.com/'+((intent=="1")?'intent/tweet':'share')+'?text=' + tweet + '&url='+escape(arr[0])+'" target="_blank">INSERT LINK CONTENTS HERE</a>';
    $('#tw_link').val(link);
  }
  
  function shareEmail() {
    var subject = $('#email_subject').val();
    var body = $('#email_body').val();
    var link = '<a class="email_link" target="_blank" href="mailto:?subject=' + escape(subject) + '&body=' + escape(body) + '">INSERT LINK CONTENTS HERE</a>';
    $('#email_link').val(link);
  }
  
  function shareBuzz() {
    var url = $('#buzz_url').val();
    var title = $('#buzz_title').val();
    var snippet = $('#buzz_snippet').val();
    var src = $('#buzz_src').val();
    var homepage = $('#buzz_homepage').val();
    title = escape(title);
    title = title.replace(/%20/g,'+');
    snippet = escape(snippet);
    snippet = snippet.replace(/%20/g,'+');
    var link = '<a href="http://www.google.com/reader/link?url=' + url + '&title=' + title + '&snippet=' + snippet + '&srcUrl=' + homepage + '&srcTitle=' + src + '" target="_blank">INSERT LINK CONTENTS HERE</a>';
    $('#buzz_link').val(link);
  }