Components.utils.import("resource://xulschoolhello/common.js");
Components.utils.import("resource://xulschoolhello/messageCount.js");

/**
 * XULSchoolChrome namespace.
 */
if ("undefined" == typeof(XULSchoolChrome)) {
  var XULSchoolChrome = {};
};

/**
 * Controls the browser overlay for the Hello World extension.
 */
XULSchoolChrome.BrowserOverlay = {
  /**
   * Says 'Hello' to the user.
   */
  sayHello : function(aEvent) {
    let stringBundle = document.getElementById("xulschoolhello-string-bundle");
    let messageCount;
    let message;

    XULSchool.MessageCount.increment();
    messageCount = XULSchool.MessageCount.count;
    message =
      stringBundle.getFormattedString(
        "xulschoolhello.greeting.label", [ messageCount ]);

    window.alert(message);
  },

  /**
   * Opens the binding test window.
   * @param aEvent the event that triggered this action.
   */
  openBindingTest : function(aEvent) {
    window.open(
      "chrome://xulschoolhello/content/bindingDialog.xul",
      "xulschoolhello-binding-test", "chrome,centerscreen");
  }
};
