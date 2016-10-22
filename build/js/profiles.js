'use strict';

var profiles = [{
  id: 'maros-ondrejka',
  name: 'Maroš Ondrejka',
  text: 'Has facer ornatus ea, ex stet meis fuisset pro, mel vitae euismod an. Te veritus iracundia hendrerit vel, ea sea tractatos definitionem. Id mea exerci consequat gloriatur, in liber vocent tacimates vim. Exerci referrentur cum ut, duo ne quod altera. Quot singulis cum id. Nam id numquam facilisi consequuntur, ut eam oratio referrentur, recteque incorrupte has te. Viris tantas torquatos ut eam, ea usu melius copiosae imperdiet.Cu pro causae audiam minimum, ipsum vivendo id est. Paulo commodo nonumes sed ea, ut sit aliquip posidonium. Brute offendit consequat sed cu. Quando soleat disputando in duo, ex mazim civibus theophrastus pro. Libris iisque ex nec, quo quaeque aliquid torquatos id, duo dolore partem no. Eos esse definiebas ut, no sumo nusquam pertinacia mea, cu inani commodo deleniti ius.'
}, {
  id: 'albert-russ',
  name: 'Albert Russ',
  text: 'Omnesque intellegebat conclusionemque pri ex, id nec veniam ubique. Harum soleat neglegentur mea in, ei has natum quando. Sumo altera est et, utamur utroque recteque ut vis. Falli salutandi ius in, pro no minimum elaboraret. Mei ipsum legere repudiandae in, mei ea reque elitr.Cu pro causae audiam minimum, ipsum vivendo id est. Paulo commodo nonumes sed ea, ut sit aliquip posidonium. Brute offendit consequat sed cu. Quando soleat disputando in duo, ex mazim civibus theophrastus pro. Libris iisque ex nec, quo quaeque aliquid torquatos id, duo dolore partem no. Eos esse definiebas ut, no sumo nusquam pertinacia mea, cu inani commodo deleniti ius.'
}, {
  id: 'tomas-kosegi',
  name: 'Tomáš Kösegi',
  text: 'Has facer ornatus ea, ex stet meis fuisset pro, mel vitae euismod an. Te veritus iracundia hendrerit vel, ea sea tractatos definitionem. Id mea exerci consequat gloriatur, in liber vocent tacimates vim. Exerci referrentur cum ut, duo ne quod altera. Quot singulis cum id. Nam id numquam facilisi consequuntur, ut eam oratio referrentur, recteque incorrupte has te. Viris tantas torquatos ut eam, ea usu melius copiosae imperdiet.Cu pro causae audiam minimum, ipsum vivendo id est. Paulo commodo nonumes sed ea, ut sit aliquip posidonium. Brute offendit consequat sed cu. Quando soleat disputando in duo, ex mazim civibus theophrastus pro. Libris iisque ex nec, quo quaeque aliquid torquatos id, duo dolore partem no. Eos esse definiebas ut, no sumo nusquam pertinacia mea, cu inani commodo deleniti ius.'
}];

function createMarkup(obj) {
  if (!isObject(obj)) {
    console.log('Invalid object');
    return obj;
  }

  var id = obj.id;
  var name = obj.name;
  var text = obj.text;

  var img = 'images/' + id + '.jpg';

  return '\n          <div id=\'js-profile\' class=\'c-profile\'>\n              <div class=\'l-col-1-2\'>\n                <figure id=\'js-profile-figure\' class=c-profile__figure>\n                  <img src=\'' + img + '\' alt=\'' + name + '\'>\n                </figure>\n                  <h2 id=\'js-profile-name\' class=\'c-profile__name\'>\n                    ' + name + '\n                  </h2>\n              </div>\n              <div class=\'l-col-2-2\'>\n                <article id=\'js-profile-text\' class=\'c-profile__text\'>\n                  <p>' + text + '</p>\n                </article>\n              </div>\n              <div id=\'js-modal-close\' class=\'c-modal__close\'>\n                <svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\n                  <path d="M0 0h24v24H0z" fill="none"></path>\n                </svg>\n              </div>\n          </div>\n          ';
};

function animation_1(modal) {
  var tl = new TimelineLite();
  tl.to(modal, 0.1, { display: 'block' }).to(modal, 0.5, { backgroundColor: 'rgba(0, 0, 0, 0.9)', ease: Power1.easeOut }).to(document.getElementById('js-profile'), 0.6, { left: '50%', autoAlpha: 1, force3D: true, ease: Power1.easeOut });

  document.getElementById('js-modal-close').addEventListener('click', function () {
    tl.to(document.getElementById('js-profile'), 0.5, { left: '54%', autoAlpha: 0, force3D: true, ease: Power1.easeIn }).to(modal, 0.5, { backgroundColor: 'rgba(0, 0, 0, 0)', ease: Power1.easeIn }).to(modal, 0.5, { clearProps: 'all' });
  }, false);
}

function animation_2(modal, src, tmp) {
  var tl = new TimelineLite();
  modal.innerHTML = tmp;
  src.classList.add('member-is-clicked');

  tl.to(modal, 0.1, { display: 'block' }).to(modal, 0.5, { backgroundColor: 'rgba(128, 128, 128, 0.9)' }).to(document.getElementById('js-profile'), 0.6, { left: '50%', autoAlpha: 1, force3D: true, ease: Power1.easeOut });
  // .to(profile, 0.6, { autoAlpha: 1, force3D: true, ease: Power1.easeOut});

  // document.getElementById('js-modal-close').addEventListener('click', function() {
  document.getElementById('js-modal-close').addEventListener('click', function () {
    tl.to(document.getElementById('js-profile'), 0.5, { left: '54%', autoAlpha: 0, force3D: true, ease: Power1.easeIn }).to(modal, 0.5, { backgroundColor: 'rgba(0, 0, 0, 0)' }).to(modal, 0, { clearProps: 'all' });

    setTimeout(function () {
      return src.classList.remove('member-is-clicked');
    }, 900);
  }, false);
}

function addModal(el, tmp, anim) {
  if (tmp === 'undefined') {
    return;
  }
  var modal = document.getElementById(el);
  modal.innerHTML = tmp;
  anim(modal);
};

function addModal2(el, tmp, anim, src) {
  if (typeof tmp === 'undefined') {
    return;
  }
  var modal = document.getElementById(el);
  return anim(modal, src, tmp);
};

function profileHandler(e) {
  //promise???
  var profile = findData(profiles, 'id', e.currentTarget.dataset.member);
  var markup = createMarkup(profile);
  addModal('js-modal', markup, animation_1);
}

function profileHandler_2(e) {
  //promise???
  var src = e.currentTarget;
  // const profile = findValueByIndex(profiles, 'id', src.dataset.member);
  var profile = findValue(profiles, 'id', src.dataset.member);
  var markup = createMarkup(profile);
  addModal2('js-modal', markup, animation_2, src);
}

var members = document.querySelectorAll('.js-member');
var members_2 = document.querySelectorAll('.js-member-anim');

forEachEl(members, profileHandler);
forEachEl(members_2, profileHandler_2);