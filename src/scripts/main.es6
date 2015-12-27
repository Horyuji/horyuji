
class Comment {
  constructor(name) {
    this.name = name;
  }

  show() {
    return `Wellcome ${this.name} !`;
  }
}

$('.contents').text(`${new Comment('Jhone').show()} Start Application`);
