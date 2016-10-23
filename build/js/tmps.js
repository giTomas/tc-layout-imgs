'use strict';

var Tmps = function () {

  var _markupProfiles = function _markupProfiles(obj) {
    if (!isObject(obj)) {
      console.log('Invalid object');
      return obj;
    }
    //const {id, name, text} = obj;
    // const img = 'images/' + id + '.jpg';
    return '\n        <div id=\'js-profile\' class=\'c-profile\'>\n            <div class=\'l-col-1-2\'>\n              <figure id=\'js-profile-figure\' class=c-profile__figure>\n                <img src=\'images/' + obj.id + '.jpg\' alt=\'' + obj.name + '\'>\n              </figure>\n                <h2 id=\'js-profile-name\' class=\'c-profile__name\'>\n                  ' + obj.name + '\n                </h2>\n            </div>\n            <div class=\'l-col-2-2\'>\n              <article id=\'js-profile-text\' class=\'c-profile__text\'>\n                <p>' + obj.text + '</p>\n              </article>\n            </div>\n            <div id=\'js-modal-close\' class=\'c-modal__close\'>\n              <svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">\n                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\n                <path d="M0 0h24v24H0z" fill="none"></path>\n              </svg>\n            </div>\n        </div>\n        ';
  };

  return {
    markupProfiles: _markupProfiles
  };
}();