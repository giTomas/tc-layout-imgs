
  function createView(el, tmp, anim, src) {
    'use strict';
    if (typeof tmp === 'undefined') {
      console.log(tmp);
      return;
    }
    const modal = document.getElementById(el);
    modal.innerHTML = tmp;
    return anim(modal, src);
  }


  function profileHandler(e) {   //promise???
    'use strict';
    const src = e.currentTarget;
    const [type, id] = src.dataset.prot.split('.');
    //const config = {
      // arr: data[type],
      // data: id
    // };
    // const createMarkup = compose(findValue, Tmps.markupProfiles);
    //console.log(type + ',' + id);
    // const profile = findValueByIndex(data.profiles, 'id', src.dataset.id);
    // const profile = findValue(data[type], 'id', id);
    // const profile = findValue({arr: data[type], data: id});
    // const markup = Tmps.markupProfiles(profile);
    // const markup = createMarkup({arr: data[type], data: id});
    // addModal('js-modal', markup, anim_modal, src);
    createView('js-modal', createMarkup({arr: data[type], data: id}), anim_modal, src);
  }

  const modal = document.querySelectorAll('.js-modal');

  forEachEl(modal, profileHandler);
