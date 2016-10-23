
  function animation_1(modal){
      const tl = new TimelineLite();
      tl.to(modal, 0.1, {display: 'block'})
        .to(modal, 0.5, {backgroundColor: 'rgba(0, 0, 0, 0.9)', ease: Power1.easeOut} )
        .to(document.getElementById('js-profile'), 0.6, { left: '50%', autoAlpha: 1, force3D: true, ease: Power1.easeOut});

      document.getElementById('js-modal-close').addEventListener('click', function() {
          tl.to(document.getElementById('js-profile'), 0.5, { left: '54%', autoAlpha: 0, force3D: true, ease: Power1.easeIn})
            .to(modal, 0.5, {backgroundColor: 'rgba(0, 0, 0, 0)', ease: Power1.easeIn})
            .to(modal, 0.5, {clearProps: 'all'});
      }, false);
  }

  function animation_2(modal, src){
    const tl = new TimelineLite();
    src.classList.add('member-is-clicked');

    tl.to(modal, 0.1, {display: 'block'})
      .to(modal, 0.5, {backgroundColor: 'rgba(128, 128, 128, 0.9)'} )
      .to(document.getElementById('js-profile'), 0.6, { left: '50%', autoAlpha: 1, force3D: true, ease: Power1.easeOut});
      // .to(profile, 0.6, { autoAlpha: 1, force3D: true, ease: Power1.easeOut});

    // document.getElementById('js-modal-close').addEventListener('click', function() {
    document.getElementById('js-modal-close').addEventListener('click', function() {
      tl.to(document.getElementById('js-profile'), 0.5, { left: '54%', autoAlpha: 0, force3D: true, ease: Power1.easeIn})
        .to(modal, 0.5, {backgroundColor: 'rgba(0, 0, 0, 0)'})
        .to(modal, 0, {clearProps: 'all'});

    setTimeout(()=> src.classList.remove('member-is-clicked'), 900)
    }, false);
  }

  function addModal(el, tmp, anim) {
    if (typeof tmp === 'undefined') {
      console.log(tmp);
      return;
    }
    const modal = document.getElementById(el);
    modal.innerHTML = tmp;
    anim(modal);
  };

  function addModal2(el, tmp, anim, src) {
    if (typeof tmp === 'undefined') {
      console.log(tmp);
      return;
    }
    const modal = document.getElementById(el);
    modal.innerHTML = tmp;
    return anim(modal, src);
  };

  function profileHandler(e) {   //promise???
    const profile = findData(data.profiles, 'id', e.currentTarget.dataset.id);
    const markup = Tmps.markupProfiles(profile);
    addModal('js-modal', markup, animation_1);
  }

  function profileHandler_2(e) {   //promise???
    const src = e.currentTarget;
    // const profile = findValueByIndex(profiles, 'id', src.dataset.member);
    const profile = findValue(data.profiles, 'id', src.dataset.id);
    const markup = Tmps.markupProfiles(profile);

    addModal2('js-modal', markup, animation_2, src);
  }

  const members = document.querySelectorAll('.js-member');
  const members_2 = document.querySelectorAll('.js-member-anim');
  const modal = document.querySelectorAll('.js-modal');

  forEachEl(members, profileHandler);
  forEachEl(members_2, profileHandler_2);
  forEachEl(modal, profileHandler_2);
