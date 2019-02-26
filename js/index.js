// use this to copy code snippets or use your browser's console

matchInterests(event) {
  return event.keywords.some(word => this.interests.includes(word));
}
