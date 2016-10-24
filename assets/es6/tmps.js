const Tmps = (function(){

  const _markupProfiles = (obj) => {
    if (!isObject(obj)) {
        console.log('Invalid object');
        return obj;
    }
    //const {id, name, text} = obj;
    // const img = 'images/' + id + '.jpg';
    return `
          <div id='js-profile' class='c-profile'>
              <div class='l-g-col-1-2'>
                <figure class=c-profile__figure>
                  <img src='images/${obj.id}.jpg' alt='${obj.name}'>
                </figure>
                  <h2 class='c-profile__name'>
                    ${obj.name}
                  </h2>
              </div>
              <div class='l-g-col-2-2'>
                  <p class='c-text'>${obj.text}</p>
              </div>
              <div id='js-modal-close' class='c-modal__close'>
                <svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
              </div>
          </div>
          `;
  };

  return {
    markupProfiles: _markupProfiles
  };

})();
