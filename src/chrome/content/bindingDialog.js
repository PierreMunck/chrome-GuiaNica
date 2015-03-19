const Cc = Components.classes;
const Ci = Components.interfaces;

Components.utils.import("resource://xulschoolhello/common.js");

/**
 * XULSchoolChrome namespace.
 */
if ("undefined" == typeof(XULSchoolChrome)) {
  var XULSchoolChrome = {};
};


/**
 * Controls the binding test dialog.
 */
XULSchoolChrome.BindingDialog = {

  /**
   * Adds a new person to the list.
   * @param aEvent the event that triggered this action.
   */
  addPerson : function(aEvent) {
    let name = document.getElementById("xulschoolhello-person-name").value;
    let greeting =
      document.getElementById("xulschoolhello-person-greeting").value;
    let imageFile = document.getElementById("xulschoolhello-person-image").file;

    if ((0 < name.length) && (0 < greeting.length)) {
      let person = document.createElement("xshelloperson");
      let personList = document.getElementById("xulschoolhello-person-list");

      person.setAttribute("name", name);
      person.setAttribute("greeting", greeting);

      if (imageFile) {
        let imageURL =
          Cc["@mozilla.org/network/protocol;1?name=file"].
            getService(Ci.nsIFileProtocolHandler).
              getURLSpecFromFile(imageFile);

        person.setAttribute("image", imageURL);
      }

      personList.appendChild(person);
      window.sizeToContent();
    } else {
      // TODO: show error!
    }
  },

  /**
   * Opens the file selector window that allows the user to select an image to
   * set for a person.
   * @param aEvent the event that triggered this action.
   */
  chooseImage : function(aEvent) {
    let filePicker =
      Cc["@mozilla.org/filepicker;1"].createInstance(Ci.nsIFilePicker);
    let bundle = document.getElementById("xulschoolhello-string-bundle");
    let title = bundle.getString("xulschoolhello.chooseImage.title");

    filePicker.init(window, title, Ci.nsIFilePicker.modeOpen);
    filePicker.appendFilters(Ci.nsIFilePicker.filterImages);

    if (filePicker.show() == Ci.nsIFilePicker.returnOK) {
      let file = filePicker.file.QueryInterface(Ci.nsIFile);

      document.getElementById("xulschoolhello-person-image").file = file;
    }
  }
};
