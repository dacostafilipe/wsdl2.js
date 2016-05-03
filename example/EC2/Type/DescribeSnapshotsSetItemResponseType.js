var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSnapshotsSetItemResponseType';

var TypeDescribeSnapshotsSetItemResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  snapshotId: {
      type: "string",
      wsdlDefinition: {
        name: "snapshotId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    volumeId: {
      type: "string",
      wsdlDefinition: {
        name: "volumeId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    status: {
      type: "string",
      wsdlDefinition: {
        name: "status",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    startTime: {
      type: "date",
      wsdlDefinition: {
        name: "startTime",
        type: "xs:dateTime"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    progress: {
      type: "string",
      wsdlDefinition: {
        name: "progress",
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
    volumeSize: {
      type: "string",
      wsdlDefinition: {
        name: "volumeSize",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    description: {
      type: "string",
      wsdlDefinition: {
        name: "description",
        type: "xs:string",
        minOccurs: "0"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ownerAlias: {
      type: "string",
      wsdlDefinition: {
        name: "ownerAlias",
        type: "xs:string",
        minOccurs: "0"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: "0"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSnapshotsSetItemResponseType;
Modeler.register(TypeDescribeSnapshotsSetItemResponseType, "TypeDescribeSnapshotsSetItemResponseType");
