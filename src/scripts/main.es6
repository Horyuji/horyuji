class Comment {
  constructor(name) {
    this.name = name;
  }

  show() {
    return `Wellcome ${this.name} !`;
  }
}

const comment = new Comment('Jhone');

document.querySelector('.contents').innerHTML = `${comment.show()} Start Application`;
