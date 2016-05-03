var Modeler = require("../Modeler.js");
var className = 'TypeRunInstancesResponseType';

var TypeRunInstancesResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    reservationId: {
      type: "string",
      wsdlDefinition: {
        name: "reservationId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ownerId: {
      type: "string",
      wsdlDefinition: {
        name: "ownerId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupSet: {
      type: "TypeGroupSetType",
      wsdlDefinition: {
        name: "groupSet",
        type: "tns:GroupSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instancesSet: {
      type: "TypeRunningInstancesSetType",
      wsdlDefinition: {
        name: "instancesSet",
        type: "tns:RunningInstancesSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    requesterId: {
      type: "string",
      wsdlDefinition: {
        name: "requesterId",
        type: "xs:string",
        minOccurs: "0"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRunInstancesResponseType;
Modeler.register(TypeRunInstancesResponseType, "TypeRunInstancesResponseType");
