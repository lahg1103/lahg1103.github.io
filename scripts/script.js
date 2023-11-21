document.addEventListener('DOMContentLoaded', () => {
  const stackButtons = Array.from(document.querySelectorAll('.tech'));
  const projects = Array.from(document.querySelectorAll('.project'));
  const activeStacks = new Set();

  function showProject(project) {
    project.classList.remove('hide');
  }

  function inactivateButton(button) {
    activeStacks.delete(button.id);
    if (activeStacks.size < 1) {
      showAll();
      stackButtons[0].classList.add('active');
    }
  }

  function activateButton(button) {
    activeStacks.add(button.id);
  }

  function showAll() {
    activateButton(stackButtons[0]);
    stackButtons.slice(1).forEach((button) => {
      inactivateButton(button);
      button.classList.remove('active');
    });
    projects.forEach(showProject);
  }

  function filterProject() {
    const projectStacks = new Map();
    projects.forEach((project) => {
      project.classList.add('hide');
      projectStacks.set(project, project.dataset.stack.toLowerCase().split(', '));
    });

    for (const [project, value] of projectStacks) {
      if (activeStacks.has('showall') || [...activeStacks].some((stack) => value.includes(stack))) {
        showProject(project);
      }
    }
  }

  stackButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activateButton(button);

      if (button.id === 'showall') {
        showAll();
        activeStacks.clear();
        activeStacks.add(button.id);
      } else {
        stackButtons[0].classList.remove('active');
        inactivateButton(stackButtons[0]);
      }

      button.classList.toggle('active');
      if (!button.classList.contains('active')) {
        inactivateButton(button);
      }
      filterProject();
    });
  });

  var TxtType = function(el, toRotate, timing) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.timing = parseInt(timing, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.timing;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-descriptors');
        var period = elements[i].getAttribute('data-timing');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #333}";
    document.body.appendChild(css);
});
