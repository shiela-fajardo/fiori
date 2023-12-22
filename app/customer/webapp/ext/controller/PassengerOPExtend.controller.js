sap.ui.define(['sap/ui/core/mvc/ControllerExtension',"sap/ui/core/message/Message","sap/ui/core/MessageType",
], function (ControllerExtension, Message, MessageType) {
'use strict';


return ControllerExtension.extend('sap.fe.cap.customer.ext.controller.PassengerOPExtend', {
// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
  override: {
  /**
  * Called when a controller is instantiated and its View controls (if available) are already created.
  * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time       initialization.
  * @memberOf sap.fe.cap.customer.ext.controller.PassengerOPExtend
  */
    onInit: function () {
    // you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
      var oModel = this.base.getExtensionAPI().getModel();
    },
    routing: {
      onAfterBinding: async function (oBindingContext) {
       
      } 
    }
  }
  });
});