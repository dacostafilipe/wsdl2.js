var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesResponseSetType';

var TypeDescribeReservedInstancesResponseSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeReservedInstancesResponseSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeReservedInstancesResponseSetItemType",
        minOccurs: "0",
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesResponseSetType;
Modeler.register(TypeDescribeReservedInstancesResponseSetType, "TypeDescribeReservedInstancesResponseSetType");
