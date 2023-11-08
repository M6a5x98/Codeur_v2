const url = "http://localhost:5000/discorddashboard";

let request = {
  addCommand: new XMLHttpRequest().open("PATCH", url, true),
  moderation: {
    forbinenWords: {
      add: new XMLHttpRequest().open("PUT", url, true),
      remove: new XMLHttpRequest().open("DELETE", url, true),
      addCategory : new XMLHttpRequest().open("PATCH", url, true),
      removeCategory: new XMLHttpRequest().open("DELETE", url, true)
    },
  },
};
