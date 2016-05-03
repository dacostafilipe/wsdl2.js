var Modeler = require("../Modeler.js");
var className = 'TypeDescribeBundleTasksType';

var TypeDescribeBundleTasksType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  bundlesSet: {
      type: "TypeDescribeBundleTasksInfoType",
      wsdlDefinition: {
        name: "bundlesSet",
        type: "tns:DescribeBundleTasksInfoType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: "0"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeBundleTasksType;
Modeler.register(TypeDescribeBundleTasksType, "TypeDescribeBundleTasksType");
